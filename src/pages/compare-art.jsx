import React from "react"; 
import { withPrefix } from "gatsby";
import { Helmet } from "react-helmet";
import { useEffect } from "react";
import { navigate } from "gatsby";
import { isLoggedIn } from "../services/auth";
import Header from "../components/header";
import Footer1 from "../components/footer-1"; 
import $ from "jquery";

export default function Layout() {
  useEffect(() => {
    
  }, []);

  const resizeIt = () => {
    // var createItImageObj = $(".selected").find('.art-img-wrapper img');
    // //check length of object if greater than 1 then return false
    // if(createItImageObj.length > 1){
    //   alert('Cannot select More than one Image')
    //   return false
    // }else{
    //   $('.new_gif').css('display','flex');
    //   let imgUrl = createItImageObj.attr('alt')
    //   localStorage.setItem('image_resize', imgUrl)
    //   navigate("/mockup");
    // }
  };

  return (
    <>
      <div className="container-main" id="page">
        <Header></Header>
        <Helmet>
          {/* <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css" rel="stylesheet" /> */}
          <link
            href={withPrefix("assets/css/art-styles.css")}
            rel="stylesheet"
          />
          <link
            href={withPrefix("assets/css/components.css")}
            rel="stylesheet"
          />
          <link href={withPrefix("assets/css/python.css")} rel="stylesheet" />

          <link href={withPrefix( "assets/plugins/OwlCarousel2-2.3.4/dist/assets/owl.theme.default.min.css" )} rel="stylesheet" />

          {/* <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js" /> */}
          <script
            src={withPrefix("assets/js/popper.min.js")}
            type="text/javascript"
          />
          <script
            src={withPrefix("assets/js/custom.js")}
            type="text/javascript"
          />
          <script
            src={withPrefix("assets/js/compare-art.js")}
            type="text/javascript"
          />
          <script
            src={withPrefix("assets/js/compare-art-carousel.js")}
            type="text/javascript"
          />
          <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js" />
          <script
            src={withPrefix(
              "assets/plugins/OwlCarousel2-2.3.4/dist/owl.carousel.min.js"
            )}
            type="text/javascript"
          />
          {/* <script src={withPrefix( "assets/plugins/before-after-image-viewer/dist/beforeafter.jquery-1.0.0.js" )} type="text/javascript" /> */}
        </Helmet>
        {/* Header */}

        {/* Content - Main */}
        <main className="content-main">
          <div className="feature-list">
            <div className="container">
              <div className="heading-top">
                <h2 className="w-100">Art by Robots, for Humans</h2>
              </div>
              {/* Page Content */}
              <div className="layered-toggle-view" id="compareContainer">
                <div className="compare-wrapper">
                  <div className="art-container">
                    <div className="art-wrapper" id="artWrapper"></div>
                    <div className="btn-wrapper">
                      <button className="btn-toggle">Toggle</button>
                      <button
                        className="btn-fullscreen"
                        id="btnFullscreenToggle"
                        data-toggle="modal"
                        data-target="#fullScreenModal"
                      >
                        <span>Fullscreen</span>
                      </button>
                      <button
                        className="btn-fullscreen"
                        id="btnFullscreenSideBySide"
                        data-toggle="modal"
                        data-target="#fullScreenModal"
                      >
                        <span>Fullscreen</span>
                      </button>
                    </div>
                  </div>
                  <div className="view-options text-center">
                    <h6>View Options</h6>
                    <div className="view-option">
                      <label className="switch">
                        <input
                          type="checkbox"
                          name="viewOption"
                          defaultValue="layered-toggle-view"
                          defaultChecked
                        />
                        <span className="slider round" />
                      </label>
                      <label>Toggle</label>
                    </div>
                    <div className="view-option">
                      <label className="switch">
                        <input
                          type="checkbox"
                          name="viewOption"
                          defaultValue="layered-side-by-side"
                        />
                        <span className="slider round" />
                      </label>
                      <label>Side by Side</label>
                    </div>
                    <div className="view-option">
                      <label className="switch">
                        <input
                          type="checkbox"
                          name="viewOption"
                          defaultValue="magnify"
                        />
                        <span className="slider round" />
                      </label>
                      <label>Magnify</label>
                    </div>
                  </div>
                </div>
              </div>
              {/* Art Carousel */}
              <div className="carousel-container">
                <div className="owl-carousel">
                  <div className="carousel-item">
                    <div className="round-checked-badge" />
                    <div className="art-img-item-wrapper">
                      <div className="art-img-wrapper">
                        <img
                          className="art-img"
                          src={withPrefix("assets/art/img-compare-a.png")}
                        />
                      </div>
                      <div className="art-name">Craiyon</div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="round-checked-badge" />
                    <div className="art-img-item-wrapper">
                      <div className="art-img-wrapper">
                        <img
                          className="art-img"
                          src={withPrefix("assets/art/img-compare-b.png")}
                        />
                      </div>
                      <div className="art-name">ru-DALL-E</div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="round-checked-badge" />
                    <div className="art-img-item-wrapper">
                      <div className="art-img-wrapper">
                        <img
                          className="art-img"
                          src={withPrefix("assets/art/img-compare-a.png")}
                        />
                      </div>
                      <div className="art-name">SwinIR</div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="round-checked-badge" />
                    <div className="art-img-item-wrapper">
                      <div className="art-img-wrapper">
                        <img
                          className="art-img"
                          src={withPrefix("assets/art/img-compare-b.png")}
                        />
                      </div>
                      <div className="art-name">Real-ESRGAN</div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="round-checked-badge" />
                    <div className="art-img-item-wrapper">
                      <div className="art-img-wrapper">
                        <img
                          className="art-img"
                          src={withPrefix("assets/art/img-compare-b.png")}
                        />
                      </div>
                      <div className="art-name">Real-ESRGAN</div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="round-checked-badge" />
                    <div className="art-img-item-wrapper">
                      <div className="art-img-wrapper">
                        <img
                          className="art-img"
                          src={withPrefix("assets/art/img-compare-b.png")}
                        />
                      </div>
                      <div className="art-name">Real-ESRGAN</div>
                    </div>
                  </div>
                </div>
              </div>
              {/* ./Art Carousel */}
              {/* Magnifying Glass Result */}
              <div className="magnifying-result-container mb-4">
                <div className="magnifying-result">
                  <div className="result-img-container">
                    <div className="result-img">
                      <div
                        className="art-ele"
                        style={{
                          backgroundImage: "url(assets/art/img-compare-a.png)",
                        }}
                      />
                    </div>
                    <div className="result-img">
                      <div
                        className="art-ele"
                        style={{
                          backgroundImage: "url(assets/art/img-compare-b.png)",
                        }}
                      />
                    </div>
                  </div>
                  <div className="result-action">
                    <div className="slider-zoom">
                      <input
                        className="slider-range"
                        type="range"
                        min={1}
                        max={100}
                        defaultValue={20}
                        id="sliderRange"
                      />
                      <div className="slider-labels">
                        <span>1</span>
                        <input
                          type="number"
                          className="slider-input"
                          min={1}
                          max={100}
                          defaultValue={20}
                          id="sliderInput"
                        />
                        <span>100</span>
                      </div>
                    </div>
                    <button
                      className="btn-fullscreen"
                      id="btnFullscreen"
                      data-toggle="modal"
                      data-target="#fullScreenModal"
                    >
                      <i className="fa fa-arrows" />
                      <span>Fullscreen</span>
                    </button>
                  </div>
                </div>
              </div>
              {/* Full Screen Modal */}
              <div
                className="modal fullscreen-modal layered-toggle-view"
                id="fullScreenModal"
                role="dialog"
              >
                <div className="modal-dialog">
                  {/* Modal content*/}
                  <div className="modal-content">
                    <span className="close" data-dismiss="modal">
                      ×
                    </span>
                    <div className="fullscreen-result">
                      <div
                        className="layered-toggle-view"
                        id="fullscreenContent"
                      >
                        <div className="result-img-names"></div>
                        <div className="result-img-container"></div>
                      </div>
                      <div className="modal-options">
                        <button className="btn-toggle">Toggle</button>
                        <div className="slider-zoom">
                          <input
                            className="slider-range"
                            type="range"
                            min={1}
                            max={100}
                            defaultValue={20}
                          />
                          <div className="slider-labels">
                            <span>1</span>
                            <input
                              type="number"
                              className="slider-input"
                              min={1}
                              max={100}
                              defaultValue={20}
                            />
                            <span>100</span>
                          </div>
                        </div>
                        <div className="view-options">
                          <div className="view-option">
                            <label className="switch">
                              <input
                                type="checkbox"
                                name="viewOption"
                                defaultValue="layered-toggle-view"
                                defaultChecked
                              />
                              <span className="slider round" />
                            </label>
                            <label>Toggle</label>
                          </div>
                          <div className="view-option">
                            <label className="switch">
                              <input
                                type="checkbox"
                                name="viewOption"
                                defaultValue="layered-side-by-side"
                              />
                              <span className="slider round" />
                            </label>
                            <label>Side by Side</label>
                          </div>
                          <div className="view-option">
                            <label className="switch">
                              <input
                                type="checkbox"
                                name="viewOption"
                                defaultValue="magnify"
                              />
                              <span className="slider round" />
                            </label>
                            <label>Magnify</label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* ./Modal */}
              {/* ./Magnifying Glass Result */}
              {/* ./Page Content */}
              <div className="btn-out">
                <div
                  onClick={resizeIt}
                  id="createItBtn"
                  className="btn btn-blue"
                >
                  Create It
                </div>{" "}
              </div>
              <div id="response_resultsV2" style={{ display: "none" }}>
                <div className="col-12">
                  <span>Front Backpack</span>
                  <img
                    id="front_bagpack"
                    src="assets/img/art-1.png"
                    alt="front"
                  />
                </div>
                <div className="col-12">
                  <span>Top Backpack</span>
                  <img id="top_bagpack" src="assets/img/art-1.png" alt="top" />
                </div>
                <div className="col-12">
                  <span>Bottom Backpack</span>
                  <img
                    id="bottom_bagpack"
                    src="assets/img/art-1.png"
                    alt="bottom"
                  />
                </div>
              </div>
            </div>
          </div>
        </main>
        <Footer1></Footer1>
      </div>
    </>
  );
}
