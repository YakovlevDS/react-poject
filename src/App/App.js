import React, {Component} from "react";
import Header from './Header/Header';
import Main from './Main/Main';
import Footer from './Footer/Footer';

import '../common/style/reset.css'
import '../common/style/base.css'




class App extends Component {
  state = {
    cartData: {
      count: 100,
      price: 1000,
    },
  };

  AddToCard = () => {
    // console.log(produts.);
    this.setState((prevState) => ({
      cartData: {
      // count: 1000,
      // price: 10000,
      count:prevState.count + this.state.count,
      price: prevState.price + this.state.count * this.state.price,
      },
    }));
  };

  render() {
    return (
      <>
        <Header cartData={this.state.cartData} />
        <Main AddToCard={this.AddToCard} />
        <Footer />
      </>
    );
  }
}


export default App 

