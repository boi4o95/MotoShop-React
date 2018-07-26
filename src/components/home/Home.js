import React, { Component } from 'react'
import banner from '../../image/banner.gif'

class Home extends Component {
    render() {
        return (
            <div className="home">
                <img id="logo" src={banner} alt="logo" />
                <h1 className="home-text" >KAWASAKI България, KTM България, HUSQVARNA България, AIROH България, FOX България</h1>
                <span >Moto Shop e официален дилър на много световно известни марки като: </span> <br/>
                <span>KTM, KAWASAKI , HUSQVARNA, HUSABERG, ALPINESTARS , SHOEI , AIROH, </span> <br/>
                <span>ACERBIS , FORMA , SPY, FOX, ARROW , EBC, EVS , BEL-RAY , KIMPEX и други </span>
                <br/> <br/>
                <span>Moto Shop – разполага и с оторизиран сервиз на KTM, KAWASAKI, HUSQVARNA и HUSABERG, </span>
                <br/>
                <span> а също така извършва и сервизно обслужване на други марки мотоциклети и АТВ,</span>
                <br/>
                <span>като YAMAHA, HONDA, SUZUKI и др.</span>

            </div>
        )
    }
}

export default Home