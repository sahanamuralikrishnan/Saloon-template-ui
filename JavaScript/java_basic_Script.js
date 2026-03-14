//function for basic calculations
const add = (a, b) => a + b;
const sub = (a,b) => a - b; 
const mul = (a,b) => a * b;
const div = (a,b) => a / b;

console.log(add(5, 5));
console.log(sub(5, 5));
console.log(mul(5, 5));
console.log(div(5, 5));

// switch statement for festival wishes
let festival = "Holi";

switch (festival) {
    case "Diwali":
        console.log("Happy Diwali");
        break;
    case "Christmas":
        console.log("Merry Christmas");
        break;
    case "New Year":
        console.log("Happy New Year");
        break;
    case "Holi":
        console.log("Happy Holi");
        break;
    default:
        console.log("Invalid festival");
}

// switch statement for diet plan
let day = "sunday";

switch (day) {
    case "Monday":
        console.log("Monday:Oats with fruits,Red rice with Dal,fruits and milk ");
        break;
    case "Tuesday":
        console.log("Tuesday: Dosa with sambar,Moong Dal with Rice,soup and milk ");
        break;
    case "Wednesday":
        console.log("Wednesday:poha,paneer curry and chapathi,Tofu and Greens ");
        break;
    case "Thursday":
        console.log("Thursday: Idli with sambar,Rajma with Rice,soup and milk ");
        break;
    case "Friday":
        console.log("Friday:Upma,Mixed Veg Curry and chapathi,soup and milk ");
        break;
    case "Saturday":
        console.log("Saturday");
        break;
    case "Sunday":
        console.log("Sunday");
        break;
    default:
        console.log("Cheat day enjoy your favourite food");
}
//if-else statement for age group
let age = 50;

if (age < 13) {
    console.log("You are a child");
}
else if (age < 20) {
    console.log("You are a teenager");
}
else if (age < 60) {
    console.log("You are a Adult");
}
else {
    console.log("You are a Senior Citizen");
}

