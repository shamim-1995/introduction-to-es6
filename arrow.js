
// Function declaration.

// function add(a, b){
//     const result = a + b;
//     return result;
// }
function add(a, b){
    
    return a + b;
}

// Function expression.
const add2 = function(a, b){
    return a + b;
}

// Arrow function.
const add3 = (a, b) => a + b;

const add4 = (num1, num2, num3, num4) => num1+ num2 + num3 + num4;

// const sum = add3(12, 91);

const sum = add4(12, 23, 78, 90);
// console.log(sum);


// Multiplication by arrow function.

const multiply = (num1, num2, num3) => num1 * num2 * num3;

const multiplication = multiply(12, 23, 13) ;
console.log(multiplication);