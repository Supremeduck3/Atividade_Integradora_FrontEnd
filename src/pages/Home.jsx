import React from 'react';

export default function Home() {
    const livros = [
        { id: '1', nome: 'A Moreninha', autor: 'Joaquim Manuel' },
        { id: '2', nome: 'Caminho das Pedras', autor: 'Rachel' },
        { id: '3', nome: 'Livro 3', autor: 'Autor' },
        { id: '4', nome: 'Livro 4', autor: 'Autor' },
    ];

    return (
        <div style={styles.container}>
            <header style={styles.topo}>
                <span style={styles.logo}>Bookly</span>
            </header>

            <section style={styles.texto}>
                <h1 style={styles.titulo}>Estude livros de forma inteligente</h1>
                <p style={styles.subtitulo}>Resumos e atividades para você estudar melhor</p>
            </section>

            <input
                type="text"
                placeholder="Pesquisar livros..."
                style={styles.input}
            />

            <h2 style={styles.tituloLista}>Livros disponíveis:</h2>

            <div style={styles.lista}>
                {livros.map((item) => (
                    <div key={item.id} style={styles.card}>
                        <div style={styles.caixaImagem} />
                        <strong style={{ display: 'block' }}>{item.nome}</strong>
                        <span style={{ fontSize: '12px' }}>{item.autor}</span>
                    </div>
                ))}
            </div>

            <footer style={styles.blocoFinal}>
                <p style={{ color: '#fff', margin: 0 }}>Comece a estudar agora!</p>
            </footer>
        </div>
    );
}


const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        padding: '20px',
        fontFamily: 'sans-serif',
        maxWidth: '600px',
        margin: '0 auto',
    },
    topo: {
        marginBottom: '10px',
    },
    logo: {
        color: 'orange',
        fontSize: '18px',
        fontWeight: 'bold',
    },
    texto: {
        marginBottom: '10px',
    },
    titulo: {
        fontSize: '20px',
        fontWeight: 'bold',
        margin: '0 0 5px 0',
    },
    subtitulo: {
        color: 'gray',
        margin: 0,
    },
    input: {
        border: '1px solid #ccc',
        padding: '10px',
        borderRadius: '10px',
        margin: '10px 0',
        fontSize: '16px',
    },
    tituloLista: {
        fontSize: '16px',
        marginBottom: '5px',
    },
    lista: {
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
    },
    card: {
        border: '1px solid #ccc',
        padding: '10px',
        borderRadius: '10px',
    },
    caixaImagem: {
        height: '80px',
        backgroundColor: '#ccc',
        marginBottom: '5px',
        borderRadius: '5px',
    },
    blocoFinal: {
        backgroundColor: 'blue',
        padding: '15px',
        textAlign: 'center',
        marginTop: '10px',
        borderRadius: '10px',
    },
};
