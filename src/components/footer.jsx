import * as React from "react";
import Helmet from "react-helmet";
import { navigate } from "gatsby";
import { withPrefix } from "gatsby";
import { isLoggedIn } from "../services/auth";


export default function Footer({ valueA, valueB }) {
  const onTermsClick = (e) => {
    e.preventDefault();
    navigate("/terms");
  }
  const onPrivacyClick = (e) => {
    e.preventDefault();
    navigate("/privacy");
  }
  const onPolicyClick = (e) => {
    e.preventDefault();
    navigate("/cookie-policy");
  }
  const onPricingClick = (e) => {
    e.preventDefault();
    navigate("/pricing-options");
  }

  const [state, setState] = React.useState({
    stagingSignupEmail: ""
  });

  const onEmailInputChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  }

  const onSubmitClick = (e) => {
    e.preventDefault();
    localStorage.setItem("stagingSignupEmail", state.stagingSignupEmail);
    navigate("/create-account");
  }

  return (
    <footer className="footer-main">
      <Helmet>
        <link
          href={withPrefix("assets/css/custom-styles.css")}
          rel="stylesheet"
        />
      </Helmet>
      <div className="container">
        {isLoggedIn() ? (
          <>

          </>
        ) : (
          <>
            <div className="newsletter-form-wrap">
              <div className="newsletter-form">
                <label>Begin creating</label>
                <form method="get" action="">
                  <input
                    type="text"
                    name="stagingSignupEmail"
                    id="newsletter"
                    placeholder="Enter your email"
                    onChange={onEmailInputChange}
                  />
                  <input
                    type="submit"
                    name="newslettersubmit"
                    id="newslettersubmit"
                    className="btn btn-blue"
                    onClick={onSubmitClick}
                  />
                </form>
              </div>
            </div>
          </>
        )}

        <div className="icons">
          <img src={withPrefix("img/icons-ai.svg")} />
        </div>
        <div className="brand">
          <a href="index.html" title="AtlasHoldings">
            {" "}
            <img src={withPrefix("img/brand-99generations.svg")} />
          </a>
        </div>
        {/* <div > */}
        <ul className="absolute-footer">
          <li className="absolute-footer">
            <p onClick={onPricingClick}>Pricing</p>
          </li>
          <li className="absolute-footer">
            <p >My Creations</p>
          </li>
          <li className="absolute-footer">
            <p >Help</p>
          </li>
        </ul>
        {/* </div>	 */}
        <div className="foot-sub-title">By robots, for humans.™</div>
        <div className="foot-wrap">
          <p>©2022</p>
          <div className="foot-menu2">
            <p href="#" className="stagingnavtag" onClick={onTermsClick}>Terms & Conditions</p>
            <p href="#" className="stagingnavtag" onClick={onPrivacyClick}>Privacy</p>
            <p href="#" className="stagingnavtag" onClick={onPolicyClick}>Cookie Policy</p>
          </div>
        </div>
      </div>
    </footer>
  )
}



