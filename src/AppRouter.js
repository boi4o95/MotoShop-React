import React from 'react'
import { Route } from 'react-router-dom'
import { withAdminAuthorization } from './hocs/withAuthorization'

import Home from './components/home/Home'
import LoginForm from './components/user/LoginForm'
import RegisterForm from './components/user/RegisterForm'
import Logout from './components/user/Logout'
import CreateProduct from './components/admin/CreateProduct'
import CategoryList from './components/product/CategoryList'
import SubcategoryList from './components/product/SubcategoryList'
import DetailsProduct from './components/details/DetailsProduct'
import ContactForm from './components/contacts/ContactForm'
import Delete from './components/admin/DeleteProduct'
import EditProduct from './components/admin/EditProduct'
import BuyForm from './components/product/BuyForm'

const AppRouter = () => (
    <section id="main-container">
        <Route path='/' exact component={Home} />
        <Route path='/login' component={LoginForm} />
        <Route path='/register' component={RegisterForm} />
        <Route path='/logout' component={Logout} />
        <Route path='/contacts' component={ContactForm} />

        <Route path='/:moto' exact component={CategoryList} />
        <Route path='/:moto/:cross' component={SubcategoryList} />
        <Route path='/:moto/:sport' component={SubcategoryList} />
        <Route path='/:moto/:motoChoper' component={SubcategoryList} />
        <Route path='/:moto/:Scooter' component={SubcategoryList} />
        <Route path='/:quipment' exact component={CategoryList} />
        <Route path='/:quipment/:helmets' component={SubcategoryList} />
        <Route path='/:quipment/:clothes' component={SubcategoryList} />
        <Route path='/:quipment/:boot' component={SubcategoryList} />
        <Route path='/:quipment/:gloves' component={SubcategoryList} />
        <Route path='/details/:_id' component={DetailsProduct} />

        <Route path='/buy/:_id' component={BuyForm}/>

        <Route path='/create' component={withAdminAuthorization(CreateProduct)} />
        <Route path='/edit/:_id' component={withAdminAuthorization(EditProduct)} />
        <Route path='/delete/:_id' component={withAdminAuthorization(Delete)} />
    </section>
)

export default AppRouter