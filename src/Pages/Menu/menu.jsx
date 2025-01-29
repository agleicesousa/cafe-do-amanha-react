import s from "./menu.module.css";
// import menuItems from "../../mocks/menuItens.json";

export default function Menu() {
  return (
    <main className={s.main_menu}>
      <section className={s.section_menu}>
        <h1 className={s.titulo_menu}>Café do Amanhã</h1>
        <img src="#" alt="#" />
      </section>
      <section className={s.opcoes_menu}>
        <div className={s.lista_opcao_menu}>
          <nav>
            <ul>
              <li>algo aqui</li>
            </ul>
          </nav>
        </div>
        <div className={s.lista_itens_menu}>
          <h3 className={s.titulo_item}>algo aqui</h3>
          <p className={s.preco_item}>R$ 00,00</p>
        </div>
      </section>
    </main>
  );
}
