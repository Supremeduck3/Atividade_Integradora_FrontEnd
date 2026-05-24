import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/login';
import Developers from './pages/Developers';
import PaginaPersonagens from './pages/PaginaPersonagens';
import DetalhePersonagem from './pages/DetalhePersonagem';
import NotFound from './components/erroFound/notFound';
import Questionarios from './pages/Questionarios';
import Quiz1 from './pages/Quiz1';
import Quiz2 from './pages/Quiz2';
import Quiz3 from './pages/Quiz3';
import Quiz4 from './pages/Quiz4';
import Quiz5 from './pages/Quiz5';
import Sobre from './pages/Sobre';

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
                <Route path="/quiz/1" element={<Quiz1/>} />
                <Route path="/quiz/2" element={<Quiz2/>} />
                <Route path="/quiz/3" element={<Quiz3/>} />
                <Route path="/quiz/4" element={<Quiz4/>} />
                <Route path="/quiz/5" element={<Quiz5/>} />
                <Route path="/sobre" element={<Sobre />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
