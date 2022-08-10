'use strict';


// ////////////    Task #1

// const  searchString = (originalStr, str) => {

//     if (originalStr.includes(str)) {
//         return true;
//     } else {
//         return false;
//     }
    
// }

// console.log(searchString('hello', 'www'));


// /////////////

// ////////////        Task #2


// function capitalizeFirstLetter (str) {
//     let upperLetter = str[0].toUpperCase() + str.slice(1);

//     return upperLetter;
// }


// // function capitalizeFirstLetter (str) {
// //     let letter = str[0];
// //     console.log(letter);

// //     let upperLetter = letter.toUpperCase();
// //     console.log(upperLetter);

// //     // letter = [upperLetter];

// //     str

// //     console.log(letter);

// //     return;
    
// // }

// console.log(capitalizeFirstLetter('hello'));

// // console.log('hello'[0].toUpperCase());


// ///////////////////

// /////////////////       Task #3 решение подсмотрел, до концна не разобрался.


// let trimString = function (string, length) {
//     return string.length > length ? 
//            string.substring(0, length) + '...' :
//            string;
//   };

// console.log(trimString('lorem hello', 5));


// ////////////////

// ///////////////     Task #4


// const students = [
//     {
//         name: 'John Smith',
//         marks: [10, 8, 6, 9, 8, 7 ]
//     },
//     {
//         name: 'John Doe',
//         marks: [ 9, 8, 7, 6, 7 ]
//     },
//     {
//         name: 'Thomas Anderson',
//         marks: [6, 7, 10, 8 ]
//     },
//     {
//         name: 'Jean-Baptiste Emanuel Zorg',
//         marks: [10, 9, 8, 9 ]
//     }
// ]

// students.forEach(student => {

//     let averageMark = student.marks.reduce((acc, marks) => acc + marks) / student.marks.length;
    
//     return student.averageMark = averageMark;
// });

// console.log(students);


/////////////

//////////        Task #5

// const vehicles = [
//     { make: 'Honda', model: 'CR-V', type: 'suv', price: 24045 },
//     { make: 'Honda', model: 'Accord', type: 'sedan', price: 22455 },
//     { make: 'Mazda', model: 'Mazda 6', type: 'sedan', price: 24195 },
//     { make: 'Mazda', model: 'CX-9', type: 'suv', price: 31520 },
//     { make: 'Toyota', model: '4Runner', type: 'suv', price: 34210 },
//     { make: 'Toyota', model: 'Sequoia', type: 'SUV', price: 45560 },
//     { make: 'Toyota', model: 'Tacoma', type: 'truck', price: 24320 },
//     { make: 'Ford', model: 'F-150', type: 'truck', price: 27110 },
//     { make: 'Ford', model: 'Fusion', type: 'sedan', price: 22120 },
//     { make: 'Ford', model: 'Explorer', type: 'SUV', price: 31660 }
//   ];

//   const filterVehicles = vehicles.filter((vehicle) => {

//     return vehicle.type.toLowerCase() === 'suv';
//   });

//   console.log(filterVehicles);

// let average = filterVehicles.reduce((acc, price) => acc + price.price, 0) / filterVehicles.length;
// console.log(average);

///////

////////////      Task #6

// const user = {
//     name: 'John', age: 22, salary: null,
// }

// let getKeysCount = () => {
//     return Object.keys(user).length;
// }

// console.log(getKeysCount());


/////////////

////////////        Task #7


// let arr = [10, 20, 3, 4, 0, 99, 97];

// function copySorted(arr) {
//     return arr.slice().sort();
// }

// let sorted = copySorted(arr);

// console.log(sorted);

// let sorted = arr.slice();

// sorted.sort((a, b) => a - b);

// console.log(sorted);

// console.log(arr);
