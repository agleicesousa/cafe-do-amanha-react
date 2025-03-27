import { useState, useEffect } from "react";
import s from "./menu.module.css";
import { fetchItemsByCategory } from "../../services/api";

export default function Menu() {
  const [category, setCategory] = useState("CAFES");
  const [mainImage, setMainImage] = useState(null);
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Categorias disponíveis (usando os enums do seu back-end)
  const categories = [
    "CAFES",
    "SOBREMESAS",
    "ESPECIAIS",
    "BEBIDAS_GELADAS",
    "CHAS"
  ];

  useEffect(() => {
    const loadMenuItems = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await fetchItemsByCategory(category);
        setMenuItems(response.data);
        
        // Define a primeira imagem como principal
        if (response.data.length > 0) {
          setMainImage(response.data[0]);
        }
      } catch (err) {
        console.error("Erro ao carregar itens:", err);
        setError("Erro ao carregar itens do menu. Tente novamente.");
      } finally {
        setLoading(false);
      }
    };

    loadMenuItems();
  }, [category]);

  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory);
  };

  const handleItemClick = (item) => {
    setMainImage(item);
  };

  if (loading && menuItems.length === 0) {
    return (
      <main className={s.main_menu}>
        <section className={s.section_menu}>
          <h1 className={s.titulo_menu}>Café do Amanhã</h1>
          <p>Carregando menu...</p>
        </section>
      </main>
    );
  }

  if (error) {
    return (
      <main className={s.main_menu}>
        <section className={s.section_menu}>
          <h1 className={s.titulo_menu}>Café do Amanhã</h1>
          <p className={s.error}>{error}</p>
        </section>
      </main>
    );
  }

  return (
    <main className={s.main_menu}>
      <section className={s.section_menu}>
        <h1 className={s.titulo_menu}>Café do Amanhã</h1>
        {mainImage && (
          <img 
            className={s.img_menu} 
            src={mainImage.imagem || '/placeholder-food.jpg'} 
            alt={mainImage.nome} 
            onError={(e) => {
              e.target.src = '/placeholder-food.jpg';
            }}
          />
        )}
      </section>
      
      <section className={s.section_opcoes_menu}>
        <div className={s.opcoes_menu}>
          <nav className={s.nav_opcao_menu}>
            <ul>
              {categories.map((cat) => (
                <li key={cat}>
                  <button
                    className={category === cat ? s.active : ""}
                    onClick={() => handleCategoryChange(cat)}
                  >
                    {formatCategoryName(cat)}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        
        <div className={s.lista_itens_menu}>
          {menuItems.length === 0 ? (
            <p>Nenhum item disponível nesta categoria</p>
          ) : (
            menuItems.map((item) => (
              <div
                className={s.item_menu}
                key={item.id}
                onClick={() => handleItemClick(item)}
              >
                <h3 className={s.titulo_item}>{item.nome}</h3>
                <p className={s.preco_item}>R$ {Number(item.preco).toFixed(2)}</p>
              </div>
            ))
          )}
        </div>
      </section>
    </main>
  );
}

// Função para formatar o nome da categoria para exibição
function formatCategoryName(category) {
  const formatMap = {
    'CAFES': 'Cafés',
    'SOBREMESAS': 'Sobremesas',
    'ESPECIAIS': 'Especiais',
    'BEBIDAS_GELADAS': 'Bebidas Geladas',
    'CHAS': 'Chás'
  };
  return formatMap[category] || category;
}