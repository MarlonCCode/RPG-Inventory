import React, { useState, useEffect } from 'react';
import { TouchableOpacity, Image, View, Text, StyleSheet } from 'react-native';

// Este componente recibe:
// - item: El objeto del item (si hay uno equipado)
// - placeholder: La imagen de fondo si está vacío (silueta)
// - onPress: Función al tocar
// - onLongPress: Función al mantener presionado
const Slot = ({ item, placeholder, onPress, onLongPress, label }) => {
	const [imageError, setImageError] = useState(false);
	const shouldShowItemImage =
		item && !imageError && item.image && (item.image.uri || item.image);
	const isSilhouette = !!item?.isSilhouette;
	useEffect(() => {
		// Reset image error state when the item or its image URI changes
		setImageError(false);
	}, [item?.image?.uri]);
	return (
		<TouchableOpacity
			style={styles.container}
			onPress={onPress}
			onLongPress={onLongPress}
			activeOpacity={0.7}>
			<View style={styles.slotContent}>
				{shouldShowItemImage ? (
					isSilhouette ? (
						<Image
							source={item.image}
							onError={() => setImageError(true)}
							style={styles.placeholderImage}
							resizeMode="contain"
						/>
					) : (
						<Image
							source={item.image}
							onError={() => setImageError(true)}
							style={styles.image}
							resizeMode="contain"
						/>
					)
				) : (
					placeholder && (
						<Image
							source={placeholder}
							style={styles.placeholderImage}
							resizeMode="contain"
						/>
					)
				)}

				{/* Label siempre visible debajo de la imagen */}
				<View
					style={styles.labelBelow}
					pointerEvents="none">
					<Text style={styles.label}>{label}</Text>
				</View>
			</View>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	container: {
		width: 100,
		height: 100,
		margin: 5,
		backgroundColor: '#2b2b2b', // Fondo oscuro tipo RPG
		borderWidth: 2,
		borderColor: '#888',
		borderRadius: 8,
		justifyContent: 'center',
		alignItems: 'center',
		elevation: 5, // Sombra en Android
		shadowColor: '#000', // Sombra en iOS
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.5,
	},
	image: { width: '75%', height: '75%' },
	// --- ESTILOS NUEVOS PARA EL PLACEHOLDER ---
	emptyContainer: {
		width: '100%',
		height: '100%',
		justifyContent: 'center',
		alignItems: 'center',
	},
	slotContent: {
		width: '100%',
		height: '100%',
		justifyContent: 'flex-start',
		alignItems: 'center',
		position: 'relative',
		paddingTop: 6,
	},
	labelBelow: {
		marginTop: 6,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: 'transparent',
		paddingHorizontal: 4,
		paddingVertical: 0,
	},
	placeholderImage: {
		width: '70%',
		height: '70%',
		opacity: 1, // Sube un poco la opacidad (de 0.3 a 0.4 o 0.5)
		tintColor: '#ffffff',
		marginBottom: 4,
	},
	label: {
		color: '#aaa',
		fontSize: 12,
		fontWeight: 'bold',
		textTransform: 'uppercase',
	},
});

export default Slot;
