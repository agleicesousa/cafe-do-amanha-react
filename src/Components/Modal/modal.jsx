import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import s from "./modal.module.css";
import { fetchItemsByCategory } from "../../services/api";

export default function Modal({ closeModal, category, addItemToPedido }) {
  const [selectedItems, setSelectedItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [quantidade, setQuantidade] = useState(1);
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const addItem = () => {
    if (selectedItem && quantidade > 0) {
      const itemPrice = menuItems[selectedItem].price;
      const itemTotal = itemPrice * quantidade;
      const itemIndex = selectedItems.findIndex((item) => item.item === selectedItem);

      if (itemIndex !== -1) {
        const updatedItems = [...selectedItems];
        updatedItems[itemIndex].quantidade += quantidade;
        updatedItems[itemIndex].itemTotal += itemTotal;
        setSelectedItems(updatedItems);
      } else {
        setSelectedItems((prevItems) => [
          ...prevItems,
          { item: selectedItem, quantidade, itemTotal },
        ]);
      }

      setSelectedItem("");
      setQuantidade(1);
    }
  };

  const confirmItems = () => {
    selectedItems.forEach(({ item, quantidade }) => {
      addItemToPedido(item, quantidade);
    });
    closeModal();
  };

  return (
    <main className={s.modal}>
      <section className={s.container_modal} id="modal">
        <section className={s.section_modal}>
          <h2>Selecione os itens e as quantidades</h2>
          <div className={s.produtos_modal}>
            <section className={s.section_produtos_modal}>
              <div className={s.item_modal}>
                <h3>Item:</h3>
                <form action="itens">
                  <select
                    name="itens"
                    id="itens"
                    value={selectedItem}
                    onChange={(e) => setSelectedItem(e.target.value)}
                  >
                    <option value="">Selecione um item</option>
                    {Object.keys(menuItems).map((item) => (
                      <option key={item} value={item}>
                        {item} - R$ {menuItems[item].price.toFixed(2)}
                      </option>
                    ))}
                  </select>
                </form>
              </div>
            </section>
            <section className={s.section_quantidade_modal}>
              <h3>Quantidade:</h3>
              <input
                type="number"
                name="quantidade"
                id="quantidade"
                value={quantidade}
                onChange={(e) => setQuantidade(Number(e.target.value))}
                min="1"
              />
            </section>
          </div>

          {/* Lista de itens adicionados */}
          {selectedItems.length > 0 && (
            <div className={s.lista_itens_modal}>
              <h3>Itens adicionados:</h3>
              <ul>
                {selectedItems.map((item, index) => (
                  <li key={index}>
                    {item.quantidade}x {item.item} - R$ {item.itemTotal.toFixed(2)}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <section className={s.btn_modal}>
            <button className={s.btn_add_item} onClick={addItem}>
              Adicionar Item
            </button>
            <button className={s.btn_confirmar} onClick={confirmItems}>
              Adicionar ao Pedido
            </button>
            <button className={s.btn_cancelar} onClick={closeModal}>
              Cancelar
            </button>
          </section>
        </section>
      </section>
    </main>
  );
}

Modal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  menuItems: PropTypes.object.isRequired,
  addItemToPedido: PropTypes.func.isRequired,
};
