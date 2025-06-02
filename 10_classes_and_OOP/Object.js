// console.log(multipleBy5(5));
// console.log(multipleBy5.power);
// console.log(multipleBy5.prototype);





function createuser(username, score){
    this.username =username;
    this.score= score;
}

createuser.prototype.increment = function(){
    score++;
}

createuser.prototype.printme = function(){
    console.log(`score is ${this.score} and username is ${this.username}`);
}

const chain = createuser("char", 25);
const tea = createuser("tea", 250);

// fucntion , array , string everything is an object, and they all give output as null when we try to access their prototype property.
// access karne ka tarika hai ki jisko bhi call kiya hai uske name ke samne this laga do 
// a new object is created: The new keyword initiates the creation of new javascript object 
// A prototype is linked : the newly created object is linked to the prototype of the constructor function. thsi means that it has access to the properties and methods defined in the prototype of the constructor function.
// The constructor function is called: The constructor function is executed with the newly created object as its context (this). This means that any properties or methods defined within the constructor function will be added to the new object.
// The new object is returned: The newly created object is returned as the result of the new expression. If the constructor function does not explicitly return an object, the new object is returned by default.