// buttons
const numberButtons    = document.querySelectorAll("[data-number]");
const operationButtons = document.querySelectorAll("[data-operator]");
const allClearButtons  = document.querySelectorAll("[data-all-clear]");
const deleteButtons    = document.querySelectorAll("[data-delete]");
const equalsButtons    = document.querySelectorAll("[data-equals]");

// output
const previousOperandTextElement  = document.querySelector("data-previous-operand");
const currentOperandTextElement   = document.querySelector("data-current-operand");

class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement) {
        this.previousOperandTextElement = previousOperandTextElement;
        this.currentOperandTextElement  = currentOperandTextElement;
    }

    clear() {
        this.previousOperandTextElement = '';
        this.currentOperandTextElement  = '';
    }
}