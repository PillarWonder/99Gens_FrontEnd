import React, { useState } from "react";
import $ from "jquery";
import axios from "axios";
import { navigate } from "gatsby";
import { useApplicationContext } from "../../provider";
import { setUser } from "../services/auth";

export default function V2() {
  const [values, setValues] = useState({
    code1: "",
    code2: "",
    code3: "",
    code4: "",
  });
  const { code1, code2, code3, code4 } = values;

  const handleChange = (name) => (event) => {
    setValues({
      ...values,
      [name]: event.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:8080/api/v1/auth/verification",
        {
          otp: code1 + code2 + code3 + code4,
        }
      );
      // console.log("asdfasdf!!!!!!!!",res);
      if (res.data.ok == true) {
        setUser(res);
        setApplicationState({
          ...applicationState,
          accountstep: state.accountstep,
        });
        navigate("/create-password");
      }
    } catch (error) {
      console.log(error.response);
      $("#code2").parents("ul").parents("div").find(".required-txt").remove();
      $("#code2").parents("ul").after(`
                <div class="required-txt">* Invalid OPT Code.</div>
            `);
    }
  };

  const [state, setState] = React.useState({
    accountstep: 3,
  });
  const { applicationState, setApplicationState } = useApplicationContext();

  return (
    <>
      <div className="col-md-6 left-form">
        <div className="brand">
          <a href="#" />
        </div>
        <div className="heading-txt">
          <div className="aside">
            <h2>Check your email inbox</h2>
          </div>
        </div>
        <div className="form-field">
          <form action="" method="post">
            <div className="verification-code">
              <label>Four Digit Code</label>
              <ul>
                <li>
                  <input
                    id="code1"
                    maxLength="1"
                    className="code1"
                    type="text"
                    value={code1}
                    onChange={handleChange("code1")}
                  />
                </li>
                <li>
                  <input
                    id="code2"
                    maxLength="1"
                    className="code2"
                    type="text"
                    value={code2}
                    onChange={handleChange("code2")}
                  />
                </li>
                <li>
                  <input
                    id="code3"
                    maxLength="1"
                    className="code3"
                    type="text"
                    value={code3}
                    onChange={handleChange("code3")}
                  />
                </li>
                <li>
                  <input
                    id="code4"
                    maxLength="1"
                    className="code4"
                    type="text"
                    value={code4}
                    onChange={handleChange("code4")}
                  />
                </li>
              </ul>
            </div>
            <div className="bottom-btn">
              <div className="btn-out w-100 pos-l-0 pb-32">
                <button
                  name="Continue"
                  id="continue"
                  onClick={handleSubmit}
                  className="btn btn-sml w-100"
                >
                  Confirm code
                </button>
              </div>
              <p>
                {" "}
                Didn't get the code? <a href="#">Resend</a>
              </p>
              <div className="steps w-100 pos-r-0">
                <ul>
                  <li>Dot</li>
                  <li className="active">Dot</li>
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
