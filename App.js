import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import CharacterScreen from './src/screens/CharacterScreen';
import InventoryScreen from './src/screens/InventoryScreen'; // <--- Importamos la nueva pantalla

const Stack = createNativeStackNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<StatusBar style="light" />
			<Stack.Navigator screenOptions={{ headerShown: false }}>
				{/* Pantalla 1: El Personaje */}
				<Stack.Screen
					name="Character"
					component={CharacterScreen}
				/>

				{/* Pantalla 2: El Inventario */}
				<Stack.Screen
					name="Inventory"
					component={InventoryScreen}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}
