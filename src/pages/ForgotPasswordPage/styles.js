import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: '100%',
    },
    Logo: {
        height: '280px',
        width: '280px'
    },
    barra: {
        textAlign: 'center',
        fontSize: '15px',
        fontStyle: 'italic',
        borderColor: 'white',
        height: 40,
        width: '70%',
        margin: '10px',
        borderWidth: '1px',
        borderRadius: '10px',
        color: "white",
        shadowOffset: {width: 0.5, height: 0.5},
        shadowColor: '#202121',
        shadowOpacity: 0.8
    },
    links: {
        color: 'white',
        margin: '5px',
        fontSize: '12px',
        fontStyle: 'bold',
        fontWeight: 'bold',

    },
    botao: {
        margin: '5px',
        height: 40,
        width: "70%",
        backgroundColor: "#2A4B7D",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
        shadowOffset: {width: 1, height: 1},
        shadowColor: '#202121',
        shadowOpacity: 0.8

    },
    TextoBotao: {
        color: 'white',
        fontSize: 16,
        fontWeight: "bold"

    }
})

  export default styles;