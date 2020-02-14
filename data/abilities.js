var abilityList = [
	// AST
	// DoTs
	{
		id: 838,
		name: "Combust",
		job: "AST",
		type: "DoT",
		icon: "/i/013000/013213.png",
		color: "--filter-light-blue",
		order: 0
	},
	{
		id: 843,
		name: "Combust II",
		job: "AST",
		type: "DoT",
		icon: "/i/013000/013214.png",
		color: "--filter-light-blue",
		order: 0
	},
	{
		id: 1881,
		name: "Combust III",
		job: "AST",
		type: "DoT",
		icon: "/i/013000/013248.png",
		color: "--filter-light-blue",
		order: 0
	},
	// Self-Buffs
	{
		id: 1878,
		name: "Divination",
		job: "AST",
		type: "Buff",
		icon: "/i/013000/013245.png",
		color: "--filter-light-gold",
		order: 0
	},
	{
		id: 841,
		name: "Lightspeed",
		job: "AST",
		type: "Buff",
		icon: "/i/013000/013220.png",
		color: "--filter-light-gold",
		order: 1
	},
	// Raid Buffs
	{
		id: 16552,
		name: "Divination",
		job: "AST",
		level: 50,
		type: "RaidBuff",
		icon: "/i/003000/003553.png",
		color: "--filter-light-gold",
		order: 0
	},
	// AST Cards
	{
		id: 17055,
		name: "Play",
		job: "AST",
		level: 30,
		duration: 0,
		cooldown: 0,
		type: "RaidBuff",
		icon: "/i/003000/003102.png",
		color: "--filter-light-gold",
		order: 0
	},
	{
		id: 4401,
		name: "The Balance",
		job: "AST",
		level: 30,
		duration: 15,
		cooldown: 0,
		type: "RaidBuff",
		icon: "/i/003000/003110.png",
		color: "--filter-light-gold",
		order: 0,
		extra: {
			is_card: true
		}
	},
	{
		id: 4402,
		name: "The Arrow",
		job: "AST",
		level: 30,
		duration: 15,
		cooldown: 0,
		type: "RaidBuff",
		icon: "/i/003000/003112.png",
		color: "--filter-light-gold",
		order: 0,
		extra: {
			is_card: true
		}
	},
	{
		id: 4403,
		name: "The Spear",
		job: "AST",
		level: 30,
		duration: 15,
		cooldown: 0,
		type: "RaidBuff",
		icon: "/i/003000/003113.png",
		color: "--filter-light-gold",
		order: 0,
		extra: {
			is_card: true
		}
	},
	{
		id: 4404,
		name: "The Bole",
		job: "AST",
		level: 30,
		duration: 15,
		cooldown: 0,
		type: "RaidBuff",
		icon: "/i/003000/003111.png",
		color: "--filter-light-gold",
		order: 0,
		extra: {
			is_card: true
		}
	},
	{
		id: 4405,
		name: "The Ewer",
		job: "AST",
		level: 30,
		duration: 15,
		cooldown: 0,
		type: "RaidBuff",
		icon: "/i/003000/003114.png",
		color: "--filter-light-gold",
		order: 0,
		extra: {
			is_card: true
		}
	},
	{
		id: 4406,
		name: "The Spire",
		job: "AST",
		level: 30,
		duration: 15,
		cooldown: 0,
		type: "RaidBuff",
		icon: "/i/003000/003115.png",
		color: "--filter-light-gold",
		order: 0,
		extra: {
			is_card: true
		}
	},
	{
		id: 7444,
		name: "Lord of Crowns",
		job: "AST",
		level: 50,
		duration: 15,
		cooldown: 0,
		type: "RaidBuff",
		icon: "/i/003000/003147.png",
		color: "--filter-light-gold",
		order: 0,
		extra: {
			is_card: true
		}
	},
	{
		id: 7445,
		name: "Lady of Crowns",
		job: "AST",
		level: 50,
		duration: 15,
		cooldown: 0,
		type: "RaidBuff",
		icon: "/i/003000/003146.png",
		color: "--filter-light-gold",
		order: 0,
		extra: {
			is_card: true
		}
	},
	// BLM
	// DoTs
	{
		id: 161,
		name: "Thunder",
		job: "BLM",
		type: "DoT",
		icon: "/i/010000/010457.png",
		color: "--filter-light-blue",
		order: 0
	},
	{
		id: 162,
		name: "Thunder II",
		job: "BLM",
		type: "DoT",
		icon: "/i/010000/010458.png",
		color: "--filter-light-blue",
		order: 0
	},
	{
		id: 163,
		name: "Thunder III",
		job: "BLM",
		type: "DoT",
		icon: "/i/010000/010459.png",
		color: "--filter-light-blue",
		order: 0
	},
	{
		id: 1210,
		name: "Thunder IV",
		job: "BLM",
		type: "DoT",
		icon: "/i/012000/012657.png",
		color: "--filter-light-blue",
		order: 0
	},
	// BRD
	// DoTs
	{
		id: 124,
		name: "Venomous Bite",
		job: "BRD",
		type: "DoT",
		icon: "/i/010000/010352.png",
		color: "--filter-light-pink",
		order: 0
	},
	{
		id: 129,
		name: "Windbite",
		job: "BRD",
		type: "DoT",
		icon: "/i/010000/010360.png",
		color: "--filter-baby-blue",
		order: 1
	},
	{
		id: 1201,
		name: "Caustic Bite",
		job: "BRD",
		type: "DoT",
		icon: "/i/012000/012616.png",
		color: "--filter-light-pink",
		order: 0
	},
	{
		id: 1200,
		name: "Stormbite",
		job: "BRD",
		type: "DoT",
		icon: "/i/012000/012617.png",
		color: "--filter-baby-blue",
		order: 1
	},
	// Self-Buffs
	{
		id: 125,
		name: "Raging Strikes",
		job: "BRD",
		type: "Buff",
		icon: "/i/010000/010354.png",
		color: "--filter-dark-red",
		order: 0
	},
	// Raid Buffs
	{
		id: 118,
		name: "Battle Voice",
		job: "BRD",
		level: 50,
		duration: 20,
		cooldown: 180,
		type: "RaidBuff",
		icon: "/i/002000/002601.png",
		color: "--filter-dark-red",
		order: 0
	},
	{
		id: 17055,
		name: "Song",
		job: "BRD",
		level: 30,
		duration: 5,
		cooldown: 0,
		type: "RaidBuff",
		icon: "/i/005000/005315.png",
		color: "--filter-light-gold",
		order: 0
	},
	{
		id: 3559,
		name: "the Wanderer's Minuet",
		job: "BRD",
		level: 52,
		duration: 30,
		cooldown: 0,
		type: "RaidBuff",
		icon: "/i/002000/002607.png",
		color: "--filter-dark-red",
		order: 0,
		extra: {
			is_song: true
		}
	},
	{
		id: 114,
		name: "Mage's Ballad",
		job: "BRD",
		level: 30,
		duration: 30,
		cooldown: 0,
		type: "RaidBuff",
		icon: "/i/002000/002602.png",
		color: "--filter-dark-red",
		order: 0,
		extra: {
			is_song: true
		}
	},
	{
		id: 116,
		name: "Army's Paeon",
		job: "BRD",
		level: 40,
		duration: 30,
		cooldown: 0,
		type: "RaidBuff",
		icon: "/i/002000/002603.png",
		color: "--filter-dark-red",
		order: 0,
		extra: {
			is_song: true
		}
	},
	// DNC
	// Self-Buffs
	{
		id: 1825,
		name: "Devilment",
		job: "DNC",
		type: "Buff",
		icon: "/i/013000/013714.png",
		color: "--filter-dark-green",
		order: 4
	},
	{
		id: 1827,
		name: "Improvisation",
		job: "DNC",
		type: "Buff",
		icon: "/i/013000/013716.png",
		color: "--filter-jungle-green",
		order: 3
	},
	{
		id: 1821,
		name: "Standard Finish",
		job: "DNC",
		type: "Buff",
		icon: "/i/013000/013708.png",
		color: "--filter-green-blue",
		order: 1
	},
	{
		id: 1822,
		name: "Technical Finish",
		job: "DNC",
		type: "Buff",
		icon: "/i/013000/013709.png",
		color: "--filter-bright-red",
		order: 2
	},
	// Raid Buffs
	{
		id: 16011,
		name: "Devilment",
		job: "DNC",
		level: 62,
		duration: 20,
		cooldown: 120,
		type: "RaidBuff",
		icon: "/i/003000/003471.png",
		color: "--filter-dark-red",
		order: 0
	},
	{
		id: 15997,
		name: "Standard Step",
		job: "DNC",
		level: 15,
		duration: 0,
		cooldown: 30,
		type: "RaidBuff",
		icon: "/i/003000/003459.png",
		color: "--filter-dark-red",
		order: 0,
		extra: {
			cooldown_only: true
		}
	},
	{
		id: 16191,
		name: "Standard Step",
		job: "DNC",
		level: 15,
		duration: 60,
		cooldown: 30,
		type: "RaidBuff",
		icon: "/i/003000/003459.png",
		color: "--filter-dark-red",
		order: 0,
		extra: {
			is_ss: true,
			status: 1,
			status_text: "Single"
		}
	},
	{
		id: 16192,
		name: "Standard Step",
		job: "DNC",
		level: 15,
		duration: 60,
		cooldown: 30,
		type: "RaidBuff",
		icon: "/i/003000/003459.png",
		color: "--filter-dark-red",
		order: 0,
		extra: {
			is_ss: true,
			status: 0,
			status_text: "Double"
		}
	},
	{
		id: 16003,
		name: "Standard Step",
		job: "DNC",
		level: 15,
		duration: 60,
		cooldown: 30,
		type: "RaidBuff",
		icon: "/i/003000/003459.png",
		color: "--filter-dark-red",
		order: 0,
		extra: {
			is_ss: true,
			status: 1,
			status_text: "Failed"
		}
	},
	{
		id: 16004,
		name: "Technical Step",
		job: "DNC",
		level: 70,
		duration: 20,
		cooldown: 120,
		type: "RaidBuff",
		icon: "/i/003000/003474.png",
		color: "--filter-dark-red",
		order: 0,
		extra: {
			cooldown_only: true
		}
	},
	{
		id: 16193,
		name: "Technical Step",
		job: "DNC",
		level: 70,
		duration: 20,
		cooldown: 120,
		type: "RaidBuff",
		icon: "/i/003000/003474.png",
		color: "--filter-dark-red",
		order: 0,
		extra: {
			is_ts: true,
			status: 0,
			status_text: "Single"
		}
	},
	{
		id: 16193,
		name: "Technical Step",
		job: "DNC",
		level: 70,
		duration: 20,
		cooldown: 120,
		type: "RaidBuff",
		icon: "/i/003000/003474.png",
		color: "--filter-dark-red",
		order: 0,
		extra: {
			is_ts: true,
			status: 0,
			status_text: "Double"
		}
	},
	{
		id: 16194,
		name: "Technical Step",
		job: "DNC",
		level: 70,
		duration: 20,
		cooldown: 120,
		type: "RaidBuff",
		icon: "/i/003000/003474.png",
		color: "--filter-dark-red",
		order: 0,
		extra: {
			is_ts: true,
			status: 0,
			status_text: "Triple"
		}
	},
	{
		id: 16195,
		name: "Technical Step",
		job: "DNC",
		level: 70,
		duration: 20,
		cooldown: 120,
		type: "RaidBuff",
		icon: "/i/003000/003474.png",
		color: "--filter-dark-red",
		order: 0,
		extra: {
			is_ts: true,
			status: 0,
			status_text: "Triple"
		}
	},
	{
		id: 16196,
		name: "Technical Step",
		job: "DNC",
		level: 70,
		duration: 20,
		cooldown: 120,
		type: "RaidBuff",
		icon: "/i/003000/003474.png",
		color: "--filter-dark-red",
		order: 0,
		extra: {
			is_ts: true,
			status: 1,
			status_text: "Quadruple"
		}
	},
	// DRG
	// DoTs
	{
		id: 118,
		name: "Chaos Thrust",
		job: "DRG",
		type: "DoT",
		icon: "/i/010000/010307.png",
		color: "--filter-light-purple",
		order: 0
	},
	// Self-Buffs
	{
		id: 121,
		name: "Disembowel",
		job: "DRG",
		type: "Buff",
		icon: "/i/012000/012576.png",
		color: "--filter-grey",
		order: 0
	},
	{
		id: 1183,
		name: "Dragon Sight",
		job: "DRG",
		type: "Buff",
		icon: "/i/012000/012581.png",
		color: "--filter-dark-red",
		order: 1
	},
	{
		id: 1864,
		name: "Lance Charge",
		job: "DRG",
		type: "Buff",
		icon: "/i/010000/010304.png",
		color: "--filter-dark-red",
		order: 2
	},
	// Raid Buffs
	{
		id: 3557,
		name: "Battle Litany",
		job: "DRG",
		level: 52,
		duration: 20,
		cooldown: 180,
		type: "RaidBuff",
		icon: "/i/002000/002585.png",
		color: "--filter-dark-red",
		order: 0
	},
	{
		id: 7398,
		name: "Dragon Sight",
		job: "DRG",
		level: 66,
		duration: 20,
		cooldown: 120,
		type: "RaidBuff",
		icon: "/i/002000/002587.png",
		color: "--filter-dark-red",
		order: 0
	},
	// DRK
	// Buffs
	{
		id: 742,
		name: "Blood Weapon",
		job: "DRK",
		type: "Buff",
		icon: "/i/013000/013109.png",
		color: "--filter-dark-red",
		order: 0
	},
	{
		id: 1972,
		name: "Delirium",
		job: "DRK",
		type: "Buff",
		icon: "/i/013000/013121.png",
		color: "--filter-bright-red",
		order: 1
	},
	// GNB
	// DoTs
	{
		id: 1837,
		name: "Sonic Break",
		job: "GNB",
		type: "DoT",
		icon: "/i/013000/013607.png",
		color: "--filter-light-blue",
		order: 0
	},
	{
		id: 1838,
		name: "Bow Shock",
		job: "GNB",
		type: "DoT",
		icon: "/i/013000/013608.png",
		color: "--filter-light-gold",
		order: 1
	},
	// Buffs
	{
		id: 1831,
		name: "No Mercy",
		job: "GNB",
		type: "Buff",
		icon: "/i/013000/013601.png",
		color: "--filter-light-blue",
		order: 0
	},
	// MCH
	// DoTs
	{
		id: 1866,
		name: "Bioblaster",
		job: "MCH",
		type: "DoT",
		icon: "/i/013000/013020.png",
		color: "--filter-toxic-green",
		order: 0
	},
	// Buffs
	{
		id: 688,
		name: "Hypercharge",
		job: "MCH",
		type: "Buff",
		icon: "/i/013000/013012.png",
		color: "--filter-dark-green",
		order: 0
	},
	{
		id: 1946,
		name: "Wildfire",
		job: "MCH",
		type: "Buff",
		icon: "/i/013000/013019.png",
		color: "--filter-orange",
		order: 1
	},
	// MNK
	// DoTs
	{
		id: 246,
		name: "Demolish",
		job: "MNK",
		type: "DoT",
		icon: "/i/010000/010218.png",
		color: "--filter-light-purple",
		order: 0
	},
	// Buffs
	{
		id: 592,
		name: "Ring of Fire",
		job: "MNK",
		type: "Buff",
		icon: "/i/015000/015628.png",
		color: "--filter-bright-red",
		order: 0
	},
	{
		id: 101,
		name: "Twin Snakes",
		job: "MNK",
		type: "Buff",
		icon: "/i/010000/010216.png",
		color: "--filter-grey",
		order: 1
	},
	// Raid Buffs
	{
		id: 7396,
		name: "Brotherhood",
		job: "DRG",
		level: 70,
		duration: 15,
		cooldown: 90,
		type: "RaidBuff",
		icon: "/i/002000/002585.png",
		color: "--filter-dark-red",
		order: 0
	},
	// NIN
	// DoTs
	{
		id: 508,
		name: "Shadow Fang",
		job: "NIN",
		type: "DoT",
		icon: "/i/010000/010612.png",
		color: "--filter-baby-blue",
		order: 0
	},
	// Buffs
	{
		id: 500,
		name: "Huton",
		job: "NIN",
		type: "Buff",
		icon: "/i/012000/012903.png",
		color: "--filter-light-blue",
		order: 1
	},
	// Raid Buffs
	{
		id: 2258,
		name: "Trick Attack",
		job: "NIN",
		level: 18,
		duration: 15,
		cooldown: 60,
		type: "RaidBuff",
		icon: "/i/003000/003218.png",
		color: "--filter-dark-red",
		order: 0
	},
	// PLD
	// DoTs
	{
		id: 248,
		name: "Circle of Scorn",
		job: "PLD",
		type: "DoT",
		icon: "/i/010000/010158.png",
		color: "--filter-orange",
		order: 0
	},
	{
		id: 725,
		name: "Goring Blade",
		job: "PLD",
		type: "DoT",
		icon: "/i/012000/012507.png",
		color: "--filter-orange",
		order: 1
	},
	// Buffs
	{
		id: 76,
		name: "Fight or Flight",
		job: "PLD",
		type: "Buff",
		icon: "/i/010000/010155.png",
		color: "--filter-light-purple",
		order: 0
	},
	{
		id: 1368,
		name: "Requiescat",
		job: "PLD",
		type: "Buff",
		icon: "/i/012000/012514.png",
		color: "--filter-dark-blue",
		order: 1
	},
	// RDM
	// Raid Buffs
	{
		id: 7520,
		name: "Embolden",
		job: "RDM",
		level: 58,
		duration: 20,
		cooldown: 120,
		type: "RaidBuff",
		icon: "/i/003000/003218.png",
		color: "--filter-dark-red",
		order: 0
	},
	// SAM
	// DoTs
	{
		id: 1228,
		name: "Higanbana",
		job: "SAM",
		type: "DoT",
		icon: "/i/013000/013304.png",
		color: "--filter-orange",
		order: 0
	},
	// Buffs
	{
		id: 1298,
		name: "Jinpu",
		job: "SAM",
		type: "Buff",
		icon: "/i/013000/013301.png",
		color: "--filter-light-gold",
		order: 0
	},
	{
		id: 1299,
		name: "Shifu",
		job: "SAM",
		type: "Buff",
		icon: "/i/013000/013302.png",
		color: "--filter-grey",
		order: 1
	},
	// Stacks
	{
		id: 1865,
		name: "Meditation",
		job: "SAM",
		type: "Stacks",
		icon: "/i/019000/019501.png",
		color: "--filter-dark-red",
		order: 0
	},
	{
		id: 16487,
		name: "Shoha",
		job: "SAM",
		type: "StackSpender",
		icon: "/i/003000/003184.png",
		color: "--filter-dark-red",
		order: 0
	},
    
	// SCH
	// DoTs
	{
		id: 179,
		name: "Bio",
		job: "SCH",
		type: "DoT",
		icon: "/i/010000/010504.png",
		color: "--filter-dark-green",
		order: 0
	},
	{
		id: 189,
		name: "Bio II",
		job: "SCH",
		type: "DoT",
		icon: "/i/010000/010505.png",
		color: "--filter-dark-green",
		order: 0
	},
	{
		id: 1895,
		name: "Biolysis",
		job: "SCH",
		type: "DoT",
		icon: "/i/012000/012812.png",
		color: "--filter-baby-blue",
		order: 0
	},
	// Raid Buffs
	{
		id: 7436,
		name: "Chain Stratagem",
		job: "SCH",
		level: 66,
		duration: 15,
		cooldown: 120,
		type: "RaidBuff",
		icon: "/i/002000/002815.png",
		color: "--filter-dark-red",
		order: 0
	},
	// SMN
	// DoTs
	{
		id: 179,
		name: "Bio",
		job: "SMN",
		type: "DoT",
		icon: "/i/010000/010504.png",
		color: "--filter-dark-green",
		order: 0
	},
	{
		id: 189,
		name: "Bio II",
		job: "SMN",
		type: "DoT",
		icon: "/i/010000/010505.png",
		color: "--filter-dark-green",
		order: 0
	},
	{
		id: 1214,
		name: "Bio III",
		job: "SMN",
		type: "DoT",
		icon: "/i/012000/012682.png",
		color: "--filter-dark-green",
		order: 0
	},
	{
		id: 180,
		name: "Miasma",
		job: "SMN",
		type: "DoT",
		icon: "/i/010000/010506.png",
		color: "--filter-baby-blue",
		order: 1
	},
	{
		id: 188,
		name: "Miasma II",
		job: "SMN",
		type: "DoT",
		icon: "/i/010000/010507.png",
		color: "--filter-baby-blue",
		order: 1
	},
	{
		id: 1215,
		name: "Miasma III",
		job: "SMN",
		type: "DoT",
		icon: "/i/012000/012683.png",
		color: "--filter-baby-blue",
		order: 1
	},
	// Stacks
	{
		id: 1212,
		name: "Further Ruin",
		job: "SMN",
		type: "Stacks",
		icon: "/i/019000/019481.png",
		color: "--filter-dark-blue",
		order: 0
	},
	{
		id: 7426,
		name: "Ruin IV",
		job: "SMN",
		type: "StackSpender",
		icon: "/i/002000/002686.png",
		color: "--filter-dark-blue",
		order: 0
	},
	// Raid Buffs
	{
		id: 7423,
		name: "Aetherpact",
		job: "SMN",
		level: 64,
		duration: 15,
		cooldown: 180,
		type: "RaidBuff",
		icon: "/i/002000/002688.png",
		color: "--filter-dark-red",
		order: 0
	},
	// WAR
	// Buffs
	{
		id: 86,
		name: "Berserk",
		job: "WAR",
		type: "Buff",
		icon: "/i/010000/010253.png",
		color: "--filter-bright-red",
		order: 0
	},
	{
		id: 1177,
		name: "Inner Release",
		job: "WAR",
		type: "Buff",
		icon: "/i/012000/012556.png",
		color: "--filter-bright-red",
		order: 1
	},
	{
		id: 90,
		name: "Storm's Eye",
		job: "WAR",
		type: "Buff",
		icon: "/i/010000/010263.png",
		color: "--filter-light-purple",
		order: 2
	},
	// WHM
	// DoTs
	{
		id: 143,
		name: "Aero",
		job: "WHM",
		type: "DoT",
		icon: "/i/010000/010403.png",
		color: "--filter-green-blue",
		order: 0
	},
	{
		id: 144,
		name: "Aero II",
		job: "WHM",
		type: "DoT",
		icon: "/i/010000/010409.png",
		color: "--filter-green-blue",
		order: 0
	},
	{
		id: 798,
		name: "Aero III",
		job: "WHM",
		type: "DoT",
		icon: "/i/012000/012630.png",
		color: "--filter-green-blue",
		order: 0
	},
	{
		id: 1871,
		name: "Dia",
		job: "WHM",
		type: "DoT",
		icon: "/i/012000/012635.png",
		color: "--filter-baby-blue",
		order: 0
	},
	// Buffs
	{
		id: 157,
		name: "Presence of Mind",
		job: "WHM",
		type: "Buff",
		icon: "/i/012000/012627.png",
		color: "--filter-baby-blue",
		order: 0
	},
];