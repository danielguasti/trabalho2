import { useContext } from "react";
import AuthContext, { useAuth } from "../contexts/AuthContext";
import AppRoutes from "./AppRoutes";
import AuthRoutes from "./AuthRoutes";
import { View } from "react-native-web";
import { ActivityIndicator } from "react-native";

export default function Routes() {

    const { logado, loading } = useAuth();

    if(loading){
        return(
            <View style={{flex:1, alignItems: 'center',
            justifyContent: 'center'}}>
                <ActivityIndicator size={'large'}></ActivityIndicator>
            </View>
        )
    }

    return(
        logado == true ? <AppRoutes /> : <AuthRoutes />
    )   
}