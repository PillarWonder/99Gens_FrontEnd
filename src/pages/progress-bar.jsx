import React from "react"; 
import Header from "../components/header";
import Footer1 from "../components/footer-1";
import Helmet from "react-helmet";
import { withPrefix } from "gatsby";
import { isLoggedIn } from "../services/auth";
import { useEffect } from "react";
import { navigate } from "gatsby";

export default function Layout() {
  useEffect(() => {
    
  }, []);
 
  return (
    <>
      <div className="container-main" id="page">
        <Helmet>
          <link
            href={withPrefix("assets/css/progress-bar.css")}
            rel="stylesheet"
          />

          <script
            src={withPrefix("assets/js/progress-bar.js")}
            type="text/javascript"
          />
        </Helmet>
        <Header></Header>
        <main className="content-main">
          <div className="feature-list">
            <div className="container">
              <div className="heading-top">
                <h2>Generating Mockup</h2>
                <div className="see-more">
                  <a href="#">Add product</a>
                </div>
              </div>
              <div className="row">
                <div className="product-mockup">
                  <div className="product-img">
                    <img src={withPrefix("assets/img/art-8.png")} alt="art-8" />
                  </div>
                  <div className="product-detail">
                    <div className="product-name">Cat Unisex T-shirt</div>
                    <div className="product-progress">
                      <div className="progress-bar">
                        <div className="progress-indicator" />
                      </div>
                      <div className="progress-message">
                        Waiting to be processed...
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="btn-out">
                <a href="#" className="btn btn-blue">
                  Setup Store
                </a>
              </div>
            </div>
          </div>
        </main>

        <Footer1></Footer1>
      </div>
    </>
  );
}
