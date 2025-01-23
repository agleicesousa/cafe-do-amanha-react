import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./Components/GlobalStye/globalStye.css";
import Header from "./Components/Header/header";
import Contatos from "./Pages/Contatos/contatos";
import Inicio from "./Pages/Inicio/inicio";
import Footer from "./Components/Footer/footer";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/contatos" element={<Contatos />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
