import React, {Component} from "react";
import Header from './Header/Header';
import Main from './Main/Main';
import Footer from './Footer/Footer';
import '../common/style/reset.css'
import '../common/style/base.css'
class App extends Component {
  state = {
    productsInCart: {
      1:0,
      3:4,
    },
  };

  AddProductToCard = (id, count) => {
    this.setState((prevState) => ({
      productsInCart: {
        ...prevState.productsInCart,
        [id]: (prevState.productsInCart[id] || 0) + count,
      },
    }));
  };
  render() {
    return (
      <>
        <Header productsInCart={(this.state.productsInCart)} />

        <Main AddProductToCard={this.AddProductToCard} />
        <Footer />
      </>
    );
  }
}
export default App