// const score= 400;
// console.log(score); // here js will automatically define the 400 as number without us defining 

// const balance = new Number (100) // here new is also a datatype like other, and number here defines specifically that here 100 is a number.
// console.log(balance)

// console.log(balance.toString().length);
// console.log(balance.toFixed(1)); // here we can give the percesion value like upto 2 digit or 3 digit or anything of our choice.
// // now we can also set the zero sytem like in the other countries hundred thousand things are there but in india lakh systme goes so we can give that also 
// const hundreds= 10000;
// console.log(hundreds.toLocaleString('en-IN'));// here the currency ssytem will be changed to indian.
// maths library comes built in with js 
// abs value like absolute value it becomes positive instead of negative
// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.11)); // it is a fucntion like round off but it chooses the nearest value like if it is 4.11 it will choose 4, or if it is 4.6 then also 4.
// console.log(Math.min(4,5,6,7,87)) // chooses the min value
console.log(Math.random()); // the vlaue is gives is always between 0 and 1 and if we multiply it with 10 then we cna get the value we want 
console.log((Math.random()*10)+1);
console.log(Math.floor(Math.random()*10+1));
const min=10;
const max=20;

console.log(Math.floor(Math.random() * (max-min+1))+ min); // here first it will get the value random in decimal then then it will multiply with the min-max+1 then again add the min that is 10 so that it will come between the max and min.
