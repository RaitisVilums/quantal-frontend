import { Link, useParams } from "react-router-dom";
import { Categories, DUMMY_PRODUCTS } from "../constants";

import { ProductItem } from "../components";

import "./styles/Product.scss";

const Product = () => {
  const params = useParams();

  const selectedProduct = DUMMY_PRODUCTS.find(
    (product) => product.title === params.productName
  );

  return (
    <section className="product">
      <div className="container">
        <div className="product__container">
          <div className="product__wrapper">
            <ProductItem type product={selectedProduct} />
            <div className="product__other">
              <ProductItem product={selectedProduct} />
            </div>
          </div>
          <div className="products__category">
            <Link to={`/products`}>All</Link>
            {Categories.map((category) => (
              <Link to={`/products/${category.title}`} key={category.id}>
                {category.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
