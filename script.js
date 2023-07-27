let currentInput = "0";

function appendValue(value) {
if (currentInput === "0") {
currentInput = value;
} else {
currentInput += value;
}
updateDisplay();
}

function clearDisplay() {
currentInput = "0";
updateDisplay();
}

function calculate() {
try {
currentInput = eval(currentInput).toString();
} catch (error) {
currentInput = "Error";
}
updateDisplay();
}

function updateDisplay() {
    const displayElement = document.getElementById("display");
    displayElement.textContent = currentInput;
}

