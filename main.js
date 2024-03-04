document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('calculateButton').addEventListener('click', calculate);
});

function calculate() {
    var firstNum = parseFloat(document.getElementById('first-num').value);
    var operator = document.getElementById('operator').value;
    var secondNum = parseFloat(document.getElementById('second-num').value);
    var resultElement = document.getElementById('result');

    if (isNaN(firstNum) || isNaN(secondNum)) {
        resultElement.value = 'Invalid input';
        return;
    }

    var result;
    switch (operator) {
        case '+':
            result = firstNum + secondNum;
            break;
        case '-':
            result = firstNum - secondNum;
            break;
        case '*':
            result = firstNum * secondNum;
            break;
        case '/':
            if (secondNum !== 0) {
                result = firstNum / secondNum;
            } else {
                resultElement.value = 'Cannot divide by zero';
                return;
            }
            break;
        default:
            resultElement.value = 'Invalid operator';
            return;
    }

    resultElement.value = result;
}
