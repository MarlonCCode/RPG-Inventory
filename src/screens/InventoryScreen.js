import React from 'react';
import {
	View,
	Text,
	FlatList,
	TouchableOpacity,
	Image,
	StyleSheet,
} from 'react-native';
import { itemsDb } from '../data/itemsDb'; // Importamos tu base de datos

export default function InventoryScreen({ route, navigation }) {
	// Recibimos qué slot estamos editando (ej. 'helmet', 'weapon')
	const { slotName, currentEquippedId } = route.params;

	// 1. FILTRAR: Solo mostramos items que correspondan a este slot
	// (Si es 'glovesL' o 'glovesR', buscamos items tipo 'gloves')
	const filterSlot = slotName.includes('gloves') ? 'gloves' : slotName;

	const availableItems = itemsDb.filter((item) => item.slot === filterSlot);

	// Función para renderizar cada item de la lista
	const renderItem = ({ item }) => {
		const isEquipped = item.id === currentEquippedId;

		return (
			<TouchableOpacity
				style={[styles.itemCard, isEquipped && styles.equippedCard]}
				onPress={() => {
					// AQUI VA LA MAGIA: Regresamos a la pantalla anterior con el item elegido
					navigation.navigate('Character', {
						itemToEquip: item,
						slotName: slotName,
					});
				}}>
				<Image
					source={item.image}
					style={styles.itemImage}
					resizeMode="contain"
				/>
				<View style={styles.textContainer}>
					<Text style={styles.itemName}>{item.name}</Text>
					{/* Mostramos el primer stat que encontremos */}
					<Text style={styles.itemStats}>
						{Object.keys(item.stats)[0]}: {Object.values(item.stats)[0]}
					</Text>
				</View>
				{isEquipped && <Text style={styles.equippedBadge}>E</Text>}
			</TouchableOpacity>
		);
	};

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Inventario: {slotName.toUpperCase()}</Text>
			<FlatList
				data={availableItems}
				renderItem={renderItem}
				keyExtractor={(item) => item.id}
				contentContainerStyle={styles.listContent}
			/>
			<TouchableOpacity
				style={styles.backButton}
				onPress={() => navigation.goBack()}>
				<Text style={styles.backButtonText}>Cancelar</Text>
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	container: { flex: 1, backgroundColor: '#121212', padding: 20 },
	title: {
		color: '#f1c40f',
		fontSize: 20,
		fontWeight: 'bold',
		marginBottom: 20,
		textAlign: 'center',
	},
	listContent: { gap: 10 },
	itemCard: {
		flexDirection: 'row',
		backgroundColor: '#2b2b2b',
		padding: 10,
		borderRadius: 8,
		alignItems: 'center',
		borderWidth: 1,
		borderColor: '#444',
	},
	equippedCard: { borderColor: '#f1c40f', backgroundColor: '#3a3a2e' },
	itemImage: { width: 50, height: 50, marginRight: 15 },
	textContainer: { flex: 1 },
	itemName: { color: 'white', fontWeight: 'bold', fontSize: 16 },
	itemStats: { color: '#aaa', fontSize: 14 },
	equippedBadge: {
		color: '#f1c40f',
		fontWeight: 'bold',
		fontSize: 18,
		paddingHorizontal: 10,
	},
	backButton: {
		marginTop: 20,
		padding: 15,
		backgroundColor: '#333',
		borderRadius: 8,
		alignItems: 'center',
	},
	backButtonText: { color: 'white' },
});
