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
	//assign colour to each square
	squares[i].style.backgroundColor = colours[i];

	//write an event which picks the colour of the selected box
	squares[i].addEventListener('click', function() {
        // grab colour of the picked square
        let clickedColour = this.style.backgroundColor;
        //compare colour to picked colour
        if (clickedColour === pickedColour) {
            alert('correct');
        } else {
            alert('wrong');
        }
	});
}

//we want to pick a color as goal

let pickedColour = colours[3];

let shownColour = document.querySelector('h2');

shownColour.textContent = pickedColour.toUpperCase();
