import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./Components/GlobalStye/globalStye.css";
import Inicio from "./Pages/Inicio/inicio";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio />} />
      </Routes>
    </BrowserRouter>
  );
}
