import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Details extends Component {
    
    render() {
        const year = <span>Година: {this.props.year}</span>
        const buyBtn = <Link className="buy" to="/">ПОРЪЧАЙ СЕГА</Link>
        const deleteBtn = <Link className="buy" to={"/delete/" + this.props._id }>delete</Link>
        let description = this.props.description.split('\n')
       
        return (
            <div className="car-container">
                <section>
                    <img src={this.props.imageUrl} />
                    <section>
                        <strong className="text">{this.props.detailTopName}</strong>
                        <br />
                    </section>
                   
                    {description.map(d => <span>{d}<br/></span>)}
                </section>
                <section className="info">
                    <strong>{this.props.make}</strong>
                    <span>{this.props.model}</span>
                    <br />
                    <strong className="price">Price: {this.props.price} lv</strong>
                    {sessionStorage.getItem('Roles') ? deleteBtn : buyBtn}
                    <br />
                    {this.props.year ? year : <br />}
                </section>
            </div>
        )
    }
}

export default Details