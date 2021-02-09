import React from "react";
import Logo from './Logo/Logo';
import Menu from './Menu/Menu';
import Cart from './Cart/Cart';
import './header.css'
import './Menu/menu.css'
import './Cart/cart.css'
const Header = ({
	cartData
}) => {
	console.log(cartData)
  return (
    <header className="header">
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <Logo />
          </div>
          <div className="col-lg-6">
            <Menu />
          </div>
          <div className="col-lg-3">
            <Cart
              count={cartData.count}
              price={cartData.price}
            />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header
 