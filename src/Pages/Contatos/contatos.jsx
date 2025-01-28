import s from "./contatos.module.css";
import React from "react";
const handleSubmit = (event) => {
    event.preventDefault();
    // Add your submit logic here
  };




export default function Contatos() {
  return (
    <main>
      <h1 className={s.titulo}>Contatos</h1>
        <h3>Estamos ansiosos para ouvir você! Entre em contato conoscoatravés dos contatos abaixoou envie-nos uma mensagem diretamente pelo formulário</h3>
    <ul>
      <li><h3>Endereço: 738. AV.Beira Mar, Fortaleza,CE</h3></li>
      <li><h3>Telefone: (85) 1234-5678</h3></li>
      <li><h3>Email: contato@cafedoamanha.com</h3></li>
    </ul>     

<form onSubmit={handleSubmit}>
    {/*campo nome*/}
    <label htmlFor="nome">Nome</label>
    <input type="text" 
    id="nome"
    name="nome"
    value={nome}
    onChange={(e) => setNome(e.target.value)} //Atualização    
    />




</form>

    <div className={s.barraContainer}>
    <div className={s.barraPreenchida}>
    </div>
    </div>
    </main>
  );
}
