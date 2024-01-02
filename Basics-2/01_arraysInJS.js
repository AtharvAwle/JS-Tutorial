//arrays

// 01- DECLARATION
const arr = [1,2,3,4,5]
const arr2 = new Array("awle" , "atharv" , "ayush" , 1 ,3,4,5,6) //we can store multiple datatypes in a single array
//console.log(arr2[4]); //retreving the data from a array set


// 02- array methods

arr2.push("vinodAwle") //new element is added to the end of the array
arr2.pop()//last elememt is removed form the array
arr2.unshift(9) //inserts the element at the start of the array.
arr2.shift() //removes the first elemsnt form the array and returnns it.
arr2.includes("atharv") //checks if the element is present in the arrar [BOOLEAN RETURN TYPE]
console.log(arr2.includes("atharv"));
console.log(arr2.indexOf(5)); //Gives the index of our element.


//JOINS IN ARRAY
const newArr = arr2.join() //Join the elemtnts of previous array and also converts it into a STRING.
console.log(typeof newArr);


//SLICE & SPLICE.
const array = [1,2,3,4,5,6,7,8,9,10]
const array2 = [11,12,13,14,15,16,17,18,19,20]

//01- SLICE
console.log(array.slice(1,3)); //1 index to 2 index SLICE

//02- SPLICE
console.log(array2.splice(1,3)); //1 index to 3 index SPLICE
//SPLICE manupulate the original array and cuts the portion which is spliced

