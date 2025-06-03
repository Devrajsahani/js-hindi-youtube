// there are some property in the js which cannot be changed like the value of the math.pi which will always be 3.14
// if you try to change the values it wil not work but using object.getownpropertydescriptor(math) we can do so 
const descriptor = Object.getOwnPropertyDescriptor(Math,"PI")
console.log(descriptor)

const chai={
    name:'ginger chai',
    price: 250,
    isAvailable: true,
}
console.log(Object.getOwnPropertyDescriptor(chai,"name"));