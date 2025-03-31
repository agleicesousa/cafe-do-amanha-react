import { useState, useEffect } from "react";
import s from "./contatos.module.css";
import { createContact, getContacts } from "./services/api.js";

export default function Contatos() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    mensagem: "",
  });

  const [contatos, setContatos]=useState([])

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
   try{
    const newContact=await createContact(formData);
    alert('Mensagem enviada com sucesso!')

    setContatos((prevContacts)=>[...prevContacts, newContact]);

    setFormData({nome:"", email:"", mensagem:""});
   }catch(error) {
    alert('Erro ao enviar mensagem.');
   }
  };

useEffect(()=>{
  const fetchContacts=async()=>{
    try{
      const data=await getContacts();
      setContatos(data);
    }catch(error){
      console.error('Erro ao carregar contatos', error);
    }
  };
  fetchContacts();
},[]);

  return (
    <main className={s.main_body}>
      <h1 className={s.titulo}>Contato</h1>
      <h3>
        Estamos ansiosos para ouvir você! Entre em contato conosco através dos
        contatos abaixo ou envie-nos uma mensagem diretamente pelo formulário.
      </h3>
      <ul>
        <li>
          <h3>
            <span className={s.endereco}>Endereço:</span> 738. AV. Beira Mar,
            Fortaleza, CE
          </h3>
        </li>
        <li>
          <h3>
            <span className={s.telefone}>Telefone:</span> (85) 1234-5678
          </h3>
        </li>
        <li>
          <h3>
            <span className={s.email}>Email:</span> contato@cafedoamanha.com
          </h3>
        </li>
      </ul>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nome">Nome:</label>
        <input
          type="text"
          id="nome"
          name="nome"
          value={formData.nome}
          onChange={handleChange}
          required
        />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <label htmlFor="mensagem">Mensagem:</label>
        <textarea
          className={s.mensagem}
          id="mensagem"
          name="mensagem"
          value={formData.mensagem}
          onChange={handleChange}
          required
        />
        <button type="submit">Enviar</button>
      </form>
    </main>
  );
}
