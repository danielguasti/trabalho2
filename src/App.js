
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './routes';
import { AuthProvider } from './contexts/AuthContext';

const Stack = createNativeStackNavigator();

export default function App() {
  
  return (
    <NavigationContainer>

      <AuthProvider>
        <Routes />
      </AuthProvider>

    </NavigationContainer>
  );
}

