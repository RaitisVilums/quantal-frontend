import "./styles/Input.scss";

const Input = ({ title, type, htmlFor, value, onChange }) => {
  return (
    <div className="form__group">
      <label htmlFor={htmlFor}>{title}</label>
      <input type={type} id={htmlFor} value={value} onChange={onChange} />
    </div>
  );
};

export default Input;
