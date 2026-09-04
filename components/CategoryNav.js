const categorias = [
  "Todos",
  "Smartphones",
  "Computadores",
  "Áudio",
  "Acessórios",
  "Casa Inteligente",
  "Gaming",
];

export default function CategoryNav() {
  return (
    <nav>
      {categorias.map((cat, i) => (
        <a href="#" key={cat} className={i === 0 ? "active" : ""}>
          {cat}
        </a>
      ))}
    </nav>
  );
}
