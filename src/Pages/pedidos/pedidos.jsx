import { useState } from "react";
import s from "./pedidos.module.css";
import Modal from "../../Components/Modal/Modal";

const menuItems = {
  cafes: {
    "Águas de Março": 5.0,
    "Sampa": 6.5,
    "Garota de Ipanema": 7.0,
    "Chega de Saudade": 6.0,
    "Carinhoso": 8.0,
    "Cappuccino Malandragem": 9.0,
  },
  sobremesas: {
    "Doce de Maracujá": 8.0,
    "Romeu e Julieta": 9.0,
    "Chão de Giz": 10.0,
    "Bolinho de Chuva": 6.5,
    "Coração Bobo": 7.5,
    "Pettit Gateau Ilegais": 12.0,
  },
  especiais: {
    "Tarde em Itapoã": 12.0,
    "O Canto da Cidade": 10.0,
    "Fora da Ordem": 11.5,
    "O Leãozinho": 9.5,
  },
  bebidasGeladas: {
    "Sorvete de Baunilha": 7.0,
    "Milk Shake de Chocolate": 10.0,
    "Milk Shake de Morango": 10.0,
    "Vitamina de Banana": 8.0,
    "Vitamina de Morango": 8.5,
  },
  chas: {
    "Chá de Hortelã": 4.5,
    "Chá Verde": 5.0,
    "Chá de Camomila": 4.5,
    "Chá de Frutas Vermelhas": 6.0,
    "Chá de Gengibre e Limão": 5.5,
  },
};

export default function Pedidos() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [pedido, setPedido] = useState([]);
  const [total, setTotal] = useState(0);
  const [nome, setNome] = useState("");
  const [mesa, setMesa] = useState(0);

  // Funções para abrir e fechar o modal
  const openModal = (category) => {
    setSelectedCategory(category);
    setIsModalVisible(true);
  };
  const closeModal = () => setIsModalVisible(false);

  const addItemToPedido = (item, quantidade) => {
    if (item && quantidade > 0) {
      const itemPrice = menuItems[selectedCategory][item];
      const itemTotal = itemPrice * quantidade;
      setPedido((prevPedido) => [
        ...prevPedido,
        { item, quantidade, itemTotal },
      ]);
      setTotal((prevTotal) => prevTotal + itemTotal);
    }
    closeModal();
  };

  const finalizarPedido = () => {
    setPedido([]);
    setTotal(0);
    setNome("");
    setMesa(0);
    alert("Pedido finalizado com sucesso!");
  };

  const cancelarPedido = () => {
    setPedido([]);
    setTotal(0);
    setNome("");
    setMesa(0);
  };

  return (
    <>
      <main className={s.main_pedidos}>
        <section className={s.section_pedidos}>
          <h1 className={s.titulo_pedidos}>Faça seu pedido</h1>
          <section className={s.container_pedidos}>
            <div className={s.cliente_pedidos}>
              <section className={s.section_name}>
                <label htmlFor="name">Nome:</label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                />
              </section>
              <section className={s.section_mesa}>
                <label htmlFor="mesa">Número da mesa:</label>
                <input
                  id="mesa"
                  type="number"
                  name="mesa"
                  value={mesa}
                  onChange={(e) => setMesa(Number(e.target.value))}
                />
              </section>
            </div>

            <div className={s.produtos_pedidos}>
              <section className={s.section_produtos}>
                <button
                  className={s.btn_produtos}
                  onClick={() => openModal("cafes")}
                >
                  Cafés
                </button>
                <button
                  className={s.btn_produtos}
                  onClick={() => openModal("sobremesas")}
                >
                  Sobremesas
                </button>
              </section>
              <section className={s.section_produtos}>
                <button
                  className={s.btn_produtos}
                  onClick={() => openModal("especiais")}
                >
                  Especiais
                </button>
                <button
                  className={s.btn_produtos}
                  onClick={() => openModal("bebidasGeladas")}
                >
                  Bebidas
                </button>
              </section>
              <section className={s.section_produtos}>
                <button
                  className={s.btn_produtos}
                  onClick={() => openModal("chas")}
                >
                  Chás
                </button>
              </section>
            </div>

            <div className={s.itens_pedido}>
              <h2>Itens no pedido:</h2>
              <div className={s.lista_itens}>
                <ul>
                  {pedido.map((item, index) => (
                    <li key={index}>
                      {item.quantidade}x {item.item} - R${" "}
                      {item.itemTotal.toFixed(2)}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className={s.total_pedidos}>
              <section className={s.section_total}>
                <h2>Total:</h2>
                <h2>R$ {total.toFixed(2)}</h2>
              </section>
              <section className={s.section_total}>
                <button className={s.btn_total} onClick={finalizarPedido}>
                  Finalizar Pedido
                </button>
                <button className={s.btn_total} onClick={cancelarPedido}>
                  Cancelar Pedido
                </button>
              </section>
            </div>
          </section>
        </section>
      </main>

      {/* Renderiza o Modal se isModalVisible for true */}
      {isModalVisible && (
        <Modal
          closeModal={closeModal}
          menuItems={menuItems[selectedCategory]}
          addItemToPedido={addItemToPedido}
        />
      )}
    </>
  );
}

