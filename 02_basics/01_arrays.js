const myArr= [0,1,2,3,4,5,6,7,8,9,10,"devraj"] // access only through the place of the array. when we can share the the elements of the array we share the deep and shallow copies.
// shallow copies share the refrence of the copied element means the element is not copied but it's reference is.
// deep copies of an object is the copy whose properties do not share the small refrence as those of source object from which the copy was made.
const myArr2 = new Array(1,2,3,4,5) // so here we can also give the new variable to keyword and when we do that we can use the parathesis to store the values.
// array methods
// myArr.push(6)
// console.log(myArr);
// myArr.unshift(2) // basically ti deletes the value
// myArr.shift(99) it takes the value inside.
// console.log(myArr)
// slice, splice
console.log("A", myArr);

const myn1= myArr.slice(1,3)
console.log(myn1);
console.log ("B", myArr);

const myn2= myArr.splice(1,3)
console.log(myn2);

// in slice all the elements which are under the category of printing they are printed.
// and in splice the elements which are under the category are removed and the listt is printed 
