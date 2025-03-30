const mynum=[1,2,3,4,5,6,7,8,9,10]
// const newnums=mynum.map( (num)=> num+10) //  map basically do the operation on the elements of the array, or the data without changing the actual data or element in the array.
// console.log(newnums);
// const newnums=mynum.map( (num)=> {return num+10}) // this is the way to using the global function 
const newnums= mynum
               .map((num)=>num*10)
               .map((num)=>num+1)
               .filter((num)=>num>=40)
console.log(newnums)
// this is the way we can use different fucntion in one way 