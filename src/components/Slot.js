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
			{shouldShowItemImage ? (
				// CASO 1: Hay ítem equipado (Imagen Normal a color)
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
				// CASO 2: Slot vacío (Mostramos el Placeholder/Silueta)
				<View style={styles.emptyContainer}>
					{/* Si existe un placeholder, mostramos la imagen fantasma */}
					{placeholder && (
						<Image
							source={placeholder}
							style={styles.placeholderImage}
							resizeMode="contain"
						/>
					)}
					{/* Mantenemos el texto pequeño como guía */}
					<Text style={styles.label}>{label}</Text>
				</View>
			)}
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	container: {
		width: 80,
		height: 80,
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
	image: { width: '90%', height: '90%' },
	// --- ESTILOS NUEVOS PARA EL PLACEHOLDER ---
	emptyContainer: {
		width: '100%',
		height: '100%',
		justifyContent: 'center',
		alignItems: 'center',
	},
	placeholderImage: {
		width: '60%', // Aumenta esto de 50% a 60% o 70%
		height: '60%',
		opacity: 1, // Sube un poco la opacidad (de 0.3 a 0.4 o 0.5)
		tintColor: '#ffffff',
		marginBottom: 4,
	},
	label: {
		color: '#aaa',
		fontSize: 10,
		fontWeight: 'bold',
		textTransform: 'uppercase',
	},
});

export default Slot;
