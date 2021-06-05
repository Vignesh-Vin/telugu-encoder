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
		for (x = 3093; x <= 3093; x++) {
			if (!!consonants[x] && uniText.charCodeAt(i) === x) {
				totalLetter = consonants[x].base // identifies and sets the base of the character
				if (!!uniText.charCodeAt(i + 1) && uniText.charCodeAt(i + 1) >= 3134 && uniText.charCodeAt(i + 1) <= 3150) {
					for (y = 3134; y <= 3150; y++) {
						if (uniText.charCodeAt(i + 1) === y){
							totalLetter = consonants[x].symbols[y] // find the symbol (if it exists) and add it
						}
					}
				} else {
					totalLetter += consonants[x].a // if no symbol is found just add a (the default one)
				}
			}
		}
		document.querySelector("#ascii-text").value += totalLetter
		// the system works!!! yayyy!!!!
	}
}

let vowels = {
	3074: String.fromCharCode(0x2B), // ం
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

let consonants = {
	3093: { //క
		base: String.fromCharCode(0xC5),
		a: String.fromCharCode(0xB7),
		symbols: {
			3134: String.fromCharCode(0xC5) + String.fromCharCode(0x91), // కా
			3135: String.fromCharCode(0xC5) + String.fromCharCode(0x8D), // కి
			3136: String.fromCharCode(0xC5) + String.fromCharCode(0xA1),  // కీ
			3137: String.fromCharCode(0xC5) + String.fromCharCode(0xB7) + String.fromCharCode(0x94), // కు  (the )
			3138: String.fromCharCode(0xC5) + String.fromCharCode(0xB7) + String.fromCharCode(0x4C), // కూ
			3142: String.fromCharCode(0xC2) + String.fromCharCode(0xBF), // కె
			3143: String.fromCharCode(0xB9) + String.fromCharCode(0xBF), // కే
			3144: String.fromCharCode(0xC2) + String.fromCharCode(0xBF) + String.fromCharCode(0xD5), // కై
			3146: String.fromCharCode(0xBF) + String.fromCharCode(0x3D), // కొ
			3147: String.fromCharCode(0xBF) + String.fromCharCode(0xC3), // కో
			3148: String.fromCharCode(0xBF) + String.fromCharCode(0x9A) // కౌ
		}
	}, 
	3094: String.fromCharCode(0x4B),  // ఖ
	3095: String.fromCharCode(0x3E) // + String.fromCharCode(0xA3) // గ
	
}



// copy text to clipboard
function copyAscii() {
	/* const clipboard = navigator.clipboard || window.clipboard */
	/* window.clipboard.write(document.querySelector("#ascii-text").value) */
}

// Misc. functions
function randomBetween(min, max){
return (Math.random() * (max - min) + min);
}

function setCharAt(str,index,chr) {
    if(index > str.length-1) return str;
    return str.substring(0,index) + chr + str.substring(index+1);
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