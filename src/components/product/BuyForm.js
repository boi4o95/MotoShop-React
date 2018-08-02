import React, { Component } from 'react'
import requester from '../../infrastructure/requester'
import observer from '../../infrastructure/observer'

class Product extends Component {
    constructor(props) {
        super(props)

        this.state = {
            firstName: '',
            lastName: '',
            city: '',
            email: '',
            make: '',
            model: '',
            imageUrl: '',
            price: '',
            phoneNumber: ''
        }
    }


    componentDidMount = () => {
        requester.get('appdata', `product`, 'kinvey', { "_id": this.props.match.params._id }).then(res => {
            let data = res[0]
            this.setState({
                make: data.make, model: data.model,
                imageUrl: data.imageUrl, price: data.price
            })
        })
    }

    hendlerChange = e => {
        let fildName = e.target.name
        let fildValue = e.target.value
        this.setState({ [fildName]: fildValue })
    }

    submitEdit(e) {
        e.preventDefault()

        requester.post('appdata', 'orders', 'kinvey', this.state).then(res => {
            observer.trigger(observer.events.notification, { type: "success", message: "Successful." })
            this.props.history.push('/')
        })
    }

    render() {
        return (
            <div className="cart-info">
                <label id="title">Продукт</label> <br />
                <table>
                    <thead>
                        <tr>
                            <td>Изображение</td>
                            <td>Име на продукта</td>
                            <td>Модел</td>
                            <td>Цена</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <img className="image" src={this.state.imageUrl} />
                            </td>
                            <td>{this.state.make}</td>
                            <td>{this.state.model}</td>
                            <td>{this.state.price}лв.</td>
                        </tr>
                    </tbody>
                </table>
                <section id="mainsection">
                    <div id="form">
                        <form className="form" onSubmit={this.submitEdit.bind(this)}>
                            <label id="title">Лични данни</label> <br />
                            <label> <span className="contact-span"> * </span>  Име:</label>
                            <input onChange={this.hendlerChange} type="text" name="firstName" size="10" required />
                            <br />
                            <label><span className="contact-span"> * </span>  Фамилия:</label>
                            <input onChange={this.hendlerChange} type="text" name="lastName" size="10" required />
                            <br />
                            <label><span className="contact-span"> * </span>  Град:</label>
                            <input onChange={this.hendlerChange} type="text" name="city" size="10" required />
                            <br />
                            <label><span className="contact-span"> * </span>  E-mail:</label>
                            <input onChange={this.hendlerChange} type="email" name="email" size="30" required />
                            <br />
                            <label> <span className="contact-span"> * </span>  Телефон:</label>
                            <input onChange={this.hendlerChange} type="text" name="phoneNumber" size="10" required />
                            <br />
                            <label id="required" className="contact-span">Маркираните със звездичка (*) полета са задължителни!</label>
                            <br />
                            <div id="button">
                                <input type="submit" name="submit" value="Изпрати" />
                            </div>
                        </form>
                    </div>
                </section>
            </div>
        )
    }
}

export default Product