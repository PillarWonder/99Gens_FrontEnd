import React, { useEffect, useState } from "react";
import Header1 from "../components/header-1";
import Footer1 from "../components/footer-1";
import { useApplicationContext } from "../../provider";
import { withPrefix } from "gatsby";
import V1 from "../components/create-password-v1";
import V2 from "../components/create-password-v2";
import V3 from "../components/create-password-v3";

export default function Layout() {
  const appContext = useApplicationContext();
  const { applicationState } = appContext;

  useEffect(() => {
    if (applicationState.accountstep) {
    }
  }, []);

  const id = 3;
  return (
    <>
      <div className="container-main" id="page">
        <Header1></Header1>
        <main className="content-main">
          <div className="form-container">
            <div className="container">
              <div className="container-box">
                <div className="split-form">
                  <div className="row">
                    {applicationState.accountstep === 1 && <V1 />}
                    {applicationState.accountstep === 2 && <V2 />}
                    {applicationState.accountstep === 3 && <V3 />}
                    <div className="col-md-6 figure split-form">
                      <img
                        src={withPrefix("assets/img/introducing-group.png")}
                        alt="introducing-group"
                      />
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
