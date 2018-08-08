import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom'

function withAuthorization (Component, Redirect,role) {
    return class WithAuthorization extends Component {
        constructor (props) {
            super(props)

            this.state = {
                roles: ''
            }
        }

        componentDidMount = () => {
            let roles = sessionStorage.getItem('Roles')

            if (roles) {
                this.setState({ roles: roles })
            }
        }

        render = () => {
            let userHasAccess = this.state.roles
            let authorization = this.state.username
            if (userHasAccess) {
                return <Component {...this.props} />
            } else {
                return <h1 className="unauthorized"> Unauthorized </h1>
            }
        }
    }
}

export function withAdminAuthorization(Component) {
    return withAuthorization(Component);
}