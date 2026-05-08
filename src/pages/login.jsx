import "../style/App.css";
import { useActionData, useNavigate } from "react-router-dom";

function Login() {
    const navigate= useNavigate();
    function handleLogin(){
        alert("Conta criada com sucesso!");

        navigate("/");
    }

    return (
        <div className="login-page">
            <div className="login-card">
                <h1>Bookly</h1>

                <h2>Entrar</h2>
                <p>Acesse sua conta para continuar</p>

                <div className="login-inputs">
                  <input
                  className="login-input"
                  type="email"
                  placeholder="Digite seu e-mail"
                  />

                  <input
                  className="login-input"
                  type="passaword"
                  placeholder="Digite sua senha"
                  />

                  <button className="login-button" onClick={handleLogin}>
                    Sign in
                  </button>
                </div>
                 <span className="login-text">
                    Ainda não tem conta? Cadastra-se!
                 </span>
            </div>
        </div>

    );
}
 export default Login;