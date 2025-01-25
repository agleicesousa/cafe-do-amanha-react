import s from "./pedidos.module.css";

export default function Pedidos() {
  return (
    <>
      <main className={s.main_pedidos} style={{ display: "none" }}>
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

      <section className={s.modal}>
        <section className={s.container_modal} id="modal">
          <section className={s.section_modal}>
            <div className={s.titulo_modal}>
              <h1>Selecione o ítem e a quantidade</h1>
            </div>
            <div className={s.produtos_modal}>
              <section>
                <div className={s.item_modal}>
                  <h2>Item:</h2>
                  <form action="itens">
                    <select name="itens" id="itens">
                      <option value="cafe">Café</option>
                      <option value="sobremesa">Sobremesa</option>
                      <option value="especial">Especial</option>
                      <option value="bebida">Bebida</option>
                      <option value="chas">Chás</option>
                    </select>
                  </form>
                </div>
              </section>
              <section>
                <div className={s.quantidade_modal}>
                  <h2>Quantidade:</h2>
                  <input type="number" name="quantidade" id="quantidade" />
                </div>
              </section>
              <section className={s.btn_modal}>
                <button className={s.btn_finalizar}>Finalizar Pedido</button>
                <button className={s.btn_cancelar}>Cancelar Pedido</button>
              </section>
            </div>
          </section>
        </section>
      </section>
    </>
  );
}
