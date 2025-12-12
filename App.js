import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import CharacterScreen from './src/screens/CharacterScreen';

export default function App() {
	return (
		<SafeAreaProvider>
			<StatusBar style="light" />
			<CharacterScreen />
		</SafeAreaProvider>
	);
}
