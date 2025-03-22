// scope is also written in the curly braces {}, 
if(true){
    // like if i have written the if and given true then it is compalsory for me to go into the loop 
}
let a= 300
if (true){
    let a=20
    const b=20
    console.log("INNER:", a);
}

console.log(a);

// the concept of global and local here is so simple and same as always that the global value is written obuside the object whereas the local value is given in the object or inside any bracket.