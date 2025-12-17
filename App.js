import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import CharacterScreen from './src/screens/CharacterScreen';
import InventoryScreen from './src/screens/InventoryScreen'; // <--- Import the new screen

const Stack = createNativeStackNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<StatusBar style="light" />
			<Stack.Navigator screenOptions={{ headerShown: false }}>
				{/* Screen 1: Character */}
				<Stack.Screen
					name="Character"
					component={CharacterScreen}
				/>

				{/* Screen 2: Inventory */}
				<Stack.Screen
					name="Inventory"
					component={InventoryScreen}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}
