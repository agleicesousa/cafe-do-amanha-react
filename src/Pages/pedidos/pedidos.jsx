import s from "./pedidos.module.css";

export default function Pedidos() {
  return (
    <main className={s.main_pedidos}>
      <section className={s.section_pedidos}>
        <h1 className={s.titulo_pedidos}>Faça seu pedido</h1>
        <section className={s.container_pedidos}>
          <div className={s.cliente_pedidos}>
            <section className={s.section_name}>
              <label htmlFor="name">Nome:</label>
              <input id="name" type="text" name="name" />
            </section>
            <section className={s.section_mesa}>
              <label htmlFor="mesa">Número da mesa:</label>
              <input id="mesa" type="number" name="mesa" />
            </section>
          </div>

          <div className={s.produtos_pedidos}>
            <section className={s.section_produtos}>
              <button className={s.btn_produtos}>Cafés</button>
              <button className={s.btn_produtos}>Sobremesas</button>
            </section>
            <section className={s.section_produtos}>
              <button className={s.btn_produtos}>Especiais</button>
              <button className={s.btn_produtos}>Bebidas</button>
            </section>
            <section className={s.section_produtos}>
              <button className={s.btn_produtos}>Chás</button>
            </section>
          </div>

          <div className={s.total_pedidos}>
            <section className={s.section_total}>
              <h2>Total:</h2>
              <h2>R$ 0</h2>
            </section>
            <button className={s.btn_total}>Finalizar Pedido</button>
          </div>
        </section>
      </section>
    </main>
  );
}
