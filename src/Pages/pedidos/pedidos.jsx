import s from "./pedidos.module.css";

export default function Pedidos() {
  return (
    <>
      <main className={s.main_pedidos}>
        <section className={s.section_pedidos}>
          <h1 className={s.titulo_pedidos}>Faça seu pedido</h1>
          <section className={s.container_pedidos}>

            <div className={s.cliente_pedidos}>
              <section className={s.section_name}>
                <label htmlFor="name">Nome:</label>
                <input className={s.input_name} type="text" name="name" />
              </section>
              <section className={s.section_mesa}>
                <label htmlFor="mesa">Número da mesa:</label>
                <input className={s.input_mesa} type="number" name="mesa" />
              </section>
            </div>

            <div className={s.produtos_pedidos}>
              <section className={s.section_produtos_pedidos}>
                <button className="btn_produtos_pedidos">Cafés</button>
                <button className="btn_produtos_pedidos">SObremesas</button>
              </section>
              <section className={s.section_produtos_pedidos}>
                <button className="btn_produtos_pedidos">Especiais</button>
                <button className="btn_produtos_pedidos">Bebidas Geladas</button>
              </section>
              <section className={s.section_produtos_pedidos}>
                <button className="btn_produtos_pedidos">Chás</button>
              </section>
            </div>

            <div className={s.total_pedidos}> 
              <section className={s.section_total}>
                <label htmlFor="total">Total:</label>
                <h2>R$ 0</h2>
              </section>
              <section className={s.section_botao}>
                <button className="btn_total_pedidos">Finalizar Pedido</button>
              </section>
            </div>
          </section>
        </section>
      </main>
    </>
  );
}
