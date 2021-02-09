import React, { Component } from "react";
import ProductListItem from './ProductListItem';
import products from './products';
const ProductList =({AddProductToCard,})=> 
  {
    return (
      <>
        <h2 className="page-title">Products List</h2>
        <div className="row">
          {products.map(
            ({ id, name, description, type, capacity, price, image }) => (
              <div className="col-lg-6" key={id}>
                <ProductListItem
                  AddProductToCard={AddProductToCard}
                  name={name}
                  description={description}
                  type={type}
                  capacity={capacity}
                  price={price}
                  image={image}
                  id={id}
                />
              </div>
            )
          )}
        </div>
      </>
    )
  }




export default ProductList