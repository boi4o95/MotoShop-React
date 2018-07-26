import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Navbar extends Component {
    render() {
        return (
                <nav className="navbar">
                    <ul className="menu cf">
                        <li><Link to="/">Начало</Link></li>
                        <li>
                            <Link to="/moto">Мотори</Link>
                            <ul className="submenu">
                                <li><Link to="/moto/cross">КРОСОВ</Link></li>
                                <li><Link to="/moto/sport">Пистов</Link></li>
                                <li><Link to="/moto/motoChoper">Чопър</Link></li>
                                <li><Link to="/moto/Scooter">Скутер</Link></li>
                            </ul>
                        </li>
                        <li>
                            <Link to="/quipment">Екипировка</Link>
                            <ul className="submenu">
                                <li><Link to="/quipment/helmets">Мото Каски</Link></li>
                                <li><Link to="/quipment/clothes">Мото Облекла</Link></li>
                                <li><Link to="/quipment/boot">Мото Ботуши</Link></li>
                                <li><Link to="/quipment/gloves">Мото Ръкавици</Link></li>
                            </ul>
                        </li>
                        <li><Link to="/contacts">Контакти</Link></li>
                    </ul>
                </nav>
        )
    }
}

export default Navbar