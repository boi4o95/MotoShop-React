export default {
    defaultState: {
        username: '',
        password: '',
        email: '',
        firstName: '',
        lastName: ''
    },
    validate: obj => {
        const {username, password, email, firstName, lastName} = obj
        var validateEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        if(!username) {
            return "Username is required."
        }

        if(!password) {
            return "Password is required."
        }

        if(!validateEmail.test(email)) {
            return "Email is not valid."
        }
        
        if(!firstName) {
            return "First name is required."
        }

        if(!lastName) {
            return "Last name is required."
        }
    }
}