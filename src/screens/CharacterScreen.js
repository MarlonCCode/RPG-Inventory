import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Slot from '../components/Slot';
import { itemsDb } from '../data/itemsDb';

// URLs de iconos planos para usar de siluetas (Placeholders)
const PLACEHOLDERS = {
	helmet: {
		uri: 'https://img.icons8.com/ios-filled/100/ffffff/head-profile.png',
	},
	chest: { uri: 'https://img.icons8.com/ios-filled/100/ffffff/vest.png' },
	gloves: { uri: 'https://img.icons8.com/ios-filled/100/ffffff/hand.png' },
	boots: { uri: 'https://img.icons8.com/ios-filled/100/ffffff/boots.png' },
	weapon: { uri: 'https://img.icons8.com/ios-filled/100/ffffff/sword.png' },
};

// Items de prueba (Simulación de datos guardados)
const testHelmet = itemsDb.find((i) => i.id === 'helmet_002');
const testWeapon = itemsDb.find((i) => i.id === 'weapon_001');

const INITIAL_EQUIPMENT = {
	helmet: testHelmet,
	chest: null,
	glovesL: null,
	glovesR: null,
	boots: null,
	weapon: testWeapon,
};

// 1. Recibimos navigation y route
export default function CharacterScreen({ navigation, route }) {
	const [equipped, setEquipped] = useState(INITIAL_EQUIPMENT);

	// 2. EFECTO MAGICO: Escucha si regresamos del inventario con algo nuevo
	useEffect(() => {
		if (route.params?.itemToEquip) {
			const { itemToEquip, slotName } = route.params;
			setEquipped((prev) => ({ ...prev, [slotName]: itemToEquip }));
		}
	}, [route.params?.itemToEquip]);

	// 3. NAVEGACION: Vamos a la pantalla de selección
	const handlePress = (slotName) => {
		const currentItem = equipped[slotName];
		navigation.navigate('Inventory', {
			slotName: slotName,
			currentEquippedId: currentItem ? currentItem.id : null,
		});
	};

	const handleLongPress = (slotName) => {
		console.log(`Mantuviste presionado: ${slotName}`);
		// Aquí podrías mostrar un modal con detalles del ítem más adelante
	};

	return (
		<SafeAreaView style={styles.container}>
			<Text style={styles.title}>Caballero React</Text>

			<View style={styles.characterContainer}>
				{/* Fila 1: Casco */}
				<View style={styles.row}>
					<Slot
						label="CASCO"
						item={equipped.helmet}
						placeholder={PLACEHOLDERS.helmet}
						onPress={() => handlePress('helmet')}
						onLongPress={() => handleLongPress('helmet')}
					/>
				</View>
				<View style={styles.row}>
					<Slot
						label="GUANTE (L)"
						item={equipped.glovesL}
						placeholder={PLACEHOLDERS.gloves}
						onPress={() => handlePress('glovesL')}
					/>
					<Slot
						label="PECHERA"
						item={equipped.chest}
						placeholder={PLACEHOLDERS.chest}
						onPress={() => handlePress('chest')}
					/>
					<Slot
						label="GUANTE (R)"
						item={equipped.glovesR}
						placeholder={PLACEHOLDERS.gloves}
						onPress={() => handlePress('glovesR')}
					/>
				</View>
				<View style={styles.row}>
					<Slot
						label="ARMA"
						item={equipped.weapon}
						placeholder={PLACEHOLDERS.weapon}
						onPress={() => handlePress('weapon')}
					/>
					<Slot
						label="BOTAS"
						item={equipped.boots}
						placeholder={PLACEHOLDERS.boots}
						onPress={() => handlePress('boots')}
					/>
					<View style={{ width: 80, margin: 5 }} />
				</View>
			</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: { flex: 1, backgroundColor: '#121212', alignItems: 'center' },
	title: {
		color: '#f1c40f',
		fontSize: 24,
		fontWeight: 'bold',
		marginVertical: 20,
	},
	characterContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		gap: 10,
	},
	row: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center' },
});
