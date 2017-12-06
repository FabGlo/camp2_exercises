const toWords = require ("../to_words");

test("check the result if the parameter is undefined", () => {
  expect(toWords(undefined)).toBeFalsy();
});

test("when you send a sentence, the split works", () => {
  expect(toWords("Hello, my name is Fabien")).toEqual(["Hello","my","name","is","Fabien"]);
});
