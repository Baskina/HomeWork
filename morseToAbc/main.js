var abc = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var morsecode = [
'.-', '-...', '-.-.', '-..', '.', '..-.', '--.', '....',
'..', '.---', '-.-', '.-..', '--', '-.', '---', '.--.',
'--.-', '.-.', '...', '-', '..-', '...-', '.--', '-..-',
'-.--', '--..'
];

abc = abc.split('');

var result = '';

function change(str) {
	result = '';
	if(str.match((/\w/g) || []).length < str.length / 2) {
		console.log(str);
		str = str.replace(/\w/g,'*');
		if(str.indexOf('*') != -1) {
			alert('в стоку добавлены недопустимые символы A-Z');
			
		}
		console.log(str);
		str = str.split(' ');
		getRes(str, abc, morsecode);
	}
	else {
		console.log(str);
		str = str.replace(/[-.]/g,'*');
		if(str.indexOf('*') != -1) {
			alert('в стоку добавлены недопустимые символы ., -');
		}
		console.log(str);
		str = str.split('');
		getRes(str, morsecode, abc);
	}

	return result;
}

function getRes(str, firstArr, secondArr) {
	str.map(function(elem) {
		if(elem != '*') return result += firstArr[secondArr.indexOf(elem)];
	});
}


console.log(change('.- -... H .- D --..'));

console.log(change('ABL-LC.-'));