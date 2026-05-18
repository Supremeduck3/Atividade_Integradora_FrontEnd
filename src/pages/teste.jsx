
import { useEffect, useState } from 'react';
import style from './../style/teste.module.css'
function Teste() {
  // 1. Criamos um estado para guardar os dados
  const [dados, setDados] = useState(null);
  const [erro, setErro] = useState(null);

  let myHeader = new Headers({
    "x-api-key": "chaveSecreta"
  })
  const opcoes ={
    method:"GET",
    headers: myHeader
  }
  useEffect(() => {
    // 2. Função assíncrona dentro do useEffect
    async function carregarDados(id) {
      try {
        const api = await fetch(`http://localhost:3000/api/upload/${id}/capa`, opcoes);
        const json = await api.json(); // Adicionado o await aqui!

        // 3. Salvamos no estado em vez de manipular o DOM direto
        setDados(json);
      } catch (e) {
        setErro("Erro ao carregar");
        console.error(e);
      }
      return dados
    }

    carregarDados(2);
  }, []); // [] faz o fetch rodar apenas uma vez

  // 4. Renderização condicional
  if (erro) return <div>{erro}</div>;
  if (!dados) return <div>Carregando...</div>;

  return (
    <div id="texto">
      {/* Ajuste conforme a estrutura do seu JSON (ex: dados.resumo) */}
      <img src={dados.url} alt="" className={style.imagem}  />
    </div>
  );
}

export default Teste