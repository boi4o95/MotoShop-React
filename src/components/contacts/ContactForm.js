import React, { Component } from 'react'
import contact from '../../image/contacts.jpg'

class ContactForm extends Component {
    render() {
        return (
            <div id="contact">
                <img id="cont" src={contact} alt="logo" />
                <section id="mainsection">
                    <div id="form">
                        <form className="form">
                            <label id="title">Форма за контакти:</label> <br />
                            <label> <span className="contact-span"> * </span>  Име:</label>
                            <input type="text" name="firstname" size="10" required />
                            <br />
                            <label><span className="contact-span"> * </span>  Фамилия:</label>
                            <input type="text" name="lastname" size="10" required />
                            <br />
                            <label><span className="contact-span"> * </span>  Град:</label>
                            <input type="text" name="city" size="10" required />
                            <br />
                            <label><span className="contact-span"> * </span>  Пощенски код:</label>
                            <input type="text" name="postal" size="5" required />
                            <br />
                            <label><span className="contact-span"> * </span>  Улица:</label>
                            <input type="text" name="street" size="30" required />
                            <br />
                            <label><span className="contact-span"> * </span>  Телефонен номер:</label>
                            <input type="number" name="phone" size="20" required />
                            <br />
                            <label><span className="contact-span"> * </span>  E-mail:</label>
                            <input type="email" name="email" size="30" required />
                            <br />
                            <label type="age">Възраст:</label>
                            <input type="number" name="age" size="3" />
                            <br />
                            <label className="massagess"><span className="contact-span"> * </span>  Съобщение:</label>
                            <textarea name="message" rows="4" cols="20" required></textarea>
                            <br />
                            <label id="required" className="contact-span">Маркираните със звездичка (*) полета са задължителни!</label>
                            <br />
                            <div id="button">
                                <input type="submit" name="submit" value="Изпрати" />
                            </div>
                        </form>
                    </div>

                    <h2 className="text">За Контакти:</h2>
                    <strong className="home">Moto SHOP ЕООД&nbsp;</strong><br/>
                    <strong className="home">моб.: 0888662288 </strong><br/>
                    <strong className="home">e-mail: motoShop@lero.biz</strong><p>&nbsp;</p>

                </section>
            </div>
        )
    }
}

export default ContactForm