import React from "react"
import { keys } from "lodash"
import "./cart.css"
import products from "../../Main/Products/products"
import { Link } from "react-router-dom";

const productsObject = products.reduce((obj, product) => ({
  ...obj,
  [product.id]:product
}), {})

const Cart = ({
  productsInCart,
}) => {
    return (
      <div className="cart text-center">
        {keys(productsInCart).map((id) => (
          <div key={id}>
            {productsObject[id].name} : {productsInCart[id]}
          </div>
        ))}
        <div>
          Total:
          {keys(productsInCart).reduce(
            (total, productsId) =>
              total +
              productsObject[productsId].price * productsInCart[productsId],
            0
          )}
          $
        </div>

        <Link to="/cart">Show cart</Link>
      </div>
    );
  }
export default Cart