import { useParams, Link } from 'react-router-dom';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import styles from './../style/personagens.module.css';

const bancoDeDadosPersonagens = {
    'Pérola Maria': {
        nome: 'Pérola Maria',
        obra: 'Canção Para Ninar Menino Grande',
        imagem: '/img/PerolaMaria.png',
        detalhes:
            'É a personificação da perda devastadora. Ela é a mulher que não aceita o amor em migalhas e cuja intensidade consome a superficialidade afetiva de Fio. Sua dor é profunda e sua presença é marcante em toda a narrativa, representando aquelas que amam demais e recebem de menos.',
    },
    'Fio Jasmin': {
        nome: 'Fio Jasmin',
        obra: 'Canção Para Ninar Menino Grande',
        imagem: '/img/FioJasmin.png',
        detalhes:
            "É a personificação da fuga e do encanto. Ele habita o corpo de um homem vigoroso, mas carrega a alma de uma criança que se perde na imensidão dos próprios desejos. Fio espalha sementes (e filhos) pelo caminho, mas nunca cria raízes, sendo o eterno 'menino grande' que foge de responsabilidades.",
    },
    Juventina: {
        nome: 'Juventina',
        obra: 'Canção Para Ninar Menino Grande',
        imagem: '/img/Juventina.png',
        detalhes:
            "É a personificação do porvir seguro e da solidão compartilhada. Ela ocupa o lugar de 'esposa legítima', aquela que detém o título e a casa, mas que vive na constante espera por um marido que pertence ao mundo e a outras mulheres.",
    },
    Arabela: {
        nome: 'Arabela',
        obra: 'Canção Para Ninar Menino Grande',
        imagem: '/img/Arabela.png',
        detalhes:
            'É a personificação da brevidade e do consolo. Ela representa as paradas temporárias de Fio ao longo das trilhas ferroviárias. Arabela entende a natureza efêmera dos encontros e oferece um porto seguro momentâneo.',
    },
    Irene: {
        nome: 'Irene',
        obra: 'Canção Para Ninar Menino Grande',
        imagem: '/img/Irene.png',
        detalhes:
            'Irene é a personificação da espera. Ela sabe das traições, sabe dos furos e entende perfeitamente a natureza de Fio. Sua sabedoria vem do silêncio e da observação cuidadosa; ela é o ponto de retorno.',
    },
    Aurora: {
        nome: 'Aurora',
        obra: 'Canção Para Ninar Menino Grande',
        imagem: '/img/Aurora.png',
        detalhes:
            'É a personificação da nostalgia e do tempo que não volta. Ela representa o entardecer dos afetos de Fio, sendo uma das memórias que ele carrega de tempos mais simples.',
    },
    Mágda: {
        nome: 'Mágda',
        obra: 'Canção Para Ninar Menino Grande',
        imagem: '/img/Magda.png',
        detalhes:
            'É a personificação da perda súbita e da interrupção. Mágda surge como o símbolo dos laços que Fio rompe sem olhar para trás, deixando rastros de histórias inacabadas.',
    },
    'Maria Nova': {
        nome: 'Maria Nova',
        obra: 'Canção Para Ninar Menino Grande',
        imagem: '/img/MariaNova.png',
        detalhes:
            'É a personificação da memória e do testemunho. Embora funcione como uma observadora dentro da trama, ela é quem recolhe os retalhos dessas vidas femininas para transformá-los em história.',
    },
};

function DetalhePersonagem() {
    const { id } = useParams();
    const personagem = bancoDeDadosPersonagens[id];

    if (!personagem) {
        return (
            <div className={styles.pagina_completa}>
                <Header />
                <main className={styles.conteudo_erro}>
                    <h1>Personagem não encontrado</h1>
                    <p>Buscando por: {id}</p>
                    <Link to="/personagens" className={styles.btn_voltar}>
                        ← Voltar para a lista
                    </Link>
                </main>
                <Footer />
            </div>
        );
    }

    return (
        <div className={styles.pagina_completa}>
            <Header />
            <main className={styles.conteudo_detalhe}>
                <Link to="/personagens" className="btn-voltar">
                    ← Voltar para a lista
                </Link>
                <div className={styles.layout_detalhe}>
                    <div className={styles.detalhe_foto}>
                        <img src={personagem.imagem} alt={personagem.nome} />
                    </div>
                    <div className={styles.detalhe_info}>
                        <span className={styles.obra_tag}>{personagem.obra}</span>
                        <h1>{personagem.nome}</h1>
                        <p className={styles.texto_detalhado}>{personagem.detalhes}</p>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
export default DetalhePersonagem;
