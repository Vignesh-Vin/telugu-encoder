function convertToAnu() {
	let unicodeText = document.querySelector("#unicode-text")
	let anuText = document.querySelector("#anu-text")

	vowels.(unicodeText.value)
	document.querySelector("h2").innerHTML = unicodeText.value.charCodeAt(0)
}


let vowels = {
3077: "n",
3088: "€",
3098: "‚",
3099: "‡"
}


// Misc. functions
function randomBetween(min, max){
return (Math.random() * (max - min) + min);
}