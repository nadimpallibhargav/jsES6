"use strict"

class User {
    constructor(username, useremail, password) {
        this.username = username;
        this.useremail = useremail;
        this.userpassword = password;
    }

    register() {
        console.log(this.username + 'registerd succesfully');
    }
}

let bhargav = new User('bhargav', 'bhargavraju98@gmail.com', '123@98');