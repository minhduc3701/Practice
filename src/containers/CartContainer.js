import React from "react";
import { connect } from "react-redux";
import Cart from "../components/Cart";
import CartItem from "../components/CartItem";
import CartResult from "../components/CartResult";
import * as Actions from "../actions/indexActions";

class CartContainer extends React.Component {
  showCartItem = cart => {
    let { onDeleteCartItem, onUpdateCartItem } = this.props;
    let result = null;
    if (cart.length > 0) {
      result = cart.map((item, index) => {
        return (
          <CartItem
            onDeleteCartItem={onDeleteCartItem}
            key={index}
            item={item}
            onUpdateCartItem={onUpdateCartItem}
          ></CartItem>
        );
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

const mapDispatchToProps = (dispatch, props) => {
  return {
    onDeleteCartItem: product => {
      dispatch(Actions.actRemoveCartItem(product));
    },
    onUpdateCartItem: (product, quantity) => {
      dispatch(Actions.actUpdateCart(product, quantity));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartContainer);
