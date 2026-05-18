import { BrowserRouter, Routes, Route } from "react-router-dom";

import Developers from "./pages/Developers";
import Login from "./pages/login";
import Teste from "./pages/teste";
import Home from "./pages/Home";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/teste" element={<Teste />} />
                <Route path="/teste" element={<Home />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
