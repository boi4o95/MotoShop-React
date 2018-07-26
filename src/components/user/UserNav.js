import React, { Component } from 'react'
import logo from '../../image/logo.png'
import { Link } from 'react-router-dom'
import observer from '../../infrastructure/observer';


class User extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: ''
        }
        observer.subscribe(observer.events.loginUser, this.userLoggedIn)
    }

    userLoggedIn = (username) => {
        this.setState({ username })
    }

    

    render() {
        const logInUser =
            <ul id="user">
                {sessionStorage.getItem('Roles') ? <li><Link className="btn" to="/create">add product</Link></li> : null }
                <strong className="username">Hello, {sessionStorage.getItem('username')}  </strong>
                <li className="align-right">
                    <Link className="btn" to="/logout">Logout</Link>
                </li>

            </ul>

        const noUser =
            <ul id="user">
                <li><Link className="btn" to="/register">register</Link></li>
                <li><Link className="btn" to="/login">login</Link></li>
            </ul>

        return (
            <nav>
                <img id="logo" src={logo} alt="logo" />
                {sessionStorage.getItem('username') ? logInUser : noUser}
            </nav>
        )
    }
}

export default User