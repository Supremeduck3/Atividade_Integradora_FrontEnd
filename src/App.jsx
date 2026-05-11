import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/login";
import Developers from "./pages/Developers";
import PaginaPersonagens from "./pages/PaginaPersonagens";
import DetalhePersonagem from "./pages/DetalhePersonagem";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/personagens" element={<PaginaPersonagens />} />
        <Route path="/personagem/:id" element={<DetalhePersonagem />} />
        <Route path="/dev" element={<Developers />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<div>Página não encontrada</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;