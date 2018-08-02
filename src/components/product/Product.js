import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Product extends Component {
    render() {
        const year = <span><br/>Година: {this.props.year}</span>
        const buyBtn = <Link className="buy" to={"/buy/"+ this.props._id}>Купи</Link>
        const deleteBtn = <Link className="delete" to={"/product/delete/" + this.props._id }>delete</Link>
        return (
            <div className="car-container">
                <section>
                    <Link to={"/details/"+ this.props._id}>
                        <img src={this.props.imageUrl} />
                    </Link>
                </section>
                <section>
                    <Link to={"/details/"+ this.props._id} className="text">
                        <strong >{this.props.detailTopName}</strong>
                    </Link>
                    <br />
                </section>
                <section className="info">
                    <strong>Производител: {this.props.make}</strong>
                    <br/>
                    <span>Модел: {this.props.model}</span>
                    {sessionStorage.getItem('Roles') ? deleteBtn : buyBtn }
                    {this.props.year ? year : null}
                    <br />
                    <strong className="price">Цена: {this.props.price} lv</strong>
                </section>
            </div>
        )
    }
}

export default Product