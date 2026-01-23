// console.log('hi');
// let name = 'value1'; // string
// let age = 19; // number
// let isStudent = true; // boolean
// let score = null; // null
// let address; // undefined

// let arr = [['ad'], 'two', false, name]; // array
// let obj = { key1: 'value1', key2: 42, key3: false, name }; // object
// let i = 0


// for(; i <= 5; i++) {
//     console.log(i);
// }

// while(i < 5) {
//     console.log(i);
//     i++;
// }

// do {
//     console.log(i);
//     i++;
// } while (i < 5);

// if (age > 19) {
//     console.log('Adult');
// } else if(age === 19 && name !== 'value') {
//     console.log('Just became an adult');
// } else {
//     console.log('Minor');
// }

// switch (age) {
//     case 'value1':
//         console.log('Name is value1');
//         break;
//     case 'value2':
//         console.log('Name is value2');
//         break;
//     default:
//         console.log('Name is something else');
// }

// console.log(name);
// console.log(age);
// console.log(isStudent);
// console.log(score);
// console.log(address);
// console.log(arr);
// console.log(obj);
// console.log(arr[0][0]);
// arr[0][0] = 'changed';
// console.log(arr[0][0][0]);

// console.log(obj.key3 = 'sldfkj');

function greetUser(userName, greeting = 'Hello') {
    console.log(greeting + ', ' + userName + '!');
    return 'Greeted ' + userName;
}

let a = greetUser( 'Ahmed', 'Hi');
console.log(a);

greetUser('Bob');

function addNumbers(a, b) {
    return a + b;
}

let sum = addNumbers(5, 10);
console.log(sum);