// const tinderUser= new Object()
// const tinderUser ={} // creation of object
// tinderUser.id="123abc"
// tinderUser.name="devraj"
// tinderUser.isLoggedIn= false;
// console.log(tinderUser)

// const regularUser= { // object ke andar object
//     email:"some@gmail.com",
//     fullname:{
//         Userfullname:{
//             firstname: "devraj",
//             lastname: "sahani"

//         }
//     }
// }
// console.log(regularUser.fullname) // so if the vlaue is not there then we cnause ? to show that if the value is there or not, helpful in API calling 
// const obj1= {1:"a", 2:"b"}
// const obj2={3:"C", 4:"D"}
// const obj3= Object.assign(obj1, obj2)// the answer which will come here will be like a string in a array, 
// console.log(obj3);
// we cna also take the keys and convert it inot the array and then the array operations like loops and other things cna be operated in it.\
// hasOwnProperty('name') it shows if that is there in the data or not.

// destructring of the objects
const course= {
    coursename:"js in hindi",
    price: "99",
    courseInstructor:"devraj"
}
const {courseInstructor}= course
console.log(courseInstructor)

// all the api callings are done on the objects and the json are the objects only directly or in directly 
// some times the apis are also fetched in the form of array 
// and there are a lot of tools in the market whcih can explain the api structure like json text extractor,