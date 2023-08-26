import { Link, Outlet, useParams } from "react-router-dom";

import "./styles/Products.scss";
import { Categories, DUMMY_PRODUCTS } from "../constants";
import { ProductItems } from "../components";

const Products = () => {
  const params = useParams();
  let filteredCategories;

  if (!params.category) {
    filteredCategories = DUMMY_PRODUCTS;
  } else {
    filteredCategories = DUMMY_PRODUCTS.filter(
      (product) => product.category === params.category
    );
  }
  return (
    <section className="products">
      <div className="container">
        <div className="products__wrapper">
          <ProductItems
            category={params.category}
            products={filteredCategories}
          />
          <div className="products__category">
            <Link to={`/products`}>All</Link>
            {Categories.map((category) => (
              <Link key={category.id} to={`/products/${category.title}`}>
                {category.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
