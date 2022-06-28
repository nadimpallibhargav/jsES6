"use strict"

class User {
    constructor(username, useremail, password) {
        this.username = username;
        this.useremail = useremail;
        this.userpassword = password;
    }

    static countUsers() {
        console.log('There are 50 users');
    }
}

User.countUsers();