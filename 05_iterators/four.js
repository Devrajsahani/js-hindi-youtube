const myObject={
    js:'javascript',
    cpp:'C++',
    rb:'ruby',
    swift:'swift by apple'
}
for (const key in myObject) {
    // console.log(`${key} shortcut is for ${myObject[key]} `)
   
}

const programming=["js","rb","py","java"]
for (const key in programming) {
    console.log(key);

}
// so here the const is printing the keys like at which place is the key.
// maps is not iterable and cannot be runned inthe for loop 
// objects ke upar loop lagana hoga toh for in loop use kar lenge fat se and array ke upar koi bhi loop chalega 
