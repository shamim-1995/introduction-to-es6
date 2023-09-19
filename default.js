// default.....if value is not provided, take this as a default.

function add(num1, num2 = 0){
    const result = num1 + num2;
    console.log(num1, num2, result);
    return result;
}

const sum = add(12, 23);

// const sum = add(10); //Undefined that means no result.

// const sum = add(); // Undefined that means no result.


function fullName(first, last){
    const full = first + ' ' + last;
    return full;
}

function friends(numbs = []){

}

