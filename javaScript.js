//prime number
// function isPrime(num) {

//     if (num === 2) {
//       return true;
//     } else if (num > 1) {
//       for (var i = 2; i < num; i++) {
  
//         if (num % i !== 0) {
//           return true;
//         } else if (num === i * i) {
//           return false
//         } else {
//           return false;
//         }
//       }
//     } else {
//       return false;
//     }
  
//   }
  
//   console.log(isPrime(6))

//factroial using recursion
// var number = 2
// if (number < 0) {
//     console.log('Error');
// }

// // if number is 0
// else if (number === 0) {
//     console.log(`The factorial of ${number} is 1.`);
// }

// // if number is positive
// else {
//     let fact = 1;
//     for (i = 1; i <= number; i++) {
//         fact *= i;
//     }
//     console.log(fact);
// }

function leapyear(year)
{
return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
}
console.log(leapyear(2016));
console.log(leapyear(2000));
console.log(leapyear(1700));
console.log(leapyear(1800));
console.log(leapyear(100));