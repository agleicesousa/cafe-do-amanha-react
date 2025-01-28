import s from "./header.module.css";
import { Link } from "react-router-dom";
import Logo from "../../Assets/Coffee-logo.png";

export default function Header() {
  return (
    <header className={s.header}>
      <section className={s.logo}>
        <img src={Logo} alt="Logo da página" />
        <h1 className={s.titulo_header}>Café do Amanhã</h1>
      </section>
      <section className={s.nav_header}>
        <ul className={s.nav_menu}>
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/menu">Menu</Link>
          </li>
          <li>
            <Link to="/pedidos">Pedidos</Link>
          </li>
          <li>
            <Link to="/contatos">Contatos</Link>
          </li>
          <li>
            <Link to="/historias">Histórias</Link>
          </li>
          <li>
            <Link to="/sobre-nos">Sobre Nós</Link>
          </li>
        </ul>
      </section>
    </header>
  );
}
