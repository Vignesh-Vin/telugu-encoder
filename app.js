

function encodeToAscii() {
	let uniText = document.querySelector("#unicode-text").value
	
	// clear the Ascii-text (current output) field
	document.querySelector("#ascii-text").value = ""

	for (i = 0; i < uniText.length; i++) {
		//check for spaces and enters
		switch (uniText.charCodeAt(i)) {
			case 0x20: // space
				document.querySelector("#ascii-text").value += String.fromCharCode(0x20)
				continue
			case 0xa: // enter
				document.querySelector("#ascii-text").value += String.fromCharCode(0xa)
				continue
		}
		// check for vowels
		for (j = 3074; j <= 3092; j++) {
			if (!!vowels[j] && uniText.charCodeAt(i) === j) {
				document.querySelector("#ascii-text").value += vowels[j]
				continue
			}
		}
		
		
		
		
		// consonants
		let totalLetter = ""
	for (x = 3093; x <= 3129; x++) {
		if (!!consonants[x] && uniText.charCodeAt(i) === x) {
			if ( uniText.charCodeAt(i + 1) == 3149) {
				console.log("Found Visarga")	
				let extensionNumber = uniText.charCodeAt(i + 2)
				/////////////////////////////////
				if (!!uniText.charCodeAt(i + 3) && uniText.charCodeAt(i + 3) >= 3134 && uniText.charCodeAt(i + 1) <= 3150) {
					for (y = 3134; y <= 3150; y++) {
						if (uniText.charCodeAt(i + 3) === y){
							totalLetter = consonants[x].symbols[y] + extensions[extensionNumber]// find the symbol (if it exists) and assign it				
							i = i + 3
						}
					}
				
				} else {
					totalLetter = consonants[x].base + extensions[extensionNumber] // if no symbol is found just add a (the default one)
					i = i + 2
				}
				
				
				//////////////////////////////////
				
			}
			else {
				if (!!uniText.charCodeAt(i + 1) && uniText.charCodeAt(i + 1) >= 3134 && uniText.charCodeAt(i + 1) <= 3150) {
					for (y = 3134; y <= 3150; y++) {
						if (uniText.charCodeAt(i + 1) === y){
							totalLetter = consonants[x].symbols[y] // find the symbol (if it exists) and assign it				
						}
					}
				} else {
					totalLetter = consonants[x].base // if no symbol is found just add a (the default one)
				}
			}
		}
	}
		document.querySelector("#ascii-text").value += totalLetter
		
		// Finally, this damn thing works!!!
	}
}

let vowels = {
	3074: String.fromCharCode(0x2B), // ం    // need to add కః symbol
	//3075: String.fromCharCode(),
	3077: String.fromCharCode(0x6E), // అ
	3078: String.fromCharCode(0x80), //  ఆ
	3079: String.fromCharCode(0x82), //  ఇ
	3080: String.fromCharCode(0x87), //  ఈ
	3081: String.fromCharCode(0x96), //  ఉ
	3082: String.fromCharCode(0x7D), //  ఊ
	3086: String.fromCharCode(0x62), //  ఎ
	3087: String.fromCharCode(0x40), //  ఏ
	3088: String.fromCharCode(0xD7), //  ఐ
	3090: String.fromCharCode(0xFF), //  ఒ
	3091: String.fromCharCode(0x7A), //  ఓ
	3092: String.fromCharCode(0x57), //  ఔ
}

