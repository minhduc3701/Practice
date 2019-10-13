import React from "react";
import { connect } from "react-redux";
import Cart from "../components/Cart";
import CartItem from "../components/CartItem";
import CartResult from "../components/CartResult";

class CartContainer extends React.Component {
  showCartItem = cart => {
    let result = null;
    if (cart.length > 0) {
      result = cart.map((item, index) => {
        return <CartItem key={index} item={item}></CartItem>;
      });
    }
    return result;
  };

  showTotalAmount = cart => {
    let result = null;
    if (cart.length > 0) {
      result = <CartResult cart={cart}></CartResult>;
    }
    return result;
  };

  render() {
    let { cart } = this.props;
    return (
      <Cart>
        {this.showCartItem(cart)}
        {this.showTotalAmount(cart)}
      </Cart>
    );
  }
}

const mapStateToProps = state => {
  return {
    cart: state.cart
  };
};

export default connect(
  mapStateToProps,
  null
)(CartContainer);
