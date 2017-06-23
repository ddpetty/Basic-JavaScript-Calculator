function calculate() {
	document.calc.output.value = eval(document.calc.output.value);
}

function erase() {
	document.calc.output.value = '';
}

// variable s contains the actual value of the button pressed 
function entries(s) {
	document.calc.output.value+=s;
}