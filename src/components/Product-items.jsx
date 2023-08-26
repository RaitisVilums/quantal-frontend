import { Link } from "react-router-dom";

const ProductItems = ({ products, category }) => {
  const productsNotFound = () => {
    return (
      <div>
        <h1 className="heading"> No products found 404</h1>
      </div>
    );
  };

  return (
    <div className="products__grid">
      <h1 className="heading">{category ? category : "Products"}</h1>

      {products.length === 0
        ? productsNotFound()
        : products.map((product) => (
            <div className="products__grid--item" key={product.id}>
              <Link to={`/products/${product.category}/${product.title}`}>
                <img
                  className="products__grid--item__img"
                  src={product.attributes.color[0].image}
                  alt={product.title}
                  width={200}
                  height={200}
                />
              </Link>
              <Link
                to={`/products/${product.category}/${product.title}`}
                className="products__grid--item__link"
              >
                {product.title}
              </Link>
            </div>
          ))}
    </div>
  );
};

export default ProductItems;
