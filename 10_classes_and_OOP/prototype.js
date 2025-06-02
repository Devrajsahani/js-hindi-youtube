 let myHeroes= ["thor","hulk", "ironman"];
 let heropower={
    thor:"hammer",
    hulk:"smash",
    spiderman:"sling",
    getSpiderPower : function(){
        console.log(`spidy power is &{this.spiderman}`);
    }
 }

 Object.prototype.hitesh = function (){
    console.log(`hites is present in all objects`);
 }

 Array.prototype.heyhitesh =function(){
    console.log(`hitesh says hello `);
 }

 myHeroes.hitesh();
 myHeroes.heyhitesh();
 // object.prototype use karke saare arrays, string, functions etch mein hitesh function add ho jayega and then we can  call it on any object, array , string, etc.

 // prototype is a property of an object that allows you to add properties and methods to the object. It is used to create inheritance in JavaScript.
// Every object in JavaScript has a prototype, which is an object that contains properties and methods that are shared by all instances of that object. When you create a new object, it inherits the properties and methods of its prototype. \
// and it runs in the background endlessly and checks if the property or method is present in the prototype or not. If it is not present, it will return undefined.
// prototype inheritance is a way to create a new object that inherits properties and methods from an existing object. This allows you to create a new object that has the same properties and methods as the existing object, without having to redefine them.