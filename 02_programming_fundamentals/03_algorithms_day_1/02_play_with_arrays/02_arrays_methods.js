/*
 ## Use some methods
 */

// Rewrite your array `digits` using `push`;
const digits = [0, 1];
digits.push(2, 3, 4, 5, 6, 7, 8, 9);

// rewrite your variable `last` using `length`;
const last = digits [digits.length - 1];

// create another array called `litteralDigits` from `zero` to `nine` where each array entry is a spelled-out number;
const litteralDigits = ["zero" , "one" , "two" , "three" , "four" , "five" , "six" , "seven" , "eight" , "nine"];

// use `join` to create, into the variable `allDigits`, a string like this : `zero - one ...`.
const allDigits = litteralDigits.join(" - ");
