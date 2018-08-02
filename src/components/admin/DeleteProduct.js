import React, { Component } from 'react'
import requester from '../../infrastructure/requester'
import { Redirect } from 'react-router-dom'
import observer from '../../infrastructure/observer';

class Delete extends Component {
    delete = () => {
        console.log(this.props.match.params)
        let query = this.props.match.params.query
        requester.remove('appdata', query, 'kinvey', {"_id" : this.props.match.params._id}).then(res => {
            observer.trigger(observer.events.notification, { type: "success", message: `Delete successful ${query}.` })
        })
        
    }

    render = () => {
        this.delete()
       return <Redirect to='/' />
    }
}

export default Delete