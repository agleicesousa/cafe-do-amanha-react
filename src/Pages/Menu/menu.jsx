import { useState } from "react";
import s from "./menu.module.css";
import menuItems from "../../mocks/menuItens.json";

export default function Menu() {
  const [category, setCategory] = useState("cafes");
  const [mainImage, setMainImage] = useState(
    menuItems["cafes"][Object.keys(menuItems["cafes"])[0]]
  );

  const handleCategoryChange = (category) => {
    setCategory(category);
    setMainImage(menuItems[category][Object.keys(menuItems[category])[0]]);
  };

  const handleItemClick = (item) => {
    setMainImage(item);
  };

  return (
    <main className={s.main_menu}>
      <section className={s.section_menu}>
        <h1 className={s.titulo_menu}>Café do Amanhã</h1>
        <img src={mainImage.image} alt={mainImage.alt} />
      </section>
      <section className={s.section_opcoes_menu}>
        <nav className={s.nav_opcao_menu}>
          <ul>
            <li>
              <button onClick={() => handleCategoryChange("cafes")}>
                Cafés
              </button>
            </li>
            <li>
              <button onClick={() => handleCategoryChange("sobremesas")}>
                Sobremesas
              </button>
            </li>
            <li>
              <button onClick={() => handleCategoryChange("especiais")}>
                Especiais
              </button>
            </li>
            <li>
              <button onClick={() => handleCategoryChange("bebidasGeladas")}>
                Bebidas
              </button>
            </li>
            <li>
              <button onClick={() => handleCategoryChange("chas")}>Chás</button>
            </li>
          </ul>
        </nav>
        <div className={s.lista_itens_menu}>
          {Object.keys(menuItems[category]).map((itemKey) => {
            const item = menuItems[category][itemKey];
            return (
              <div
                className={s.item_menu}
                key={item.id}
                onClick={() => handleItemClick(item)}
              >
                <h3 className={s.titulo_item}>{itemKey}</h3>
                <p className={s.preco_item}>R$ {item.price.toFixed(2)}</p>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}
