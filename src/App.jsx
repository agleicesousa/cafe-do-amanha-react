import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./Components/GlobalStye/globalStye.css";
import Header from "./Components/Header/header";
import Inicio from "./Pages/Inicio/inicio";
import Footer from "./Components/Footer/footer";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Inicio />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
