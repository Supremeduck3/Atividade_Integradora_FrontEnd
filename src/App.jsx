import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/header/header.jsx'; // Garantindo o .jsx aqui
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Developers from './pages/Desenvolvedores/Desenvolvedores';
import PaginaPersonagens from './pages/Personagens/Personagens';
import DetalhePersonagem from './pages/DetalhesPersonagens/DetalhePersonagem';
import NotFound from './components/erroFound/notFound';
import Questionarios from './pages/Questionarios/Questionarios';
import Quiz1 from './pages/Quiz/Quiz1';
import Sobre from './pages/Sobre/Sobre';
import LivroPrincipal from './pages/LivroPrincipal/LivroPrincipal';

function App() {
    return (
        <BrowserRouter>
            {/* O Header fica aqui, fixo no topo, fora das rotas */}
            <Header />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Livro" element={<LivroPrincipal />} />
                <Route path="/personagens" element={<PaginaPersonagens />} />
                <Route path="/personagem/:id" element={<DetalhePersonagem />} />
                <Route path="/dev" element={<Developers />} />
                <Route path="/login" element={<Login />} />
                <Route path="/questionarios" element={<Questionarios />} />
                <Route path="/quiz/:id" element={<Quiz1 />} />
                <Route path="/sobre" element={<Sobre />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
