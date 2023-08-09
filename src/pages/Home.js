import * as React from "react";
import { withPrefix } from "gatsby";

import Footer1 from "../components/footer-1";
import Header1 from "../components/header-1";
import { isLoggedIn } from "../services/auth";
import { useEffect } from "react";
import { navigate } from "gatsby";
export default function Layout() {
  useEffect(() => {
    
  }, []);

  return (
    <>
      <div>
        <Header1></Header1>
        {/* Content - Main */}
        <main className="content-main">
          <div className="split-cont">
            <div className="container">
              <div className="row">
                <div className="col-lg-6">
                  <div className="newsletter-form-out">
                    <h1>Coming Soon</h1>
                    <div className="newsletter-form">
                      <label>Join the waitlist</label>
                      <form method="get" action="">
                        <input
                          type="text"
                          name="newsletter"
                          id="newsletter"
                          placeholder="Enter your email"
                        />
                        <input
                          type="submit"
                          name="newslettersubmit"
                          id="newslettersubmit"
                          className="btn btn-blue"
                          text="Sign up"
                        />
                      </form>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="feature-list">
                    <div className="heading-top">
                      <div className="aside">
                        <h3>One click merchification &amp; e-Commerce</h3>
                        <p>Turn art into products, using A.I.</p>
                      </div>
                    </div>
                    <div className="article-wrap">
                      <div className="article-list">
                        <div className="article-out">
                          <div className="article">
                            <div className="box">
                              <div className="figure">
                                <img
                                  src={withPrefix("assets/img/photo-1.png")}
                                  alt="photo-1"
                                />
                              </div>
                              <h3>1. Generate Art</h3>
                            </div>
                          </div>
                          <div className="article">
                            <div className="box">
                              <div className="figure">
                                <img
                                  src={withPrefix("assets/img/photo-2.png")}
                                  alt="photo-2"
                                />
                              </div>
                              <h3>2. Make Merchandise</h3>
                            </div>
                          </div>
                          <div className="article">
                            <div className="box">
                              <div className="figure">
                                <img
                                  src={withPrefix("assets/img/photo-3.png")}
                                  alt="photo-1"
                                />
                              </div>
                              <h3>3. Sell Merch Online</h3>
                            </div>
                          </div>
                          <div className="arrows">
                            <a href="#" className="arrow-right purple">
                              <em className="fal fa-arrow-right" />
                            </a>
                            <a href="#" className="arrow-right">
                              <em className="fal fa-arrow-right" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>

        {/* Footer */}
        <Footer1></Footer1>
      </div>
    </>
  );
}
