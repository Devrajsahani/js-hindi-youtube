// so the codeflow of the js code is like first it will go the the Global  execution context which is referred to  "this" value and the GEC of the browser and node.js is different basically it can be different for any of the variable environment, but if we talk about the browser content then window is used 
// js is single threaded, global  execution context, fucntional execution context, Eval execution context, 
// the js code is runned in 2 phase 1st one is the memory creation phase then execution phase 
// so first the code is runned inthe memory creation phase then all the values are stored in the undefined data type then a memory is created that is the variable environment+ execution thread then the code is executed and that environment is deleted after the completion 
// and all this things are happening in the stack so it follows LIFO concept
// it is called the nullish coalescing operator (??): null defined
//the null and undefined ? function is only made for these 2 only 

// if we want to check the length of the object then we only do it by taking the keys of the objects like (object.keys(emptyobj).lenght ===0){
//console.log("object in empty");}

// terniary operator
const icePower= 100;
icePower<= 80? console.log("less than 80"): console.log("more than 80")