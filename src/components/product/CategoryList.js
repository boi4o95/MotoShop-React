import React, { Component } from 'react'
import requester from '../../infrastructure/requester';
import Product from './Product'

class CategoryList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            product: []
        }
    }

    getProduct = () => {
        requester.get('appdata', `product?query={"category":"${this.props.match.params.moto}"}&sort={"subcategory": -1}`, 'kinvey').then(res => {
            this.setState({ product: res })
        })
    }

    componentDidMount = () => {
        this.getProduct()
    }

    componentWillReceiveProps = (nextProps) => {
        requester.get('appdata', `product?query={"category":"${nextProps.match.params.moto}"}&sort={"subcategory": -1}`, 'kinvey').then(res => {
            this.setState({ product: res })
        })
    }

    render = () => (
        <div className="car-container" >
            {this.state.product.map(p => <Product key={p._id} {...p} />)}
        </div>
    )

}

export default CategoryList