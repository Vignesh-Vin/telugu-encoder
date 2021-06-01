function convertToAnu() {
	let uniText = document.querySelector("#unicode-text").value
	
	// clear the anu-text (current output) field
	document.querySelector("#anu-text").value = ""

	for (i = 0; i < uniText.length; i++) {
		for (j = 3077; j <= 3092; j++) {
			if (!!vowels[j] && uniText.charCodeAt(i) === j) {
				document.querySelector("#anu-text").value += vowels[j]
				//console.log(vowels[j])
			}
		}
		
		for (k = 3093; k <= 3093; k++) {
			if (!!consonats[k] && uniText.charCodeAt(i) === k) {
				document.querySelector("#anu-text").value += consonats[k]
				console.log(consonats[k])
				
			}
		}
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

let consonats = {
	3093: String.fromCharCode(0xC5)// + String.fromCharCode(0xB7) //క
	3094: String.fromCharCode(0x4B) // ఖ
	3095: String.fromCharCode(0x3E)// + String.fromCharCode(0xA3) // గ
	
}

let symbols = {
	3134: String.fromCharCode(0x90)
	3135: String.fromCharCode()
	3136: String.fromCharCode()
}

let vowelsLastItem = Object.keys(vowels)[Object.keys(vowels).length - 1]
let vowelsFirstItem = Object.keys(vowels)[0]

console.log(typeof vowelsFirstItem)
console.log(typeof vowelsLastItem)
//console.log(Object.keys(vowels)[Object.keys(vowels).length - 1])

// Misc. functions
function randomBetween(min, max){
return (Math.random() * (max - min) + min);
}

function setCharAt(str,index,chr) {
    if(index > str.length-1) return str;
    return str.substring(0,index) + chr + str.substring(index+1);
}