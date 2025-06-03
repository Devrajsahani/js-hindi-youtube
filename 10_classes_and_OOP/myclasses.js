//ES6

class user{
    constructor (username, email, password){
        this.username = username;
        this.email = email;
        this.password= password;
    }

    encryptPassword(){
        return `${this.password}abc`
    }
}

const chai = new user("chai","chai@gmail.com","231")

console.log(chai.encryptPassword());
// classes are set and then while printing they are being called using the fucntion method like here you can read the code and know what is happening 