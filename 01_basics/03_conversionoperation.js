let score= 33;
console.log(typeof(score));
let valueInNumber = Number(score); // here the variable score is converted to the number format like the integer
console.log(valueInNumber); // so sometime it will give a number format or the other format so be precative with it or else it will give NaN ( it some kind of bug in the languge and that is why a lot of coder use typescript)
// shortform of not a number is "NaN" it is only shown when it not able to convert or shows error in processing 
// true-> 1
// false->0 
let isloggedin = 1
let booleanIsLoggesIn= Boolean(isloggedin)
console.log(booleanIsLoggesIn) // when we use the empty string then it give false in boolean expression 
console.log(1+2+"2");// so here we weill get 32 as output 
console.log("1"+2+2); // but here we will get 122 as output because in echmascript there are several rules which are associated with the printing of the numbers and how it will be printed.
// so we don;t have to dependant on these code or we can use parantesis for better understanding. 