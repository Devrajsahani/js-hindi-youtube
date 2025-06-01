const user ={
    username:"Devraj",
    logincount:9,
    signedIn: true,

    gotuserdetails:function(){
    console.log("got user details");
}
}

console.log(user.logincount);
console.log(user.getuserdetails);

// this keyword is used to refer to the current object and is used in classes or to target the current object properties or methods. because in case of objects, the function is not bound to the object, so we need to use this keyword to refer to the current object. 

const promiseone= new Promise()
// here new keyword is the constructor function that creates a new object.
// 1 object literal se bahut saare instances create kar sakte hain.
// aur baki instances usses effect nahi hote hai 
// 1.jab bhi new keyword use karte hai toh ek empty instance create hota hai.
// 2. constructor function se bhi object create kar sakte hain.
// 3. jo bhi ye this keyword ( pichle notes.md mein likah hai sab this keyword ke baare mein ) hai vo sab uss instance mein jake save ho jate hai 

// instance.of bhi ek keyword hai jo check karta hai ki ye instance kis class ka hai.