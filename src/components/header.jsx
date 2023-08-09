import * as React from "react";
import { navigate } from "gatsby";
import { withPrefix } from "gatsby";
import { useEffect } from "react";
import { Helmet } from "react-helmet";
import $ from "jquery";
import { isLoggedIn, logout, profiles } from "../services/auth";

export default function Header({ valueA, valueB }) {

  const onPricingClick = (e) => {
    e.preventDefault();
    navigate("/pricing-options");
  }

  const onMyCreationsClick = (e) => {
    e.preventDefault();
    navigate("/my-creations");
  }

  const onSignInClick = (e) => {
    e.preventDefault();
    navigate("/signin");
  }

  useEffect(() => {
    $(".menu-bar-this").click(function () {
      $(".menu-bar-this").removeClass("active");
      $(".nav-bar").slideUp(10);
      $(".overlay").removeClass("show");
      $("body").removeClass("hidden-body");
      if ($(this).next().is(":hidden") == true) {
        $(this).addClass("active");
        $(this).next().slideDown(10);
        $(".overlay").addClass("show");
        $("body").addClass("hidden-body");
      }
    });
  }, []);

  const onMenubarClick = (e) => {
    e.preventDefault();
    // alert("I am clicked!");
    // $(".menu-bar-this").removeClass("active");
    // $(".nav-bar").slideUp(10);
    // $(".overlay").removeClass("show");
    // $("body").removeClass("hidden-body");
    // if ($(this).next().is(":hidden") == true) {
    //   $(this).addClass("active");
    //   $(this).next().slideDown(10);
    //   $(".overlay").addClass("show");
    //   $("body").addClass("hidden-body");
    // }
  }

  return (
    <header className="header-main">
      <Helmet>
        <link href={withPrefix("assets/css/bootstrap.min.css")} rel="stylesheet" />
        <link href={withPrefix("assets/css/brands.min.css")} rel="stylesheet" />
        <link href={withPrefix("assets/css/light.min.css")} rel="stylesheet" />
        <link href={withPrefix("assets/css/regular.min.css")} rel="stylesheet" />
        <link href={withPrefix("assets/css/solid.min.css")} rel="stylesheet" />
        <link href={withPrefix("assets/css/duotone.min.css")} rel="stylesheet" />
        <link href={withPrefix("assets/css/fontawesome.min.css")} rel="stylesheet" />
        <link href={withPrefix("assets/css/custom-styles.css")} rel="stylesheet" />
      </Helmet>
      <div className="container">
        <div className="brand">
          <a href="../" title="99 Generations">
            <img src={withPrefix("img/brand-99-generations.svg")} alt="brand-99-generations" />
          </a>
        </div>
        <div className="main-menu">
          <div className="menu-btn menu-bar-this" id="menu-bar-this1">
            <div className="icon-bar">
              <span />
            </div>
          </div>
          <div className="nav-bar">
            <div className="nav-inn">
              <div className="menu-close menu-bar-this">
                <button className="fal fa-times" />
              </div>
              <nav>
                <ul>
                  <li>
                    <a href="#" onClick={onPricingClick}>Pricing</a>
                  </li>
                  <li>
                    <a href="#" onClick={onMyCreationsClick}>My Creations</a>
                  </li>
                  <li>
                    <a href="#">Help</a>
                  </li>
                </ul>
              </nav>
              <div className="btn-out">
                <a href="#" className="btn btn-gray">
                  CREDITS: <span className="count">30</span>
                </a>
                <a href="#" className="icon-user" onClick={profiles}>
                  <em className="fa fa-user" />
                </a>
                {/* <a href="#" className="btn btn-blue">Sign up</a>*/}

                {isLoggedIn() ? (
                  <>
                    <a href="#" className="btn btn-blue" onClick={logout}>
                      Signout
                    </a>
                  </>
                ) : (
                  <>
                    <a href="#" className="btn btn-blue" onClick={onSignInClick}>
                      SignIn
                    </a>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="user-mbl" onClick={profiles}>
          <a href="#" className="fa fa-user" />
        </div>
        <div className="overlay" />
      </div>
    </header>
  )
}