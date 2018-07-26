import React, { Component } from 'react'
import requester from '../../infrastructure/requester'
import { Redirect } from 'react-router-dom'
import observer from '../../infrastructure/observer'

class Logout extends Component {
    logout = () => {
        requester.post('user', '_logout', 'kinvey').then(res => {
            sessionStorage.clear()
            observer.trigger(observer.events.notification, { type: "success", message: "Logout successful." })
            this.props.history.push('/')
        })
    }

    render = () => {
        this.logout()
       return <Redirect to='/' />
    }
}

export default Logout