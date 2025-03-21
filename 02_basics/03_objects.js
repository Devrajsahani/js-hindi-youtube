// now there are a lot of different ways through which we can actually make the objects in js like const jsuser, objects literals
const mySym= Symbol("key1")


const JsUser= {
    name:"devraj",
    age:18,
    email:"devraj@google.com",
    [mySym]:"myKeys1", // now it will be the symbol.
    Location:"bhilai",
    isLoggedIn:"false",
    lastLoginDays:["Monday", "Saturday"]
}
console.log(JsUser.email) // through this we can get the value of pair which is linked ot the object, the other way of printing is console.log(JsUser[email])
// this way of accessign the objects is very boring and interviewer also don't like it,
console.log(JsUser.mySym) // it will print the mysym but at the end it is not a symbol type meaning the mysym is still a string not a symbol 
// there is another fucntion called freeze which can be used to lock the value and resist the vlaues to change
// when ever we use back ticks `` it si known as string interpolation,and to add any values in between the lines ${} is used and inside it the elements are written, 
// and it is not always required that we access the values just by . we also can use the [] bracket for accessing.