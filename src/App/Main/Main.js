import React, { Component } from "react";
import ProductList from './Products/ProductList';
import App from "../App.js";


class Main extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <main className="main">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">Filter</div>{" "}
            <div className="col-lg-9">
              <ProductList AddToCard={this.props.AddToCard} />
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </main>
    );
  }
}
export default Main

