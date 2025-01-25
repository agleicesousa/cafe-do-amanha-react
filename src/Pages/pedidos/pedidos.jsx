import { useState } from "react";
import s from "./pedidos.module.css";
import Modal from "../../Components/Modal/Modal";

const menuItems = {
  cafes: {
    'Águas de Março': 5.00,
    'Sampa': 6.50,
    'Garota de Ipanema': 7.00,
    'Chega de Saudade': 6.00,
    'Carinhoso': 8.00,
    'Cappuccino Malandragem': 9.00,
  },
  sobremesas: {
    'Doce de Maracujá': 8.00,
    'Romeu e Julieta': 9.00,
    'Chão de Giz': 10.00,
    'Bolinho de Chuva': 6.50,
    'Coração Bobo': 7.50,
    'Pettit Gateau Ilegais': 12.00,
  },
  especiais: {
    'Tarde em Itapoã': 12.00,
    'O Canto da Cidade': 10.00,
    'Fora da Ordem': 11.50,
    'O Leãozinho': 9.50,
  },
  bebidasGeladas: {
    'Sorvete de Baunilha': 7.00,
    'Milk Shake de Chocolate': 10.00,
    'Milk Shake de Morango': 10.00,
    'Vitamina de Banana': 8.00,
    'Vitamina de Morango': 8.50,
  },
  chas: {
    'Chá de Hortelã': 4.50,
    'Chá Verde': 5.00,
    'Chá de Camomila': 4.50,
    'Chá de Frutas Vermelhas': 6.00,
    'Chá de Gengibre e Limão': 5.50,
  }
};

export default function Pedidos() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");

  // Funções para abrir e fechar o modal
  const openModal = (category) => {
    setSelectedCategory(category);
    setIsModalVisible(true);
  };
  const closeModal = () => setIsModalVisible(false);

  return (
    <>
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
                <button className={s.btn_produtos} onClick={() => openModal("cafes")}>Cafés</button>
                <button className={s.btn_produtos} onClick={() => openModal("sobremesas")}>Sobremesas</button>
              </section>
              <section className={s.section_produtos}>
                <button className={s.btn_produtos} onClick={() => openModal("especiais")}>Especiais</button>
                <button className={s.btn_produtos} onClick={() => openModal("bebidasGeladas")}>Bebidas</button>
              </section>
              <section className={s.section_produtos}>
                <button className={s.btn_produtos} onClick={() => openModal("chas")}>Chás</button>
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

      {/* Renderiza o Modal se isModalVisible for true */}
      {isModalVisible && (
        <Modal closeModal={closeModal} menuItems={menuItems[selectedCategory]} />
      )}
    </>
  );
}
