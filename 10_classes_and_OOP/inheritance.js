class user {
    constructor(username){
        this.username = username;

    }
    logMe(){
        console.log(`USERNAME IS ${this.username}`);
    }
}

class teacher extends user{
    constructor(username,email,password){
        this.email = email;
        this.password=password;
        super(username) 
    }

    addcourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const chai = teacher ("chai", "chai@teacher.com","123");
chai.addcourse();

//In JavaScript, the extends keyword is used in classes to implement inheritance — it allows one class to inherit properties and methods from another.

