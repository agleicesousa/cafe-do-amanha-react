import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./Components/Header/header";
import Footer from "./Components/Footer/footer";
import NotFound from "./Components/notFound/notFound";

import "./Components/GlobalStye/globalStye.css";
import Contatos from "./Pages/Contatos/contatos";
import Historias from "./Pages/Historias/historias";
import Inicio from "./Pages/Inicio/inicio";
import Menu from "./Pages/Menu/menu";
import Pedidos from "./Pages/pedidos/pedidos";
import SobreNos from "./Pages/SobreNos/sobreNos";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/contatos" element={<Contatos />} />
        <Route path="/historias" element={<Historias />} />
        <Route path="/" element={<Inicio />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/pedidos" element={<Pedidos />} />
        <Route path="/sobre-nos" element={<SobreNos />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
