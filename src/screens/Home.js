import { View, Text, StyleSheet, TextInput, FlatList } from 'react-native';

export default function Home() {
    const livros = [
        { id: '1', nome: 'A Moreninha', autor: 'Joaquim Manuel' },
        { id: '2', nome: 'Caminho das Pedras', autor: 'Rachel' },
        { id: '3', nome: 'Livro 3', autor: 'Autor' },
        { id: '4', nome: 'Livro 4', autor: 'Autor' },
    ];

    return (
        <View style={styles.container}>
            <View style={styles.topo}>
                <Text style={styles.logo}>Bookly</Text>
            </View>


            <View style={styles.texto}>
                <Text style={styles.titulo}>Estude livros de forma inteligente</Text>

                <Text style={styles.subtitulo}>Resumos e atividades para você estudar melhor</Text>
            </View>


            <TextInput placeholder="Pesquisar livros..." style={styles.input} />


            <Text style={styles.tituloLista}>Livros disponíveis:</Text>

            <FlatList
                data={livros}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.card}>
                        <View style={styles.caixaImagem} />

                        <Text>{item.nome}</Text>
                        <Text style={{ fontSize: 12 }}>{item.autor}</Text>
                    </View>
                )}
            />

    
            <View style={styles.blocoFinal}>
                <Text style={{ color: '#fff' }}>Comece a estudar agora!</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },

    topo: {
        marginBottom: 10,
    },

    logo: {
        color: 'orange',
        fontSize: 18,
        fontWeight: 'bold',
    },

    texto: {
        marginBottom: 10,
    },

    titulo: {
        fontSize: 20,
        fontWeight: 'bold',
    },

    subtitulo: {
        color: 'gray',
    },

    input: {
        borderWidth: 1,
        padding: 10,
        borderRadius: 10,
        marginVertical: 10,
    },

    tituloLista: {
        fontSize: 16,
        marginBottom: 5,
    },

    card: {
        borderWidth: 1,
        padding: 10,
        marginBottom: 10,
        borderRadius: 10,
    },

    caixaImagem: {
        height: 80,
        backgroundColor: '#ccc',
        marginBottom: 5,
    },

    blocoFinal: {
        backgroundColor: 'blue',
        padding: 15,
        alignItems: 'center',
        marginTop: 10,
        borderRadius: 10,
    },
});
