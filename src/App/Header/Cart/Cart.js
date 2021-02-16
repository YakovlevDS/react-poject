import React from "react"
import { keys } from "lodash"
import "./cart.css"
import products from "../../Main/Products/products"

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
        Total:
        {
          keys(productsInCart).reduce((total, productsId) => (
            total + (productsObject[productsId].price * productsInCart[productsId])
          ),0)
        }
        $
      </div>
    )
  }
export default Cart