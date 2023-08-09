import React, { useState, useEffect } from "react";
import { withPrefix } from "gatsby";
import { navigate } from "gatsby";
import { Helmet } from "react-helmet";
import axios from "axios";
import Header from "../components/header";
import Footer1 from "../components/footer-1";
import { isLoggedIn } from "../services/auth";
import ProfilesTab from "../components/profiles-tab";
import CreditsTab from "../components/credits-tab";
import LedgerTab from "../components/ledger-tab";
import SettingsModal from "../components/settings-modal";
import ProfilesModal from "../components/profiles-modal";

export default function Layout() {

  useEffect(  () => {
    
    getUserProfile()
  }, []);

  const [state, setState] = useState({
    firstname: "",
    lastname: "",
    email: "",
    zipcode:"",
    country: "",
    createdAt:"",
    changingEmail: "",
  });

  const onChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const getUserProfile = async() => {
    try {
      const response = await axios.post(
        "http://localhost:8080/api/v1/auth/get_profile",
        { email: localStorage.getItem("email") }
      );
      if (response.data.data.status === "success") {
        setState({firstname: response.data.data.firstname, lastname: response.data.data.lastname, email: response.data.data.email, zipcode:response.data.data.zipcode, country:response.data.data.country, createdAt:response.data.data.createdAt, changingEmail: response.data.data.email});
      }
    } catch (error) {
    }
  }

  const onSubmitEmailClicked = async (e) => {
    try{
      const response = await axios.post (
        "http://localhost:8080/api/v1/auth/update_email",
        { email: localStorage.email, updated_email: state.changingEmail, firstname: state.firstname, lastname: state.lastname }
      );
      if(response){ 
        localStorage.setItem("email",response.data.email);
      }
    } catch(error){

    }
  }

  const onProfileEdit = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8080/api/v1/auth/get_profile",
        { email: localStorage.getItem("email") }
      );
      if (response.data.data.status === "success") {
        setState({firstname: response.data.data.firstname, lastname: response.data.data.lastname, email: response.data.data.email, zipcode:response.data.data.zipcode, country:response.data.data.country, createdAt:response.data.data.createdAt});
      }
    } catch (error) {
    }
  }

  const onSubmitProfileChange = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8080/api/v1/auth/edit_profile",
        { email: state.email, firstname: state.firstname, lastname: state.lastname, zipcode: state.zipcode }
      );
      if (response.data.status === "success") {
        setState({firstname: response.data.data.firstname, lastname: response.data.data.lastname, zipcode:response.data.data.zipcode});
      }
    } catch (error) {
    }
  }

  return (
    <>
      <Helmet>
        <script src={withPrefix("assets/js/custom.js")} type="text/javascript" />
        <script src={withPrefix("assets/js/profile-credits.js")} type="text/javascript" />
        <script src={withPrefix("assets/plugins/resize-drag-rotate-box-modeling/box-modeling-custom.js")} type="text/javascript" />
      </Helmet>
      <div className="container-main" id="page">
        <Header></Header>
        <main className="content-main">
          <div className="profile-tabs">
            <div className="container">
              <h1>Profile</h1>
              <div className="profile-tab-links2">
                <ul className="nav">
                  <li>
                    <a className="active" href="#credits" data-bs-toggle="tab"> Credits </a>
                  </li>
                  <li>
                    <a href="#ledger" data-bs-toggle="tab"> Ledger </a>
                  </li>
                  <li>
                    <a href="#order-history" data-bs-toggle="tab">Order History</a>
                  </li>
                  <li>
                    <a href="#settings" data-bs-toggle="tab">Settings</a>
                  </li>
                </ul>
              </div>
              <div className="tab-content">
                <div className="tab-pane active" id="credits">
                  <div className="profile-info">
                    <div className="row">
                      <ProfilesTab state = {state} onChangeFunction = {onProfileEdit}></ProfilesTab>
                      <CreditsTab></CreditsTab>
                    </div>
                  </div>
                </div>
                <div className="tab-pane" id="ledger">
                  <div className="profile-info">
                    <div className="row">
                    <ProfilesTab state = {state} onChangeFunction = {onProfileEdit}></ProfilesTab>
                    <LedgerTab></LedgerTab>
                    </div>
                  </div>
                </div>
                <div className="tab-pane" id="order-history">
                  <div className="profile-info">
                    <div className="row">
                      <ProfilesTab state = {state} onChangeFunction = {onProfileEdit}></ProfilesTab>
                      <LedgerTab></LedgerTab>
                    </div>
                  </div>
                </div>
                <div className="tab-pane" id="settings">
                  <div className="profile-info">
                    <div className="row">
                      <ProfilesTab state = {state} onChangeFunction = {onProfileEdit}></ProfilesTab>
                      <LedgerTab></LedgerTab>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <SettingsModal></SettingsModal>
          <ProfilesModal state = {state} onChangeProp = {onChange} onSubmitEmailClickedProp = {onSubmitEmailClicked} onSubmitProfileChangeProp = {onSubmitProfileChange}></ProfilesModal>
        </main>
        <Footer1></Footer1>
      </div>
    </>
  );
}