const sumAll = function(firstNumber, secondNumber) {
    let sum = 0;

    if (firstNumber < 0 || secondNumber < 0 || (typeof firstNumber) != 'number' || (typeof secondNumber) != 'number' || firstNumber % 1 !== 0 || secondNumber % 1 !== 0) {
        return 'ERROR';
    }

    if (firstNumber > secondNumber) {
        let temp = firstNumber;
        firstNumber = secondNumber;
        secondNumber = temp;
    }

    for (let i = firstNumber; i <= secondNumber; ++i) {
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
