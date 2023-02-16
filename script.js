const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');
const dayNight = document.querySelector('.day-night');
const calculator = document.querySelector('.calculator');

let resultDisplayed = false;

// Handle button clicks
buttons.forEach((button) => {
	button.onclick = () => {
		if (button.id === 'clear') {
			display.textContent = '';
			resultDisplayed = false; // Reset the result display tracker
		} else if (button.id === 'backspace') {
			const string = display.textContent.toString();
			display.textContent = string.substr(0, string.length - 1);
		} else if (display.textContent !== '' && button.id === 'equal') {
			display.textContent = eval(display.textContent);
			resultDisplayed = true; // Set the result display tracker
		} else if (display.textContent === '' && button.id === 'equal') {
			display.textContent = 'Error';
			setTimeout(() => (display.textContent = ''), 2000);
		} else if (display.textContent.length < 11 && !resultDisplayed) {
			display.textContent += button.id;
		} else if (display.textContent.length < 11 && resultDisplayed) {
			display.textContent = button.id; // Clear the display and start a new calculation
			resultDisplayed = false; // Reset the result display tracker
		}
	};
});

// Handle theme toggle
dayNight.addEventListener('click', () => {
	dayNight.querySelector('i').classList.toggle('fa-sun');
	dayNight.querySelector('i').classList.toggle('fa-moon');
	calculator.classList.toggle('dark');
});

// Set initial theme icon based on current theme
window.addEventListener('load', () => {
	if (calculator.classList.contains('dark')) {
		dayNight.querySelector('i').classList.add('fa-sun');
	} else {
		dayNight.querySelector('i').classList.add('fa-moon');
	}
});
