const verifyPassword = require("./password-verifier.js");
const hasRightLength = require("./password-verifier.js");
const isNotNull = require("./password-verifier.js");
const hasUpperCaseCharacter = require("./password-verifier.js");
const hasLowerCaseCharacter = require("./password-verifier.js");

test("Password is shorter than 9 characters", () => {
    const passwordNot9 = 'henkie1';
    const passwordMoreThan9 = 'henkie1234';
    expect(hasRightLength(passwordNot9)).toBe(true);
    expect(hasRightLength(passwordMoreThan9)).toBe(false);
});



// test("Password is not Null", function () {
//     const passwordNotNull = 'henkie1';
//     const passwordEmpty = "";
//     // const passwordNull = null;
//     expect(isNotNull(passwordNotNull)).toBe(true);
//     expect(isNotNull(passwordEmpty)).toBe(false);
//     // expect(isNotNull(passwordNull)).toBe(false);
// })

// test('Password had at least one uppercase character', function () {
//     const passwordOneUpper = 'Henkie123';
//     const passwordAllUpper = 'HENKIE123';
//     const passwordLower = 'henkie123';
//     expect(hasUpperCaseCharacter(passwordOneUpper)).toBe(true);
//     expect(hasUpperCaseCharacter(passwordAllUpper)).toBe(true);
//     expect(hasUpperCaseCharacter(passwordLower)).toBe(false);
// })

// test('Password had at leas one lowercase character', function () {
//     const passwordOneUpper = 'Henkie123';
//     const passwordAllUpper = 'HENKIE123';
//     const passwordLower = 'henkie123';
//     expect(hasLowerCaseCharacter(passwordOneUpper)).toBe(false);
//     expect(hasLowerCaseCharacter(passwordAllUpper)).toBe(false);
//     expect(hasLowerCaseCharacter(passwordLower)).toBe(true);
// })