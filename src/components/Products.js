import React from "react";
import ProductItem from "./ProductItem";

class Products extends React.Component {
  render() {
    return (
      <section class="section">
        <h1 class="section-heading">Danh Sách Sản Phẩm</h1>
        <div class="row">
          <ProductItem></ProductItem>
        </div>
      </section>
    );
  }
}

export default Products;
