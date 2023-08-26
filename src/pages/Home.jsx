import { Link } from "react-router-dom";

import "./styles/Home.scss";
import { logo } from "../assets";

import { Categories } from "../constants";

const Home = () => {
  return (
    <section className="home">
      <div className="container">
        <h1 className="heading">QUANTAL LAKE - DEEP INTO THE FISH INSTINCT</h1>
      </div>

      <div className="container">
        <h2 className="subheading">Categories</h2>
        <div className="home__grid">
          {Categories.map((category) => (
            <div className="home__grid--item" key={category.id}>
              <Link to={`/products/${category.title}`}>
                <img
                  className="home__grid--item__img"
                  src={category.image}
                  alt={category.title}
                  width={288}
                  height={288}
                />
              </Link>
              <Link
                to={`/products/${category.title}`}
                className="home__grid--item__link"
              >
                {category.title}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home;
