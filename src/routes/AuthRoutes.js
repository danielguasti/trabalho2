import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import ForgotPasswordPage from '../pages/ForgotPasswordPage';

const Stack = createNativeStackNavigator();

export default function AuthRoutes() {

    return(
        <Stack.Navigator>

            <Stack.Screen name="LoginPage" component={LoginPage} options={{headerShown: false}}/>

            <Stack.Screen name="RegisterPage" component={RegisterPage} />

            <Stack.Screen name="ForgotPasswordPage" component={ForgotPasswordPage} />

        </Stack.Navigator>
    )
}