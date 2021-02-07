import React, { Component } from "react";
import ProductListItem from './ProductListItem';
import products from './products';
import Main from '../Main.js';



class ProductList extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <h2 className="page-title">Products List</h2>
        <div className="row">
          {products.map(
            ({ id, name, description, type, capacity, price, image }) => (
              <div className="col-lg-6" key={id}>
                <ProductListItem
                  AddToCard={this.props.AddToCard}
                  name={name}
                  description={description}
                  type={type}
                  capacity={capacity}
                  price={price}
                  image={image}
                />
              </div>
            )
          )}
        </div>
      </>
    );
  }
}



export default ProductList