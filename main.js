"use strict"

class User {
    constructor(username, useremail, password) {
        this.username = username;
        this.useremail = useremail;
        this.userpassword = password;
    }

    register() {
        console.log(this.username + ' is now registered');
    }
}

// inheriting User class 

class Menber extends User {
    constructor(username, useremail, password, member) {
        super(username, useremail, password); // super() for using the parent class properties. Another way is to assign the parameters again (eg: this.username = username)
        this.member = member;
    }

    getMembership() {
        console.log(this.username + ' is subscribed to the ' + this.member + ' membership');
    }
}

let bhargav = new Menber('bhargav', 'bhargavraju98', '123', 'prime');

bhargav.getMembership();
