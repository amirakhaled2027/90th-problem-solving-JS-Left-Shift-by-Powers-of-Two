//Write a function that mimics (without the use of <<) the left shift operator and returns the result from the two given integers.

//THOUGHT PROCESS
// Math.pow(3, 2) = 9;

//  a << b   =   a * (2^b)

// 5 << 1    =   5* (2^1)  = 10
// 5 << 2    =   5* (2^2)  = 20
// 5 << 3    =   5* (2^3)  = 40

function shiftToLeft(x, y) {
    let equation = x * Math.pow(2, y);
    return equation;
}
console.log(shiftToLeft(5, 2));
console.log(shiftToLeft(10, 3));
console.log(shiftToLeft(-32, 2));
console.log(shiftToLeft(-6, 5));
console.log(shiftToLeft(12, 4));
console.log(shiftToLeft(46, 6));