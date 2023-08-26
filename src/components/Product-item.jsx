import AttributeGroup from "./Attribute-Group";
import OtherItem from "./Other-item";
import { useAuth } from "../contexts/Auth";

const ProductItem = ({ product, type }) => {
  const { title, description, attributes } = product;
  const { user } = useAuth();

  return (
    <>
      {type ? (
        <div className="product__item">
          <h1 className="heading">{title}</h1>
          <div className="product__item--content">
            <div className="product__item--content__image">
              <img src="" alt="" width={300} height={300} />
            </div>
            <div className="product__item--description">
              {Object.keys(attributes).map((key, index) => (
                <AttributeGroup
                  key={index}
                  name={key}
                  value={attributes[key]}
                />
              ))}

              <div className="product__item--cta">
                {user && (
                  <button className="product__item--btn">add to cart</button>
                )}
              </div>
            </div>
          </div>
          <div className="product__item--content">{description}</div>
        </div>
      ) : (
        <>
          {Object.keys(attributes).map((key) => {
            if (key === "color") {
              return attributes[key].map((colorOption, index) => {
                console.log(colorOption);
                return (
                  <>
                    <OtherItem
                      key={index}
                      colorOption={colorOption}
                      attributes={attributes}
                    />
                  </>
                );
              });
            }
            return null; // Render nothing for other keys
          })}
        </>
      )}
    </>
  );
};

export default ProductItem;
