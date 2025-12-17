export const itemsDb = [
	// --- HELMETS (10 items) ---
	{
		id: 'helmet_001',
		name: 'Leather Helmet',
		slot: 'helmet',
		stats: { defense: 5 },
		image: {
			uri: 'https://img.icons8.com/ios-filled/100/ffffff/medieval-helmet.png',
		},
		isSilhouette: true,
	},
	{
		id: 'helmet_002',
		name: 'Knight Helmet',
		slot: 'helmet',
		stats: { defense: 12 },
		image: {
			uri: 'https://img.icons8.com/ios-filled/100/ffffff/head-profile.png',
		},
		isSilhouette: true,
	},
	{
		id: 'helmet_003',
		name: 'Novice Hood',
		slot: 'helmet',
		stats: { defense: 2, magic: 1 },
		image: { uri: 'https://img.icons8.com/ios-filled/100/ffffff/hood.png' },
	},
	{
		id: 'helmet_004',
		name: 'Heavy Helm',
		slot: 'helmet',
		stats: { defense: 20, speed: -2 },
		image: { uri: 'https://img.icons8.com/ios-filled/100/ffffff/helmet.png' },
	},
	{
		id: 'helmet_005',
		name: 'Elven Diadem',
		slot: 'helmet',
		stats: { defense: 4, wisdom: 5 },
		image: { uri: 'https://img.icons8.com/ios-filled/100/ffffff/crown.png' },
	},
	{
		id: 'helmet_006',
		name: 'Iron Mask',
		slot: 'helmet',
		stats: { defense: 18, fear: 1 },
		image: { uri: 'https://img.icons8.com/ios-filled/100/ffffff/mask.png' },
	},
	{
		id: 'helmet_007',
		name: 'Feather Headdress',
		slot: 'helmet',
		stats: { defense: 1, luck: 3 },
		image: { uri: 'https://img.icons8.com/ios-filled/100/ffffff/feathers.png' },
	},
	{
		id: 'helmet_008',
		name: 'Dragon Helmet',
		slot: 'helmet',
		stats: { defense: 35, fire_res: 10 },
		image: { uri: 'https://img.icons8.com/ios-filled/100/ffffff/dragon.png' },
	},
	{
		id: 'helmet_009',
		name: 'Wool Hat',
		slot: 'helmet',
		stats: { defense: 1, cold_res: 5 },
		image: { uri: 'https://img.icons8.com/ios-filled/100/ffffff/wool-cap.png' },
	},
	{
		id: 'helmet_010',
		name: 'Gold Helmet',
		slot: 'helmet',
		stats: { defense: 25, charisma: 5 },
		image: { uri: 'https://img.icons8.com/ios-filled/100/ffffff/gold-bar.png' },
	},

	// --- WEAPONS (10 items) ---
	{
		id: 'weapon_001',
		name: 'Rusty Sword',
		slot: 'weapon',
		stats: { attack: 8 },
		image: { uri: 'https://img.icons8.com/ios-filled/100/ffffff/sword.png' },
		isSilhouette: true,
	},
	{
		id: 'weapon_002',
		name: 'War Axe',
		slot: 'weapon',
		stats: { attack: 15 },
		image: { uri: 'https://img.icons8.com/ios-filled/100/ffffff/hatchet.png' },
		isSilhouette: true,
	},
	{
		id: 'weapon_003',
		name: 'Thief Dagger',
		slot: 'weapon',
		stats: { attack: 5, agility: 3 },
		image: { uri: 'https://img.icons8.com/ios-filled/100/ffffff/dagger.png' },
	},
	{
		id: 'weapon_004',
		name: 'Elven Longbow',
		slot: 'weapon',
		stats: { attack: 10, range: 1 },
		image: {
			uri: 'https://img.icons8.com/ios-filled/100/ffffff/archers-bow.png',
		},
	},
	{
		id: 'weapon_005',
		name: 'Mage Wand',
		slot: 'weapon',
		stats: { attack: 3, magic: 15 },
		image: {
			uri: 'https://img.icons8.com/ios-filled/100/ffffff/magic-wand.png',
		},
	},
	{
		id: 'weapon_006',
		name: 'War Hammer',
		slot: 'weapon',
		stats: { attack: 22, crush: 1 },
		image: { uri: 'https://img.icons8.com/ios-filled/100/ffffff/hammer.png' },
	},
	{
		id: 'weapon_007',
		name: 'Hunting Spear',
		slot: 'weapon',
		stats: { attack: 12, piercing: 1 },
		image: { uri: 'https://img.icons8.com/ios-filled/100/ffffff/spear.png' },
	},
	{
		id: 'weapon_008',
		name: 'Fire Scepter',
		slot: 'weapon',
		stats: { attack: 7, fire: 5 },
		image: {
			uri: 'https://img.icons8.com/ios-filled/100/ffffff/fire-element.png',
		},
	},
	{
		id: 'weapon_009',
		name: 'Cleric Mace',
		slot: 'weapon',
		stats: { attack: 14, faith: 4 },
		image: { uri: 'https://img.icons8.com/ios-filled/100/ffffff/mace.png' },
	},
	{
		id: 'weapon_010',
		name: 'Ancient Katana',
		slot: 'weapon',
		stats: { attack: 30, critical: 5 },
		image: { uri: 'https://img.icons8.com/ios-filled/100/ffffff/katana.png' },
	},

	// --- CHEST ARMOR (10 items) ---
	{
		id: 'chest_001',
		name: 'Cloth Tunic',
		slot: 'chest',
		stats: { defense: 2 },
		image: { uri: 'https://img.icons8.com/color/96/vest.png' },
	},
	{
		id: 'chest_002',
		name: 'Leather Armor',
		slot: 'chest',
		stats: { defense: 8 },
		image: { uri: 'https://img.icons8.com/ios-filled/100/ffffff/vest.png' },
	},
	{
		id: 'chest_003',
		name: 'Iron Breastplate',
		slot: 'chest',
		stats: { defense: 15, speed: -1 },
		image: {
			uri: 'https://img.icons8.com/ios-filled/100/ffffff/body-armor.png',
		},
	},
	{
		id: 'chest_004',
		name: 'Chainmail',
		slot: 'chest',
		stats: { defense: 10, agility: -1 },
		image: {
			uri: 'https://img.icons8.com/ios-filled/100/ffffff/chainmail.png',
		},
	},
	{
		id: 'chest_005',
		name: 'Traveler Clothes',
		slot: 'chest',
		stats: { defense: 1, stamina: 5 },
		image: { uri: 'https://img.icons8.com/ios-filled/100/ffffff/coat.png' },
	},
	{
		id: 'chest_006',
		name: 'Arcane Robe',
		slot: 'chest',
		stats: { defense: 3, magic: 10 },
		image: { uri: 'https://img.icons8.com/ios-filled/100/ffffff/robe.png' },
	},
	{
		id: 'chest_007',
		name: 'Plate Armor',
		slot: 'chest',
		stats: { defense: 25, strength: 5 },
		image: {
			uri: 'https://img.icons8.com/ios-filled/100/ffffff/breastplate.png',
		},
	},
	{
		id: 'chest_008',
		name: 'Bandit Vest',
		slot: 'chest',
		stats: { defense: 6, stealth: 5 },
		image: { uri: 'https://img.icons8.com/ios-filled/100/ffffff/jacket.png' },
	},
	{
		id: 'chest_009',
		name: 'Bear Skin',
		slot: 'chest',
		stats: { defense: 18, cold_res: 8 },
		image: {
			uri: 'https://img.icons8.com/ios-filled/100/ffffff/bear-skin.png',
		},
	},
	{
		id: 'chest_010',
		name: 'Divine Armor',
		slot: 'chest',
		stats: { defense: 40, all_res: 5 },
		image: { uri: 'https://img.icons8.com/ios-filled/100/ffffff/cross.png' },
	},

	// --- GLOVES (10 items) ---
	{
		id: 'gloves_001',
		name: 'Work Gloves',
		slot: 'gloves',
		stats: { defense: 1 },
		image: { uri: 'https://img.icons8.com/color/96/gauntlet.png' },
	},
	{
		id: 'gloves_002',
		name: 'Steel Gauntlets',
		slot: 'gloves',
		stats: { defense: 5, attack: 2 },
		image: { uri: 'https://img.icons8.com/ios-filled/100/ffffff/gauntlet.png' },
	},
	{
		id: 'gloves_003',
		name: 'Boxing Wraps',
		slot: 'gloves',
		stats: { attack: 4, speed: 1 },
		image: {
			uri: 'https://img.icons8.com/ios-filled/100/ffffff/boxing-glove.png',
		},
	},
	{
		id: 'gloves_004',
		name: 'Leather Mittens',
		slot: 'gloves',
		stats: { defense: 3 },
		image: { uri: 'https://img.icons8.com/ios-filled/100/ffffff/mittens.png' },
	},
	{
		id: 'gloves_005',
		name: 'Archer Gloves',
		slot: 'gloves',
		stats: { accuracy: 5 },
		image: { uri: 'https://img.icons8.com/ios-filled/100/ffffff/glove.png' },
	},
	{
		id: 'gloves_006',
		name: 'Silk Gloves',
		slot: 'gloves',
		stats: { magic: 3, luck: 1 },
		image: {
			uri: 'https://img.icons8.com/ios-filled/100/ffffff/silk-glove.png',
		},
	},
	{
		id: 'gloves_007',
		name: 'Beast Claws',
		slot: 'gloves',
		stats: { attack: 8, lifesteal: 1 },
		image: { uri: 'https://img.icons8.com/ios-filled/100/ffffff/claws.png' },
	},
	{
		id: 'gloves_008',
		name: 'Kitchen Gloves',
		slot: 'gloves',
		stats: { defense: 1, cooking: 10 },
		image: {
			uri: 'https://img.icons8.com/ios-filled/100/ffffff/kitchen-glove.png',
		},
	},
	{
		id: 'gloves_009',
		name: 'Dragon Bracers',
		slot: 'gloves',
		stats: { defense: 10, fire_res: 5 },
		image: {
			uri: 'https://img.icons8.com/ios-filled/100/ffffff/armor-gauntlet.png',
		},
	},
	{
		id: 'gloves_010',
		name: 'Master Gloves',
		slot: 'gloves',
		stats: { defense: 6, all_stats: 2 },
		image: {
			uri: 'https://img.icons8.com/ios-filled/100/ffffff/master-glove.png',
		},
	},

	// --- BOOTS (10 items) ---
	{
		id: 'boots_001',
		name: 'Old Boots',
		slot: 'boots',
		stats: { speed: 2 },
		image: { uri: 'https://img.icons8.com/color/96/boots.png' },
	},
	{
		id: 'boots_002',
		name: 'Traveler Boots',
		slot: 'boots',
		stats: { speed: 5 },
		image: { uri: 'https://img.icons8.com/ios-filled/100/ffffff/boots.png' },
	},
	{
		id: 'boots_003',
		name: 'Cloth Shoes',
		slot: 'boots',
		stats: { speed: 1, stealth: 5 },
		image: { uri: 'https://img.icons8.com/ios-filled/100/ffffff/sneakers.png' },
	},
	{
		id: 'boots_004',
		name: 'Iron Greaves',
		slot: 'boots',
		stats: { defense: 10, speed: -2 },
		image: {
			uri: 'https://img.icons8.com/ios-filled/100/ffffff/armored-shin-guard.png',
		},
	},
	{
		id: 'boots_005',
		name: 'Winged Boots',
		slot: 'boots',
		stats: { speed: 15 },
		image: {
			uri: 'https://img.icons8.com/ios-filled/100/ffffff/winged-foot.png',
		},
	},
	{
		id: 'boots_006',
		name: 'Hiking Boots',
		slot: 'boots',
		stats: { speed: 4, stamina: 3 },
		image: {
			uri: 'https://img.icons8.com/ios-filled/100/ffffff/hiking-boot.png',
		},
	},
	{
		id: 'boots_007',
		name: 'Rain Boots',
		slot: 'boots',
		stats: { water_res: 10 },
		image: { uri: 'https://img.icons8.com/ios-filled/100/ffffff/boot.png' },
	},
	{
		id: 'boots_008',
		name: 'Heavy Boots',
		slot: 'boots',
		stats: { defense: 15, strength: 3 },
		image: {
			uri: 'https://img.icons8.com/ios-filled/100/ffffff/heavy-boot.png',
		},
	},
	{
		id: 'boots_009',
		name: 'Elven Shoes',
		slot: 'boots',
		stats: { speed: 8, agility: 5 },
		image: { uri: 'https://img.icons8.com/ios-filled/100/ffffff/elf-shoe.png' },
	},
	{
		id: 'boots_010',
		name: 'Legendary Boots',
		slot: 'boots',
		stats: { defense: 5, speed: 10, luck: 5 },
		image: {
			uri: 'https://img.icons8.com/ios-filled/100/ffffff/legendary-boots.png',
		},
	},
];
