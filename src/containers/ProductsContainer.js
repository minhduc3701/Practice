import React from "react";
import { connect } from "react-redux";
import Products from "../components/Products";
import ProductItem from "../components/ProductItem";
import PropTypes from "prop-types";

class ProductsContainer extends React.Component {
  showProducts = products => {
    let result = null;
    if (products.length > 0) {
      result = products.map((product, index) => {
        return <ProductItem key={index} product={product}></ProductItem>;
      });
    }
    return result;
  };

  render() {
    let { products } = this.props;
    console.log(products);
    return <Products>{this.showProducts(products)}</Products>;
  }
}

const mapStateToProps = state => {
  return {
    products: state.products
  };
};

export default connect(
  mapStateToProps,
  null
)(ProductsContainer);

ProductsContainer.propTypes = {
  product: PropTypes.arrayOf(
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
