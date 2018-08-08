import React, { Component } from 'react'
import withFormManager from '../../hocs/withFormManager'
import registerModel from '../../models/registerModel'
import userService from '../../services/userService'


class RegisterForm extends Component {
    render= () => {
        return (
            <div>
                <h1 className="text">REGISTER</h1>
                <form onSubmit={this.props.hendleSubmit} id="form">
                    <h1 if="form-error" className="text">{this.props.error}</h1>
                    <input onChange={this.props.hendleChange} name='username' value={this.props.username} placeholder='enter username' />
                    <input onChange={this.props.hendleChange} type='password' value={this.props.password} name='password' placeholder='enter password' />
                    <input onChange={this.props.hendleChange} name='email' value={this.props.email} placeholder='enter email' />
                    <input onChange={this.props.hendleChange} name='firstName'value={this.props.firstName} placeholder='enter firstName' />
                    <input onChange={this.props.hendleChange} name='lastName' value={this.props.lastName} placeholder='enter lastName' />
                    <input id="submit" type="submit" value="REGISTER" />
                </form>
            </div>
        )
    }
}

export default withFormManager(RegisterForm, registerModel, userService.register)