import { useEffect, useState } from "react";

import Header from "../components/header/header";
import Footer from "../components/footer/footer";

import styles from "../style/quiz2.module.css";

function Quiz2() {
    const [quiz, setQuiz] = useState(null);
    const [erro, setErro] = useState(null);

    const [perguntaAtual, setPerguntaAtual] = useState(0);
    const [respostaSelecionada, setRespostaSelecionada] = useState(null);
    const [acertos, setFinalizado] = useState(false);

    useEffect(() =>{
        async function carregarQuiz() {
            try{
                const myHeader = new Headers({
                    "x-api-key": "chaveSecreta"
                });
                const opcoes = {
                    method: "GET",
                    headers: myHeader
                };

                const api = await fetch("https://atividade-portugues-backend.onrender.com/api/quiz/2", opcoes);
                const json = await api.json();

                setQuiz(json);
            } catch (e) {
                setErro("Erro ao carregar o quiz");
                console.error(e);
            } 
        }
        carregarQuiz();
    }, []);

    if (erro) {
        return (
            <div className={styles.container}>
                <Header />
                <main className={styles.main}>
                    <h1>{erro}</h1>
                </main>
                <Footer />
            </div>
        );
    }

    if (!quiz) {
        return (
            <div className={styles.container}>
                <Header />
                <main className={styles.main}>
                    <h1>Carregando quiz...</h1>
                </main>
                <Footer />
            </div>
        );
    }

    const perguntas = quiz.perguntas;
    const pergunta = perguntas[perguntaAtual];

    function selecionarResposta(index){
        if (respostaSelecionada !== null) return;

        setRespostaSelecionada(index);

        if(index === pergunta.correta){
            setAcertos(acertos + 1);
        }
    }

    function proximaPergunta() {
        if (respostaSelecionada === null){
            alert('Escolha uma alternativa antes de continuar.');
            return;
        }

        if (perguntaAtual < perguntas.legth -1) {
            setPerguntaAtual(perguntaAtual + 1)
            setRespostaSelecionada(null);
        }else {
            setFinalizado(true);
        }
    }

    function perguntaAnterior() {
        if (perguntaAtual > 0){
            setPerguntaAtual(perguntaAtual - 1);
            setRespostaSelecionada(null);
        }
    }

    function reiniciarQuiz(){
        setPerguntaAtual(0);
        setRespostaSelecionada(null);
        setAcertos(0);
        setFinalizado(false);
    }

    function letraAlternativa(index){
        return String.fromCharCode(65 + index);
    }

    if (finalizado) {
        return (
            <div className={styles.container}>
                <Header />

                <main className={styles.main}>
                    <section className={styles.resultadoFinal}>
                        <h1>Resultado Final</h1>

                        <h2>{quiz.titulo}</h2>

                        <p>
                            Você acertou <strong>{acertos}</strong> de{''}<strong>{perguntas.length}</strong> perguntas.
                        </p>

                        {acertos >= 4 ? (
                            <p className={styles.mensagemBoa}>
                                Muito bem! Você entendeu o conteúdo do livro.
                            </p>
                        ) :(
                            <p className={styles.mensagemRuim}>
                                Continue estudando. Você pode refazer o quiz.
                            </p>
                        )}

                        <button className={styles.botaoProxima} onClick={reiniciarQuiz}>
                            Refazer Quiz
                        </button>
                    </section>
                </main>

                <Footer />
            </div>
        );
    }

    return (
           <div className={styles.container} >
               <Header/> 
   
               <main className={styles.main}>
                   <div className= {styles.voltar}>
                       &lt; Estudo do livro
                   </div>
   
                   <h1 className={styles.titulo}>Quiz</h1>
   
                   <p className={styles.subtitulo}>
                       • Linguagens, Códigos e suas tecnologias
                   </p>
   
                     <section className={styles.layout}>
                       <div className={styles.areaPergunta}>
                           <div className={styles.cardPergunta}>
                               <strong className={styles.questao}>
                                   Questão {pergunta.numero}
                               </strong>
   
                               <button className={styles.botaoResultado}>
                                   Voltar aos meus resultados
                               </button>
   
                               <h2 className={styles.autor}>
                                   {pergunta.autor}
                               </h2>
   
                               <div className={styles.trecho}>
                                   {pergunta.trecho}
                               </div>
   
                               <p className={styles.perguntaTexto}>
                                   {pergunta.pergunta}
                               </p>
   
                               <div className={styles.alternativas}>
                                   {pergunta.alternativas.map((alternativa, index) => {
                                       let classeAlternativa = styles.alternativa;
   
                                       if (respostaSelecionada !== null) {
                                           if (index === pergunta.correta) {
                                               classeAlternativa = `${styles.alternativa} ${styles.correta}`;
                                           }
   
                                           if (index === respostaSelecionada && index !== pergunta.correta) {
                                               classeAlternativa = `${styles.alternativa} ${styles.incorreta}`;
                                           }
                                       }
   
                                       return (
                                           <button
                                               key={index}
                                               className={classeAlternativa}
                                               onClick={() => selecionarResposta(index)}
                                           >
                                               <span className={styles.letra}>
                                                   {letraAlternativa(index)}
                                               </span>
   
                                               <span className={styles.textoAlternativa}>
                                                   {alternativa}
                                               </span>
   
                                               {respostaSelecionada !== null && index === pergunta.correta && (
                                                   <span className={styles.statusCorreto}>
                                                       Resposta Correta
                                                   </span>
                                               )}
   
                                               {respostaSelecionada !== null &&
                                                   index === respostaSelecionada &&
                                                   index !== pergunta.correta && (
                                                       <span className={styles.statusErrado}>
                                                           Sua resposta
                                                       </span>
                                                   )}
                                           </button>
                                       );
                                   })}
                               </div>
                           </div>
   
                           <div className={styles.comentario}>
                               <div className={styles.professor}>
   
                                   <div>
                                       <h3>Comentário do Professor</h3>
                                       <span>Prof. Maria Helena| Leitura Brasileira</span>
                                   </div>
                               </div>
   
                               {respostaSelecionada === null ? (
                                   <p>
                                       Olá, futuro universitário! Selecione uma alternativa para visualizar o comentário da questão.
                                   </p>
                               ) : (
                                   <p>
                                       Olá, futuro universitário! {pergunta.comentario}
                                   </p>
                               )}
   
                               <div className={styles.linhaComentario}></div>
   
                               <div className={styles.rodapeComentario}>
                                   <span>▣ Ver Vídeo Aula Relacionada</span>
                                   <span>Isso foi útil? 👍 👎</span>
                               </div>
                           </div>
                       </div>
   
                       <aside className={styles.lateral}>
                           <div className={styles.cardLateral}>
                               <h3>Dica de Estudo</h3>
   
                               <div className={styles.dica}>
                                   "{pergunta.dica}"
                               </div>
                           </div>
   
                           <div className={styles.cardLateral}>
                               <h3>Temas Relacionados</h3>
   
                               <div className={styles.tags}>
                                   <span>Romantismo</span>
                                   <span>Romance Urbano</span>
                                   <span>Amor Idealizado</span>
                               </div>
                           </div>
                       </aside>
                   </section>
   
                   <section className={styles.navegacao}>
                       <button
                           className={styles.botaoAnterior}
                           onClick={perguntaAnterior}
                           disabled={perguntaAtual === 0}
                       >
                           ← Anterior
                       </button>
   
                       <div className={styles.bolinhas}>
                           {perguntas.map((_, index) => (
                               <span
                                   key={index}
                                   className={index === perguntaAtual ? styles.ativa : ''}
                               ></span>
                           ))}
                       </div>
                       <button className={styles.botaoProxima} onClick={proximaPergunta}>
                           {perguntaAtual === perguntas.length - 1 ? ' Finalizar →' : 'Próxima →'}
                       </button>
                   </section>
   
   
               </main>
           </div>
        )
   
   
   }
   
   export default Quiz2;