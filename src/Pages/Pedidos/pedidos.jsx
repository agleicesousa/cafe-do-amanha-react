import { useState } from "react";
import s from "./pedidos.module.css";
import Modal from "../../Components/Modal/modal";
import { createOrder, createClient } from "../../services/api";

export default function Pedidos() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [pedido, setPedido] = useState([]);
  const [total, setTotal] = useState(0);
  const [nome, setNome] = useState("");
  const [mesa, setMesa] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const openModal = (category) => {
    setSelectedCategory(category);
    setIsModalVisible(true);
  };

  const closeModal = () => setIsModalVisible(false);

  const addItemToPedido = (itemName, menuId, quantidade) => {
    const itemExistente = pedido.find(item => item.menuId === menuId);

    if (itemExistente) {
      setPedido(pedido.map(item =>
        item.menuId === menuId
          ? {
            ...item,
            quantidade: item.quantidade + quantidade,
            itemTotal: item.itemTotal + (item.precoUnitario * quantidade)
          }
          : item
      ));
    } else {
      const precoUnitario = pedido.find(i => i.item === itemName)?.precoUnitario ||
        parseFloat(prompt(`Informe o preço unitário para ${itemName}:`) || 0);

      setPedido([
        ...pedido,
        {
          item: itemName,
          menuId,
          quantidade,
          precoUnitario,
          itemTotal: precoUnitario * quantidade
        }
      ]);
    }

    setTotal(pedido.reduce((sum, item) => sum + item.itemTotal, 0));
  };

  const removerItem = (menuId) => {
    const novoPedido = pedido.filter(item => item.menuId !== menuId);
    setPedido(novoPedido);
    setTotal(novoPedido.reduce((sum, item) => sum + item.itemTotal, 0));
  };

  const finalizarPedido = async () => {
    if (!nome || !mesa) {
      setError("Nome e número da mesa são obrigatórios!");
      return;
    }

    setLoading(true);
    setError("");

    try {
      // 1. Criar o cliente (se necessário)
      const cliente = await createClient({
        nome,
        mesaNumero: parseInt(mesa)
      });

      // 2. Criar o pedido
      const pedidoData = {
        clienteId: cliente.id,
        mesaNumero: parseInt(mesa),
        itens: pedido.map(item => ({
          menuId: item.menuId,
          quantidade: item.quantidade,
          precoUnitario: item.precoUnitario
        })),
        total: total
      };

      await createOrder(pedidoData);

      // 3. Limpar o estado
      setPedido([]);
      setTotal(0);
      setNome("");
      setMesa("");
      alert("Pedido finalizado com sucesso!");
    } catch (err) {
      console.error("Erro ao finalizar pedido:", err);
      setError(err.message || "Erro ao finalizar pedido");
    } finally {
      setLoading(false);
    }
  };

  const cancelarPedido = () => {
    if (pedido.length > 0 && !window.confirm("Deseja realmente cancelar este pedido?")) {
      return;
    }
    setPedido([]);
    setTotal(0);
    setNome("");
    setMesa("");
    setError("");
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
                  required
                  disabled={loading}
                />
              </section>
              <section className={s.section_mesa}>
                <label htmlFor="mesa">Número da mesa:</label>
                <input
                  id="mesa"
                  type="number"
                  name="mesa"
                  value={mesa}
                  onChange={(e) => setMesa(e.target.value)}
                  min="1"
                  required
                  disabled={loading}
                />
              </section>
            </div>

            <div className={s.produtos_pedidos}>
              <section className={s.section_produtos}>
                <button
                  className={s.btn_produtos}
                  onClick={() => openModal("CAFES")}
                  disabled={loading}
                >
                  Cafés
                </button>
                <button
                  className={s.btn_produtos}
                  onClick={() => openModal("SOBREMESAS")}
                  disabled={loading}
                >
                  Sobremesas
                </button>
              </section>
              <section className={s.section_produtos}>
                <button
                  className={s.btn_produtos}
                  onClick={() => openModal("ESPECIAIS")}
                  disabled={loading}
                >
                  Especiais
                </button>
                <button
                  className={s.btn_produtos}
                  onClick={() => openModal("BEBIDAS_GELADAS")}
                  disabled={loading}
                >
                  Bebidas
                </button>
              </section>
              <section className={s.section_produtos}>
                <button
                  className={s.btn_produtos}
                  onClick={() => openModal("CHAS")}
                  disabled={loading}
                >
                  Chás
                </button>
              </section>
            </div>

            <div className={s.itens_pedido}>
              <h2>Itens no pedido:</h2>
              {error && <p className={s.error}>{error}</p>}
              <div className={s.lista_itens}>
                {pedido.length === 0 ? (
                  <p>Nenhum item adicionado</p>
                ) : (
                  <ul>
                    {pedido.map((item, index) => (
                      <li key={index}>
                        {item.quantidade}x {item.item} - R${" "}
                        {item.itemTotal.toFixed(2)}
                        <button
                          onClick={() => removerItem(item.menuId)}
                          className={s.btn_remover}
                          disabled={loading}
                        >
                          ×
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>

            <div className={s.total_pedidos}>
              <section className={s.section_total}>
                <h2>Total:</h2>
                <h2>R$ {total.toFixed(2)}</h2>
              </section>
              <section className={s.section_total}>
                <button
                  className={s.btn_total}
                  onClick={finalizarPedido}
                  disabled={pedido.length === 0 || loading}
                >
                  {loading ? "Processando..." : "Finalizar Pedido"}
                </button>
                <button
                  className={s.btn_total}
                  onClick={cancelarPedido}
                  disabled={pedido.length === 0 || loading}
                >
                  Cancelar Pedido
                </button>
              </section>
            </div>
          </section>
        </section>
      </main>

      {isModalVisible && (
        <Modal
          closeModal={closeModal}
          category={selectedCategory}
          addItemToPedido={addItemToPedido}
        />
      )}
    </>
  );
}
