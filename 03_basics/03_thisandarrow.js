// const user = {
//     username:"devraj",
//     price: 199,
//     welcomemessage:function(){
//         console.log(`${this.username}, is verified and welcome to the website`);// now this way we can give the reference to the username but this keyword will give the reference toonly the user const. and the current context of the content or object can be changed further and it will call that only 
//     }
// }
// user.welcomemessage()
// user.username="Sahani"
// user.welcomemessage()
// browser ke andar global object jo hota hai vo window object hota hai jiske andar saare different objects hote hai, tabhi toh browser ke andar ke differnt window click ho paate hai 
// this keywrod is only used in the object not under the fucntion, this is not being explained yet but yes,
const chai=()=>{
    let username="Devrajsahani"
    console.log(this)
}
chai()
// the arrow fucntion is basically defiend by the brackets then => and then the curly brackets then the objects declaration.
// the arrow function is basixally defiend by ()=>{} and the content is wriiten under the curly brackets 
// the other way of using the arrow function is simply write the function and => give the parameters and return the value that's it. but the reutrn value needs to be int he ()

const addTwo = (num1,num2)=>(num1+num2)
console.log(addTwo(3,4));
// the explicitly use of the fucntion is returning the fucntion after declaration 
// normal fucntion mein this use nahi hota hai vo global value hai 