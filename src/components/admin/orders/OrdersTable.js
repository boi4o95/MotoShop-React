import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class OrdersTable extends Component {
    render() {
        return (
            <tr>
                <td>
                    <img className="image" src={this.props.imageUrl} />
                </td>
                <td>{this.props.make}</td>
                <td>{this.props.model}</td>
                <td>{this.props.price}лв.</td>
                <td>{this.props.firstName} {this.props.lastName}</td>
                <td>{this.props.city}</td>
                <td>{this.props.email}</td>
                <td>{this.props.phoneNumber}</td>
                <td><Link className="delete" to={"/orders/delete/" + this.props._id}>X</Link></td>
            </tr>
        )
    }
}

export default OrdersTable