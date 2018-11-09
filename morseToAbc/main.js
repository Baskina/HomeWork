var abc = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var morsecode =[
'.-', '-...', '-.-.', '-..', '.', '..-.', '--.', '....',
'..', '.---', '-.-', '.-..', '--', '-.', '---', '.--.',
'--.-', '.-.', '...', '-', '..-', '...-', '.--', '-..-',
'-.--', '--..'
]

abc = abc.split('');

function reverse (string) {
	if(abc.indexOf(string.charAt(0)) == -1) {
		string = string.split(" ");
		string = getSign(string, abc, morsecode);
	}

	else {
		string = string.split("");
		string = getSign(string, morsecode, abc);
	}

	return string;
}

function getSign (string, firstarr, secondarr) {
	return string.map(function(elem) {
		return elem = firstarr[secondarr.indexOf(elem)];
	}).join(' ');
}

console.log(reverse(".- ... ..-"));
