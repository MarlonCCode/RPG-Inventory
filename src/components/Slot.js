import React, { useState, useEffect } from 'react';
import { TouchableOpacity, Image, View, Text, StyleSheet } from 'react-native';

const Slot = ({ item, placeholder, onPress, onLongPress, label }) => {
	const [imageError, setImageError] = useState(false);

	// Check if we should show the item image
	const shouldShowItemImage =
		item && !imageError && item.image && (item.image.uri || item.image);
	const isSilhouette = !!item?.isSilhouette;

	useEffect(() => {
		setImageError(false);
	}, [item?.image?.uri]);

	return (
		<TouchableOpacity
			style={styles.container}
			onPress={onPress}
			onLongPress={onLongPress}
			activeOpacity={0.7}>
			<View style={styles.slotContent}>
				{/* 🆕 NEW: Item Name Above */}
				{item ? (
					<Text
						style={styles.itemNameTop}
						numberOfLines={1}>
						{item.name}
					</Text>
				) : (
					// If it's empty, insert a spacer to keep the layout
					<View style={{ height: 14 }} />
				)}

				{/* Central Image */}
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

				{/* Slot label (HELMET, WEAPON...) always below */}
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
		height: 110, // <--- Increased height a bit to fit the text
		margin: 5,
		backgroundColor: '#2b2b2b',
		borderWidth: 2,
		borderColor: '#888',
		borderRadius: 8,
		justifyContent: 'center',
		alignItems: 'center',
		elevation: 5,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.5,
	},
	// Style for the top name
	itemNameTop: {
		color: '#f1c40f', // RPG gold
		fontSize: 10,
		fontWeight: 'bold',
		marginBottom: 2,
		textAlign: 'center',
		width: '90%',
	},
	image: { width: '65%', height: '65%' }, // Slightly reduced image size
	placeholderImage: {
		width: '60%',
		height: '60%',
		opacity: 0.5,
		tintColor: '#ffffff',
		marginBottom: 4,
	},
	slotContent: {
		width: '100%',
		height: '100%',
		justifyContent: 'space-between', // Distribute space (Name above, Label below)
		alignItems: 'center',
		paddingVertical: 5,
	},
	labelBelow: {
		backgroundColor: 'rgba(0,0,0,0.5)', // Semi-transparent background
		borderRadius: 4,
		paddingHorizontal: 4,
	},
	label: {
		color: '#aaa',
		fontSize: 10,
		fontWeight: 'bold',
		textTransform: 'uppercase',
	},
});

export default Slot;
