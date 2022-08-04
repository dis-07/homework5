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
