import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/login";
import Teste from "./pages/teste";
import Developers from "./pages/Developers"
function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/" element={<Home />} />
                <Route path="/dev" element={<Developers />} />
                <Route path= "*" element={<notFound/>} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
