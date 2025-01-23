import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./Components/GlobalStye/globalStye.css";
import Header from "./Components/Header/header";
import Contatos from "./Pages/Contatos/contatos";
import Historias from "./Pages/Historias/historias";
import Inicio from "./Pages/Inicio/inicio";
import Menu from "./Pages/Menu/menu";
import Footer from "./Components/Footer/footer";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/contatos" element={<Contatos />} />
        <Route path="/historias" element={<Historias />} />
        <Route path="/" element={<Inicio />} />
        <Route path="/menu" element={<Menu />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
