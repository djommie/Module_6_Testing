
const addOne = function (numbers) {
    newNumbers = [];
    for (i = 0; i < numbers.length; i++) {
        newNumbers[i] = numbers[i] + 1;
    }
    return newNumbers
}

module.exports = addOne;