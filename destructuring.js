const actor = {
    name:'shamim',
    age:23,
    phone:'01786696775',
    money:123456
}
// const phone = actor.phone;
// const name = actor.name;
// const age = actor.age;


//if right side is on object left side of destructuring will be object as well.
// use property name as a variable that contains the property value.
const {phone, age} = actor

// console.log(phone);
// console.log(phone);
// console.log(phone);
// console.log(age);
// console.log(age);

// Array destructuring.
const numbers = [45, 99];
const [first, second] = numbers;
const [x, y] = [12, 66];


//
function doubleThem(a, b){
    return [a*2, b*2];
}

const [prothom, ditiyo] = doubleThem(6, 9);
console.log(prothom, ditiyo);