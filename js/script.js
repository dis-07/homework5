'use strict';


////////////    Task #1

const  searchString = (originalStr, str) => {

    if (originalStr.includes(str)) {
        return true;
    } else {
        return false;
    }
    
}

console.log(searchString('hello', 'www'));


/////////////

////////////        Task #2


function capitalizeFirstLetter (str) {
    let upperLetter = str[0].toUpperCase() + str.slice(1);

    return upperLetter;
}


// function capitalizeFirstLetter (str) {
//     let letter = str[0];
//     console.log(letter);

//     let upperLetter = letter.toUpperCase();
//     console.log(upperLetter);

//     // letter = [upperLetter];

//     str

//     console.log(letter);

//     return;
    
// }

console.log(capitalizeFirstLetter('hello'));

// console.log('hello'[0].toUpperCase());


///////////////////

/////////////////       Task #3 решение подсмотрел, до концна не разобрался.


let trimString = function (string, length) {
    return string.length > length ? 
           string.substring(0, length) + '...' :
           string;
  };

console.log(trimString('lorem hello', 5));


////////////////

///////////////     Task #4


const students = [
    {
        name: 'John Smith',
        marks: [10, 8, 6, 9, 8, 7 ]
    },
    {
        name: 'John Doe',
        marks: [ 9, 8, 7, 6, 7 ]
    },
    {
        name: 'Thomas Anderson',
        marks: [6, 7, 10, 8 ]
    },
    {
        name: 'Jean-Baptiste Emanuel Zorg',
        marks: [10, 9, 8, 9 ]
    }
]

students.forEach(student => {

    let averageMark = student.marks.reduce((acc, marks) => acc + marks) / student.marks.length;
    
    return student.averageMark = averageMark;
});

console.log(students);