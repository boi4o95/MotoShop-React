import React, { Component } from 'react'
import contact from '../../image/contacts.jpg'
import requester from '../../infrastructure/requester'

class ContactForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            message: ''
        }
    }

    hendlerChange = e => {
        let fildName = e.target.name
        let fildValue = e.target.value
        this.setState({ [fildName]: fildValue })
    }

    submitEdit(e) {
        e.preventDefault()

        requester.email(this.state).then(res => {
        })
    }
    render() {
        return (
            <div id="contact">
                <img id="cont" src={contact} alt="logo" />
                 <h2 className="text">За Контакти:</h2>
                    <strong className="home">Moto SHOP ЕООД&nbsp;</strong><br/>
                    <strong className="home">моб.: 0888662288 </strong><br/>
                    <strong className="home">e-mail: motoShop@lero.biz</strong><p>&nbsp;</p>
                <section id="mainsection">
                    <div id="form">
                    {console.log(this.state)}
                        <form className="form" onSubmit={this.submitEdit.bind(this)}>
                            <label id="title">Форма за контакти:</label> <br />
                            <label>Име:</label>
                            <input onChange={this.hendlerChange} type="text" name="firstName" size="10" />
                            <br />
                            <label>Фамилия:</label>
                            <input onChange={this.hendlerChange} type="text" name="lastName" size="10"  />
                            <br />
                            <label><span className="contact-span"> * </span>  E-mail:</label>
                            <input onChange={this.hendlerChange} type="email" name="email" size="30"  required />
                            <br />
                            <label className="massagess"><span className="contact-span"> * </span>  Съобщение:</label>
                            <textarea onChange={this.hendlerChange} name="message" rows="4" cols="20" minLength='10' required></textarea>
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

export default ContactForm