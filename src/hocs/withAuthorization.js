import React, { Component } from 'react'

function withAuthorization (Component, role) {
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