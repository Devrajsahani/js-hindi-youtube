// so the way the data is being stored and used is defined as primitive or non primitive 
//7 types : string , number, Boolean, Null, undefined, symbol, BigInt they all ar the primitive
// non primitive ( refrence type)
// array, objects, functions ,  
// numbers here are treated as numbers doesn;t matter if it is decimal or what, also if we don't define anything if will be automatically taken as null
let useremail; // here the useremail will be taken as null without declaring it null
const id= symbol('123') // for creating the uniquness such as id or anything
const anotherId = symbol('123')// even if we get both the value same symbol wil return different value this is the work of symbol 
console.log(id==anotherId); // when we will return it, it will give different value so the answer will come as false, 
const bigNumber= 39479375927598439857934n
const MyFunction=  function(){
    console.log("hello world")

}// this is how we can make a fucntion or declare a fucntion 
// if we use the type of fucntion then null will give object, boolean will give boolean, number will give number, string - string , object( native or host and does omplement call)- function 
// so all the non primitive value will give object on returnign the typeof