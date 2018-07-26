import React, { Component } from 'react'
import requester from '../../infrastructure/requester';
import Product from './Product'

class SubcategoryList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            product: []
        }
    }

    getProduct = () => {
        requester.get('appdata', `product?query={"category":"${this.props.match.params.moto}","subcategory":"${this.props.match.params.cross}"}&sort={"_kmd": -1}`, 'kinvey').then(res => {
            this.setState({ product: res })
        })
    }

    componentDidMount = () => {
        this.getProduct()
    }

    componentWillReceiveProps = (nextProps) => {
        requester.get('appdata', `product?query={"category":"${nextProps.match.params.moto}","subcategory":"${nextProps.match.params.cross}"}&sort={"_kmd": -1}`, 'kinvey').then(res => {
            this.setState({ product: res })
        })
    }

    render = () => (
        <div className="car-container" >
            {this.state.product.map(p => <Product key={p._id} {...p} />)}
        </div>
    )

}

export default SubcategoryList