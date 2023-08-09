import React from "react"; 
import { Link } from "gatsby";
import PropTypes from "prop-types";
import { withPrefix } from "gatsby";

const samplePageLinks = [
  {
    text: "Terms & Conditions",
    url: "../terms",
    badge: false,
    description:
      "A simple example of linking to another page within a Gatsby site",
  },
  { text: "Privacy", url: "../privacy" },
  { text: "Cookie Policy", url: "../cookie-policy" },
];

const Footer1 = ({ siteTitle }) => (
  <footer className="footer-main">
    <div className="container">
      <div className="icons">
        <img src={withPrefix("img/icons-ai.svg")} alt="icons-ai" />
      </div>
      <div className="brand">
        <a href="index.html" title="AtlasHoldings">
          <img
            src={withPrefix("img/brand-99generations.svg")}
            alt="brand-99generations"
          />
        </a>
      </div>
      <div className="foot-sub-title">By robots, for humans.™</div>
      <div className="foot-wrap">
        <p>©2022</p>
        <div className="foot-menu2">
          {samplePageLinks.map((link, i) => (
            <React.Fragment key={link.url}>
              <Link to={link.url}>{link.text}</Link>
              {i !== samplePageLinks.length - 1 && <> · </>}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  </footer>
);

Footer1.propTypes = {
  siteTitle: PropTypes.string,
};

Footer1.defaultProps = {
  siteTitle: ``,
};

export default Footer1;
