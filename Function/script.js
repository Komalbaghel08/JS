// WAP to print sum of two numbers using fun type three


// function sum(a, b) {
//   return a + b;
// }
// let result = sum(10, 20);
// console.log("The sum is:", result)

// function check(num) {
//   if (num % 2 === 0) {
//     console.log("Even num");
//   } else {
//     console.log("Odd num");
//   }
// }

// let n = parseInt(prompt("Enter:")); 
// check(n)


// QUE -- > table print using fun type two
function printTable(num) {
  for (let i = 1; i <= 10; i++) {
    console.log(num + " x " + i + " = " + (num * i));
  }
}
printTable(3); 
