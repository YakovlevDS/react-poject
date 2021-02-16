import React, {Component} from "react"
import { keys } from "lodash"
import "./cart.css"
import products from "../../Main/Products/products"
import { render } from "@testing-library/react"


class Cart extends Component(props){
   state = {
    total: 1,
  }
  addTotal = () => {
    this.setState((prevState) => ({
      total: { keys(props).map(
            (id) => (total = this.prevState.total + products[id - 1].price * this.props[id])
          )
      },
    }));
  };
  render()
  {
    return (
      <div className="cart text-center">
        {keys(productsInCart).map((id) => (
          <div key={id}>
            {products[id - 1].name} : {productsInCart[id]} items :
         amount {products[id - 1].price * productsInCart[id]}$
          </div>
        ))}
      Total: {this.state.total}
$;
      </div>
    );
  }
}
export default Cart


// {
          // keys(productsInCart).map(
          //   (id) => (total = total + products[id - 1].price * productsInCart[id])
          // )
//         }

