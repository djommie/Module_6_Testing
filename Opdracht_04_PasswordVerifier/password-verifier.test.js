const myFunctions = require("./password-verifier.js");

const passwordNot9 = 'henkie1';
const passwordMoreThan9 = 'henkie1234';
const passwordNotNull = 'henkie1';
const passwordEmpty = "";
const passwordOneUpper = 'Henkie123';
const passwordAllUpper = 'HENKIE123';
const passwordLower = 'henkie123';
const passwordDigit = 'Henkie123';
const passwordNoDigit = 'henkiiiee';
const passwordAllCaps = 'HEENNNKKKIIIEEE'

test("Password is shorter than 9 characters", () => {
    expect(myFunctions.hasRightLength(passwordNot9)).toBe(true);
    expect(myFunctions.hasRightLength(passwordMoreThan9)).toBe(false);
});

test("Password is not Null", function () {
    // const passwordNull = null;
    expect(myFunctions.isNotNull(passwordNotNull)).toBe(true);
    expect(myFunctions.isNotNull(passwordEmpty)).toBe(false);
    // expect(isNotNull(passwordNull)).toBe(false);
});

test('Password has at least one uppercase character', function () {
    expect(myFunctions.hasUpperCaseCharacter(passwordOneUpper)).toBe(true);
    expect(myFunctions.hasUpperCaseCharacter(passwordAllUpper)).toBe(true);
    expect(myFunctions.hasUpperCaseCharacter(passwordLower)).toBe(false);
});

test('Password has at least one lowercase character', function () {
    expect(myFunctions.hasLowerCaseCharacter(passwordOneUpper)).toBe(true);
    expect(myFunctions.hasLowerCaseCharacter(passwordAllUpper)).toBe(false);
    expect(myFunctions.hasLowerCaseCharacter(passwordLower)).toBe(true);
});

test('Password has at least one digit', function () {
    expect(myFunctions.hasDigit(passwordDigit)).toBe(true);
    expect(myFunctions.hasDigit(passwordNoDigit)).toBe(false);
});

test('Password has at least 3 out of 4 conditions and has lower case characters', function () {
    expect(myFunctions.verifyPassword(passwordNot9)).toBe(true);
    expect(myFunctions.verifyPassword(passwordMoreThan9)).toBe(true);
    expect(myFunctions.verifyPassword(passwordEmpty)).toBe(false);
    expect(myFunctions.verifyPassword(passwordLower)).toBe(true);
    expect(myFunctions.verifyPassword(passwordNoDigit)).toBe(false);
    expect(myFunctions.verifyPassword(passwordAllCaps)).toBe(false);
})
