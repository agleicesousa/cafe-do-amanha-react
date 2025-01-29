import s from "./contatos.module.css";
import { useState } from "react";

export default function Contatos() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    mensagem: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({ nome: "", email: "", mensagem: "" });
  };

  const handleFakeSubmit = () => {
    setTimeout(() => {
      alert("Mensagem enviada com sucesso!");
      setFormData({ nome: "", email: "", mensagem: "" });
    }, 2000);
  };

  return (
    <main>
      <h1 className={s.titulo}>Contatos</h1>
      <h3>
        Estamos ansiosos para ouvir você! Entre em contato conosco através dos
        contatos abaixo ou envie-nos uma mensagem diretamente pelo formulário.
      </h3>
      <ul>
        <li>
          <h3>Endereço: 738. AV.Beira Mar, Fortaleza, CE</h3>
        </li>
        <li>
          <h3>Telefone: (85) 1234-5678</h3>
        </li>
        <li>
          <h3>Email: contato@cafedoamanha.com</h3>
        </li>
      </ul>

      <form onSubmit={handleSubmit}>
        <label htmlFor="nome">Nome</label>
        <input
          type="text"
          id="nome"
          name="nome"
          value={formData.nome}
          onChange={handleChange}
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <label htmlFor="mensagem">Mensagem</label>
        <textarea
          id="mensagem"
          name="mensagem"
          value={formData.mensagem}
          onChange={handleChange}
        />
        <button type="submit" onClick={handleFakeSubmit}>
          Enviar
        </button>
      </form>
    </main>
  );
};
