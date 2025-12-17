import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Alert, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Slot from '../components/Slot';

// --- NETWORK CONFIGURATION ---
const API_URL = 'http://192.168.100.76:3000/inventory';
const USER_ID = 'demo_user_1';

const PLACEHOLDERS = {
	helmet: {
		uri: 'https://img.icons8.com/ios-filled/100/ffffff/head-profile.png',
	},
	chest: { uri: 'https://img.icons8.com/ios-filled/100/ffffff/vest.png' },
	gloves: { uri: 'https://img.icons8.com/ios-filled/100/ffffff/hand.png' },
	boots: { uri: 'https://img.icons8.com/ios-filled/100/ffffff/boots.png' },
	weapon: { uri: 'https://img.icons8.com/ios-filled/100/ffffff/sword.png' },
};

const INITIAL_EQUIPMENT = {
	helmet: null,
	chest: null,
	glovesL: null,
	glovesR: null,
	boots: null,
	weapon: null,
};

export default function CharacterScreen({ navigation, route }) {
	const [equipped, setEquipped] = useState(INITIAL_EQUIPMENT);
	const [stats, setStats] = useState({});
	const [isLoaded, setIsLoaded] = useState(false);

	// 1. INITIAL LOAD
	useEffect(() => {
		const loadInventory = async () => {
			try {
				const response = await fetch(`${API_URL}/${USER_ID}`);
				if (response.ok) {
					const data = await response.json();
					console.log('📥 Data loaded:', data);
					if (data && data.inventory) {
						setEquipped(data.inventory);
						setStats(data.stats);
					}
				}
			} catch (e) {
				console.error('❌ Connection error:', e);
				Alert.alert('Error', 'Could not connect to the server.');
			} finally {
				setIsLoaded(true);
			}
		};
		loadInventory();
	}, []);

	// 2. AUTO-SAVE (Reset logic triggers here as well)
	useEffect(() => {
		if (isLoaded) {
			const saveAndRecalculate = async () => {
				try {
					const response = await fetch(`${API_URL}/${USER_ID}`, {
						method: 'POST',
						headers: { 'Content-Type': 'application/json' },
						body: JSON.stringify(equipped),
					});

					const responseData = await response.json();
					console.log('🔄 Synced. New Stats:', responseData.stats);

					if (responseData.stats) {
						setStats(responseData.stats);
					}
				} catch (e) {
					console.error('❌ Error saving:', e);
				}
			};
			const timeout = setTimeout(saveAndRecalculate, 500);
			return () => clearTimeout(timeout);
		}
	}, [equipped, isLoaded]);

	// 3. EQUIP ITEM
	useEffect(() => {
		if (!isLoaded) return;
		if (route.params?.itemToEquip) {
			const { itemToEquip, slotName } = route.params;
			setEquipped((prev) => ({ ...prev, [slotName]: itemToEquip }));
			navigation.setParams({ itemToEquip: null });
		}
	}, [route.params?.itemToEquip, isLoaded]);

	// --- 🗑️ NEW FEATURE: RESET ---
	const handleReset = () => {
		Alert.alert(
			'Reset Equipment',
			'Are you sure you want to unequip all items?',
			[
				{ text: 'Cancel', style: 'cancel' },
				{
					text: 'Reset',
					style: 'destructive',
					onPress: () => {
						// By setting this to INITIAL (empty), the useEffect #2
						// will trigger automatically and clear the database.
						setEquipped(INITIAL_EQUIPMENT);
						setStats({}); // Clear stats visually immediately
					},
				},
			]
		);
	};

	const handlePress = (slotName) => {
		const currentItem = equipped[slotName];
		navigation.navigate('Inventory', {
			slotName,
			currentEquippedId: currentItem?.id,
		});
	};

	if (!isLoaded)
		return (
			<SafeAreaView style={styles.container}>
				<Text style={styles.loadingText}>Loading...</Text>
			</SafeAreaView>
		);

	return (
		<SafeAreaView style={styles.container}>
			{/* HEADER WITH RESET BUTTON */}
			<View style={styles.header}>
				<Text style={styles.title}>RNNest Knight 🛡️</Text>
				<TouchableOpacity
					onPress={handleReset}
					style={styles.resetButton}>
					<Text style={{ fontSize: 22 }}>🗑️</Text>
				</TouchableOpacity>
			</View>

			{/* STATS PANEL */}
			<View style={styles.statsContainer}>
				<Text style={styles.statsTitle}>TOTAL STATS</Text>
				<View style={styles.statsGrid}>
					{Object.keys(stats).length === 0 ? (
						<Text style={{ color: '#555', fontStyle: 'italic' }}>
							No equipment
						</Text>
					) : (
						Object.entries(stats).map(([key, value]) => (
							<Text
								key={key}
								style={styles.statText}>
								{key.toUpperCase()}:{' '}
								<Text style={styles.statValue}>{value}</Text>
							</Text>
						))
					)}
				</View>
			</View>

			<View style={styles.characterContainer}>
				<View style={styles.row}>
					<Slot
						label="HELMET"
						item={equipped.helmet}
						placeholder={PLACEHOLDERS.helmet}
						onPress={() => handlePress('helmet')}
					/>
				</View>
				<View style={styles.row}>
					<Slot
						label="GLOVES (L)"
						item={equipped.glovesL}
						placeholder={PLACEHOLDERS.gloves}
						onPress={() => handlePress('glovesL')}
					/>
					<Slot
						label="CHEST"
						item={equipped.chest}
						placeholder={PLACEHOLDERS.chest}
						onPress={() => handlePress('chest')}
					/>
					<Slot
						label="GLOVES (R)"
						item={equipped.glovesR}
						placeholder={PLACEHOLDERS.gloves}
						onPress={() => handlePress('glovesR')}
					/>
				</View>
				<View style={styles.row}>
					<Slot
						label="WEAPON"
						item={equipped.weapon}
						placeholder={PLACEHOLDERS.weapon}
						onPress={() => handlePress('weapon')}
					/>
					<Slot
						label="BOOTS"
						item={equipped.boots}
						placeholder={PLACEHOLDERS.boots}
						onPress={() => handlePress('boots')}
					/>
				</View>
			</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: { flex: 1, backgroundColor: '#121212', alignItems: 'center' },

	// New Header
	header: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		width: '100%',
		marginTop: 10,
		position: 'relative',
	},
	title: { color: '#2ecc71', fontSize: 24, fontWeight: 'bold' },
	resetButton: {
		position: 'absolute',
		right: 20, // Icon on the right
		padding: 5,
	},

	loadingText: { color: '#2ecc71', fontSize: 18 },
	characterContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		gap: 10,
		marginBottom: 20,
	},
	row: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center' },

	// Stats
	statsContainer: {
		width: '90%',
		backgroundColor: '#1e1e1e',
		padding: 10,
		borderRadius: 10,
		borderWidth: 1,
		borderColor: '#333',
		marginVertical: 15,
	},
	statsTitle: {
		color: '#666',
		fontSize: 10,
		textAlign: 'center',
		marginBottom: 5,
		letterSpacing: 2,
	},
	statsGrid: {
		flexDirection: 'row',
		flexWrap: 'wrap',
		justifyContent: 'center',
		gap: 15,
	},
	statText: { color: '#ccc', fontSize: 14, fontWeight: '600' },
	statValue: { color: '#f1c40f', fontSize: 15 },
});
