import React from "react"; 
import Axios from "axios";
import { withPrefix } from "gatsby";
import { useEffect } from "react";
import { navigate } from "gatsby";
import { Helmet } from "react-helmet";
import $ from "jquery";
import OwlCarousel from "react-owl-carousel2";
import Header from "../components/header";
import Footer1 from "../components/footer-1";
import { isLoggedIn } from "../services/auth";
import BreadCrumbNavigator from "../components/bread-crump-navigator";
import CarouselSlotGroup from "../components/carousel-slot-group";
import { useApplicationContext } from "../../provider";


export default function Layout() {
  let selectedCount = 6;
  const { applicationState, setApplicationState } = useApplicationContext();

  var products = [
    "backpack", "hoodie", "unisex-sweatshirt", "tote-bag",
    "jigsaw-puzzle-520", "canvas-1824", "crop-tee-s", "gym-bag",
    "beanie", "premium-pillow", "joggers-women", "gaming-mouse-pad",
    "tank-top-women", "tough-iphone-case", "men-atheletic-t-shirt", "minimalist-backpack",
    "women-crew-neck-t-shirt", "duffle-bag", "men-windbreaker", "bomber-jacket",
    "one-piece-swimsuit", "unisex-track-pants", "unisex-wide-leg-pants",
    "long-sleeve-midi-dress", "womens-cropped-windbreaker"];

  async function getSavedData() {
    if (localStorage.getItem("email") !== undefined) {

      selectedCount = localStorage.getItem("selectedCount");
      let selectedArray = new Array();
      let myCarouselArray;
      for (let i = 0; i < selectedCount; i++) {
        selectedArray.push(localStorage.getItem(`showItem${i}`));
      }
      Axios.post(
        "http://localhost:8080/api/v1/carousels/get_savedItemstoDisplay",
        { selectedItems: selectedArray, selectedCount: selectedCount }
      ).then((response) => {
        if (response.data.status === "success") {
          myCarouselArray = response.data.result;
          for (let k = 0; k < myCarouselArray.length; k++) {
            let tempCarousel = myCarouselArray[k].carousel;
            let tempThumbnail = myCarouselArray[k].thumbnail;
            document.getElementById("thumbnails-pagination-1").innerHTML += `
              <li key=${k + 1}>
                <a href="#" id="thumb${k + 1}" class="box box${k + 1}">
                  <div class="figure1">
                    <img class="image-slot" src=${tempThumbnail} alt="placeholder-1"/>
                  </div>
                  <div class="aside">
                    <div class="number">${k + 1}</div>
                  </div>
                </a>
              </li>`;
            let indicator = k + 1;
            for (let j = 0; j <= 23; j++) {
              if (JSON.parse(tempCarousel)[products[j]] != undefined) {
                $(".item" + indicator + " ." + products[j] + " .merchImages").attr("src", JSON.parse(tempCarousel)[products[j]][0][0]);
                localStorage.setItem("item" + indicator + products[j], JSON.parse(tempCarousel)[products[j]][0]);
              }
            }
          }
        }
      })

      var offset = $(".bottom-thumbnails").offset();
      var additionalPixels = 0;
      var w = window.innerWidth;
      additionalPixels = 0;
      if (w > 1366) additionalPixels = 0;
      if (w < 500) additionalPixels = 750;

      $('.bottom-thumbnails').addClass('fixed');
      $(window).scroll(function () {
        if ($(document).scrollTop() < offset.top + additionalPixels) {
          $('.bottom-thumbnails').addClass('fixed');
        } else {
          $('.bottom-thumbnails').removeClass('fixed');
          $('.bottom-thumbnails').removeClass('fixed');
        }
      });

      if ((selectedCount > 4) && (w < 767)) {
        document.getElementById("thumbnails_id").style.width = "100%";
        document.getElementById("btn-out").style.width = "100%";
        document.getElementById("btn-out").style.padding = "10px 0px 0px 0px";
        document.getElementById("bottom-thumbnails-id").style.height = "100px";
      }
    }
  }

  useEffect(() => {
    
    getSavedData();
  }, []);

  function createElements() {
    const createElements_carousel = [];
    for (let i = 1; i <= applicationState.mycreationsSelectedCount; i++) {
      createElements_carousel.push(<CarouselSlotGroup customID={i}></CarouselSlotGroup>);
    }
    return createElements_carousel;
  }

  const onAddToCart = (e) => {
    e.preventDefault();
    navigate("/shipping-address");
  }

  const options = {
    items: 1,
    loop: false,
    dragEnabled: false,
    margin: 8,
    nav: true,
    dotsEach: true,
    dots: false,
    autoplay: false,
    navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>']
  };

  return (
    <>
      <div className="container-main" id="page">
        <Helmet>
          <script src={withPrefix("assets/js/bootstrap.min.js")} type="text/javascript" />
          <script src={withPrefix("assets/js/my-creations-view.js")} type="text/javascript" />
        </Helmet>
        <Header></Header>
        <main className="content-main">
          <BreadCrumbNavigator></BreadCrumbNavigator>

          <div className="select-feature-list">
            <div className="container">
              <div className="select-merch">
                <div className="row-container">
                  <div className="container-inn" id="page-header-1">
                    <h2>My Creations</h2>
                    <div className="heading-top"></div>
                  </div>
                </div>

                <OwlCarousel className="owl-carousel owl-theme" id="owl-select-merch" options={options}>
                  {createElements()}
                </OwlCarousel>

                <div className="row-container">
                  <div className="container-inn">
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bottom-thumbnails" id="bottom-thumbnails-id">
            <div className="container">
              <div className="thumbnails-inn">
                <div className="thumbnails" id="thumbnails_id">
                  <ul id="thumbnails-pagination-1">
                  </ul>
                </div>
                <div className="btn-out" id="btn-out">
                  <button className="btn btn-blue" onClick={onAddToCart}>
                    <em className="fal fa-shopping-cart" /> CART
                  </button>
                </div>
              </div>
            </div>
          </div>


          {/* Modal - Profile */}
          <div className="select-merch-modal">
            <div className="modal fade" id="select-merch" role="dialog">
              <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                  <div className="product-details" id="modal-heading-top">
                    <div className="heading-top">
                    </div>
                    <div className="product-img-out">
                      <div className="product-img">
                        <div className="product-lrg">
                          <div className="show zoom" id='ex3' style={{ position: "relative" }}>
                            <img id="show-img" src={withPrefix("assets/img/green-little-balls.gif")} alt="product-bag-1" as="image" width="300" height="300" />
                          </div>
                          <div className="bottom-btns">
                            <button className="btn btn-dark-blue">Add to Cart</button>
                            <button className="btn btn-blue">Buy Now</button>
                          </div>
                        </div>
                        <div className="small-img">
                          <div className="small-container">
                            <div id="small-img-roll">
                            </div>
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
        <Footer1></Footer1>
      </div>
    </>
  );
}
