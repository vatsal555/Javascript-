class user {
    constructor(email,password) {
        this.email = email
        this.password = password
    }

    get email() {
        return this._email.toUpperCase()
    }

    set email(value) {
        this._email = value
    }


    get password() {
        return `${this._password}vatsal`
        // return this._password.toUpperCase()
    }

    set password(value) {
        this._password = value
    }
}

const response = new user("vatsal@gmail.com", "abc")
console.log(response.email);
console.log(response.password);