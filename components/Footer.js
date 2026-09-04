import Logo from "./Logo";

export default function Footer() {
  return (
    <>
      <footer>
        <div className="brand">
          <div className="logo">
            <Logo height={32} />
          </div>
          <p>
            Loja online de tecnologia e gadgets em Moçambique. Sem loja
            física — falamos directamente contigo no WhatsApp.
          </p>
        </div>
        <div>
          <h4>Categorias</h4>
          <ul>
            <li><a href="#">Smartphones</a></li>
            <li><a href="#">Computadores</a></li>
            <li><a href="#">Áudio</a></li>
            <li><a href="#">Acessórios</a></li>
          </ul>
        </div>
        <div>
          <h4>Loja</h4>
          <ul>
            <li><a href="#">Sobre nós</a></li>
            <li><a href="#">Entregas</a></li>
            <li><a href="#">Perguntas frequentes</a></li>
          </ul>
        </div>
        <div>
          <h4>Contacto</h4>
          <ul>
            <li><a href="https://wa.me/258858771194" target="_blank" rel="noopener noreferrer">WhatsApp: +258 85 877 1194</a></li>
            <li><a href="mailto:hyperstoremoz@gmail.com">hyperstoremoz@gmail.com</a></li>
            <li><a href="https://www.instagram.com/hyperstoremoz" target="_blank" rel="noopener noreferrer">Instagram</a></li>
            <li><a href="https://www.facebook.com/share/1GxUyxALoP/" target="_blank" rel="noopener noreferrer">Facebook</a></li>
          </ul>
        </div>
      </footer>
      <div className="foot-bottom">© 2026 HyperStore. Todos os direitos reservados.</div>
    </>
  );
}
