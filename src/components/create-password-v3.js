import React, { useEffect } from "react";
import { navigate } from "gatsby";

export default function V3() {
  // const navigate = useNavigate()

  useEffect(() => {
    setTimeout(() => {
      navigate("/staging");
    }, 1000);
  }, []);

  return (
    <>
      <div className="col-md-6">
        <div className="left-form">
          <div className="brand">
            <a href="#" />
          </div>
          <div className="heading-txt" style={{ paddingBottom: "0px" }}>
            <div className="aside">
              <h2>
                Your account has been validated.&nbsp; &nbsp; &nbsp;&nbsp;
              </h2>
              <p>Redirecting...&nbsp; &nbsp; &nbsp;</p>
            </div>
          </div>
          <div className="steps">
            <ul>
              <li>Dot</li>
              <li>Dot</li>
              <li className="active">Dots</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
