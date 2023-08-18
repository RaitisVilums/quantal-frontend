import { search } from "../assets";
import "./styles/Search.scss";

const Search = () => {
  return (
    <div className="search">
      <input className="search__input" type="text" />
      <button className="search__btn">
        <img src={search} alt="" width={20} height={20} />
      </button>
    </div>
  );
};

export default Search;
