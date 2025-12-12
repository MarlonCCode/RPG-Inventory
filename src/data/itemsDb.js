// src/data/itemsDb.js

export const itemsDb = [
	// --- CASCOS ---
	{
		id: 'helmet_001',
		name: 'Casco de Cuero',
		slot: 'helmet',
		stats: { defense: 5 },
		image: {
			uri: 'https://img.icons8.com/ios-filled/100/ffffff/medieval-helmet.png',
		},
		isSilhouette: true,
	},
	{
		id: 'helmet_002',
		name: 'Casco de Caballero',
		slot: 'helmet',
		stats: { defense: 12 },
		image: {
			uri: 'https://img.icons8.com/ios-filled/100/ffffff/head-profile.png',
		},
		isSilhouette: true,
	},

	// --- ARMAS ---
	{
		id: 'weapon_001',
		name: 'Espada Oxidada',
		slot: 'weapon',
		stats: { attack: 8 },
		image: { uri: 'https://img.icons8.com/ios-filled/100/ffffff/sword.png' },
		isSilhouette: true,
	},
	{
		id: 'weapon_002',
		name: 'Hacha de Guerra',
		slot: 'weapon',
		stats: { attack: 15 },
		image: { uri: 'https://img.icons8.com/ios-filled/100/ffffff/hatchet.png' },
		isSilhouette: true,
	},

	// --- PECHERAS ---
	{
		id: 'chest_001',
		name: 'Túnica de Tela',
		slot: 'chest',
		stats: { defense: 2 },
		image: { uri: 'https://img.icons8.com/color/96/vest.png' },
	},

	// --- GUANTES ---
	{
		id: 'gloves_001',
		name: 'Guantes de Trabajo',
		slot: 'gloves',
		stats: { defense: 1 },
		image: { uri: 'https://img.icons8.com/color/96/gauntlet.png' },
	},

	// --- BOTAS ---
	{
		id: 'boots_001',
		name: 'Botas Viejas',
		slot: 'boots',
		stats: { speed: 2 },
		image: { uri: 'https://img.icons8.com/color/96/boots.png' },
	},
];
