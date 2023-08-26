import "./styles/Other-item.scss";

const OtherItem = ({ attributes, colorOption }) => {
  const { image, name, quantity } = colorOption;
  return (
    <div className="other-item">
      <div className="other-item__wrapper">
        <img src={image} width={65} height={50} />
      </div>
      {Object.keys(attributes).map((key) => (
        <div className="other-item__wrapper" key={key}>
          <p>{key === "color" ? name : attributes[key]}</p>
        </div>
      ))}
      <div className="other-item__wrapper">{quantity}</div>
    </div>
  );
};

export default OtherItem;
