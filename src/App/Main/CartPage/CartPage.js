import React from 'react'
import CartTotal from '../../../Components/Cart/CartTotal'
import CartProductList from '../../../Components/Cart/CartProductList'
import CartProductListItemExtended from '../../../Components/Cart/CartProductListItemExtended'

const CartPage = ({
    productsInCart,
    removeProductFromCart,
    changeProductQuantity,
}) => {
    return (
        <>
            <h1 className="page-title">Cart </h1>
            <CartProductList
                CartItem={CartProductListItemExtended}
                productsInCart={productsInCart}
                removeProductFromCart={removeProductFromCart}
                changeProductQuantity={changeProductQuantity}
            />
            <CartTotal
                productsInCart={productsInCart}
            />
        </>
    )
}

export default CartPage