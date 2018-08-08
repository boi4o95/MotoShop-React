import React, { Component } from 'react'
import withFormManager from '../../hocs/withFormManager'
import userModl from '../../models/userModel'
import userService from '../../services/userService'

class LoginForm extends Component {
    render = () => {
        return (
            <div>
                <h1 className="text">LOGIN</h1>
                <form onSubmit={this.props.hendleSubmit} id="form">
                    <h1 if="form-error" className="text">{this.props.error}</h1>
                    <input name="username" onChange={this.props.hendleChange} value={this.props.username} placeholder="enter username" />
                    <input type="password" name="password" onChange={this.props.hendleChange} value={this.props.password} placeholder="enter password" />
                    <input id="submit" type="submit" value="LOGIN" />
                </form>
            </div>
        )
    }
}

export default withFormManager(LoginForm, userModl, userService.login)