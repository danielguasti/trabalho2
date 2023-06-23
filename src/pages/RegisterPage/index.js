import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import styles from "./styles";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Link } from "@react-navigation/native";

export default function RegisterPage() {

    const [text, onChangeText] = React.useState('');

    const [text2, onChangeText2] = React.useState('');

    const [text3, onChangeText3] = React.useState('');


    return(
        <LinearGradient colors={['#C1CFE6','#567EBA']} locations={[0.4]} style={styles.container}>

            <Image style={styles.Logo} source="" />
            
            <TextInput style={styles.barra} onChangeText={onChangeText} value={text} placeholder="Username" />

            <TextInput style={styles.barra} onChangeText={onChangeText2} value={text2} placeholder="Email" />

            <TextInput style={styles.barra} onChangeText={onChangeText3} value={text3} placeholder="Senha" secureTextEntry={true} />

            <TouchableOpacity style={styles.botao}>
                <Text style={styles.TextoBotao}>Registrar</Text>
            </TouchableOpacity>


            

        </LinearGradient>
    )
}