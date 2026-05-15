import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import style from '../style/personagens.module.css';

function PaginaPersonagens() {
    const [personagens] = useState([
        {
            nome: 'Pérola Maria',
            resumo: 'É a personificação da perda devastadora. Ela é a mulher que não aceita o amor em migalhas...',
            capa: '/img/PerolaMaria.png',
        },
        {
            nome: 'Fio Jasmin',
            resumo: 'É a personificação da fuga e do encanto. Ele habita o corpo de um homem vigoroso...',
            capa: '/img/FioJasmin.png',
        },
        {
            nome: 'Juventina',
            resumo: 'É a personificação do porvir seguro e da solidão compartilhada. Ela ocupa o lugar...',
            capa: '/img/Juventina.png',
        },
        {
            nome: 'Arabela',
            resumo: 'É a personificação da brevidade e do consolo. Ela representa as paradas temporárias...',
            capa: '/img/Arabela.png',
        },
        {
            nome: 'Irene',
            resumo: 'Irene é a personificação da espera. Ela sabe das traições, sabe dos furos...',
            capa: '/img/Irene.png',
        },
        {
            nome: 'Aurora',
            resumo: 'É a personificação da nostalgia e do tempo que não volta. Ela representa o entardecer...',
            capa: '/img/Aurora.png',
        },
        {
            nome: 'Mágda',
            resumo: 'É a personificação da nostalgia e do tempo que não volta. Ela representa o entardecer...',
            capa: '/img/Magda.png',
        },
        {
            nome: 'Maria Nova',
            resumo: 'É a personificação da nostalgia e do tempo que não volta. Ela representa o entardecer...',
            capa: '/img/MariaNova.png',
        },
    ]);

 return (
     <div className={style.pagina_completa}>
         <Header />

         <main className={style.conteudo_personagens}>
             <div className={style.banner_personagens}>
                 <img src="/img/icones.png" alt="Decorativo" className={style.formas_decorativas} />
                 <div className="titulo-obra">
                     <h2>Canção Para Ninar</h2>
                     <h2 className="destaque_laranja">Menino Grande</h2>
                 </div>
                 <h1>Personagens</h1>
             </div>

             <div className="grid_personagens">
                 {personagens.map((p, index) => (
                     <div key={index} className="card_personagem">
                         <div className="foto_container">
                             <img
                                 src={p.capa}
                                 alt={p.nome}
                                 className={
                                     p.nome === 'Pérola Maria' || p.nome === 'Irene'
                                         ? 'foto-ajustada'
                                         : ''
                                 }
                             />
                         </div>
                         <div className="info_personagem">
                             <h3>{p.nome}</h3>
                             <p>{p.resumo}</p>

                             <Link to={`/personagem/${p.nome}`} className="btn-ler-sobre">
                                 Ler Sobre <span className="seta">→</span>
                             </Link>
                         </div>
                     </div>
                 ))}
             </div>
         </main>

         <Footer />
     </div>
 );
}

export default PaginaPersonagens;
