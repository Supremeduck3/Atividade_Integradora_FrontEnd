import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { LanguageProvider, useLang} from '../../contexts/LanguageContext';
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";

import styles from "./quiz1.module.css";

const TOTAL_QUESTOES = 5;

function Quiz1() {
    const { lang, } = useLang();
    const { id } = useParams();

    const [questao, setQuestao] = useState(null);
    const [erro, setErro] = useState(null);
    const [carregando, setCarregando] = useState(true);

    const [perguntaAtual, setPerguntaAtual] = useState(Number(id)); // id da questão atual
    const [respostas, setRespostas] = useState({});        // { id_questao: { texto, correta } }
    const [respostaDigitada, setRespostaDigitada] = useState("");
    const [respondida, setRespondida] = useState(false);
    const [finalizado, setFinalizado] = useState(false);

    useEffect(() => {
        async function carregarQuestao() {
            setCarregando(true);
            setErro(null);
            setRespondida(respostas[perguntaAtual] !== undefined);
            setRespostaDigitada(respostas[perguntaAtual]?.texto ?? "");

            try {
                const myHeader = new Headers({ "x-api-key": "chaveSecreta" });
                const opcoes = { method: "GET", headers: myHeader };

                const api = await fetch(
                    `https://atividade-portugues-backend.onrender.com/api/quiz/${perguntaAtual}`,
                    opcoes
                );

                if (!api.ok) throw new Error(`Erro na API: ${api.status}`);

                const json = await api.json();
                console.log("✅ Resposta da API:", json);

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
    }, [perguntaAtual]);

    function normalizar(str) {
        return str
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .trim();
    }

    function responder() {
        if (!respostaDigitada.trim()) {
            alert("Digite uma resposta antes de confirmar.");
            return;
        }

        const correta = normalizar(respostaDigitada) === normalizar(questao.respostaQuestao);
        setRespostas({
            ...respostas,
            [perguntaAtual]: { texto: respostaDigitada, correta }
        });
        setRespondida(true);
    }

    function avancar() {
        if (!respondida) {
            alert("Responda a questão antes de continuar.");
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

    function voltar() {
        if (perguntaAtual > 1) {
            setPerguntaAtual(perguntaAtual - 1);
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

    // ── Tela de resultado final ──────────────────────────────────────
    if (finalizado) {
        return (
            <div className={styles.container}>
                <Header />
                <main className={styles.main}>
                    <section className={styles.resultadoFinal}>
                        <h1>{lang === 'pt-BR' ? ' Resultado Final' : 'Final Result'}</h1>
                        <h2>Quiz {id ? `— Livro ${id}` : ""}</h2>
                        <p>
                            {lang === 'pt-BR' ? ' Você acertou' : 'You were correct'} <strong>{acertos}</strong>{lang === 'pt-BR' ? ' de' : ' of'}{" "}
                            <strong>{totalRespondidas}</strong> {lang === 'pt-BR' ? 'perguntas.' : ' Questions'}
                        </p>
                        {acertos >= Math.ceil(totalRespondidas / 2) ? (
                            <p className={styles.mensagemBoa}>
                                Muito bem! Você entendeu o conteúdo do livro.
                            </p>
                        ) : (
                            <p className={styles.mensagemRuim}>
                                {lang === 'pt-BR' ? ' Continue estudando. Você pode refazer o quiz.' : ' Continue estudando. Você pode refazer o quiz.'}
                            </p>
                        )}
                        <button className={styles.botaoProxima} onClick={reiniciar}>
                            {lang === 'pt-BR' ? ' Refazer Quiz' : ' retake quiz'}
                        </button>
                    </section>
                </main>
                <Footer />
            </div>
        );
    }

    // ── Loading / Erro ───────────────────────────────────────────────
    if (carregando || erro || !questao) {
        return (
            <div className={styles.container}>
                <Header />
                <main className={styles.main}>
                    <h1>{erro ?? "Carregando questão..."}</h1>
                </main>
                <Footer />
            </div>
        );
    }

    const respostaAnterior = respostas[perguntaAtual];

    // ── Quiz ─────────────────────────────────────────────────────────
    return (
        <div className={styles.container}>
            <Header />

            <main className={styles.main}>
                <div className={styles.voltar}>&lt; 
                    {lang === 'pt-BR' ? ' Estudo do livro' : ' study of book'}</div>
                <h1 className={styles.titulo}>Quiz</h1>
                <p className={styles.subtitulo}>• {lang === 'pt-BR' ? ' Linguagens, Códigos e suas tecnologias' : ' Languages, Codes and their technologies'}</p>

                <section className={styles.layout}>
                    <div className={styles.areaPergunta}>
                        <div className={styles.cardPergunta}>
                            <strong className={styles.questao}>
                               {lang === 'pt-BR' ? ' Questão' : ' Question'} {perguntaAtual} {lang === 'pt-BR' ? ' de' : ' of'} {TOTAL_QUESTOES}
                            </strong>

                            <button className={styles.botaoResultado}>
                                {lang === 'pt-BR' ? ' Voltar aos meus resultados' : ' Back to my results'}
                            </button>

                            <div className={styles.trecho}>
                                {questao.conteudoQuestao}
                            </div>

                            {/* Campo de resposta aberta */}
                            {!respondida ? (
                                <div className={styles.alternativas}>
                                    <input
                                        type="text"
                                        value={respostaDigitada}
                                        onChange={e => setRespostaDigitada(e.target.value)}
                                        onKeyDown={e => e.key === "Enter" && responder()}
                                        placeholder={lang === 'pt-BR' ? ' Digite sua reposta' : ' Type your answer'}
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
                                        {lang === 'pt-BR' ? ' Confirmar Resposta' : ' Confirm Answer'}
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
                                            {lang === 'pt-BR' ? ' Sua resposta:' : ' Our Answer:'} <strong>{respostaAnterior?.texto}</strong>
                                        </span>
                                        <span className={respostaAnterior?.correta ? styles.statusCorreto : styles.statusErrado}>
                                            {respostaAnterior?.correta ? "Correta!" : "Incorreta"}
                                        </span>
                                    </div>

                                    {!respostaAnterior?.correta && (
                                        <div
                                            className={`${styles.alternativa} ${styles.correta}`}
                                            style={{ cursor: "default" }}
                                        >
                                            <span className={styles.letra}>✓</span>
                                            <span className={styles.textoAlternativa}>
                                                {lang === 'pt-BR' ? ' Resposta correta:' : ' Correct Answer:'} <strong>{questao.respostaQuestao}</strong>
                                            </span>
                                            <span className={styles.statusCorreto}>Gabarito</span>
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>

                        {/* Comentário do professor */}
                        <div className={styles.comentario}>
                            <div className={styles.professor}>
                                <div>
                                    <h3> {lang === 'pt-BR' ? ' Comentário do Professor' : ' Teacher s Commentary'}</h3>
                                    <span> {lang === 'pt-BR' ? ' Prof. Maria Helena | Leitura Brasileira' : ' Prof. Maria Helena | Brazilian Reading'}</span>
                                </div>
                            </div>
                            <p>
                                {respondida
                                    ? `Olá, futuro universitário! A resposta esperada era "${questao.respostaQuestao}".`
                                    : "Olá, futuro universitário! Responda a questão para visualizar o comentário."}
                            </p>
                            <div className={styles.linhaComentario}></div>
                            <div className={styles.rodapeComentario}>
                                <span>▣ Ver Vídeo Aula Relacionada</span>
                                <span> {lang === 'pt-BR' ? ' Isso foi útil? 👍 👎' : ' Was this helpful? 👍 👎'}</span>
                            </div>
                        </div>
                    </div>

                    {/* Barra lateral */}
                    <aside className={styles.lateral}>
                        <div className={styles.cardLateral}>
                            <h3> {lang === 'pt-BR' ? ' Progresso' : ' Progress'}</h3>
                            <div className={styles.dica}>
                                {lang === 'pt-BR' ? ' Questão' : ' Question'} {perguntaAtual} {lang === 'pt-BR' ? ' de' : ' of'} {TOTAL_QUESTOES} — {acertos} {lang === 'pt-BR' ? ' acerto(s) até agora.' : ' correct so far.'}
                            </div>
                        </div>
                        <div className={styles.cardLateral}>
                            <h3> {lang === 'pt-BR' ? ' Temas Relacionados' : ' Related Topics'}</h3>
                            <div className={styles.tags}>
                                <span> {lang === 'pt-BR' ? ' Romantismo' : ' Romanticism'}</span>
                                <span> {lang === 'pt-BR' ? ' Romance Urbano' : ' Urban Romance'}</span>
                                <span> {lang === 'pt-BR' ? ' Amor Idealizado' : ' Idealized Love'}</span>
                            </div>
                        </div>
                    </aside>
                </section>

                {/* Navegação */}
                <section className={styles.navegacao}>
                    <button
                        className={styles.botaoAnterior}
                        onClick={voltar}
                        disabled={perguntaAtual === 1}
                    >
                        {lang === 'pt-BR' ? ' ← Anterior' : ' ← Previous'}
                    </button>

                    <div className={styles.bolinhas}>
                        {Array.from({ length: TOTAL_QUESTOES }, (_, i) => (
                            <span
                                key={i}
                                className={i + 1 === perguntaAtual ? styles.ativa : ""}
                            ></span>
                        ))}
                    </div>

                    <button className={styles.botaoProxima} onClick={avancar}>
                        {perguntaAtual === TOTAL_QUESTOES ? "Finalizar →" : "Próxima →"}
                    </button>
                </section>
            </main>

            <Footer />
        </div>
    );
}

export default Quiz1;