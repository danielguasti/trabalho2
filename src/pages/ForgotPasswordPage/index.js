import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import styles from "./styles";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Link } from "@react-navigation/native";

export default function ForgotPasswordPage() {

    const [text, onChangeText] = React.useState('');


    return(
        <LinearGradient colors={['#C1CFE6','#567EBA']} locations={[0.4]} style={styles.container}>

            <Image style={styles.Logo} source="" />
            
            <TextInput style={styles.barra} onChangeText={onChangeText} value={text} placeholder="Email" />


            <TouchableOpacity style={styles.botao}>
                <Text style={styles.TextoBotao}>Recuperar</Text>
            </TouchableOpacity>

            


        </LinearGradient>
    )
}