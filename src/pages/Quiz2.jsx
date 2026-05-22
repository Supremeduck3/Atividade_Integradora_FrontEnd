import { useState} from 'react';

import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import styles from '../style/quiz2.module.css';


const perguntas = [
    {
        numero: 1,
        autor: 'JOAQUIM MANUEL DE MACEDO',
        trecho: '“Augusto dizia não se prender a nenhum amor, mas seu coração parecia mudar diante da lembrança de uma antiga promessa.”',
        pergunta: 'A atitude de Augusto no romance demonstra principalmente: ',
        alternativas: [
            'Um personagem totalmente fiel desde o início.',
            'Um jovem inconstante que passa por transformação amorosa.',
            'Um herói medieval sem conflitos emocionais.',
            'Um narrador policial investigando crimes.',
            'Um personagem sem ligação com o amor.'
        ],

        correta: 1,
        dica:' A Moreninha pertence ao Romantismo. Observe a ideia de amor idealizado e transformação sentimental.',
        comentario: 'A alternativa B está correta porque Augusto começa como um jovem inconstante, mas passa por uma transformação amorosa ao longo da narrativa.'
    },
    {
       numero: 2,
       autor: 'JOAQUIM MANUEL DE MACEDO',
       trecho: '“A ilha surgia como espaço de encontro, lembrança e revelação dos sentimentos escondidos.”',
       pergunta:'Na obra A Moreninha, o espaço da ilha representa:',
       alternativas: [
            'Um ambiente de guerra e destruição.',
            'Um espaço romântico onde os sentimentos se revelam.',
            'Uma cidade industrial marcada pela miséria.',
            'Um local sem importância para a narrativa.',
            'Um território fantástico com monstros.'
       ],

        correta: 1,
        dica:  'No Romantismo, o cenário pode ajudar a criar clima sentimental e favorecer encontros amorosos.',
        comentario: 'A alternativa B está correta porque a ilha funciona como cenário romântico, favorecendo encontros, lembranças e revelações.',
    },
    {
        numero: 3,
        autor: 'JOAQUIM MANUEL DE MACEDO',
        trecho: '“A promessa feita no passado retorna como força decisiva para o destino dos personagens.”', 
        pergunta:  'A promessa no romance está ligada principalmente à ideia de:',
         alternativas: [
            'Amor idealizado e fidelidade sentimental.',
            'Crítica ao sistema financeiro.',
            'Guerra entre famílias rivais.',
            'Fantasia sobrenatural.',
            'Rejeição completa do amor.'
         ],

         correta: 0,
         dica: 'A promessa une passado, memória e idealização amorosa.',
         comentario: 'A alternativa A está correta porque a promessa simboliza fidelidade e amor idealizado, valores muito presentes no Romantismo.'

    },
     { 
        numero: 4,
        autor: 'JOAQUIM MANUEL DE MACEDO',
        trecho: '“O amor aparece como sentimento capaz de transformar comportamentos e revelar a verdadeira identidade dos personagens.”',
        pergunta: 'Esse trecho se relaciona a qual característica do Romantismo?',
        alternativas: [
            'Valorização do amor e dos sentimentos.',
            'Negação da emoção.',
            'Uso exclusivo de linguagem científica.',
            'Ausência de conflitos amorosos.',
            'Crítica ao mundo digital.'
        ],
       correta: 0,
       dica: 'O Romantismo valoriza emoção, amor, idealização e sentimentos.',
       comentario: 'A alternativa A está correta porque o Romantismo coloca o amor e os sentimentos no centro da narrativa.'
     },
     {
        numero: 5,
        autor: 'JOAQUIM MANUEL DE MACEDO',
        trecho: '“Carolina surge como figura encantadora, associada à pureza, à delicadeza e ao amor idealizado.”',
        pergunta: 'A personagem Carolina, em A Moreninha, representa principalmente:',
        alternativas: [
            'A crítica ao capitalismo industrial.',
            'A idealização feminina típica do Romantismo.',
            'A rejeição total ao amor.',
            'A figura de uma guerreira medieval.',
            'A ausência de sentimentos na narrativa.'
        ], 
        
        correta: 1,
        dica: 'No Romantismo, muitas personagens femininas são apresentadas de forma idealizada.',
        comentario: 'A alternativa B está correta porque Carolina representa a idealização feminina e amorosa típica do Romantismo.'

    },
];

function  Quiz2() {
    const [ perguntaAtual, setPerguntaAtual] = useState(0);
    const [ respostaSelecionada, setRespostaSelecionada] = useState(null);
    const [ acertos, setAcertos] = useState(0);
    const [ finalizado, setFinalizado] = useState(false);

    const pergunta = perguntas[perguntaAtual];

    function selecionarResposta(index) {
        if( respostaSelecionada !== null) return;
        
        setRespostaSelecionada(index);

        if (index === pergunta.correta) {
            setAcertos(acertos + 1);
        }
    }

    function proximaPergunta() {
      if (respostaSelecionada == null) {
        alert('Escolha uma alternativa antes de continuar.');
        return;
      }

      if( perguntaAtual < perguntas.length +1) {
        setperguntaAtual(perguntaAutal + 1);
        setRespostaSelecionada(null);
      } else {
        setFinalizado(true);
      }
    }

    function perguntaAnterior() {
        if ( perguntaAtual > 0) {
            setperguntaAtual(perguntaAtual - 1);
            setRespostaSelecionada(null);
        }
    }
     
    function reiniciarQuiz() {
        setPerguntaAtual(0);
        setRespostaSelecionada(null);
        setAcertos(0);
        setFinalizado(false);
    }

    function letraAlternativa(index) {
        return String.fromCharCode( 65 + index);
    }

    if(finalizado) {
        return (
          
            <div className= {styles.container}>
                <Header /> 
            
            <main className= {styles.main}> 
                <section className= {styles.resultadoFinal}>
                    <h1>Resultado Final</h1>
                    <h2>A moreninha</h2>

                    <p> 
                        Voocê acertou <strong>{acertos}</strong> de <strong> {perguntas.length} </strong> perguntas.
                    </p>

                     {acertos >=4  ? (
                            <p className={styles.mensagemBoa}> Muito bem! Voceê entendeu o conteúdo do livro</p>
                        ) : (
                            <p className={styles.mensagemRuim}>Continue estudando. Você pode refazer o quiz.</p>
                        )}

                      <button className={styles.botaoProxima} onClick={reiniciarQuiz}>
                        Refazer Quiz 
                      </button>

                </section>

            </main>

             <Footer/>

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
