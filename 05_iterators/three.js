const arr = [1,2,3,4,5]
// for of loop used for arrays of high order. 
for (const num of arr) {
    // console.log(num); // here num is the iterators like we use the i, j or anything ot signify the iterators that's it,
    
}
const greetings= 'Hello break world' ;
for (const greet of greetings) {
    console.log(`Each char is ${greet}`) // like if we want to use the break function like if the space is reached then the loop should break then using if we can do it.
    
}
// maps are known for unique entries and also all the values are in the way that they are written and 
// const map= new Map()
// to destructure the array we can simply do the [key, value ] pair in the syntax
const mygame= {
    'game1':'NFS',
    'game2':'spiderman'
}
for (const [key, value] of mygame) {
    console.log(key,':-',value);
    
}
// maps are iterable but the objects are not iterable;
