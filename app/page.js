import Header from "@/components/Header";
import CategoryNav from "@/components/CategoryNav";
import Hero from "@/components/Hero";
import ProductCard from "@/components/ProductCard";
import Footer from "@/components/Footer";
import { getProdutos } from "@/lib/firebase";

export const revalidate = 60; // actualiza a lista de produtos a cada 60s

export default async function Home() {
  let produtos = [];

  try {
    produtos = await getProdutos();
  } catch (error) {
    // Enquanto o Firebase não estiver configurado (.env.local vazio),
    // a página continua a funcionar, apenas sem produtos.
    console.error("Erro ao carregar produtos do Firestore:", error.message);
  }

  return (
    <>
      <Header />
      <CategoryNav />
      <Hero />
      <div className="section-head" id="produtos">
        <h2>Produtos em destaque</h2>
        <p>{produtos.length} artigos</p>
      </div>

      {produtos.length > 0 ? (
        <div className="grid">
          {produtos.map((produto) => (
            <ProductCard key={produto.id} produto={produto} />
          ))}
        </div>
      ) : (
        <div style={{ padding: "0 40px 60px", color: "var(--muted)" }}>
          Ainda não há produtos publicados. Adiciona-os na colecção
          &quot;produtos&quot; no Firebase Console.
        </div>
      )}

      <Footer />
    </>
  );
}
