import React, { useEffect } from "react";
import { useApplicationContext } from "../../provider";
import { withPrefix } from "gatsby";
import { isLoggedIn } from "../services/auth";
import { navigate } from "gatsby";
import { Helmet } from "react-helmet";
import $ from "jquery"; 
import Axios from "axios";
import Footer from "../components/footer-1";
import Header from "../components/header";
import BreadCrumbNavigator from "../components/bread-crump-navigator";

export default function Layout() {
  useEffect(() => {
    
    if (applicationState.detailedDescription_tab) {
      generateArt(applicationState.detailedDescription_tab);
    }
    if (applicationState.detailedDescription) {
      generateArt(applicationState.detailedDescription);
    }
    else {
      generateArt("cyber punk");
    }
  }, []);

  const [state, setState] = React.useState({
    carouselPageCount: ""
  });

  const { applicationState, setApplicationState } = useApplicationContext();




  const generateArt = async (phrase) => {
    let api_Urls = ["https://canvas.99gens-api.com/api/diffusion/generate?prompt=", "https://sweatshirt.99gens-api.com/api/diffusion/generate?prompt=", "https://tote-bag.99gens-api.com/api/diffusion/generate?prompt=", "https://gym-bag.99gens-api.com/api/diffusion/generate?prompt=", "https://beanie.99gens-api.com/api/diffusion/generate?prompt=", "https://jigsaw-puzzle.99gens-api.com/api/diffusion/generate?prompt="];
    const el = document.querySelectorAll(".image_art");
    let str = phrase || "cyber punk";
    let jobarr = new Array();
    for (let i = 0; i < 6; i++) {
      try {
        fetch(api_Urls[i] + str)
          .then((response) => response.json())
          .then((data) => {
            if (data !== undefined) {
              jobarr[i] = data.id;
              let image = document.querySelector("#image_art" + i);
              image.src = data.images[0];
              localStorage.setItem("job_id", jobarr);
            }
          });
      } catch (error) {
        alert("Error Occured");
      }
    }
  }

  async function onMerchifyClick() {
    $('.new_gif').css('display', 'flex');
    // let upscale_Urls = ["https://hoodie.99gens-api.com/api/rudalle/upscale2x", "https://sweatshirt.99gens-api.com/api/rudalle/upscale2x", "https://tote-bag.99gens-api.com/api/rudalle/upscale2x", "https://gym-bag.99gens-api.com/api/rudalle/upscale2x", "https://beanie.99gens-api.com/api/rudalle/upscale2x", "https://jigsaw-puzzle.99gens-api.com/api/rudalle/upscale2x"];
    var conceptName = $(".selected").find(".figure img");
    const arrImg = [];
    $.each(conceptName, function (key, value) {
      arrImg.push(value.src);
    });
    let dataPostRequest = {
      // id: localStorage.getItem("job_id"),
      images: arrImg,
    };
    const merchifyArr = [];
    // for (let i = 0; i < dataPostRequest.images.length; i++) {
    //   const response = await Axios.post(
    //     upscale_Urls[i],
    //     {"image": dataPostRequest.images[i]}
    //   );
    //   merchifyArr.push({
    //     id: i,
    //     original: response.data.image
    //   });
    // }
    // console.log("this is that:::1", merchifyArr);

    const response_4x = await Axios.post(
      "https://backpack.99gens-api.com/api/rudalle/upscale4x",
      dataPostRequest
    );
    for (let i = 0; i < dataPostRequest.images.length; i++) {
      merchifyArr.push({
        id: i,
        upscaled: response_4x.data.results[i].upscaled,
        original: response_4x.data.results[i].original
      });
    }

    let carouselPageCount = merchifyArr.length;
    // setState({ ...state, detailedDescription: applicationState.detailedDescription });
    setApplicationState({
      ...applicationState,
      carouselPageCount: carouselPageCount,
    });
    setApplicationState({
      ...applicationState,
      carouselPageCount: carouselPageCount,
    });
    console.log("!!!", applicationState);
    localStorage.setItem("mergify", JSON.stringify(merchifyArr));
    navigate("/select-merch");
  };

  const onRegenerateClick = (e) => {
    e.preventDefault();
    $('.new_gif').css('display', 'flex');
    if (applicationState.detailedDescription_tab) {
      generateArt(applicationState.detailedDescription_tab);
    }
    if (applicationState.detailedDescription) {
      generateArt(applicationState.detailedDescription);
    }
    else {
      generateArt("cyber punk");
    }
    setTimeout(() => {
      $('.new_gif').css('display', 'none');
    }, 6000);
  }

  // for advanced version for compare-art pages.
  /* const onMerchifyClick = (e) => {
     e.preventDefault();
     var conceptName = $(".selected").find('.figure img');
     // $('.art-image').find(":selected").text()
     const arrImg = []
     $.each( conceptName, function( key, value ) {
       arrImg.push(value.src);
   });
 
   $('.new_gif').css('display','flex');
     let dataPostRequest = {
       "id": localStorage.getItem('job_id'),
       "images": arrImg
     }
     const merchifyArr = []
     postData('http://54.173.169.111/api/rudalle/upscale2x', dataPostRequest)
     .then((data) => {
       if (data && data.status){
         $.map( data.images, function( val, i ) {
           if (val.status == 'succeeded'){
             merchifyArr.push({
               "id_val":i ,
               "original":val.original,
               "upscaled":val.upscaled
             })
           }
         });
         localStorage.setItem('mergify',JSON.stringify(merchifyArr))
       }
       navigate('/compare-art');
     });
   }
 */
  return (
    <>
      <Helmet>
        <link href={withPrefix("assets/css/bootstrap.min.css")} rel="stylesheet" />
      </Helmet>
      <div className="new_gif" style={{ display: "none" }}>
        <img src={withPrefix("assets/img/green-little-balls.gif")} className="img-fluid mw_50" alt="loading" />
      </div>
      <Header></Header>

      <main className="content-main">
        <BreadCrumbNavigator></BreadCrumbNavigator>
        <div className="feature-list">
          <div className="container">
            <div className="heading-top">
              <h2>Choose Art</h2>
              <div className="image_refresh_div" onClick={onRegenerateClick}>
                <img className="image_refresh" src={withPrefix("assets/img/refresh-svgrepo-com.svg")} alt="img/art-2.png" />
              </div>
            </div>
            <div className="row" id="artContainer">
              <div className="col-md-4">
                <a className="box art-image">
                  <div className="figure">
                    <img className="image_art" id="image_art0" src={withPrefix("assets/img/green-little-balls.gif")} alt="img/art-1.png" />
                  </div>
                  <div className="aside"></div>
                </a>
              </div>
              <div className="col-md-4 ">
                <a className="box art-image" id='ex3'>
                  <div className="figure">
                    <img className="image_art" id="image_art1" src={withPrefix("assets/img/green-little-balls.gif")} alt="img/art-2.png" />
                  </div>
                  <div className="aside"></div>
                </a>
              </div>
              <div className="col-md-4 ">
                <a className="box art-image">
                  <div className="figure">
                    <img className="image_art" id="image_art2" src={withPrefix("assets/img/green-little-balls.gif")} alt="img/art-3.png" />
                  </div>
                  <div className="aside"></div>
                </a>
              </div>
              <div className="col-md-4">
                <a className="box art-image">
                  <div className="figure">
                    <img className="image_art" id="image_art3" src={withPrefix("assets/img/green-little-balls.gif")} alt="img/art-4.png" />
                  </div>
                  <div className="aside"></div>
                </a>
              </div>
              <div className="col-md-4">
                <a className="box art-image">
                  <div className="figure">
                    <img className="image_art" id="image_art4" src={withPrefix("assets/img/green-little-balls.gif")} alt="art-5" />
                  </div>
                  <div className="aside"></div>
                </a>
              </div>
              <div className="col-md-4">
                <a className="box art-image">
                  <div className="figure">
                    <img className="image_art" id="image_art5" src={withPrefix("assets/img/green-little-balls.gif")} alt="art-6" />
                  </div>
                  <div className="aside"></div>
                </a>
              </div>
            </div>
            <div className="btn-out">
              <div className="btn btn-blue" onClick={onMerchifyClick}>
                Merchify It
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer></Footer>
    </>
  );
}
