import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import styles from "./styles";
import { LinearGradient } from "expo-linear-gradient";
import React, { useContext } from "react";
import { Link } from "@react-navigation/native";
import AuthContext from "../../contexts/AuthContext";

export default function LoginPage() {

    const [text, onChangeText] = React.useState('');

    const [text2, onChangeText2] = React.useState('');

    const { signIn } = useContext(AuthContext);


    return(
        <LinearGradient colors={['#C1CFE6','#567EBA']} locations={[0.4]} style={styles.container}>

            <Image style={styles.Logo} source="" />
            
            <TextInput style={styles.barra} onChangeText={onChangeText} value={text} placeholder="Login" />

            <TextInput style={styles.barra} onChangeText={onChangeText2} value={text2} placeholder="Senha" secureTextEntry={true} />

            <TouchableOpacity style={styles.botao} onPress={() => signIn()}>
                <Text style={styles.TextoBotao}>Login</Text>
            </TouchableOpacity>

            <Link style={styles.Texts} to={{screen: "RegisterPage"}}>Registrar-se</Link>

            <Link to={{screen: "ForgotPasswordPage"}} style={styles.Texts}>Esqueceu a Senha?</Link>

        </LinearGradient>
    )
}