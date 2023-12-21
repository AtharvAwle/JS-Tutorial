//conversion of data types -> Numbers & Boolean

let score = "22"
//convert string in number
let numScore = Number(score)
console.log(typeof numScore);

let a = "8347djs"   //NaN not a number as it also consistes of alphabets
let numA = Number(a)
console.log(numA);

//  boolean to number
// let booleanToNum = true
let booleanToNum = false
let num = Number(booleanToNum)
console.log(num);



/*
           *NOTES*
CONVERSION TO NUMBERS           
"33" --> 33
"33and" --> NaN
true --> 1
false --> 0



CONVERSION TO BOOLEAN
"" --> FALSE
"......" --> TRUE
1 --> TRUE
0 --> FALSE
*/

// ****************************OPERATIONS*******************************************
// console.log(2+2); add
// console.log(2-2); sub
// console.log(2*2); multiply
// console.log(2**3); power
// console.log(2/3); divide
// console.log(2%3); modulo