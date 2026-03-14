const fruits: string[] = ['apple', 'banana', 'cherry'];
fruits.forEach((fruit) => {
    console.log(fruit);
});

const add = (x: number, y: number): number => {
    return x + y;
};
console.log(add(5, 10));

var sub : (a: number, b: number) => number = (a, b) => (a - b);
console.log(sub(10, 5));


let age: number = 30;
let id: string = '12345';
let isAdmin: boolean = true;
interface User {
    name: string;
    age: number;
    isAdmin: boolean;
}


