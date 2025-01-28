import s from "./header.module.css";

export default function Header() {
  return (
    <header className={s.sHeader}>
      <h1 className={s.sHeaderTitle}>Café da Manhã com história</h1>
      <nav className={s.sHeaderNav}>
        <ul className={s.sHeaderNavList}>
          <li className={s.sHeaderNavItem}><a href="#inicio">Início</a></li>
          <li className={s.sHeaderNavItem}><a href="#historias">Histórias</a></li>
          <li className={s.sHeaderNavItem}><a href="#menu">Menu</a></li>
          <li className={s.sHeaderNavItem}><a href="#pedidos">Pedidos</a></li>
          <li className={s.sHeaderNavItem}><a href="#sobre-nos">Sobre Nós</a></li>
          <li className={s.sHeaderNavItem}><a href="#contatos">Contatos</a></li>
        </ul>
      </nav>
    </header>
  );
}

