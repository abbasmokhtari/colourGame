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
let message = document.querySelector('#message');

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
        } else {
            this.style.backgroundColor = '#232323';
            message.textContent = 'Try agian';
        }
	});
}

//we want to pick a color as goal

let pickedColour = colours[3];

let shownColour = document.querySelector('h2');

shownColour.textContent = pickedColour.toUpperCase();

//change every block colour to winning

function changeColour(colour) {
    //loop through all squares
    for (let i = 0; i < squares.length; i++){
        //change each colour to match winning colour
        squares[i].style.backgroundColor = colour;
    }
}