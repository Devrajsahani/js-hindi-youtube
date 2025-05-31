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