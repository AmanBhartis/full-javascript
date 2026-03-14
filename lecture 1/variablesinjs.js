let number1 = 10
let number2 = 20

let sum = number1 + number2

console.log(sum) // 30
 number1 = 15 // number1 is now 15, but sum is still 30 because it was calculated before the change
 console.log(number1+number2) 



 var name = "John"
    console.log(name) // John
    name = "Doe"
    console.log(name) // Doe

const pi = 3.14
console.log(pi) // 3.14
// pi = 3.14159 // This will cause an error because pi is a constant and cannot be reassigned