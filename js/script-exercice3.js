/**
 * @author ETOUMI Aristide
 * @description DI-Bootcamp Week2 Day3 ExercicesXPGold Exercice 3:Playing With Numbers
 */

/*
Requirements : Don’t use built-in Javascript methods to answer the following questions. You have to create the logic by yourself. Use simple for loops.


1. Console.log the sum of all the numbers in the age array.
2. Console.log the highest age in the array.
*/

let age = [20, 5, 12, 43, 98, 55];

let sum = 0;
let highest = age[0];

for (let i = 0; i < age.length; i++) {
    sum += age[i];
    if (age[i] > highest) highest = age[i];
}

console.log("The sum of all the numers in the age is " + sum);
console.log("The highest age is " + highest);