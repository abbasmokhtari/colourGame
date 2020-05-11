// making a list of colours
let colours = [
	'rgb(255, 0, 0)',
	'rgb(255, 255, 0)',
	'rgb(255, 0, 255)',
	'rgb(0, 255, 0)',
	'rgb(0, 0, 255)',
	'rgb(0 , 255, 255)'
];

let squares = document.querySelectorAll('.squares');

for (let i = 0; i < squares.length; i++) {
	squares[i].style.backgroundColor = colours[i];
}
