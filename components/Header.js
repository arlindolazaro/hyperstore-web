import Logo from "./Logo";

export default function Header() {
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "258858771194";
  const numeroExibicao = "+" + whatsappNumber.replace(/(\d{3})(\d{2})(\d{3})(\d{4})/, "$1 $2 $3 $4");

  return (
    <header>
      <a href="/" className="logo" style={{ display: "flex" }}>
        <Logo height={36} />
      </a>
      <div className="search">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#8891A3" strokeWidth="2">
          <circle cx="11" cy="11" r="7" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
        <input type="text" placeholder="Pesquisar por smartphone, headphones..." />
      </div>
      <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="support">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="#3B82F6">
          <path d="M12 2C6.48 2 2 6.48 2 12c0 1.85.5 3.58 1.36 5.07L2 22l5.07-1.33A9.94 9.94 0 0012 22c5.52 0 10-4.48 10-10S17.52 2 12 2z" />
        </svg>
        <div>
          <strong>{numeroExibicao}</strong>
          Fale connosco no WhatsApp
        </div>
      </a>
    </header>
  );
}
