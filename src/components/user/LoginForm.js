import React, { Component } from 'react'
import requester from '../../infrastructure/requester'
import observer from '../../infrastructure/observer';


class LoginForm extends Component {
    constructor(props) {
        super(props)

      this.state = {
          username: null,
          password: null
      }
    }

    hendlerChange = e => {
        let fildName = e.target.name
        let fildValue = e.target.value

        this.setState({ [fildName]: fildValue})
    }

    submitLogIn(e) {
        e.preventDefault()
        requester.post('user', 'login', 'basic', this.state).then(res => {
            observer.trigger(observer.events.notification, { type: "success", message: "Login successful." })
            sessionStorage.setItem('username', res.username)
            sessionStorage.setItem('authtoken', res._kmd.authtoken)

            if(res._kmd.roles){
                sessionStorage.setItem('Roles', res._kmd.roles)
            }

            this.props.history.push('/')
        }).catch(res => observer.trigger(observer.events.notification, { type: "error", message: res.responseJSON.description}))
    }


    render() {
        return (
            <div>
                <h1 className="text">LOGIN</h1>
                <form onSubmit={this.submitLogIn.bind(this)} id="form">
                    <input name="username" onChange={this.hendlerChange} placeholder="enter username" required/>
                    <input type="password" name="password" onChange={this.hendlerChange} placeholder="enter password" required/>
                    <input id="submit" type="submit" value="LOGIN" />
                </form>
            </div>
        )
    }
}

export default LoginForm