import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Developers from './pages/Desenvolvedores/Desenvolvedores';
import PaginaPersonagens from './pages/Personagens/Personagens';
import DetalhePersonagem from './pages/DetalhesPersonagens/DetalhePersonagem';
import NotFound from './components/erroFound/notFound';
import Questionarios from './pages/Questionarios/Questionarios';
import Quiz1 from './pages/Quiz/Quiz1';
import Sobre from './pages/Sobre/Sobre'


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/personagens" element={<PaginaPersonagens />} />
                <Route path="/personagem/:id" element={<DetalhePersonagem />} />
                <Route path="/dev" element={<Developers />} />
                <Route path="/login" element={<Login />} />
                <Route path="*" element={<NotFound />} />
                <Route path="/questionarios" element={<Questionarios />} />
                <Route path="/quiz/:id" element={<Quiz1/>} />
                <Route path="/sobre" element={<Sobre />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
