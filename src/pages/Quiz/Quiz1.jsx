import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useLang } from '../../contexts/LanguageContext';
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import styles from "./quiz1.module.css";

const TOTAL_QUESTOES = 5;

const BASE_URL = 'https://atividade-portugues-backend.onrender.com';
const API_KEY = 'chaveSecreta';

const QUIZ_CONFIG = {
    2: { firstId: 5 },
    3: { firstId: 10 },
    4: { firstId: 15 },
    5: { firstId: 20 },
    6: { firstId: 24 },
};

function Quiz1() {
    const { lang } = useLang();
    const { id } = useParams();
    const livroId = Number(id);

    const [questao, setQuestao] = useState(null);
    const [erro, setErro] = useState(null);
    const [carregando, setCarregando] = useState(true);

    const [perguntaAtual, setPerguntaAtual] = useState(1);
    const [respostas, setRespostas] = useState({});
    const [respostaDigitada, setRespostaDigitada] = useState("");
    const [respondida, setRespondida] = useState(false);
    const [finalizado, setFinalizado] = useState(false);

    useEffect(() => {
        async function carregarQuestao() {
            setCarregando(true);
            setErro(null);
            setRespondida(respostas[perguntaAtual] !== undefined);
            setRespostaDigitada(respostas[perguntaAtual]?.texto ?? "");

            const config = QUIZ_CONFIG[livroId];
            if (!config) {
                setErro(`Livro ${livroId} não encontrado.`);
                setCarregando(false);
                return;
            }

            try {
                const questionId = config.firstId + perguntaAtual - 1;
                const response = await fetch(
                    `${BASE_URL}/api/quiz/${questionId}`,
                    { method: "GET", headers: { "x-api-key": API_KEY } }
                );

                if (!response.ok) throw new Error(`Erro na API: ${response.status}`);

                const json = await response.json();
                const dados = json.data ?? json;
                setQuestao(dados);
            } catch (e) {
                setErro("Erro ao carregar a questão.");
                console.error(e);
            } finally {
                setCarregando(false);
            }
        }
        carregarQuestao();
    }, [perguntaAtual, livroId]);

    function getTextoQuestao() {
        if (!questao) return "";
        return lang === 'pt-BR'
            ? questao.conteudoQuestao
            : (questao.conteudoQuestao_en || questao.conteudoQuestao);
    }

    function getRespostaCorreta() {
        if (!questao) return "";
        return lang === 'pt-BR'
            ? questao.respostaQuestao
            : (questao.respostaQuestao_en || questao.respostaQuestao);
    }

    function normalizar(str) {
        return str
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .trim();
    }

    function responder() {
        if (!respostaDigitada.trim()) {
            alert(lang === 'pt-BR'
                ? "Digite uma resposta antes de confirmar."
                : "Type an answer before confirming.");
            return;
        }

        const correta = normalizar(respostaDigitada) === normalizar(getRespostaCorreta());
        setRespostas({
            ...respostas,
            [perguntaAtual]: { texto: respostaDigitada, correta }
        });
        setRespondida(true);
    }

    function avancar() {
        if (!respondida) {
            alert(lang === 'pt-BR'
                ? "Responda a questão antes de continuar."
                : "Answer the question before continuing.");
            return;
        }
        if (perguntaAtual < TOTAL_QUESTOES) {
            setPerguntaAtual(perguntaAtual + 1);
            setRespondida(false);
            setRespostaDigitada("");
        } else {
            setFinalizado(true);
        }
    }

    function reiniciar() {
        setPerguntaAtual(1);
        setRespostas({});
        setRespostaDigitada("");
        setRespondida(false);
        setFinalizado(false);
    }

    const acertos = Object.values(respostas).filter(r => r.correta).length;
    const totalRespondidas = Object.keys(respostas).length;

    if (finalizado) {
        return (
            <div className={styles.container}>
                <Header />
                <main className={styles.main}>
                    <section className={styles.resultadoFinal}>
                        <h1>{lang === 'pt-BR' ? 'Resultado Final' : 'Final Result'}</h1>
                        <h2>Quiz {id ? `— Livro ${id}` : ""}</h2>
                        <p>
                            {lang === 'pt-BR' ? 'Você acertou' : 'You got'}{" "}
                            <strong>{acertos}</strong>{" "}
                            {lang === 'pt-BR' ? 'de' : 'out of'}{" "}
                            <strong>{totalRespondidas}</strong>{" "}
                            {lang === 'pt-BR' ? 'perguntas.' : 'questions.'}
                        </p>
                        {acertos >= Math.ceil(totalRespondidas / 2) ? (
                            <p className={styles.mensagemBoa}>
                                {lang === 'pt-BR'
                                    ? 'Muito bem! Você entendeu o conteúdo do livro.'
                                    : 'Well done! You understood the content of the book.'}
                            </p>
                        ) : (
                            <p className={styles.mensagemRuim}>
                                {lang === 'pt-BR'
                                    ? 'Continue estudando. Você pode refazer o quiz.'
                                    : 'Keep studying. You can retake the quiz.'}
                            </p>
                        )}
                        <button className={styles.botaoProxima} onClick={reiniciar}>
                            {lang === 'pt-BR' ? 'Refazer Quiz' : 'Retake Quiz'}
                        </button>
                    </section>
                </main>
                <Footer />
            </div>
        );
    }

    if (carregando || erro || !questao) {
        return (
            <div className={styles.container}>
                <Header />
                <main className={styles.main}>
                    <h1>
                        {erro ?? (lang === 'pt-BR' ? 'Carregando questão...' : 'Loading question...')}
                    </h1>
                </main>
                <Footer />
            </div>
        );
    }

    const respostaAnterior = respostas[perguntaAtual];
    const textoQuestao = getTextoQuestao();
    const respostaCorreta = getRespostaCorreta();

    return (
        <div className={styles.container}>
            <Header />

            <main className={styles.main}>
                <div className={styles.voltar}>
                    &lt; {lang === 'pt-BR' ? 'Estudo do livro' : 'Study of the book'}
                </div>
                <h1 className={styles.titulo}>Quiz</h1>
                <p className={styles.subtitulo}>
                    • {lang === 'pt-BR'
                        ? 'Linguagens, Códigos e suas tecnologias'
                        : 'Languages, Codes and their technologies'}
                </p>

                <section className={styles.layout}>
                    <div className={styles.areaPergunta}>
                        <div className={styles.cardPergunta}>
                            <strong className={styles.questao}>
                                {lang === 'pt-BR' ? 'Questão' : 'Question'} {perguntaAtual}{' '}
                                {lang === 'pt-BR' ? 'de' : 'of'} {TOTAL_QUESTOES}
                            </strong>

                            <button className={styles.botaoResultado}>
                                {lang === 'pt-BR' ? 'Voltar aos meus resultados' : 'Back to my results'}
                            </button>

                            <div className={styles.trecho}>
                                {textoQuestao}
                            </div>

                            {!respondida ? (
                                <div className={styles.alternativas}>
                                    <input
                                        type="text"
                                        value={respostaDigitada}
                                        onChange={e => setRespostaDigitada(e.target.value)}
                                        onKeyDown={e => e.key === "Enter" && responder()}
                                        placeholder={lang === 'pt-BR' ? 'Digite sua resposta' : 'Type your answer'}
                                        style={{
                                            width: "100%",
                                            padding: "12px 16px",
                                            fontSize: "15px",
                                            border: "1px solid #ddd",
                                            borderRadius: "8px",
                                            outline: "none",
                                            boxSizing: "border-box"
                                        }}
                                    />
                                    <button
                                        className={styles.botaoProxima}
                                        style={{ alignSelf: "flex-start" }}
                                        onClick={responder}
                                    >
                                        {lang === 'pt-BR' ? 'Confirmar Resposta' : 'Confirm Answer'}
                                    </button>
                                </div>
                            ) : (
                                <div className={styles.alternativas}>
                                    <div
                                        className={
                                            respostaAnterior?.correta
                                                ? `${styles.alternativa} ${styles.correta}`
                                                : `${styles.alternativa} ${styles.incorreta}`
                                        }
                                        style={{ cursor: "default" }}
                                    >
                                        <span className={styles.letra}>
                                            {respostaAnterior?.correta ? "✓" : "✗"}
                                        </span>
                                        <span className={styles.textoAlternativa}>
                                            {lang === 'pt-BR' ? 'Sua resposta:' : 'Your answer:'}{' '}
                                            <strong>{respostaAnterior?.texto}</strong>
                                        </span>
                                        <span className={respostaAnterior?.correta ? styles.statusCorreto : styles.statusErrado}>
                                            {respostaAnterior?.correta
                                                ? (lang === 'pt-BR' ? 'Correta!' : 'Correct!')
                                                : (lang === 'pt-BR' ? 'Incorreta' : 'Incorrect')}
                                        </span>
                                    </div>

                                    {!respostaAnterior?.correta && (
                                        <div
                                            className={`${styles.alternativa} ${styles.correta}`}
                                            style={{ cursor: "default" }}
                                        >
                                            <span className={styles.letra}>✓</span>
                                            <span className={styles.textoAlternativa}>
                                                {lang === 'pt-BR' ? 'Resposta correta:' : 'Correct answer:'}{' '}
                                                <strong>{respostaCorreta}</strong>
                                            </span>
                                            <span className={styles.statusCorreto}>
                                                {lang === 'pt-BR' ? 'Gabarito' : 'Answer key'}
                                            </span>
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>

                        <div className={styles.comentario}>
                            <div className={styles.professor}>
                                <div>
                                    <h3>{lang === 'pt-BR' ? 'Comentário do Professor' : "Teacher's Commentary"}</h3>
                                    <span>
                                        {lang === 'pt-BR'
                                            ? 'Prof. Maria Helena | Leitura Brasileira'
                                            : 'Prof. Maria Helena | Brazilian Reading'}
                                    </span>
                                </div>
                            </div>
                            <p>
                                {respondida
                                    ? lang === 'pt-BR'
                                        ? 'Análise da resposta concluída.'
                                        : 'Answer analysis completed.'
                                    : lang === 'pt-BR'
                                        ? 'Aguardando sua resposta para análise.'
                                        : 'Waiting for your answer for analysis.'}
                            </p>
                        </div>
                    </div>

                    <aside className={styles.progresso}>
                        <div className={styles.botoesNavegacao}>
                            <button className={styles.botaoProxima} onClick={avancar}>
                                {lang === 'pt-BR' ? 'Próxima' : 'Next'}
                            </button>
                        </div>
                    </aside>
                </section>
            </main>

            <Footer />
        </div>
    );
}

export default Quiz1;