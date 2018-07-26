
import React, { Component } from 'react'
import observer from '../../infrastructure/observer'

const DEFAUT_STATE = {
    message: null,
    success: null,
    error: null,
    loading: null
}

class Notification extends Component {
    constructor(props) {
        super(props)

        this.state = DEFAUT_STATE

        observer.subscribe(observer.events.notification, this.showNotification)
    }

    showNotification = data => {
        let message = data.message
        let type = data.type
        this.setState({ [type]: type, message: message })
    }

    hideNotification = ev => this.setState(DEFAUT_STATE)

    render = () => {
        let notificationId;
        if (this.state.success) {
            notificationId = 'succsess'
        } else if ( this.state.error) {
            notificationId = 'error'
        } else if (this.state.loading) {
            notificationId = 'loading'
        }

        if (this.state.message){
            return  <div id={notificationId} onClick={this.hideNotification}  className="notification">{this.state.message}</div>
        } else {
            return null
        }
    }
}

export default Notification