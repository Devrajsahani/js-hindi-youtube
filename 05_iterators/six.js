const mynums= [1,2,3,4,5,6,7,8,9,10]
// const newNums= mynums.filter( (num)=> num>4) // here we are suing the arrow fucntion and filter function in the same code like wise num is going to num>4 
// console.log(newNums) // if we are using the scopes then we have to return the value inside of the scope but if we are not then we can write simple console.log and print what we want. 
const newNums= mynums.filter( (num)=>{
    return num>4
})
console.log(newNums) // this is the method of using the gloabal scopes and returnig the value. and we can also use the filter and if they do the saem thing but if is little long to write.
// and again we have seen how can we use the filter optio which is availabel, and how we can use the arrow funtion and scopes in that.