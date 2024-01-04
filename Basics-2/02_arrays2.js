//MORE IMP METHODS OF ARRAYS

const marvelHeros = ["thor" , "Ironman" , "Spiderman"]
const dcHeros = ["superman" , "Batman" , "Flash"]

//COMBINING TWO ARRAYS
const combine2array = marvelHeros.concat(dcHeros)
console.log(combine2array);

//COMBINE 2 OR MORE ARRAYS
const hero = ["shaktiman" , "nagraj" , "pintu"]
const moreArray = [...marvelHeros , ...dcHeros , ...hero]
console.log(moreArray);