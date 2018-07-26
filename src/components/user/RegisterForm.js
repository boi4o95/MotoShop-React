import React, { Component } from 'react'
import requester from '../../infrastructure/requester'
import observer from '../../infrastructure/observer';

class Register extends Component {
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

    submitRegister(e) {
        e.preventDefault()
        requester.post('user', '', 'basic', this.state).then(res => {
            observer.trigger(observer.events.notification, { type: "success", message: "Register successful ." })
            sessionStorage.setItem('username', res.username)
            sessionStorage.setItem('authtoken', res._kmd.authtoken)
            this.props.history.push('/')
        }).catch(res => observer.trigger(observer.events.notification, { type: "error", message: res.responseJSON.description}))
    }
    
    render() {
        return (
            <div>
                <h1 className="text">REGISTER</h1>
                <form onSubmit={this.submitRegister.bind(this)} id="form">
                    <input onChange={this.hendlerChange} name='username' placeholder='enter username' required/>
                    <input onChange={this.hendlerChange} name='email' placeholder='enter email'required />
                    <input onChange={this.hendlerChange} name='firstName' placeholder='enter firstName' required/>
                    <input onChange={this.hendlerChange} name='lastName' placeholder='enter lastName' required/>
                    <input onChange={this.hendlerChange} type='password' name='password' placeholder='enter password' required/>
                    <input id="submit" type="submit" value="REGISTER" />
                </form>
            </div>
        )
    }
}

export default Register