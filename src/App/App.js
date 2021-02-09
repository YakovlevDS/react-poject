import React, {Component} from "react";
import Header from './Header/Header';
import Main from './Main/Main';
import Footer from './Footer/Footer';
import '../common/style/reset.css'
import '../common/style/base.css'

class App extends Component {
  state = {
    cartData: {
      count: 0,
      price: 0,
    }
  }
  AddProductToCard = (count, price)  {
    this.setState((prevState) => ({
      cartData: {
        count: prevState.cartData.count + count,
        price: prevState.cartData.price + (count*price),
      }
    }))
  }
  render() {
    return (
      <>
        <Header cartData={this.state.cartData} />
        <button onClick={()=>this.AddProductToCard(2, 1000)}>Add to Card</button>
        <Main AddProductToCard={this.AddProductToCard} />
        <Footer />
      </>
    );
  }
}
export default App 

