
const display = document.getElementById('display');

function appendToDisplay(input) {
    if (display.textContent === '0') {
        display.textContent = input;
    } else {
        display.textContent += input;
    }
}

function clearDisplay() {
    display.textContent = '0';
}

function calculate() {
    try {
        display.textContent = eval(display.textContent);
    } catch (error) {
        display.textContent = 'Error';
    }
}
