// we basically use the + sign or , sign for concatenateing the strings but there is one more way tf doing this that is 
// const name= " devraj"
// const repoCount= 50
// console.log(`hellow my name is ${name}and my repo count is ${repoCount}`)// this way the representation is also good and it looks more professional
// // we can simply go the vlaue where we want ot go like acessing the value at certain place, now to use the protoype ( as a string)
 const gameName= new String('devraj')
// console.log(gameName[2]) // it follows the array patern or number 
// console.log(gameName.__proto__); 
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('v'));
// there is a feature of substring where we can tell from where and to where we have to take the value 
const newString= gameName.substring(0,4)
console.log(newString)

const anotherstring= gameName.slice(-8,4)
console.log(anotherstring)
// now to( trim odwn the first few gaps and last gaps in the string wehre the user can deliberately enter the gaps we can use trim fuctions like console.log(str.trim() ) ).
// there are other many functions also like console.log(url.includes('sudar')) it will help ot find the particular letter or word in the string