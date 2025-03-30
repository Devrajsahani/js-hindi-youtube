const myNums=[1,2,3]

// const mytotal=myNums.reduce(function(acc, currval){ // here we have just used the normal fucntion,
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// },0)
// const myTotal= myNums.reduce((acc,curr)=>acc+currval,0)
// console.log(mytotal)

// we use reduce for sum, aggregation and for other mathimatical thing and it works with object, numbers and more and accumulator ( acc )stores the value or the updated value inside them 
const items = [
    { name: "Laptop", price: 60000 },
    { name: "Phone", price: 30000 },
    { name: "Headphones", price: 2000 },
    { name: "Mouse", price: 800 },
    { name: "Keyboard", price: 1500 }
];
const pricetopay= items.reduce((acc,items)=>acc+items.price,0) // here we are using the 0 because we don;t want to see the unneccsary numbers inthe list 
console.log(pricetopay)
