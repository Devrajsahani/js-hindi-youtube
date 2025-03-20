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