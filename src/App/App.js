import React, {Component} from "react";
import Header from './Header/Header';
import Main from './Main/Main';
import Footer from './Footer/Footer';
import '../common/style/reset.css'
import '../common/style/base.css'
class App extends Component {
  state = {
    productsInCart: {
      id: 0,
      count: 0,
    }
  }

  AddProductToCard = (count, id) => {
this.setState((prevState) => ({
  productsInCart: {
    id: prevState.productsInCart.id === id ? prevState.productsInCart.id : id,
    count:
      this.state.productsInCart.id === id
        ? prevState.productsInCart.count + count
        : count,
  },
}));
  }
  render() {
    return (
      <>
        <Header 
         productsInCart={this.state.productsInCart}
         />
        <Main AddProductToCard={this.AddProductToCard} />
        <Footer />
      </>
    )
  }
}
export default App 

