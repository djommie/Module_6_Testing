

function hasRightLength(password) {
    if (password.length < 9) {
        return true;
    } else {
        return false;
    }
}

function isNotNull(password) {
    if (password !== null && password !== '') {
        return true;
    } else {
        return false;
    }
}

function hasUpperCaseCharacter(password) {
    const re = new RegExp("(.*[A-Z].*)")
    return re.test(password);
}

function hasLowerCaseCharacter(password) {
    const re = new RegExp("(.*[a-z].*)")
    return re.test(password);
}

function hasDigit(password) {
    const re = new RegExp("(.*[0-9].*)");
    return re.test(password);
}

const minimumConditionsReached = conditions => {
    // conditions is an array of booleans
    trueConditions = conditions.filter(bool => bool);
    return trueConditions.length >= 3;
};

// "Outer" function
const verifyPassword = password => {
    const conditions = [
        isNotNull(password),
        hasRightLength(password),
        hasUpperCaseCharacter(password),
        hasLowerCaseCharacter(password),
        hasDigit(password)
    ];
    const result =
        minimumConditionsReached(conditions) && hasLowerCaseCharacter(password);

    return result;
};


module.exports =
    verifyPassword,
    hasRightLength,
    isNotNull,
    hasUpperCaseCharacter,
    hasLowerCaseCharacter,
    hasDigit,
    minimumConditionsReached;

