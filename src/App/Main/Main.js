import React from "react";
import ProductList from "./Products/ProductList"
import CartPage from "./CartPage/CartPage"
import {Route} from "react-router-dom"
const Main = ({ AddProductToCard }) => {
  return (
    <main className="main">
      <div className="container">
        <div className="row">
          <div className="col-lg-3">Filter</div>
          <div className="col-lg-9">
            <Route path="/" exact render={() => <ProductList AddProductToCard={AddProductToCard} />} />
            <Route path="/cart" component={CartPage}/>
          </div>
        </div>
      </div>
    </main>
  )
}
export default Main
