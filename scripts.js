

//variables initialized

let displayValue = '0';
let firstOperand = null;
let secondOperand = null;
let firstOperator = null;
let secondOperator = null;
let result = null;
const buttons = document.querySelectorAll('button');

//event listener allows to use keyboard keys and simulate clicks

window.addEventListener('keydown', function(e){
    const key = document.querySelector(`button[data-key='${e.keyCode}']`);
    key.click();
});

// update the display

function updateDisplay() {
    const display = document.getElementById('display');
    display.innerText = displayValue;
    if(displayValue.length > 9) {
        display.innerText = displayValue.substring(0, 9);
    }
}
  
updateDisplay();
