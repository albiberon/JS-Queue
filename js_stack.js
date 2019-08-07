//Array in the code is used as a queue abstract data structure.
//The function adds one item in the end of the queue and returns the 
//first item while removing it from the queue. 

function nextInline (arr, item) {
    arr.push(item);
    //shift() removes the first item in the array.
    return arr.shift();
}

var testArray = [1,2,3,4,5];

console.log("Before: " + JSON.stringify(testArray));
console.log(nextInline(testArray, 6));
console.log("After: " + JSON.stringify(testArray));