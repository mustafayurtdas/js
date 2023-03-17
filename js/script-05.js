/*Girilen iki sayının ortalamasını hesaplayan ve sonucu gösteren programı yazınız
*/

// prompt herşeyi string olarak algılar.
const num1 = Number( prompt("Enter 1th number") );
const num2 = Number( prompt("Enter 2th number") );


console.log(typeof num1);

const result = (num1 + num2) / 2;

alert("The average of two numbers: " + result);
