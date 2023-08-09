import React from "react";  
import { withPrefix } from "gatsby";
import { navigate } from "gatsby";
import { isLoggedIn } from "../services/auth";
import { useEffect } from "react";
import Helmet from "react-helmet";
import Header from "../components/header";
import Footer1 from "../components/footer-1";
import $ from "jquery";

export default function Layout() {

  useEffect(() => {
    
  }, []);

  // var retrievedData = localStorage.getItem("thingtoShow");
  // var myArray = retrievedData.split(",");

  const createElements = () => {

    var elements = [];
    for (let i = 1; i <= 6; i++) {
      elements.push(<img id={"img" + `${i}`} className="show-small-img" src={withPrefix("assets/img/green-little-balls.gif")} alt="product-bag-1" />);
    }
    return elements;
  };

  const goBack = (e) => {
    e.preventDefault();
    window.history.back();
  }

  return (
    <>
      <Helmet>
        {/* <script async src="https://code.jquery.com/jquery-3.4.1.min.js" integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=" crossorigin="anonymous" /> */}
        <script await src={withPrefix("assets/js/all-over-print-backpack.js")} />
      </Helmet>
      <div className="container-main" id="page">
        {/* Header */}
        <Header></Header>
        {/* Content - Main */}
        <main className="content-main">
          <div className="product-details">
            <div className="container">
              <div className="heading-top">
                <h2>All-Over-Print Product</h2>
                <div className="see-more">
                  <a onClick={goBack} >Back</a>
                </div>
              </div>
              <div className="product-img-out">
                <div className="product-img">
                  <div className="product-lrg">
                    <div className="show backpack_main">
                      <img id="show-img" src={withPrefix("assets/img/green-little-balls.gif")} alt="product-bag-1" />
                    </div>
                    <div className="bottom-btns">
                      {/* <a href="#" className="btn btn-dark-blue">Edit</a> */}
                      <a href="#" style={{ width: "100%" }} className="btn btn-blue btn-buynow" > Buy Now </a>
                    </div>
                  </div>
                  <div className="small-img">
                    <div className="small-container">
                      <div id="small-img-roll">
                        {createElements()}
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
