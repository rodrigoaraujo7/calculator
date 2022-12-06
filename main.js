// buttons
const numberButtons    = document.querySelectorAll("[data-number]");
const operationButtons = document.querySelectorAll("[data-operator]");
const allClearButtons  = document.querySelector("[data-all-clear]");
const deleteButtons    = document.querySelector("[data-delete]");
const equalsButtons    = document.querySelector("[data-equals]");

// output
const previousOperandTextElement  = document.querySelector("[data-previous-operand]");
const currentOperandTextElement   = document.querySelector("[data-current-operand]");

class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement) {
        this.previousOperandTextElement = previousOperandTextElement;
        this.currentOperandTextElement  = currentOperandTextElement;
        this.clear();
    }

    clear() { // clear de value of the elements
        this.previousOperand = '';
        this.currentOperand  = '';
        this.operation       = undefined;
    }

    updateDisplay() { // clear the elements in the screen
        this.previousOperandTextElement.innerText = `${this.previousOperand} ${this.operation || ''}`;
        this.currentOperandTextElement.innerText  = this.currentOperand;
    }

    appendNumber(number) { // add a new number at the output
        if(this.currentOperand.includes('.') && number === '.') return;
        this.currentOperand = `${this.currentOperand}${number.toString()}`
    }

    calculate() {
        let result;

        const _previousOperand = parseFloat(this.previousOperand)
        const _currentOperand  = parseFloat(this.currentOperand)

        if(isNaN(_previousOperand) || isNaN(_currentOperand)) return;

        switch(this.operation) {
            case '+':
                result = _previousOperand + _currentOperand;
                break;
            case '-':
                result = _previousOperand - _currentOperand;
                break;
            case '*':
                result = _previousOperand * _currentOperand;
                break;
            case '÷':
                result = _previousOperand / _currentOperand;
                break;
            default:
                return;
        }

        this.currentOperand  = result;
        this.previousOperand = '';
        this.operation       = undefined;
    }

    chooseOperation(operation) { // method to add a operation
        if(this.previousOperand !== '') {
            this.calculate();
        }
        this.operation       = operation;
        this.previousOperand = this.currentOperand;
        this.currentOperand  = '';
    }
}

const calculator = new Calculator( // instance Calculator
    previousOperandTextElement, 
    currentOperandTextElement
);

// (* AC Button event *)
allClearButtons.addEventListener('click', () => {
    // console.log('clicky =D')
    calculator.clear();
    calculator.updateDisplay();
})

// (* Number Button event *)
for(const numberButton of numberButtons) {
    numberButton.addEventListener('click', () => {
        calculator.appendNumber(numberButton.innerText);
        calculator.updateDisplay();
    })
}

// (* Operator Button event *)
for(const operatorButton of operationButtons) {
    operatorButton.addEventListener('click', () => {
        calculator.chooseOperation(operatorButton.innerText);
        calculator.updateDisplay();
    }) 
}