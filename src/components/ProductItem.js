import React from "react";

class ProductItem extends React.Component {
  render() {
    return (
      <div class="col-lg-4 col-md-6 mb-r">
        <div class="card text-center card-cascade narrower">
          <div class="view overlay hm-white-slight z-depth-1">
            <img
              src="https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/H/H0/HH0H2/HH0H2?wid=445&hei=445&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=K7ik72"
              class="img-fluid"
              alt=""
            />
            <a>
              <div class="mask waves-light waves-effect waves-light"></div>
            </a>
          </div>
          <div class="card-body">
            <h4 class="card-title">
              <strong>
                <a>Iphone 6 Plus</a>
              </strong>
            </h4>
            <ul class="rating">
              <li>
                <i class="fa fa-star"></i>
              </li>
              <li>
                <i class="fa fa-star"></i>
              </li>
              <li>
                <i class="fa fa-star"></i>
              </li>
              <li>
                <i class="fa fa-star"></i>
              </li>
              <li>
                <i class="fa fa-star"></i>
              </li>
            </ul>
            <p class="card-text">Sản phẩm do apply sản xuất</p>
            <div class="card-footer">
              <span class="left">15$</span>
              <span class="right">
                <a
                  class="btn-floating blue-gradient"
                  data-toggle="tooltip"
                  data-placement="top"
                  title=""
                  data-original-title="Add to Cart"
                >
                  <i class="fa fa-shopping-cart"></i>
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductItem;
