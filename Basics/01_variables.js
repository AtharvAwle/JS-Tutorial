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


// Const --> We cannot change the value of variable
//Let --> We can change the value of the variable
// Var --> Avoid using VAR when we are declaring a variable as it has issue with scope