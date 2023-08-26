import "./styles/Attribute-Group.scss";

const AttributeGroup = ({ name, value, type }) => {
  return (
    <>
      {type ? (
        <div>rendered</div>
      ) : (
        <>
          {name === "color" ? (
            <div className="attribute__group">
              <div className="attribute__name">
                <p>{name}:</p>
              </div>
              <select id="colors">
                {value.map((item, index) => (
                  <option key={index} value={item.name}>
                    {item.name}
                  </option>
                ))}
              </select>
            </div>
          ) : (
            <div className="attribute__group">
              <div className="attribute__name">
                <p>{name}:</p>
              </div>
              <div className="attribute__value">
                <p>{value}</p>
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default AttributeGroup;
