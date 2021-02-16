import React from "react";
import ProductList from "./Products/ProductList"
import CartPage from "./CartPage/CartPage"
import { Route } from "react-router-dom"

import ShippingPage from "./ShippingPage/ShippingPage";
import PaymentPage from "./PaymentPage/PaymentPage";

const Main = ({ AddProductToCard }) => {
  return (
    <main className="main">
      <div className="container">
        <div className="row">
          <div className="col-lg-3">Filter</div>
          <div className="col-lg-9">
            <Route path="/" exact render={() => <ProductList AddProductToCard={AddProductToCard} />}/>
            <Route path="/cart" component={CartPage} />
            <Route path="/payment" component={PaymentPage} />
            <Route path="/shipping" component={ShippingPage} />
          </div>
        </div>
      </div>
    </main>
  );
}
export default Main
