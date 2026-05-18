import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/login';
import Developers from './pages/Developers';
import PaginaPersonagens from './pages/PaginaPersonagens';
import PaginaLivros from './pages/PaginaLivros';
import DetalhePersonagem from './pages/DetalhePersonagem';
import NotFound from './components/erroFound/notFound';
import Questionarios from './pages/Questionarios';
import Quiz from './pages/Quiz';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/personagens" element={<PaginaPersonagens />} />
                <Route path="/Livros" element={<PaginaLivros />} />
                <Route path="/personagem/:id" element={<DetalhePersonagem />} />
                <Route path="/dev" element={<Developers />} />
                <Route path="/login" element={<Login />} />
                <Route path="*" element={<NotFound />} />
                <Route path="/questionarios" element={<Questionarios />} />
                <Route path="/quiz/:id" element={<Quiz />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
