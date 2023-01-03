/**
 * @author ETOUMI Aristide
 * @description DI-Bootcamp Week2 Day3 ExercicesXPGold Exercice 1:Divisible By Three
 */

let numbers = [123, 8409, 100053, 333333333, 7];

//1-Loop through the array above and determine whether or not each number is divisible by three.
//2-Each time you loop console.log true or false.
for (const data in numbers) {
    console.log(data % 3 == 0);
}