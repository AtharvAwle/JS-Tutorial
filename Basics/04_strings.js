let name = "atharv"
let repoCount = 50
const numberOfPeople = 999
const number = new String('atharvawle')
//log using backtex syntax
//string interpolation using placeholders- &{}
console.log(`hey my name is ${name} and i have ${numberOfPeople} under me and i have ${repoCount} many repos in my github repositries.`);

//Various methods for String:

const a = new String("hello world")

// console.log(a[4]);  
// console.log(a.charAt(3));  //character at this index.
// console.log(a.indexOf('h'));  //to find the index.
// console.log(a.length);  //to get the length of a string.
// console.log(a.toUpperCase());  //to upper case.
// console.log(a.toLowerCase());   //to lower case.

// +++++++++++++++++++IMP METHODS+++++++++++++++++++++++++++++++++++++

//slice- method where we can put negative args too
let newA = a.slice(1 , 3)
console.log(newA);

// TRIM- it trims the unnessary spaces and gaps in a given string
const newString = "       atharv    "
console.log(newString);
console.log(newString.trim());

//REPLACE- it replaces a specific thing in a striing as per our choice

const str = "heyy the this is atharv awle"
console.log(str.replace("atharv" , "jodd"));  //first place what you want to replace secont place with what you want to replace this.


//INCLUDES- Check if somethings is there in our string or not there
const awl = "hey my name is awle"
console.log(awl.includes("name"));  //gives the ans in true or false.