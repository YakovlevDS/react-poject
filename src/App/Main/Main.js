import React from 'react'
import { Route } from 'react-router-dom'
import Testimonials from '../../Components/Testimonials/Testimonials'
import CartPage from './CartPage/CartPage'
import PaymentPage from './PaymentPage/PaymentPage'
import ProductList from './Products/ProductList'
import ShippingPage from './ShippingPage/ShippingPage'
import ProductPage from './ProductPage/ProductPage'

const Main = ({
    addProductToCart,
    productsInCart,
    removeProductFromCart,
    changeProductQuantity,
}) => {
    return (
        <main className="main">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3">
                        Filter
                    </div>
                    <div className="col-lg-9">
                        <Route path="/" exact render={() => <ProductList
                            addProductToCart={addProductToCart}
                        />}/>
                        <Route path="/cart" render={() => <CartPage
                            productsInCart={productsInCart}
                            removeProductFromCart={removeProductFromCart}
                            changeProductQuantity={changeProductQuantity}
                        />} />
                        <Route path="/payment" component={PaymentPage}/>
                        <Route path="/shipping" component={ShippingPage}/>
                        <Route path="/" exact component={Testimonials} />
                        <Route path="/products/:id" component={ProductPage}/>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Main