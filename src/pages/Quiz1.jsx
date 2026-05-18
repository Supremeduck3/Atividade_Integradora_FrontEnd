import { useState} from 'react';

import header from '../components/header';
import footer from '../components/footer';
import styles from '../style/quiz1.module.css';

const perguntas = [
    {
        numero: 1,
        autor: 'CONCEIÇÃO EVARISTO',
        trecho: '"Fio Jasmim trazia a cidade nos olhos e no corpo, um corpo que parecia conter todas as histórias do cais, das linhas férreas e das ladeiras. Quando Juventina o olhava, não via apenas o homem, mas a soma de todas as ausências e de todos os regressos que formavam a sua própria escrevivência."',
        pergunta: 'De acordo com a análise do fragmento citado, a "escrevivência" mencionada refere-se a:',
        alernativas: [
            'Uma técnica de escrita puramente ficcional sem relação com a realidade.',
            'Apenas ao ato de registrar eventos históricos de forma documental.',
            'Ao esquecimento total dos detalhes da vida na adolescência.',
            'À união indissociável entre a vivência pessoal/coletiva de corpos negros e a criação literária.',
            'Uma expressão que denota a falta de instrução formal dos personagens.',
        ],

        correta: 3,
        dica: "Foque no conceito de Escrevivência: a fusão da memória coletiva de mulheres negras com a ficção. Note como as ausências e a inconstância afetiva de Fio Jasmim revelam as marcas do racismo estrutural e da solidão da mulher negra.",
        comentario: 'A alternativa D é correta porque a “escrevivência” é o conceito-chave da Conceição Evaristo. O fragmento mostra que o corpo e a história do personagem carregam vivências individuais e coletivas, principalmente ligadas à memória, ancestralidade e experiência negra.',
    },
    {
        numero: 2,
        autor: 'CONCEIÇÃO EVARISTO',
        trecho: '“A palavra nascia da lembrança, mas também da dor. Cada história contada parecia costurar o passado ao presente, revelando vozes que durante muito tempo foram silenciadas.”',
        pergunta: 'No trecho, a memória aparece principalmente como:',
        alternativas: [
            'Um elemento sem importância para a construção da narrativa.',
            'Uma forma de apagar completamente as dores do passado.',
            'Um recurso para reconstruir histórias, identidades e vozes silenciadas.',
            'Uma fuga fantasiosa sem relação com a realidade social.',
            'Um detalhe usado apenas para deixar o texto mais bonito.'
        ],

        correta: 2,
        dica: 'Observe que a memória, na escrita de Conceição Evaristo, não é apenas lembrança: ela também denuncia, reconstrói e dá voz a experiências silenciadas.',
        comentario: 'A alternativa C é correta porque a memória aparece como uma forma de recuperar histórias e identidades. A autora valoriza vozes que foram apagadas ou diminuídas pela sociedade.'
    },
]