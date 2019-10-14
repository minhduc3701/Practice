import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProductsContainer from "./containers/ProductsContainer";
import MessageContainer from "./containers/MessageContainer";
import CartContainer from "./containers/CartContainer";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header></Header>
        <main id="mainContainer">
          <div className="container">
            <ProductsContainer></ProductsContainer>
            <MessageContainer></MessageContainer>
            <CartContainer></CartContainer>
          </div>
        </main>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
