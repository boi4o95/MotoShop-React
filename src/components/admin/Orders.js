import React, { Component } from 'react'
import requester from '../../infrastructure/requester'
import OrdersTable from './OrdersTable'

class Orders extends Component {
    constructor(props) {
        super(props)

        this.state = {
            orders: []
        }
    }


    componentDidMount = () => {
        requester.get('appdata', 'orders', 'kinvey').then(res => {
            console.log(res)
            this.setState({ orders: res })
        })
    }

    render = () => (
        <div >
            {this.state.orders.map(o => <OrdersTable key={o._id} {...o} />)}
        </div>
    )
}

export default Orders