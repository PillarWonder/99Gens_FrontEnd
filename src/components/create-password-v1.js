import React, { useState, useEffect } from "react";
import axios from "axios";
import $ from "jquery";
import { Helmet } from "react-helmet";
import { withPrefix, navigate } from "gatsby";
import { useApplicationContext } from "../../provider";

export default function V1() {
  const [values, setValues] = useState({
    password: "",
    passwordConfirm: "",
    email: "",
  });

  const [passwordShown1, setpasswordShown1] = useState(false);

  const togglePassword = () => {
    setpasswordShown1(!passwordShown1);
  };

  const [passwordShown2, setpasswordShown2] = useState(false);

  const togglePassword2 = () => {
    setpasswordShown2(!passwordShown2);
  };

  useEffect(() => {
    if (applicationState.signupEmail) {
      setState({ ...state, email: applicationState.signupEmail });
    }
  }, []);

  const onChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = state;
    let messageData;
    if (state.password == state.passwordConfirm) {
      try {
        const res = await axios.post(
          "http://localhost:8080/api/v1/auth/register",
          // "https://prod-node-api.99gens-api.com/api/v1/auth/register",
          { email: state.email, password: state.password }
        );
        setApplicationState({
          ...applicationState,
          accountstep: state.accountstep,
        });
        navigate("/create-password");
        // console.log("SignUp Success", res);
      } catch (error) {
        $("#passwordConfirm").parents("li").find(".required-txt").remove();
        $("#passwordConfirm").after(`
                    <div class="required-txt">* Sign up faild. Please check your email and password.</div>
                `);
      }
    }
  };

  const [state, setState] = React.useState({
    accountstep: 2,
  });
  const { applicationState, setApplicationState } = useApplicationContext();

  return (
    <>
      <div className="col-md-6 left-form">
        <Helmet>
          <script src={withPrefix("assets/js/auth.js")} type="text/javascript" />
        </Helmet>
        <div className="brand">
          <a href="#" />
        </div>
        <div className="heading-txt">
          <div className="aside">
            <h2>Create your password</h2>
          </div>
        </div>
        <div className="form-field">
          <form action="" method="post">
            <ul>
              <li>
                <div className="label-with-txt">
                  <label>Password</label>
                  <div className="view" style={{ width: "100%" }} onClick={togglePassword} >
                    <em>
                      <img src={ passwordShown1 ? withPrefix("assets/img/eye-slash-solid.svg") : withPrefix("assets/img/eye-solid.svg") } onClick={togglePassword} alt="eye" />
                    </em>{" "}
                    Show
                  </div>
                </div>
                <input id="password" name="password" type={passwordShown1 ? "text" : "password"} value={state.password} onChange={onChange} placeholder="Password" />
              </li>
              <li>
                <div className="label-with-txt">
                  <label>Confirm password</label>
                  <div className="view" style={{ width: "100%" }} onClick={togglePassword2} >
                    <em>
                      <img src={ passwordShown2 ? withPrefix("assets/img/eye-slash-solid.svg") : withPrefix("assets/img/eye-solid.svg") } onClick={togglePassword2} alt="eye" />
                    </em>{" "}
                    Show
                  </div>
                </div>
                <input id="passwordConfirm" name="passwordConfirm" type={passwordShown2 ? "text" : "password"} value={state.passwordConfirm} onChange={onChange} placeholder="Password Confirm" />
              </li>
            </ul>
            <div className="bottom-btn">
              <div className="btn-out">
                <button name="Continue" id="continue" className="btn" onClick={handleSubmit} >
                  Continue
                </button>
              </div>
              <div className="steps">
                <ul>
                  <li className="active">Dot</li>
                  <li>Dot</li>
                  <li>Dot</li>
                </ul>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
