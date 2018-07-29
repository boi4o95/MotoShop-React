import React, { Component } from 'react'
import requester from '../../infrastructure/requester'
import observer from '../../infrastructure/observer';

class EiditForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            detailTopName: '',
            make: '',
            model: '',
            imageUrl: '',
            year: '',
            category: '',
            subcategory: '',
            description: '',
            price: ''
        }
    }

    componentDidMount = () => {
        requester.get('appdata', `product`, 'kinvey', {"_id" : this.props.match.params._id}).then(res => {
            let data = res[0]
            this.setState( { detailTopName: data.detailTopName , make: data.make,  model: data.model,
                imageUrl: data.imageUrl, year: data.year, category: data.category, subcategory: data.subcategory,
                description: data.description, price: data.price})
        })
    }

    hendlerChange = e => {
        let fildName = e.target.name
        let fildValue = e.target.value
        this.setState({ [fildName]: fildValue })
    }

    submitEdit(e) {
        e.preventDefault()

        requester.update('appdata', `product/${this.props.match.params._id}`, 'kinvey', this.state).then(res => {
            observer.trigger(observer.events.notification, { type: "success", message: "Edit successful." })
            this.props.history.push('/')
        })
    }

    render() {
        return (
            <div>
                <h1 className="text">Eidit Product</h1>
                <form onSubmit={this.submitEdit.bind(this)} id="form">
                    <input onChange={this.hendlerChange} name="detailTopName" value={this.state.detailTopName} required />
                    <input onChange={this.hendlerChange} name="make" value={this.state.make} required />
                    <input onChange={this.hendlerChange} name="model" value={this.state.model} />
                    <input onChange={this.hendlerChange} name="imageUrl" value={this.state.imageUrl} required />
                    <input onChange={this.hendlerChange} name="year" value={this.state.year} />
                    <strong className="text">category</strong>
                    <select onChange={this.hendlerChange} name="category" id="category" value={this.state.category} required>
                        <option ></option>
                        <option value="moto">Мотори</option>
                        <option value="quipment">Екипировка</option>
                    </select >
                    <br /> <br />
                    <strong className="text">subcategory</strong>
                    <select onChange={this.hendlerChange} name="subcategory" id="category" value={this.state.subcategory} required>
                        <option ></option>
                        <option value="cross">КРОСОВ</option>
                        <option value="sport">Пистов</option>
                        <option value="motoChoper">Чопър</option>
                        <option value="Scooter">Скутер</option>
                        <option value="helmets">Мото Каски</option>
                        <option value="clothes">Мото Облекла</option>
                        <option value="boot">Мото Ботуши</option>
                        <option value="gloves">Мото Ръкавици</option>
                    </select>
                    <br /> <br />
                    <textarea onChange={this.hendlerChange} name="description" value={this.state.description} id="description" required />
                    <input onChange={this.hendlerChange} name="price" value={this.state.price} required />
                    <input id="submit" type="submit" value="EDIT" />
                </form>
            </div>
        )
    }
}

export default EiditForm