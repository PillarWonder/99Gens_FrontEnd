import React from "react"; 
import { useEffect } from "react";
import Header1 from "../components/header-1";
import Footer1 from "../components/footer-1";
import Helmet from "react-helmet";
import { useApplicationContext } from "../../provider";
import { validateEmail, handleGoogleSignIn } from "../services/auth";
import { withPrefix, Link, navigate } from "gatsby";

export default function Layout() {

  useEffect(() => {
    if(localStorage.getItem("stagingSignupEmail")!=undefined){
      setState({ ...state, signupEmail: localStorage.getItem("stagingSignupEmail") });
    }
  }, []);
 
  const [state, setState] = React.useState({
    signupEmail: "",
  });

  const onChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const { applicationState, setApplicationState } = useApplicationContext();

  const onCreateClick = (e) => {
    e.preventDefault();
    if (validateEmail(state.signupEmail)) {
      setApplicationState({
        ...applicationState,
        signupEmail: state.signupEmail,
      });
      navigate("/create-password");
    }
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
          <div className="feature-list form-container">
            <div className="container">
              <div className="container-box">
                <div className="sign-in-form">
                  <div className="box">
                    <h3>Create your free account </h3>
                    <div className="form-field">
                      <form action="" method="post">
                        <div className="input-out">
                          <label>Email</label>
                          <li className="signinli">
                            <input
                              id="signupEmail"
                              name="signupEmail"
                              type="text"
                              value={state.signupEmail}
                              onChange={onChange}
                              placeholder="name@domain.com"
                            />
                          </li>
                        </div>
                        {/* <div className="btn-out"><Link to="/create-password" className="btn">CONTINUE</Link></div> */}

                        <div className="btn-out">
                          <button onClick={onCreateClick} className="btn">
                            CONTINUE
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
                          <a href="#">
                            <em>
                              <img
                                src={withPrefix("assets/img/icon-apple.png")}
                                alt="icon-apple"
                              />
                            </em>{" "}
                            Apple
                          </a>
                        </li>
                        <li>
                          <a onClick={handleGoogleSignIn}>
                            <em>
                              <img
                                src={withPrefix("assets/img/icon-google.png")}
                                alt="icon-google"
                              />
                            </em>{" "}
                            Google
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <em>
                              <img
                                src={withPrefix("assets/img/icon-discord.png")}
                                alt="icon-discord"
                              />
                            </em>{" "}
                            Discord
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="bottom-txt">
                      Already using 99 Generations?{" "}
                      <a href="#">
                        <Link to="/signin">Sign in</Link>
                      </a>
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
