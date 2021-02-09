import React, { Component } from "react";
import ProductList from './Products/ProductList';
const Main =( {
  AddProductToCard,
})=> {
    return (
      <main className="main">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">Filter</div>{" "}
            <div className="col-lg-9">
              <ProductList AddProductToCard={AddProductToCard}
               />
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </main>
    )
  }

export default Main

