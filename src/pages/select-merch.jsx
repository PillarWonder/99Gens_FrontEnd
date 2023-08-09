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
  var storedImages;
  const { applicationState } = useApplicationContext();
  const [uniqueID, setUniqueID] = React.useState("");

  useEffect(() => {
    
    Axios.post("http://localhost:8080/api/v1/carousels/generateUniqueID")
      .then((response) => {
        setUniqueID(response.data.token);
        localStorage.setItem("carousel_uID", response.data.token);
        localStorage.setItem("carousel_uID_time", response.data.time);
      }).catch((error) => {
        console.log(error);
      });

    var offset = $(".bottom-thumbnails-select").offset();
    var additionalPixels = 0;  //300
    var w = window.innerWidth;

    if (w <= 500) additionalPixels = 600; //1800 origin
    if (w > 500 && w <= 767) additionalPixels = 1500 + 700 / 267 * (w - 500);

    $('.bottom-thumbnails-select-select').addClass('fixed');
    $(window).scroll(function () {

      if ($(document).scrollTop() < offset.top + additionalPixels) {
        $('.bottom-thumbnails-select').addClass('fixed');
      } else {
        $('.bottom-thumbnails-select').removeClass('fixed');
        $('.bottom-thumbnails-select').removeClass('fixed');
      }
    });

    document.getElementById("thumbnails-pagination").innerHTML = `
    <li key={Date.now()}>
        <a href="#" id="thumb1" class="box box1 selected">
          <div class="figure1">
            <img class="image-slot" src="assets/img/placeholder-1.png" alt="placeholder-1"/>
          </div>
          <div class="aside">
            <div class="number">1</div>
          </div>
        </a>
      </li> 
    `
    storedImages = JSON.parse(localStorage.getItem("mergify"));
    if ((storedImages.length > 4) && (w < 767)) {
      document.getElementById("thumbnails_id").style.width = "100%";
      document.getElementById("btn-out").style.width = "100%";
      document.getElementById("btn-out").style.padding = "10px 0px 0px 0px";
      document.getElementById("bottom-thumbnails-id").style.height = "105px";
    }
    for (let i = 2; i <= storedImages.length; i++) {
      document.getElementById("thumbnails-pagination").innerHTML += `
      <li key={i}>
        <a href="#" id="thumb${i}" class="box box${i}">
          <div class="figure1">
            <img class="image-slot" src="assets/img/placeholder-1.png" alt="placeholder-1"/>
          </div>
          <div class="aside">
            <div class="number">${i}</div>
          </div>
        </a>
      </li>
      `
    }
    $(".figure1").each(function (i, obj) {
      if (storedImages[i] !== undefined) {
        let imgObj = $(obj).find(".image-slot");
        imgObj.attr("src", storedImages[i]["original"]);
        imgObj.attr("alt", storedImages[i]["original"]);
      } else {
        obj.remove();
      }
    });
  }, []);

  function createElements() {
    // let thumbnail_count = [];
    // thumbnail_count = JSON.parse(localStorage.getItem("mergify"));
    const createElements_carousel = [];
    for (let i = 1; i <= applicationState.carouselPageCount; i++) {
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
          <script src={withPrefix("assets/js/owl.carousel.js")} type="text/javascript" />
          <script src={withPrefix("assets/js/bootstrap.min.js")} type="text/javascript" />
          <script src={withPrefix("assets/js/select-merch.js")} type="text/javascript" />
        </Helmet>
        <Header></Header>
        <main className="content-main">
          <BreadCrumbNavigator></BreadCrumbNavigator>

          <div className="select-feature-list">
            <div className="container">
              <div className="select-merch">
                <div className="row-container">
                  <div className="container-inn" id="page-header">
                    <div className="heading-top">
                      <h2>Merchification Results</h2>
                      <div class="results"><a href="#">Results(#{uniqueID})</a></div>
                    </div>
                  </div>
                </div>
                {/* <div id="owl-select-merch" className="owl-carousel">
                  {createElements()}
                </div> */}
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
          <div className="bottom-thumbnails-select bottom-thumbnails" id="bottom-thumbnails-id">
            <div className="container">
              <div className="thumbnails-inn">
                <div className="thumbnails" id="thumbnails_id">
                  <ul id="thumbnails-pagination">
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
