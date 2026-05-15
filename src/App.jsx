import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/header/header';
import Home from './pages/Home';
import Login from './pages/login';
import Developers from './pages/Developers';
import PaginaPersonagens from './pages/PaginaPersonagens';
import DetalhePersonagem from './pages/DetalhePersonagem';
import LivroPrincipal from './pages/LivroPrincipal';

function App() {
    return (
        <BrowserRouter>
            <Header />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/personagens" element={<PaginaPersonagens />} />
                <Route path="/personagem/:id" element={<DetalhePersonagem />} />
                <Route path="/dev" element={<Developers />} />
                <Route path="/login" element={<Login />} />
                <Route path="/livro-principal" element={<LivroPrincipal />} />

                {/* Rota para quando nenhuma das de cima coincidir */}
                <Route path="*" element={<div>Página não encontrada</div>} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
