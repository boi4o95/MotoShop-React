import React, { Component } from 'react'

class OrdersTable extends Component {
    render() {
        return (
            <div key={this.props._id}   className="orders-info">
            
               <label id="title">Продукт</label> <br />
                <table>
                    <thead>
                        <tr>
                            <td>Изображение</td>
                            <td>Име на продукта</td>
                            <td>Модел</td>
                            <td>Цена</td>
                            <td>Име на куповача</td>
                            <td>Град</td>
                            <td>Email</td>
                        </tr>
                    </thead>
                    <tbody>
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
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default OrdersTable