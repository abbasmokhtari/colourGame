// making a list of colours
let numSquares = 6;
let colours = generateRandomColours(numSquares);

let squares = document.querySelectorAll('.squares');
let message = document.querySelector('#message');
let header = document.querySelector('header');

for (let i = 0; i < squares.length; i++) {
	//assign colour to each square
	squares[i].style.backgroundColor = colours[i];

	//write an event which picks the colour of the selected box
	squares[i].addEventListener('click', function() {
		// grab colour of the picked square
		let clickedColour = this.style.backgroundColor;
		//compare colour to picked colour
		if (clickedColour === pickedColour) {
			message.textContent = 'Correct';
			changeColour(clickedColour);
			header.style.backgroundColor = clickedColour;
			reset.textContent = 'Play Again';
		} else {
			this.style.backgroundColor = '#232323';
			message.textContent = 'Try agian';
		}
	});
}

//we want to pick a color as goal

let pickedColour = colourPicker();

let shownColour = document.querySelector('h2');

shownColour.textContent = pickedColour.toUpperCase();

//change every block colour to winning

function changeColour(colour) {
	//loop through all squares
	for (let i = 0; i < squares.length; i++) {
		//change each colour to match winning colour
		squares[i].style.backgroundColor = colour;
	}
}

// picking the random colour
function colourPicker() {
	let randomNum = Math.floor(Math.random() * colours.length);
	return colours[randomNum];
}

//geneating random colours

function generateRandomColours(num) {
	//make an array
	let arr = [];
	//repeat num times
	for (let i = 0; i < num; i++) {
		//get random colour and push to array
		arr.push(randomColour());
	}
	//return array
	return arr;
}

function randomColour() {
	//pick a "red" from 0 - 255
	let R = Math.floor(Math.random() * 256);
	//pick a "green" from 0 - 255
	let G = Math.floor(Math.random() * 256);
	//pick a "blue" from 0 - 255
	let B = Math.floor(Math.random() * 256);
	return `rgb(${R}, ${G}, ${B})`;
}

//reset button
let reset = document.querySelector('#reset');

reset.addEventListener('click', function() {
	//generate all new colours
	colours = generateRandomColours(numSquares);
	//pick new random colour
	pickedColour = colourPicker();
	//change display colour to match new colour
	shownColour.textContent = pickedColour.toUpperCase();
	//change the colour of the squares
	for (let i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = colours[i];
	}
	header.style.backgroundColor = 'rgb(32, 93, 121)';
	reset.textContent = 'New Colours';
	message.textContent = '';
});

//hard and easy button

let easyBtn = document.querySelector('#easyBtn');
let hardBtn = document.querySelector('#hardBtn');

easyBtn.addEventListener('click', function() {
	easyBtn.classList.add('selected');
	hardBtn.classList.remove('selected');
	numSquares = 3;
	colours = generateRandomColours(numSquares);
	pickedColour = colourPicker();
	shownColour.textContent = pickedColour.toUpperCase();
	for (let i = 0; i < squares.length; i++) {
		if (colours[i]) {
			squares[i].style.backgroundColor = colours[i];
		} else {
			squares[i].style.display = 'none';
		}
	}
});

hardBtn.addEventListener('click', function() {
	easyBtn.classList.remove('selected');
	hardBtn.classList.add('selected');
	numSquares = 6;
	colours = generateRandomColours(numSquares);
	pickedColour = colourPicker();
	shownColour.textContent = pickedColour.toUpperCase();
	for (let i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = colours[i];
		squares[i].style.display = 'block';
	}
});
