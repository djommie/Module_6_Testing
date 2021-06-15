const myFunctions = require("./password-verifier.js");

test("Password is shorter than 9 characters", () => {
    const passwordNot9 = 'henkie1';
    const passwordMoreThan9 = 'henkie1234';
    expect(myFunctions.hasRightLength(passwordNot9)).toBe(true);
    expect(myFunctions.hasRightLength(passwordMoreThan9)).toBe(false);
});



test("Password is not Null", function () {
    const passwordNotNull = 'henkie1';
    const passwordEmpty = "";
    // const passwordNull = null;
    expect(myFunctions.isNotNull(passwordNotNull)).toBe(true);
    expect(myFunctions.isNotNull(passwordEmpty)).toBe(false);
    // expect(isNotNull(passwordNull)).toBe(false);
})

test('Password had at least one uppercase character', function () {
    const passwordOneUpper = 'Henkie123';
    const passwordAllUpper = 'HENKIE123';
    const passwordLower = 'henkie123';
    expect(myFunctions.hasUpperCaseCharacter(passwordOneUpper)).toBe(true);
    expect(myFunctions.hasUpperCaseCharacter(passwordAllUpper)).toBe(true);
    expect(myFunctions.hasUpperCaseCharacter(passwordLower)).toBe(false);
})

test('Password had at least one lowercase character', function () {
    const passwordOneUpper = 'Henkie123';
    const passwordAllUpper = 'HENKIE123';
    const passwordLower = 'henkie123';
    expect(myFunctions.hasLowerCaseCharacter(passwordOneUpper)).toBe(false);
    expect(myFunctions.hasLowerCaseCharacter(passwordAllUpper)).toBe(false);
    expect(myFunctions.hasLowerCaseCharacter(passwordLower)).toBe(true);
})