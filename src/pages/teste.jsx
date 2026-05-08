
import { useEffect, useState } from 'react';

function Teste() {
  // 1. Criamos um estado para guardar os dados
  const [dados, setDados] = useState(null);
  const [erro, setErro] = useState(null);

  useEffect(() => {
    // 2. Função assíncrona dentro do useEffect
    async function carregarDados() {
      try {
        const api = await fetch("/api/exemplos/1");
        const json = await api.json(); // Adicionado o await aqui!
        
        // 3. Salvamos no estado em vez de manipular o DOM direto
        setDados(json);
      } catch (e) {
        setErro("Erro ao carregar");
        console.error(e);
      }
    }

    carregarDados();
  }, []); // [] faz o fetch rodar apenas uma vez

  // 4. Renderização condicional
  if (erro) return <div>{erro}</div>;
  if (!dados) return <div>Carregando...</div>;

  return (
    <div id="texto">
      {/* Ajuste conforme a estrutura do seu JSON (ex: dados.resumo) */}
      <p>{dados.data.resumo}</p>
      <img src={dados.data.capa} alt="" />
    </div>
  );
}

export default Teste;