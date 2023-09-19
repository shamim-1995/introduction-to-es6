const glass = {name:'glass',
    color:'golden',
    price:12,
    isCleaned:true 
};

console.log(glass);
//Output:
//{ name: 'glass', color: 'golden', price: 12, isCleaned: true }

// give me all properties names.
const keys = Object.keys(glass);
console.log(keys);
// Output:
//[ 'name', 'color', 'price', 'isCleaned' ]

// give me all properties values.
const values = Object.values(glass);
console.log(values);
// Output:
//[ 'glass', 'golden', 12, true ]

// joray joray dibe.
const entries = Object.entries(glass);
console.log(entries);
// Output:
// //[
//     [ 'name', 'glass' ],
//     [ 'color', 'golden' ],
//     [ 'price', 12 ],
//     [ 'isCleaned', true ]
//   ]
  



delete glass.isCleaned;
console.log(glass);



const {isCleaned, ...shortGlass} = glass;
console.log(shortGlass);



// Freeze

// Object.freeze(glass);
glass.source = 'Bangladesh';
glass.price = 5000;
delete glass.name;
console.log(glass);



// Seal.
Object.seal(glass);
glass.source = 'Bangladesh';
glass.price = 5000;
delete glass.name;
console.log(glass);
