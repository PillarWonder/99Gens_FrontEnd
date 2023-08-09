import React from "react"; 
import Header from "../components/header";
import Footer1 from "../components/footer-1";
import { isLoggedIn } from "../services/auth";
import { useEffect } from "react";
import { navigate } from "gatsby";
import Helmet from "react-helmet";
import $ from "jquery";
import { withPrefix } from "gatsby";

export default function Layout() {
  useEffect(() => {
    
    // renderFrontMockup();
    // initScaleSlider();
    // $('.menu-bar').click(function() {
    //   $('.menu-bar').removeClass('active');
    //   $('.nav-bar').slideUp(10);
    //   $('.overlay').removeClass('show');
    //   $('body').removeClass('hidden-body');
    //   if($(this).next().is(':hidden') == true) {
    //     $(this).addClass('active');
    //     $(this).next().slideDown(10);
    //     $('.overlay').addClass('show');
    //     $('body').addClass('hidden-body');
    //   }
    // });
  }, []);
  //   var generatorMockup = $('.generator-mockup');
  //   var mockupParams;

  //   const renderFrontMockup = () => {
  //     var mockupContent = `
  //       <div class="backpack-mockup front">
  //         <img src="assets/mockup/backpack/front.png" alt="" />
  //         <span class="safe-print-area-top">Safe Print Area</span>
  //         <span class="safe-print-area-bottom">Safe Print Area</span>
  //         <span class="front-top">Front top</span>
  //         <span class="fold-line">Fold line</span>
  //         <span class="front-pocket">Front Pocket</span>
  //         <span class="placement-on-product">Placement on product</span>
  //       </div>
  //     `;
  //     $('.backpack-mockup').remove();
  //     generatorMockup.append(mockupContent);
  //   }
  //   const saveMockupDesign = () => {
  //     var orgPart = $('.mockup-tab.active');
  //     // save mockup
  //     if(!$('.mockup-handler').length) {
  //       return;
  //     }
  //     var width = $('.mockup-handler')[0].style.width;
  //     var height = $('.mockup-handler')[0].style.height;
  //     var left = $('.mockup-handler')[0].style.left;
  //     var top = $('.mockup-handler')[0].style.top;
  //     var transform = $('.mockup-handler')[0].style.transform;
  //     var param = {
  //       ...mockupParams[orgPart.data('id')],
  //       width: width,
  //       height: height,
  //       left: left,
  //       top: top,
  //       transform: transform
  //     };
  //     mockupParams = {...mockupParams, [orgPart.data('id')]: param};
  //   }

  //   const initScaleSlider = () => {
  //     if($('.mockup-img')[0]) {
  //       $('.designer-toolbar').show();
  //     } else {
  //       $('.designer-toolbar').hide();
  //     }
  //   }

  const createIt = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <div className="container-main" id="page">
        <Helmet>
          {/* <link href="https://www.jqueryscript.net/css/jquerysctipttop.css" rel="stylesheet" type="text/css" /> */}
          {/* <link rel="stylesheet" href="https://code.jquery.com/ui/1.12.1/themes/flick/jquery-ui.css" /> */}

          {/* <script src={withPrefix("assets/js/jquery.min.js")} type="text/javascript" /> */}
          <script
            src={withPrefix("assets/js/popper.min.js")}
            type="text/javascript"
          />
          <script
            src={withPrefix("assets/js/bootstrap.min.js")}
            type="text/javascript"
          />
          <script
            src={withPrefix("assets/js/custom.js")}
            type="text/javascript"
          />
          <script
            src={withPrefix("assets/js/python.js")}
            type="text/javascript"
          />
          <script
            src={withPrefix("assets/js/mockup.js")}
            type="text/javascript"
          />

          {/* <script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js" /> */}
          {/* <script src={withPrefix("assets/plugins/resize-drag-rotate-box-modeling/box-modeling-custom.js")} type="text/javascript" /> */}
        </Helmet>
        <Header></Header>
        <main className="content-main">
          <div className="feature-list">
            <div className="container">
              <div className="heading-top">
                <h2>Design Mockup</h2>
                <div className="see-more">
                  <a href="#">Add product</a>
                </div>
              </div>
              {/* Page */}
              <div className="design-mockup">
                <ul className="mockup-tabs">
                  <li className="mockup-tab active" data-id="front">
                    Front &amp; Pocket
                  </li>
                  <li className="mockup-tab" data-id="top">
                    Top panel
                  </li>
                  <li className="mockup-tab" data-id="bottom">
                    Bottom panel
                  </li>
                  <li className="mockup-tab" data-id="inside">
                    Inside pocket
                  </li>
                </ul>
                <div className="designer-toolbar" />
                <div className="main-mockup-area">
                  <div className="generator-mockup">
                    <div className="upload-design">
                      <img
                        className="btn-upload"
                        src="assets/mockup/tap-your-design-here.svg"
                        alt=""
                      />
                      <input type="file" className="upload-file" />
                    </div>
                    <div className="mockup-design">
                      {/* <img class="mockup-img" src="assets/mockup/backpack-img-b.jpg" alt="" /> */}
                    </div>
                    <div className="backpack-mockup inside">
                      <img src="assets/mockup/backpack/inside.png" alt="" />
                      <span className="safe-print-area-bottom">
                        Safe Print Area
                      </span>
                      <span className="placement-on-product">
                        Placement on product
                      </span>
                    </div>
                  </div>
                </div>
                <div className="designer-toolbar">
                  <span className="scale-button minus">-</span>
                  <input
                    type="range"
                    className="scale-slider"
                    min="0.1"
                    max={2}
                    defaultValue={1}
                    step="0.01"
                  />
                  <span className="scale-button plus">+</span>
                </div>
              </div>
              {/* ./Page */}
              <div className="btn-out">
                <button onClick={createIt} className="btn btn-blue">
                  Setup Store
                </button>
              </div>
            </div>
          </div>
        </main>
        <Footer1></Footer1>
      </div>
    </>
  );
}
