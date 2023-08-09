import * as React from "react";

import Footer1 from "../components/footer-1";
import Header1 from "../components/header-1";
import { isLoggedIn } from "../services/auth";
import { useEffect } from "react";
import { navigate } from "gatsby";

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
                data-id="af8f4a0d-9970-4505-986b-754665bf4dcc"
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
