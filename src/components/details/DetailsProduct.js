import React, { Component } from 'react'
import requester from '../../infrastructure/requester';
import Details from './Details'

class DetailsProduct extends Component {
    constructor(props) {
        super(props)

        this.state = {
            product: []
        }
    }

    getProduct = () => {
        requester.get('appdata', `product`, 'kinvey', {"_id" : this.props.match.params._id}).then(res => {
            this.setState({ product: res })
        })
    }

    componentDidMount = () => {
        this.getProduct()
    }


    render = () => (
        <div >
            {this.state.product.map(p => <Details key={p.id} {...p} />)}
        </div>
    )

}

export default DetailsProduct