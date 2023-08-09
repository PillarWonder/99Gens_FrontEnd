import React from "react"; 
import { withPrefix } from "gatsby";
import Header from "../components/header";
import Footer1 from "../components/footer-1";
import { isLoggedIn } from "../services/auth";
import { useEffect } from "react";
import { navigate } from "gatsby";
import { Helmet } from "react-helmet";
export default function Layout() {
  useEffect(() => {
    
  }, []);
  return (
    <> 
      <Helmet>
      </Helmet>
      <div className="container-main" id="page">
        <Header></Header>
        <main className="content-main">
          <div className="profile-tabs">
            <div className="container">
              <h1>Profile</h1>
              <form>
                <input placeholder="First Name"></input>
                <input placeholder="Last Name"></input>
                <input placeholder="Location"></input>
                <input placeholder=""></input>
              </form>
            </div>
          </div>
        </main>
        <Footer1></Footer1>
      </div>
    </>
  );
}
