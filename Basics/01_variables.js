const accId = 2214
let email = "atharv@aa.com"
//avoid using VAR due to its scope problem use CONST and LET insted
var accCity = "Mumbai"
accState = "maharastra"


//changing the data in variables of LET,VAR
email = "awle@a.in"
accCity = "domb"
accState = "maha"


//table is used when we have to log multiple variables at one time.
console.table([accId , email , accCity, accState]);