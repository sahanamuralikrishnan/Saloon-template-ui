//function for basic calculations using arrow functions
const add = (a, b) => a + b;
const sub = (a, b) => a - b;
const mul = (a, b) => a * b;
const div = (a, b) => a / b;

console.log(add(5, 5));
console.log(sub(5, 5));
console.log(mul(5, 5));
console.log(div(5, 5));

// Our person object using destructuring and rest operator
let person = {
    name: "Alica",
    gender: "Female",   
    age: 25,
    qualification: "B.Sc",
    degree: "Computer Science",
    address: "123 Main St, Anytown, USA",
    pincode: "12345",
    mobile: "123-456-7890",
}

let { name, gender, age, qualification, degree, ...otherDetails } = person;

console.log(name);
console.log(gender);
console.log(age);
console.log(qualification);
console.log(degree);
console.log(otherDetails);

