import * as React from "react";
import { useEffect } from "react";
import { navigate } from "gatsby";

import Footer1 from "../components/footer-1";
import Header1 from "../components/header-1";
import { isLoggedIn } from "../services/auth";

export default function Layout() {
  useEffect(() => {
    
  }, []);

  return (
    <>
      <div className="container-main" id="page">
        {/* Header */}
        <Header1></Header1>
        {/* Content - Main */}
        <main className="content-main">
          <div className="content-inner"> 
            <div className="container">
              <p />
              <div
                name="termly-embed"
                data-id="7bc3b821-cc7e-47b8-8c41-c1ef9f16f838"
                data-type="iframe"
              />
              <p />
            </div>
          </div>
        </main>
        {/* Footer */}
        <Footer1></Footer1>
      </div>
    </>
  );
}