let extensions = {
	3093: String.fromCharCode(0xD8), // క్క
	3094: String.fromCharCode(0x89), // క్ఖ
	3095: String.fromCharCode(0x5A), // క్గ
	3096: String.fromCharCode(0xE9), // క్ఘ
	3097: String.fromCharCode(0x5F), // క్ఙ/////
	3098: String.fromCharCode(0xCC), // క్చ
	3099: String.fromCharCode(0xCC) + String.fromCharCode(0xDB), // క్ఛ
	3100: String.fromCharCode(0xA8), // క్జ
	3101: String.fromCharCode(0x5F), // క్ఝ ////////
	3102: String.fromCharCode(0xE3), // క్ఞ
	3103: String.fromCharCode(0xBC), // క్ట
	3104: String.fromCharCode(0xF7), // క్ఠ
	3105: String.fromCharCode(0xA6), // క్డ
	3106: String.fromCharCode(0x5F), // క్ఢ ////////
	3107: String.fromCharCode(0x92), // క్ణ
	3108: String.fromCharCode(0xEF), // క్త
	3109: String.fromCharCode(0x9C), // క్థ
	3110: String.fromCharCode(0xDD), // క్ద
	3111: String.fromCharCode(0xC6), // క్ధ
	3112: String.fromCharCode(0x95), // క్న
	3113: "", // క్
	3114: String.fromCharCode(0xCE), // క్ప
	3115: String.fromCharCode(0xCE) + String.fromCharCode(0xDB), // క్ఫ
	3116: String.fromCharCode(0xD2), // క్బ
	3117: String.fromCharCode(0xD2) + String.fromCharCode(0xDB), // క్భ
	3118: String.fromCharCode(0x88), // క్మ
	3119: String.fromCharCode(0xAB), // క్య
	3120: String.fromCharCode(0xE7), // క్ర//////////////////////////
	3121: String.fromCharCode(0x5F), // క్ఱ ///////////
	3122: String.fromCharCode(0xA2), // క్ల
	3123: String.fromCharCode(0xDF), // క్ళ
	3124: "", // క్
	3125: String.fromCharCode(0xC7), // క్వ
	3126: String.fromCharCode(0xF4), // క్శ
	3127: String.fromCharCode(0xFC), // క్ష ////////////////////////////
	3128: String.fromCharCode(0xE0), // క్స
	3129: String.fromCharCode(0xBD), // క్హ
}
let consonants = {
	3093: { //క
		//base: String.fromCharCode(0xC5),
		base: String.fromCharCode(0xC5) + String.fromCharCode(0xB7), // క
		symbols: {
			3134: String.fromCharCode(0xC5) + String.fromCharCode(0x91), // కా
			3135: String.fromCharCode(0xC5) + String.fromCharCode(0x8D), // కి
			3136: String.fromCharCode(0xC5) + String.fromCharCode(0xA1),  // కీ
			3137: String.fromCharCode(0xC5) + String.fromCharCode(0xB7) + String.fromCharCode(0x94), // కు
			3138: String.fromCharCode(0xC5) + String.fromCharCode(0xB7) + String.fromCharCode(0x4C), // కూ
			3142: String.fromCharCode(0xC2) + String.fromCharCode(0xBF), // కె
			3143: String.fromCharCode(0xB9) + String.fromCharCode(0xBF), // కే
			3144: String.fromCharCode(0xC2) + String.fromCharCode(0xBF) + String.fromCharCode(0xD5), // కై
			3146: String.fromCharCode(0xBF) + String.fromCharCode(0x3D), // కొ
			3147: String.fromCharCode(0xBF) + String.fromCharCode(0xC3), // కో
			3148: String.fromCharCode(0xBF) + String.fromCharCode(0x9A), // కౌ
			//3149: String.fromCharCode(0xBF) + String.fromCharCode(0xF9) // క్
		}
	}, 
	3094: { // ఖ
		base: String.fromCharCode(0x4B),  
		symbols: {
			3134: String.fromCharCode(0x55) + String.fromCharCode(0xB2),// ఖా
			3135: String.fromCharCode(0xCF),// ఖి
			3136: String.fromCharCode(0x46),// ఖీ
			3137: String.fromCharCode(0x4B) + String.fromCharCode(0x54),// ఖు
			3138: String.fromCharCode(0x4B) + String.fromCharCode(0xD6),// ఖూ
			3142: String.fromCharCode(0x55) + String.fromCharCode(0xC9) + String.fromCharCode(0xD5),// ఖె
			3143: String.fromCharCode(0x55) + String.fromCharCode(0xF1),// ఖే  
			3144: String.fromCharCode(0x55) + String.fromCharCode(0xC9) + String.fromCharCode(0xD5),// ఖై
			3146: String.fromCharCode(0x55) + String.fromCharCode(0xA4),// ఖొ
			3147: String.fromCharCode(0x55) + String.fromCharCode(0xCB),// ఖో
			3148: String.fromCharCode(0x55) + String.fromCharCode(0x85),// ఖౌ
			//3149: String.fromCharCode(0x55) + String.fromCharCode(0xD9) // ఖ్
		}
	},
	3095: { // గ
		base : String.fromCharCode(0x3E) + String.fromCharCode(0xB7),	
		symbols: {
			3134: String.fromCharCode(0x3E) + String.fromCharCode(0xB1), // గా
		  3135: String.fromCharCode(0xD0), // గి
		  3136: String.fromCharCode(0x5E), // గీ
		  3137: String.fromCharCode(0x3E) + String.fromCharCode(0xB7) + String.fromCharCode(0x54), // గు
		  3138: String.fromCharCode(0x3E) + String.fromCharCode(0xB7) + String.fromCharCode(0xD6), // గూ
		  3142: String.fromCharCode(0xC2) + String.fromCharCode(0x3E), // గె
		  3143: String.fromCharCode(0xB9) + String.fromCharCode(0x3E), // గే
		  3144: String.fromCharCode(0xC2) + String.fromCharCode(0x3E) + String.fromCharCode(0xD5), // గై
		  3146: String.fromCharCode(0x3E) + String.fromCharCode(0x3D), // గొ
		  3147: String.fromCharCode(0x3E) + String.fromCharCode(0xC3), // గో
		  3148: String.fromCharCode(0x3E) + String.fromCharCode(0x9A), // గౌ
			//3149: String.fromCharCode(0x3E) + String.fromCharCode(0xB4) // గ్
		}
	},
	3096: { // ఘ
		base: String.fromCharCode(0x7C) + String.fromCharCode(0x98) + String.fromCharCode(0x9F) + String.fromCharCode(0x54),
		symbols: {
			3134: String.fromCharCode(0x7C) + String.fromCharCode(0x98) + String.fromCharCode(0x9F) + String.fromCharCode(0xD6), // ఘా
			3135: String.fromCharCode(0x7C) + String.fromCharCode(0x98) + String.fromCharCode(0xBE) + String.fromCharCode(0x54), // ఘి
			3136: String.fromCharCode(0x7C) + String.fromCharCode(0x98) + String.fromCharCode(0xD3) + String.fromCharCode(0x54), // ఘీ
			3137: String.fromCharCode(0x7C) + String.fromCharCode(0x98) + String.fromCharCode(0x9F) + String.fromCharCode(0x54) + String.fromCharCode(0x54), // ఘు
			3138: String.fromCharCode(0x7C) + String.fromCharCode(0x98) + String.fromCharCode(0x9F) + String.fromCharCode(0x54) + String.fromCharCode(0xD6), // ఘూ
			3142: String.fromCharCode(0x99) + String.fromCharCode(0x7C) + String.fromCharCode(0x98) + String.fromCharCode(0x54), // ఘె
			3143: String.fromCharCode(0x9D) + String.fromCharCode(0x7C) + String.fromCharCode(0x98) + String.fromCharCode(0x54), // ఘే
			3144: String.fromCharCode(0x99) + String.fromCharCode(0x7C) + String.fromCharCode(0x98) + String.fromCharCode(0x54) + String.fromCharCode(0xAE), // ఘై
			3146: String.fromCharCode(0x7C) + String.fromCharCode(0x98) + String.fromCharCode(0x9F) + String.fromCharCode(0x54) + String.fromCharCode(0xA4), // ఘొ
			3147: String.fromCharCode(0x7C) + String.fromCharCode(0x98) + String.fromCharCode(0x9F) + String.fromCharCode(0x54) + String.fromCharCode(0xCB), // ఘో
			3148: String.fromCharCode(0x7C) + String.fromCharCode(0x98) + String.fromCharCode(0x9F) + String.fromCharCode(0x54) + String.fromCharCode(0xF2), // ఘౌ
			//3149: String.fromCharCode(0x7C) + String.fromCharCode(0x98) + String.fromCharCode(0x74) + String.fromCharCode(0x54) // ఘ్
		}
	},
	3098: { // చ
		base: String.fromCharCode(0x23) + String.fromCharCode(0xE1),
		symbols: {
			3134: String.fromCharCode(0x23) + String.fromCharCode(0x90), // చా
			3135: String.fromCharCode(0xBA), // చి
			3136: String.fromCharCode(0x4E), // చీ
			3137: String.fromCharCode(0x23) + String.fromCharCode(0xE1) + String.fromCharCode(0x54), // చు
			3138: String.fromCharCode(0x23) + String.fromCharCode(0xE1) + String.fromCharCode(0xD6), // చూ
			3142: String.fromCharCode(0x23) + String.fromCharCode(0xEE), // చె
			3143: String.fromCharCode(0x23) + String.fromCharCode(0xFB), // చే
			3144: String.fromCharCode(0x23) + String.fromCharCode(0xEE) + String.fromCharCode(0xD5), // చై
			3146: String.fromCharCode(0x23) + String.fromCharCode(0x3D), // చొ
			3147: String.fromCharCode(0x23) + String.fromCharCode(0xC3), // చో
			3148: String.fromCharCode(0x23) + String.fromCharCode(0xEA), // చౌ
			//3149: String.fromCharCode(0x23) + String.fromCharCode(0x59)
		}
	},
	3099: { // ఛ
		base: String.fromCharCode(0x23) + String.fromCharCode(0xF3) + String.fromCharCode(0xE1),
		symbols: {
			3134: String.fromCharCode(0x23) + String.fromCharCode(0xF3) + String.fromCharCode(0x90), // ఛా
			3135: String.fromCharCode(0xBA) + String.fromCharCode(0xF3), // ఛి
			3136: String.fromCharCode(0x4E) + String.fromCharCode(0xF3), // ఛీ
			3137: String.fromCharCode(0x23) + String.fromCharCode(0xF3) + String.fromCharCode(0xE1) + String.fromCharCode(0x54), // ఛు
			3138: String.fromCharCode(0x23) + String.fromCharCode(0xF3) + String.fromCharCode(0xE1) + String.fromCharCode(0xD6), // ఛూ
			3142: String.fromCharCode(0x23) + String.fromCharCode(0xF3) + String.fromCharCode(0xEE), // ఛె
			3143: String.fromCharCode(0x23) + String.fromCharCode(0xF3) + String.fromCharCode(0xFB), // ఛే
			3144: String.fromCharCode(0x23) + String.fromCharCode(0xF3) + String.fromCharCode(0xEE) + String.fromCharCode(0xD5), // ఛై
			3146: String.fromCharCode(0x23) + String.fromCharCode(0xF3) + String.fromCharCode(0x3D), // ఛొ
			3147: String.fromCharCode(0x23) + String.fromCharCode(0xF3) + String.fromCharCode(0xC3), // ఛో
			3148: String.fromCharCode(0x23) + String.fromCharCode(0xF3) + String.fromCharCode(0xEA), // ఛౌ
			//3149: String.fromCharCode(0x23) + String.fromCharCode(0xF3) + String.fromCharCode(0x59) // ఛ్
		}
	},
	3100: { // జ
		base: String.fromCharCode(0xC8),
		symbols: {
			3134: String.fromCharCode(0x43) + String.fromCharCode(0xB2), // జా
			3135: String.fromCharCode(0x9B), // జి
			3136: String.fromCharCode(0x4A), // జీ
			3137: String.fromCharCode(0x45), // జు
			3138: String.fromCharCode(0x70), // జూ
			3142: String.fromCharCode(0x43) + String.fromCharCode(0xC9), // జె
			3143: String.fromCharCode(0x43) + String.fromCharCode(0xF1), // జే
			3144: String.fromCharCode(0x43) + String.fromCharCode(0xC9) + String.fromCharCode(0xD5), // జై
			3146: String.fromCharCode(0x43) + String.fromCharCode(0xA4), // జొ
			3147: String.fromCharCode(0x43) + String.fromCharCode(0xCB), // జో
			3148: String.fromCharCode(0x43) + String.fromCharCode(0x85), // జౌ
			//3149: String.fromCharCode(0x43) + String.fromCharCode(0xD9) // జ్
		}
	},
	3101: { // ఝ
		base: String.fromCharCode(0x73) + String.fromCharCode(0xC1) + String.fromCharCode(0x61),
		symbols: {
			3134: String.fromCharCode(0x73) + String.fromCharCode(0xC1) + String.fromCharCode(0x61) + String.fromCharCode(0x6E), // ఝా
		  3135: String.fromCharCode(0x5D) + String.fromCharCode(0x61), // ఝి
		  3136: String.fromCharCode(0xAF) + String.fromCharCode(0x61), // ఝీ
		  3137: String.fromCharCode(0x73) + String.fromCharCode(0xC1) + String.fromCharCode(0x61) + String.fromCharCode(0x54), // ఝు
		  3138: String.fromCharCode(0x73) + String.fromCharCode(0xC1) + String.fromCharCode(0x61) + String.fromCharCode(0xD6), // ఝూ
		  3142: String.fromCharCode(0xC2) + String.fromCharCode(0x73) + String.fromCharCode(0x61), // ఝె
		  3143: String.fromCharCode(0xB9) + String.fromCharCode(0x73) + String.fromCharCode(0x61), // ఝే
		  3144: String.fromCharCode(0xC2) + String.fromCharCode(0x73) + String.fromCharCode(0x61) + String.fromCharCode(0xAE), // ఝై
		  3146: String.fromCharCode(0xC2) + String.fromCharCode(0x73) + String.fromCharCode(0x61) + String.fromCharCode(0x54), // ఝొ
		  3147: String.fromCharCode(0xC2) + String.fromCharCode(0x73) + String.fromCharCode(0x61) + String.fromCharCode(0xB2), // ఝో
		  3148: String.fromCharCode(0x73) + String.fromCharCode(0xC1) + String.fromCharCode(0x61) + String.fromCharCode(0xF2), // ఝౌ
			//3149: String.fromCharCode(0x73) + String.fromCharCode(0x59) + String.fromCharCode(0x61) // ఝ్
		}
	},
	3103: { // ట
		base: String.fromCharCode(0x66), // ట
		symbols: {
			3134: String.fromCharCode(0x7B) + String.fromCharCode(0xB2), //టా
			3135: String.fromCharCode(0x7B) + String.fromCharCode(0xEC), //టి
			3136: String.fromCharCode(0x7B) + String.fromCharCode(0xA1), //టీ
			3137: String.fromCharCode(0xB3) + String.fromCharCode(0x54), //టు
			3138: String.fromCharCode(0xB3) + String.fromCharCode(0xD6), //టూ
			3142: String.fromCharCode(0x66) + String.fromCharCode(0xC9), //టె
			3143: String.fromCharCode(0x66) + String.fromCharCode(0xF1),//టే
			3144: String.fromCharCode(0x66) + String.fromCharCode(0xC9) + String.fromCharCode(0xAE),//టై
			3146: String.fromCharCode(0x7B) + String.fromCharCode(0xA4),//టొ
			3147: String.fromCharCode(0x7B) + String.fromCharCode(0xCB),//టో
			3148: String.fromCharCode(0x7B) + String.fromCharCode(0x85),//టౌ
			//3149: String.fromCharCode(0x7B) + String.fromCharCode(0xD9)//ట్
		}
	},
	3104: { // ఠ
		base: String.fromCharCode(0x73) + String.fromCharCode(0xC4) + String.fromCharCode(0xC1),
		symbols: {
			3134: String.fromCharCode(0x73) + String.fromCharCode(0xC4) + String.fromCharCode(0x90),//ఠా
			3135: String.fromCharCode(0x5D) + String.fromCharCode(0xC4), //ఠి
			3136: String.fromCharCode(0xAF) + String.fromCharCode(0xC4), //ఠీ
			3137: String.fromCharCode(0x73) + String.fromCharCode(0xC4) + String.fromCharCode(0xC1) + String.fromCharCode(0x54),//ఠు
			3138: String.fromCharCode(0x73) + String.fromCharCode(0xC4) + String.fromCharCode(0xC1) + String.fromCharCode(0xD6),//ఠూ
			3142: String.fromCharCode(0xC2) + String.fromCharCode(0x73) + String.fromCharCode(0xC4),//ఠె
			3143: String.fromCharCode(0xB9) + String.fromCharCode(0x73) + String.fromCharCode(0xC4),//ఠే
			3144: String.fromCharCode(0xC2) + String.fromCharCode(0x73) + String.fromCharCode(0xC4) + String.fromCharCode(0xd5),//ఠై
			3146: String.fromCharCode(0x73) + String.fromCharCode(0xC4) + String.fromCharCode(0x3D),//ఠొ
			3147: String.fromCharCode(0x73) + String.fromCharCode(0xC4) + String.fromCharCode(0xC3),//ఠో
			3148: String.fromCharCode(0x73) + String.fromCharCode(0xC4) + String.fromCharCode(0x9A),//ఠౌ
			//3149: String.fromCharCode(0x73) + String.fromCharCode(0xC4) + String.fromCharCode(0x59),//ఠ్
		}
	},
	3105: { // డ
		base: String.fromCharCode(0x26) + String.fromCharCode(0xE1),
		symbols: {
			3134: String.fromCharCode(0x26) + String.fromCharCode(0x86),  // డా
			3135: String.fromCharCode(0x26) + String.fromCharCode(0x8D),  // డి
			3136: String.fromCharCode(0x26) + String.fromCharCode(0x9E),  // డీ
			3137: String.fromCharCode(0x26) + String.fromCharCode(0x83) + String.fromCharCode(0x54),  // డు
			3138: String.fromCharCode(0x26) + String.fromCharCode(0x83) + String.fromCharCode(0xD6),  // డూ
			3142: String.fromCharCode(0x26) + String.fromCharCode(0xEE),  // డె
			3143: String.fromCharCode(0x26) + String.fromCharCode(0xFB),  // డే
			3144: String.fromCharCode(0x26) + String.fromCharCode(0xEE) + String.fromCharCode(0xD5),  // డై
			3146: String.fromCharCode(0x26) + String.fromCharCode(0x3D),  // డొ
			3147: String.fromCharCode(0x26) + String.fromCharCode(0xC3),  // డో
			3148: String.fromCharCode(0x26) + String.fromCharCode(0xEA),  // డౌ
			//3149: String.fromCharCode(0x26) + String.fromCharCode(0x8E)   // డ్
		}
	},
	3106: { // ఢ
		base:  String.fromCharCode(0x26) + String.fromCharCode(0xF3) + String.fromCharCode(0x83),
		symbols: {
			3134: String.fromCharCode(0x26) + String.fromCharCode(0xF3) + String.fromCharCode(0x86), // ఢా
			3135: String.fromCharCode(0x26) + String.fromCharCode(0xF3) + String.fromCharCode(0x8D), // ఢి
			3136: String.fromCharCode(0x26) + String.fromCharCode(0xF3) + String.fromCharCode(0x9E), // ఢీ
			3137: String.fromCharCode(0x26) + String.fromCharCode(0xF3) + String.fromCharCode(0x83) + String.fromCharCode(0x54), // ఢు
			3138: String.fromCharCode(0x26) + String.fromCharCode(0xF3) + String.fromCharCode(0x83) + String.fromCharCode(0xD6), // ఢూ
			3142: String.fromCharCode(0x26) + String.fromCharCode(0xF3) + String.fromCharCode(0xEE), // ఢె 
			3143: String.fromCharCode(0x26) + String.fromCharCode(0xF3) + String.fromCharCode(0xFB), // ఢే
			3144: String.fromCharCode(0x26) + String.fromCharCode(0xF3) + String.fromCharCode(0xEE) + String.fromCharCode(0xD5), // ఢై
			3146: String.fromCharCode(0x26) + String.fromCharCode(0xF3) + String.fromCharCode(0x3D), // ఢొ
			3147: String.fromCharCode(0x26) + String.fromCharCode(0xF3) + String.fromCharCode(0xC3), // ఢో
			3148: String.fromCharCode(0x26) + String.fromCharCode(0xF3) + String.fromCharCode(0xEA), // ఢౌ
			//3149: String.fromCharCode(0x26) + String.fromCharCode(0xF3) + String.fromCharCode(0x8E) // ఢ్
		}
	},
	3107: { // ణ
		base: String.fromCharCode(0x44),
		symbols: {
			3134: String.fromCharCode(0x44) + String.fromCharCode(0xB2), // ణా
			3135: String.fromCharCode(0x44) + String.fromCharCode(0xEC), // ణి
			3136: String.fromCharCode(0x44) + String.fromCharCode(0xA1), // ణీ
			3137: String.fromCharCode(0x44) + String.fromCharCode(0x54), // ణు
			3138: String.fromCharCode(0x44) + String.fromCharCode(0xD6), // ణూ
			3142: String.fromCharCode(0x44) + String.fromCharCode(0xC9), // ణె
			3143: String.fromCharCode(0x44) + String.fromCharCode(0xF1), // ణే
			3144: String.fromCharCode(0x44) + String.fromCharCode(0xC9) + String.fromCharCode(0xAE), // ణై
			3146: String.fromCharCode(0x44) + String.fromCharCode(0x3D), // ణొ
			3147: String.fromCharCode(0x44) + String.fromCharCode(0xC3), // ణో
			3148: String.fromCharCode(0x44) + String.fromCharCode(0x85), // ణౌ
			//3149: String.fromCharCode(0x44) + String.fromCharCode(0x59) // ణ్
		}
	},
	3108: { // త
		
	}
}


