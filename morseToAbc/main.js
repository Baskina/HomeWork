var abc = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var morsecode = [
'.-', '-...', '-.-.', '-..', '.', '..-.', '--.', '....',
'..', '.---', '-.-', '.-..', '--', '-.', '---', '.--.',
'--.-', '.-.', '...', '-', '..-', '...-', '.--', '-..-',
'-.--', '--..'];

abc = abc.split('');

var result = '';

function change(str) {
	result = '';
	if((((str.match(/\s/g)) || []).length >= 1) || str.match(/\w/g).length == 0) {
		console.log(`morse: from ${str}`);
		str = str.replace(/\w/g,'*');
		if(str.indexOf('*') != -1) {
			console.log('invalid characters (A-Z) added to line');
			console.log(`morse: intermediate ${str}`);
		}
		str = str.split(' ');
		getRes(str, abc, morsecode);
    result = result.replace(/\s/g, '')
	}
	else {
		console.log(`abc: from ${str}`);
		str = str.replace(/[-.]/g,'*');
		if(str.indexOf('*') != -1) {
			console.log('invalid characters (. and/or -) added to line');
			console.log(`abc: intermediate ${str}`);
		}
		str = str.split('');
		getRes(str, morsecode, abc);
	}

	return result;
}

function getRes(str, firstArr, secondArr) {
	str.map(function(elem) {
		if(elem != '*') return result += firstArr[secondArr.indexOf(elem)] + ' ';
	});
}

console.log(`morse: to ${change('.- -... -.- --..')}`);
console.log(`abc: to ${change('JGABQ')}`);

console.log(`morse: answer ${change('.- -... H .- D --..')}`);
console.log(`abc: answer ${change('ABL-LC.----')}`);
