import React from "react"; 
import { useEffect } from "react";
import Axios from "axios";
import { navigate, withPrefix } from "gatsby";
import { Helmet } from "react-helmet";
import Pagination from '@mui/material/Pagination';
import Header from "../components/header";
import Footer1 from "../components/footer-1";
import ListThumbnails from "../components/my-creations/listthumbnnails";
import { useApplicationContext } from "../../provider";

export default function Layout() {
  const { applicationState, setApplicationState } = useApplicationContext();
  var products = [
    "backpack", "hoodie", "unisex-sweatshirt", "tote-bag",
    "jigsaw-puzzle-520", "canvas-1824", "crop-tee-s", "gym-bag",
    "beanie", "premium-pillow", "joggers-women", "gaming-mouse-pad",
    "tank-top-women", "tough-iphone-case", "men-atheletic-t-shirt", "minimalist-backpack",
    "women-crew-neck-t-shirt", "duffle-bag", "men-windbreaker", "bomber-jacket"];
  const [values1, setValues1] = React.useState({
    date: "",
    srcs: "",
    credits: 30,
    carousel_uID: ""
  });
  const [values2, setValues2] = React.useState({
    date: "",
    srcs: "",
    credits: 30,
    carousel_uID: ""
  });
  const [values3, setValues3] = React.useState({
    date: "",
    srcs: "",
    credits: 30,
    carousel_uID: ""
  });

  const [valuesAll, setValuesAll] = React.useState();

  const [page, setPage] = React.useState(1);
  const [pagesCount, setPagesCount] = React.useState(1);

  useEffect(() => {

    setApplicationState({
      ...applicationState,
      mycreationsSelectedCount: 0,
    })

    for (let ii = 1; ii <= 6; ii++) {
      for (let kk = 0; kk < 20; kk++) {
        localStorage.removeItem("item" + ii + products[kk]);
      }
    }
    Axios.post(
      "http://localhost:8080/api/v1/carousels/get_saved",
      { email: localStorage.getItem("email") }
    ).then((response) => {

      localStorage.setItem("myCreations", JSON.stringify(response.data.data.response_data));
      setPagesCount(Math.ceil(response.data.data.response_data.length / 3));
      let myArray1 = new Array(); let myArray2 = new Array(); let myArray3 = new Array();
      let carouselArray1 = new Array(); let carouselArray2 = new Array(); let carouselArray3 = new Array();
      if (response.data.data.response_data[page * 3 - 2] != undefined) {
        for (let i = 0; i < response.data.data.response_data[page * 3 - 2].records.length; i++) {
          myArray2.push(response.data.data.response_data[page * 3 - 2].records[i].thumbnail);
          carouselArray2.push(response.data.data.response_data[page * 3 - 2].records[i].carousel);
        }
        setValues2({
          ...values2,
          date: response.data.data.response_data[1].records[0].createdAt,
          srcs: myArray2,
          carouselData: carouselArray2,
          carousel_uID: response.data.data.response_data[1].records[0].carousel_uID,
        });
      }
      if (response.data.data.response_data[page * 3 - 1] != undefined) {
        for (let i = 0; i < response.data.data.response_data[page * 3 - 1].records.length; i++) {
          myArray3.push(response.data.data.response_data[page * 3 - 1].records[i].thumbnail);
          carouselArray3.push(response.data.data.response_data[page * 3 - 1].records[i].carousel);
        }
        setValues3({
          ...values3,
          date: response.data.data.response_data[2].records[0].createdAt,
          srcs: myArray3,
          carouselData: carouselArray3,
          carousel_uID: response.data.data.response_data[2].records[0].carousel_uID,
        });
      }
      for (let i = 0; i < response.data.data.response_data[page * 3 - 3].records.length; i++) {
        myArray1.push(response.data.data.response_data[page * 3 - 3].records[i].thumbnail);
        carouselArray1.push(response.data.data.response_data[page * 3 - 3].records[i].carousel);
      }

      setValues1({
        ...values1,
        date: response.data.data.response_data[0].records[0].createdAt,
        srcs: myArray1,
        carouselData: carouselArray1,
        // credits: response.data.data.response_data[0].createdAt,
        carousel_uID: response.data.data.response_data[0].records[0].carousel_uID,
      });
    }).catch((error) => { console.log("This is error:", error) })
  }, [page]);

  const handleChange = async (event, value) => {
    event.preventDefault();
    setPage(value);
    let real_data = JSON.parse(localStorage.getItem("myCreations"));
    let myArray1 = new Array(); let myArray2 = new Array(); let myArray3 = new Array();
    let carouselArray1 = new Array(); let carouselArray2 = new Array(); let carouselArray3 = new Array();

    for (let i = 0; i < real_data[page * 3 - 3].records.length; i++) {
      myArray1.push(real_data[page * 3 - 3].records[i].thumbnail);
      carouselArray1.push(real_data[page * 3 - 3].records[i].carousel);
    }
    if (real_data[page * 3 - 2] != undefined) {
      for (let i = 0; i < real_data[page * 3 - 2].records.length; i++) {
        myArray2.push(real_data[page * 3 - 2].records[i].thumbnail);
        carouselArray2.push(real_data[page * 3 - 2].records[i].carousel);
      }
      setValues2({
        ...values2,
        date: real_data[page * 3 - 2].records[0].createdAt,
        srcs: myArray2,
        carouselData: carouselArray2,
        carousel_uID: real_data[page * 3 - 2].records[0].carousel_uID,
      });
    }
    if (real_data[page * 3 - 1] != undefined) {
      for (let i = 0; i < real_data[page * 3 - 1].records.length; i++) {
        myArray3.push(real_data[page * 3 - 1].records[i].thumbnail);
        carouselArray3.push(real_data[page * 3 - 1].records[i].carousel);
      }
      setValues3({
        ...values3,
        date: real_data[page * 3 - 1].records[0].createdAt,
        srcs: myArray3,
        carouselData: carouselArray3,
        carousel_uID: real_data[page * 3 - 1].records[0].carousel_uID,
      });
    }
    setValues1({
      ...values1,
      date: real_data[page * 3 - 3].records[0].createdAt,
      srcs: myArray1,
      carouselData: carouselArray1,
      // credits: response.data.data.response_data[0].createdAt,
      carousel_uID: real_data[page * 3 - 3].records[0].carousel_uID,
    });
  };

  const onContinueBtnClicked = (e) => {
    e.preventDefault();
    if (applicationState.mycreationsSelectedCount == 0) { alert("Select Carousels to display! ") }
    else {
      localStorage.setItem("selectedCount", applicationState.mycreationsSelectedCount);
      navigate("/my-creations-view");
    }
  }
  return (
    <>
      <div className="container-main" id="page">
        <Helmet>
          <script await key="sjfdfks" src={withPrefix("/assets/js/custom.js")} />
          <script await key="sjfdfks" src={withPrefix("/assets/js/owl.carousel.js")} />
        </Helmet>
        <Header></Header>
        <main className="content-main">
          <div className="order-reviews">
            <div className="container">
              <h1>My Creations</h1>
              <div className="box-out">
                <div className="box">
                  <div className="review-table">
                    <ul>
                      <li className="table-heading">
                        <div className="col-1">ID</div>
                        <div className="col-2">Date</div>
                        <div className="col-3">Credits</div>
                        <div className="col-4">Selected</div>
                      </li>
                      <ListThumbnails Value={values1}></ListThumbnails>
                      <ListThumbnails Value={values2} Carousel={"active"}></ListThumbnails>
                      <ListThumbnails Value={values3}></ListThumbnails>
                    </ul>
                  </div>

                  <div className="pagination">
                    <Pagination count={pagesCount} variant="outlined" shape="rounded" onChange={handleChange} />
                  </div>
                  <div className="btm-btns">
                    <div className="shopping-cart"><a href="#" className="cart-btn"><em className="far fa-shopping-bag" /> {applicationState.mycreationsSelectedCount} </a></div>
                    <div className="btn-out"><a href="#" className="btn btn-blue btn-continue" onClick={onContinueBtnClicked}>Continue with selected</a></div>
                  </div>
                </div>
              </div>
              <div className="alert-box">
                <div className="box-inn">
                  <p><em><img src={withPrefix("assets/img/icon-info.png")} alt="icon-info" /></em> Selecting more than 6 creations may slow down and possibly crash your web browser. If you are experiencing this please return and select fewer.</p>
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
