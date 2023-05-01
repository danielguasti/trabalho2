import { Image, StyleSheet, Text, TouchableOpacity } from "react-native";

const baseURL = 'https://api.otaviolube.com/api/filmes?populate=*'



export default function CardFilme(props){

    return (
        <View style={styles.container}>

        <Image style={styles.imagem} source={{uri: baseURL + filme.poster.data.attributes.url}} />
        <Text style={styles.titulo}>{filme.titulo}</Text>
        <Text style={styles.sinopes}>{filme.sinopse}</Text>
        <TouchableOpacity>
            <Text>Comprar</Text>
        </TouchableOpacity>

        </View>
    );
}


const styles = StyleSheet.create({
   container: {
        backgroundColor: 'yellow',
        margin: 15,
        alignItems: 'center',
        justifyContent: 'center'

   },
   imagem: {
    height: '200px',
    width: '150px',
    resizeMode: cover,
    marginbottom: 10

   },
   titulo: {
    fontSize: 24,
    fontStyle: 'bold'

   },
   sinopes: {
    fontSize: 14,

   }


})