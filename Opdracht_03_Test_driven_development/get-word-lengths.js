const getWordLengths = function (someWords) {
    counted = []
    someWords.forEach(word => counted.push(word.length))
    return counted
};

module.exports = getWordLengths;