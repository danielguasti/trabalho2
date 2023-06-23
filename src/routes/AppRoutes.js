import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MoviesPage from '../pages/MoviesPage';
import MovieDetailsPage from '../pages/MovieDetailsPage';

const Stack = createNativeStackNavigator();

export default function AppRoutes() {

    return(
        <Stack.Navigator>

            <Stack.Screen name="MoviesPage" component={MoviesPage} />

            <Stack.Screen name="DetailsPage" component={MovieDetailsPage} />

        </Stack.Navigator>
    )
}