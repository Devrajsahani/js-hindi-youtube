const promiseOne = new Promise(function(resolve, reject) {
    //do a async task 
    // db calls , crytography, network calls 
    setTimeout(function(){
        console.log("Asyn task is completed");
        resolve()
    },1000)
})  
// here the concept is that in promise we can do the async task and it has 2 methods 1 is resolbe and 2nd is reject first we will use resolve and then when it will be done then we will consume the promise using then method so the output here will be "Asyn task is completed" after 1 second and then "promise is consumed" will be printed. 

promiseOne.then(function(){
    console.log("promise is consumed");
})
// there is also a different way to write this promise code which is using the .then fucntion just after the promise is created.
const promiseTwo = new Promise(function(resolve, reject) {
    //do a async task 
    // db calls , crytography, network calls 
    setTimeout(function(){
        console.log("Asyn task is completed");
        resolve()
    },1000)
}).then(function(){
    console.log("promise is created");
})

const promisethree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username:"devraj", email: "sucksahani@gmail.com"}) // here resolve ke andar koi bhi parametere pass kar sakte hai and it will show it in the terminal.

    },1000)
}).then(function(user){
    console.log("user is created", user);
})

const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username:"devraj", password: "124"})
        }else{
            reject("Error: something went wrong")
        }
    },1000)
promiseFour.then((user)=>{
    console.log(user);
    return user.username
}).then((username)=>{
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(function(){
    console.log("the promise is either resolbed or rejected");
})
// here we are using the concept of the nested then functions in order to carry out all the things in a single promise.
// finally is used to execute the code after the promise is either resolved or rejected.
