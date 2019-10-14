import React from "react";
import { connect } from "react-redux";
import Products from "../components/Products";
import ProductItem from "../components/ProductItem";
import PropTypes from "prop-types";
import * as Actions from "../actions/indexActions";

class ProductsContainer extends React.Component {
  showProducts = products => {
    let { onAddToCart, onChangeMessage } = this.props;
    let result = null;
    if (products.length > 0) {
      result = products.map((product, index) => {
        return (
          <ProductItem
            key={index}
            onAddToCart={onAddToCart}
            product={product}
            onChangeMessage={onChangeMessage}
          ></ProductItem>
        );
      });
    }
    return result;
  };

  render() {
    let { products } = this.props;
    return <Products>{this.showProducts(products)}</Products>;
  }
}

const mapStateToProps = state => {
  return {
    products: state.products
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    onAddToCart: product => {
      dispatch(Actions.actAddCart(product, 1));
    },
    onChangeMessage: message => {
      dispatch(Actions.actChangeMessage(message));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductsContainer);

ProductsContainer.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      inventory: PropTypes.number.isRequired,
      rating: PropTypes.number.isRequired
    })
  ).isRequired
};
