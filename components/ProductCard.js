function montarLinkWhatsapp(produto) {
  const numero = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "258840000000";
  const texto = encodeURIComponent(
    `Olá, tenho interesse no produto: ${produto.nome} (${produto.preco} MT)`
  );
  return `https://wa.me/${numero}?text=${texto}`;
}

export default function ProductCard({ produto }) {
  return (
    <div className="card">
      <div className="card-img">
        {produto.imagemUrl && (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={produto.imagemUrl} alt={produto.nome} />
        )}
      </div>
      <h3>{produto.nome}</h3>
      <div className="price">{produto.preco} MT</div>
      <a
        href={montarLinkWhatsapp(produto)}
        className="whatsapp-link"
        target="_blank"
        rel="noopener noreferrer"
      >
        Saber mais no WhatsApp →
      </a>
    </div>
  );
}
