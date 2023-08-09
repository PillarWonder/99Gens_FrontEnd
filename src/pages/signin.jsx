import React, { useState, useEffect } from "react";
import { withPrefix, Link, navigate } from "gatsby";
import { useApplicationContext } from "../../provider";
import { useLocation } from "@reach/router";
import axios from "axios";
import Helmet from "react-helmet";
import $ from "jquery";

import Header1 from "../components/header-1";
import Footer1 from "../components/footer-1";

import {
  setUser,
  handleDiscordSignIn,
  handleGoogleSignIn,
} from "../services/auth";

export default function Layout() {
  const useQuery = () => {
    return new URLSearchParams(useLocation().search);
  };
  const query = useQuery(); 

  const [state, setState] = useState({
    email: "",
    password: "",
    currentUserEmail: ""
  });

  const { applicationState, setApplicationState } = useApplicationContext();

  useEffect(() => {
    if (query.get("redirect") === "discord") {
      if (query.get("code")) {
        handleDiscordSignIn(query.get("code"));
      }
    }
  }, []);

  const onChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
    setApplicationState({ ...applicationState, email: state.email });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:8080/api/v1/auth/login",
        { email: state.email, password: state.password }
      );
      if (res.data.status) {
        localStorage.setItem("email", res.data.email);
        setUser(res.data);
        navigate("/");
      }
    } catch (error) {
      $("#password").parents("li").find(".required-txt").remove();
      $("#password").after(`
            <div class="required-txt">* Invalid Email or Password</div>
        `);
    }
  };

  const handleDiscordSigninPopup = (e) => {
    let params = `scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no,
    width=0,height=0,left=-1000,top=-1000`;

    window.open(process.env.DISCORD_CODE_REDIRECT_URI, "this", params);
  };

  const [passwordShown1, setpasswordShown1] = useState(false);

  const togglePassword = () => {
    setpasswordShown1(!passwordShown1);
  };


  return (
    <>
      <div className="container-main" id="page">
        <Helmet>
          <link href={withPrefix("assets/css/progress-bar.css")} rel="stylesheet" />
          <script src={withPrefix("assets/js/progress-bar.js")} type="text/javascript" />
        </Helmet>
        <Header1></Header1>
        <main className="content-main">
          <div className="form-container">
            <div className="container">
              <div className="container-box">
                <div className="sign-in-form">
                  <div className="box">
                    <div className="heading-top">
                      <h3>Sign in</h3>
                      <p>
                        or <Link to="/create-account">Create an Account</Link>
                      </p>
                    </div>
                    <div className="form-field">
                      <form action="" method="post">
                        <div className="input-out">
                          <label>Email</label>
                          <input id="email" name="email" type="text" value={state.email} onChange={onChange} placeholder="name@domain.com" />
                        </div>
                        <div className="input-out">
                          <div style={{ display: "flex" }}>
                            <label>Password</label>
                            <div className="view1" style={{ width: "100%" }} onClick={togglePassword} >
                              <em>
                                <img style={{ width: "20px" }} src={passwordShown1 ? withPrefix("assets/img/eye-slash-solid.svg") : withPrefix("assets/img/eye-solid.svg")} onClick={togglePassword} alt="eye" />
                              </em>{" "}
                              Show
                            </div>
                          </div>
                          <li className="signinli">
                            <input id="password" name="password" type={passwordShown1 ? "text" : "password"} value={state.password} onChange={onChange} />
                          </li>
                        </div>
                        <div className="btn-out">
                          <button className="btn" onClick={handleSubmit}>
                            Sign in
                          </button>
                        </div>
                      </form>
                    </div>
                    <div className="or-circle">
                      <span>OR</span>
                    </div>
                    <div className="bottom-btns">
                      <ul>
                        <li>
                          <a>
                            <em>
                              <img src={withPrefix("assets/img/icon-apple.png")} alt="icon-apple" />
                            </em>{" "}
                            Apple
                          </a>
                        </li>
                        <li>
                          <a onClick={handleGoogleSignIn}>
                            <em>
                              <img src={withPrefix("assets/img/icon-google.png")} alt="icon-google" />
                            </em>{" "}
                            Google
                          </a>
                        </li>
                        <li>
                          <a onClick={handleDiscordSigninPopup}>
                            <em>
                              <img src={withPrefix("assets/img/icon-discord.png")} alt="icon-discord" />
                            </em>{" "}
                            Discord
                          </a>
                        </li>
                      </ul>
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
