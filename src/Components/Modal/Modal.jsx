import PropTypes from "prop-types";
import s from "./Modal.module.css";

export default function Modal({ closeModal }) {
  return (
    <section className={s.modal}>
      <section className={s.container_modal} id="modal">
        <section className={s.section_modal}>
          <h2>Selecione o ítem e a quantidade</h2>
          <div className={s.produtos_modal}>
            <section className={s.section_produtos_modal}>
              <div className={s.item_modal}>
                <h3>Item:</h3>
                <form action="itens">
                  <select name="itens" id="itens">
                    <option value="selecione">Selecione um item</option>
                    <option value="cafe">Café</option>
                    <option value="sobremesa">Sobremesa</option>
                    <option value="especial">Especial</option>
                    <option value="bebida">Bebida</option>
                    <option value="chas">Chás</option>
                  </select>
                </form>
              </div>
            </section>
            <section className={s.section_quantidade_modal}>
              <h3>Quantidade:</h3>
              <input type="number" name="quantidade" id="quantidade" />
            </section>
            <section className={s.btn_modal}>
              <button className={s.btn_cancelar} onClick={closeModal}>Cancelar</button>
              <button className={s.btn_adicionar}>Adicionar ao pedido</button>
            </section>
          </div>
        </section>
      </section>
    </section>
  );
}

// Adiciona validação de tipos para a prop `closeModal`
Modal.propTypes = {
  closeModal: PropTypes.func.isRequired,
};