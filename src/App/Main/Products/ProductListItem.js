import React, { Component } from "react";
import "./ProductListItem.css";
import PropTypes from 'prop-types'; 
// import ProductList from "./ProductList.js";


class ProductListItem extends Component {
  state = {
    productCount: 1,
  };
  clickAdd() {
    // console.log(this.props.price, this.state.productCount);
    const a = this.state.productCount;
    const b = this.props.price;
    console.log(a, b);
    //  this.props.AddProductToCard(a, b);
    // this.props.AddToCard = () => {
    //   (a, b);
    // }
  }
  onIncrementClick = () => {
    this.setState((prevState) => ({
      productCount: prevState.productCount + 1,
    }));
  };

  onDecrementClick = () => {
    this.setState((prevState) => ({
      productCount: prevState.productCount - 1,
    }));
  };

  render() {
    const { name, description, type, capacity, price, image } = this.props;

    return (
      <div className="product-list-item">
        <div className="product-img">
          <img src={image} alt={name} />
        </div>
        <div className="page-title">{name}</div>
        <div className="product-description">{description}</div>
        <div className="product-features">Type: {type}</div>
        <div className="product-features">Capacity:{capacity}Gb</div>

        <div className="product-quantity">
          <button
            onClick={() => this.onDecrementClick()}
            disabled={this.state.productCount <= 1}
          >
            -
          </button>
          <input type="text" value={this.state.productCount} readOnly />
          <button
            onClick={() => this.onIncrementClick()}
            disabled={this.state.productCount >= 10}
          >
            +
          </button>
        </div>

        <div className="product-price">${price}</div>
        <div className="product-price">
          All:${price * this.state.productCount}
        </div>
        <div
          // =========

          onClick={() => this.clickAdd(this.state.productCount, price)}
          //  ========
          className="btn-add-to-cart"
        >
          Add to cart
        </div>
      </div>
    );
  }
}


ProductListItem.propTypes = {
  name:PropTypes.string.isRequired,
  description:PropTypes.string,
  type:PropTypes.string.isRequired,
  capacity: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
 image: PropTypes.string,
      
}
ProductListItem.defaultProps = {
  description: "No description...  ",
  image: "https://lh3.googleusercontent.com/proxy/U7BUKb6Y8H9WcBYhO4RT9Vc41-PaHHjipz1a386pN7Xw_os6QBbOYrznYhM9YpZtkWM0jTmz9pT-VM_XSKr38g",
}
export default ProductListItem 