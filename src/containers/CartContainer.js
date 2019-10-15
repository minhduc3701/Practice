import React from "react";
import { connect } from "react-redux";
import Cart from "../components/Cart";
import CartItem from "../components/CartItem";
import CartResult from "../components/CartResult";
import * as Actions from "../actions/indexActions";
import * as Messages from "../constants/Message";

class CartContainer extends React.Component {
  showCartItem = cart => {
    let { onDeleteCartItem, onUpdateCartItem, onChangeMessage } = this.props;
    let result = (
      <tr>
        <td>{Messages.MSG_CART_EMPTY}</td>
      </tr>
    );
    if (cart.length > 0) {
      result = cart.map((item, index) => {
        return (
          <CartItem
            onDeleteCartItem={onDeleteCartItem}
            key={index}
            item={item}
            onUpdateCartItem={onUpdateCartItem}
            onChangeMessage={onChangeMessage}
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
    },
    onChangeMessage: message => {
      dispatch(Actions.actChangeMessage(message));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartContainer);
