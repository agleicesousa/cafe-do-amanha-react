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

  useEffect(() => {
    const loadMenuItems = async () => {
      try {
        setLoading(true);
        const response = await fetchItemsByCategory(category);
        setMenuItems(response.data);
        setError(null);
      } catch (err) {
        console.error("Erro ao carregar itens:", err);
        setError("Erro ao carregar itens do menu. Tente novamente.");
      } finally {
        setLoading(false);
      }
    };

    loadMenuItems();
  }, [category]);

  const addItem = () => {
    if (selectedItem && quantidade > 0) {
      const item = menuItems.find(item => item.id === parseInt(selectedItem));
      if (!item) return;

      const itemTotal = item.preco * quantidade;
      const itemIndex = selectedItems.findIndex(
        (i) => i.menuId === selectedItem
      );

      if (itemIndex !== -1) {
        const updatedItems = [...selectedItems];
        updatedItems[itemIndex].quantidade += quantidade;
        updatedItems[itemIndex].itemTotal += itemTotal;
        setSelectedItems(updatedItems);
      } else {
        setSelectedItems((prevItems) => [
          ...prevItems,
          {
            item: item.nome,
            menuId: item.id,
            quantidade,
            itemTotal,
            precoUnitario: item.preco
          },
        ]);
      }

      setSelectedItem(null);
      setQuantidade(1);
    }
  };

  const confirmItems = () => {
    selectedItems.forEach(({ item, menuId, quantidade }) => {
      addItemToPedido(item, menuId, quantidade);
    });
    closeModal();
  };

  if (loading) {
    return (
      <main className={s.modal}>
        <section className={s.container_modal}>
          <p>Carregando itens do menu...</p>
        </section>
      </main>
    );
  }

  if (error) {
    return (
      <main className={s.modal}>
        <section className={s.container_modal}>
          <p>{error}</p>
          <button onClick={closeModal}>Fechar</button>
        </section>
      </main>
    );
  }

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
                    value={selectedItem || ""}
                    onChange={(e) => setSelectedItem(e.target.value)}
                    disabled={menuItems.length === 0}
                  >
                    <option value="">Selecione um item</option>
                    {menuItems.map((item) => (
                      <option key={item.id} value={item.id}>
                        {item.nome} - R$ {Number(item.preco).toFixed(2)}
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
                disabled={!selectedItem}
              />
            </section>
          </div>

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
            <button 
              className={s.btn_add_item} 
              onClick={addItem}
              disabled={!selectedItem || quantidade < 1}
            >
              Adicionar Item
            </button>
            <button 
              className={s.btn_confirmar} 
              onClick={confirmItems}
              disabled={selectedItems.length === 0}
            >
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
  category: PropTypes.string.isRequired,
  addItemToPedido: PropTypes.func.isRequired,
};
