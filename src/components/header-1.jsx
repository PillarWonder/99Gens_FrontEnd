import * as React from "react";
import Helmet from "react-helmet";
import { withPrefix } from "gatsby";

const Header1 = () => (
  <header className="header-main">
    <div className="container">
      <div className="brand">
        <a href="../staging" title="99 Generations">
          <img
            src={withPrefix("img/brand-99-generations.svg")}
            alt="brand-99-generations"
          />
        </a>
      </div>
      <div className="overlay" />
    </div>
  </header>
);

export default Header1;
 