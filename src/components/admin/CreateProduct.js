import React, { Component } from 'react'
import requester from '../../infrastructure/requester'
import observer from '../../infrastructure/observer'

class CreateForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            detailTopName: null,
            make: null,
            model: null,
            imageUrl: null,
            year: null,
            category: null,
            subcategory: null,
            description: null,
            price: null
        }
    }

    hendlerChange = e => {
        let fildName = e.target.name
        let fildValue = e.target.value
        this.setState({ [fildName]: fildValue })
    }

    submitCreate(e) {
        e.preventDefault()

        requester.post('appdata', 'product', 'kinvey', this.state).then(res => {
            observer.trigger(observer.events.notification, { type: "success", message: "Create successful." })
            this.props.history.push('/')
        })
    }

    render() {
        return (
            <div>
                <h1 className="text">Create Product</h1>
                <form onSubmit={this.submitCreate.bind(this)} id="form">
                    <input onChange={this.hendlerChange} name="detailTopName" placeholder="enter name" required />
                    <input onChange={this.hendlerChange} name="make" placeholder="enter make" required />
                    <input onChange={this.hendlerChange} name="model" placeholder="enter model" />
                    <input onChange={this.hendlerChange} name="imageUrl" placeholder="enter image url" required />
                    <input onChange={this.hendlerChange} name="year" placeholder="enter year" />
                    <strong className="text">category</strong>
                    <select onChange={this.hendlerChange} name="category" id="category" required>
                        <option ></option>
                        <option value="moto">Мотори</option>
                        <option value="quipment">Екипировка</option>
                    </select >
                    <br /> <br />
                    <strong className="text">subcategory</strong>
                    <select onChange={this.hendlerChange} name="subcategory" id="category" required>
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
                    <textarea onChange={this.hendlerChange} name="description" placeholder="enter description" id="description" required />
                    <input onChange={this.hendlerChange} name="price" placeholder="price" required />
                    <input id="submit" type="submit" value="CREATE" />
                </form>
            </div>
        )
    }
}

export default CreateForm