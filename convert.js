function convertToAnu() {
	let uniText = document.querySelector("#unicode-text").value
	
	// clear the anu-text (current output) field
	document.querySelector("#anu-text").value = ""

	for (i = 0; i < uniText.length; i++) {
		console.log(i)
		// check for vowels
		for (j = 3077; j <= 3092; j++) {
			if (!!vowels[j] && uniText.charCodeAt(i) === j) {
				document.querySelector("#anu-text").value += vowels[j]
				//console.log(vowels[j])
			}
		}
		
		// check for consonants
		/* for (k = 3093; k <= 3093; k++) {
			// check for base
			if (!!consonants[k] && uniText.charCodeAt(i) === k) {
				document.querySelector("#anu-text").value += consonants[k].base				
			}
			// check if the next char is a symbol
			if (!!uniText.charCodeAt(i + 1)) { // if next char exists
				if (uniText.charCodeAt(i + 1) >= 3134 && uniText.charCodeAt(i + 1) < 3150) {
					for (l = 3134; l < 3150; l++) {
						if (uniText.charCodeAt(i + 1) === l) {
							document.querySelector("#anu-text").value += consonants[k].symbols[l]
							i++
						}
					}
				} else {
						console.log(`${i}char is not a symbol`)
						document.querySelector("#anu-text").value += consonants[k].a
					} 
			} else {
						console.log(`${i}Next char is not a symbol`)
						document.querySelector("#anu-text").value += consonants[k].a
			} 
		} */
		
		// consonants
		let totalLetter = ""
		for (x = 3093; x <= 3093; x++) {
			if (!!consonants[x] && uniText.charCodeAt(i) === x) {
				totalLetter = consonants[x].base
				if (!!uniText.charCodeAt(i + 1) && uniText.charCodeAt(i + 1) >= 3134 && uniText.charCodeAt(i + 1) <= 3150) {
					for (y = 3134; y <= 3150; y++) {
						if (uniText.charCodeAt(i + 1) === y){
							totalLetter += consonants[x].symbols[y]
							console.log(totalLetter)
						}
					}
				} else {
					totalLetter += consonants[x].a
				}
			}
		}
		document.querySelector("#anu-text").value += totalLetter
		// the system works!!! yayyy!!!!
	}
}

let vowels = {
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

let consonants = {
	3093: { //క
		base: String.fromCharCode(0xC5),
		a: String.fromCharCode(0xB7),
		symbols: {
			3134: String.fromCharCode(0x91), // కా
			3135: String.fromCharCode(0x8D), // కి
			3136: String.fromCharCode(0xA1),  // కీ
			3137: String.fromCharCode(0xB7) + String.fromCharCode(0x94), // కు  (the )
			3138: String.fromCharCode(0xB7) + String.fromCharCode(0x4C), // కూ
			3142: null, // కె
			3143: null, // కే
			3144: null, // కై
			3146: null, // కొ
			3147: null, // కో
			3148: null // కౌ
		}
	}, 
	3094: String.fromCharCode(0x4B),  // ఖ
	3095: String.fromCharCode(0x3E) // + String.fromCharCode(0xA3) // గ
	
}

/* let symbols = {
	3134: String.fromCharCode(0x90),
	3135: String.fromCharCode(),
	3136: String.fromCharCode()
} */
/* 
let vowelsLastItem = Object.keys(vowels)[Object.keys(vowels).length - 1]
let vowelsFirstItem = Object.keys(vowels)[0]
 */

// Misc. functions
function randomBetween(min, max){
return (Math.random() * (max - min) + min);
}

function setCharAt(str,index,chr) {
    if(index > str.length-1) return str;
    return str.substring(0,index) + chr + str.substring(index+1);
}