import React, { Component } from 'react'
import requester from '../../../infrastructure/requester'
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
            this.setState({ orders: res })
        })
    }

    render = () => (
        <div className="orders-info">
            <label id="title">Продукт</label> <br />
            <table >
                <thead>
                    <tr>
                        <td>Изображение</td>
                        <td>Име на продукта</td>
                        <td>Модел</td>
                        <td>Цена</td>
                        <td>Име на куповача</td>
                        <td>Град</td>
                        <td>Email</td>
                        <td>Телефон</td>
                        <td>delete</td>
                    </tr>
                </thead>
                <tbody>
                    {this.state.orders.map(o => <OrdersTable key={o._id} {...o} />)}
                </tbody>
            </table>
            {this.state.orders.length === 0 ? <span className="contact-span">Няма поръчки!</span> : null}
        </div>
    )
}

export default Orders