// copy text to clipboard
function copyAscii() {
	var copyText = document.querySelector("#unicode-text");
  copyText.select();
  document.execCommand("copy");
}

function copyUnicode() {
	var copyText = document.querySelector("#ascii-text");
  copyText.select();
  document.execCommand("copy");
}


/* export-to-word functionality draft

function exportHTML(){
       var header = "<html xmlns:o='urn:schemas-microsoft-com:office:office' "+
            "xmlns:w='urn:schemas-microsoft-com:office:word' "+
            "xmlns='http://www.w3.org/TR/REC-html40'>"+
            "<head><meta charset='utf-8'><title>Export HTML to Word Document with JavaScript</title></head><body>";
       var footer = "</body></html>";
       var sourceHTML = header+document.getElementById("source-html").innerHTML+footer;
       
       var source = 'data:application/vnd.ms-word;charset=utf-8,' + encodeURIComponent(sourceHTML);
       var fileDownload = document.createElement("a");
       document.body.appendChild(fileDownload);
       fileDownload.href = source;
       fileDownload.download = 'document.doc';
       fileDownload.click();
       document.body.removeChild(fileDownload);
    }
		
		*/
		
/* copy to clipboard draft

function copy() {
  var copyText = document.querySelector("#input");
  copyText.select();
  document.execCommand("copy");
}

document.querySelector("#copy").addEventListener("click", copy);

*/