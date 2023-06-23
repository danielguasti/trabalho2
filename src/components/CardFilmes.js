import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Link } from '@react-navigation/native';

const baseUrl = "https://api.otaviolube.com";

const MAX_WIDTH = Dimensions.get('window').width*0.9;
const MAX_HEIGHT = Dimensions.get('window').height*0.9;

export default function CardFilmes({ filme }){
    return (
        <View style ={styles.container}>
            <Image style ={styles.image} source={{ uri: baseUrl + filme.poster.data.attributes.formats.thumbnail.url}}/>

            <Text style ={styles.title}>{filme.titulo}</Text>

            <Text style ={styles.sinopse}>{filme.sinopse.length > 200 ? filme.sinopse.substring(0,200) + '...' : filme.sinopse}</Text>

            <Link to={{screen: "DetailsPage", params: {filme: filme}}}>Saiba Mais...</Link>

            <TouchableOpacity style ={styles.button}>
                <Text style ={styles.buttonText}>Comprar</Text>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'blue',
        margin: 15,
        padding: 10,
        alignItems :'center',
        justifyContent: 'center',
        height: MAX_HEIGHT,
        width: MAX_WIDTH
    },
    image: {
        height: '200px',
        width: '150px',
        resizeMode: 'cover',
        marginBottom: 10
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10
    },
    sinopse: {
        marginBottom: 10,
        textAlign: 'justify'

    },
    button: {
        height: 40,
        width: 120,
        backgroundColor: 'green',
        alignItems :'center',
        justifyContent: 'center',
        marginTop: 20
    },
    buttonText: {
        fontSize: 20,
        fontWeight: 'bold'
    }
})