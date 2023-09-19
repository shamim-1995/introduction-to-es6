// var: no reason to use var.
// let: allow it to reassign
// const: do not allow to reassign.

const money = 25;
// const money = 70; // not reassign.
const rich = money + 50;
console.log(rich);


let count = 10;
count = count + 19;
console.log(count);


const numbers = [12, 23, 45, 123];
console.log(numbers);
// numbers = [12, 34, 89, 90];  // not valid

numbers [1] = 55;
numbers.push(124, 78, 98);
console.log(numbers);

// Object

const student = {
    name:'Shamim sikdar',
    class:12,

}
// for change name.
student.name = 'sikdar';
console.log(student);


// Loop.
let sum = 0;
for(let i = 0; i < 100; i++){
sum = sum + i;

}
console.log(sum);
;
