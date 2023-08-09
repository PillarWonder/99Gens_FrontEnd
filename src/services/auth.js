import { navigate } from "gatsby";
import "isomorphic-fetch";
import axios from "axios";
import cookies from "universal-cookie";
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "../services/firebase.config";

const Cookies = new cookies();

!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();
const googleProvider = new firebase.auth.GoogleAuthProvider();

export const setUser = (user) =>
  window.localStorage.setItem("gatsbyUser", JSON.stringify(user));

export const handleGoogleSignIn = () => {
  firebase
    .auth()
    .signInWithPopup(googleProvider)
    .then((result) => {
      const user = result.user;
      setUser(user);
      navigate("/staging");
    })
    .catch((error) => {
    });
};

export const handleDiscordSignIn = async (code) => {
  try {
    // getting access token from discord
    const data = new URLSearchParams({
      client_id: process.env.DISCORD_CLIENT_ID,
      client_secret: process.env.DISCORD_CLIENT_SECRET,
      grant_type: "authorization_code",
      code: code.toString(),
      redirect_uri: process.env.DISCORD_REDIRECT_URI,
    });
    const response = await axios.post(
      `${process.env.DISCORD_API_URL}/oauth2/token`,
      data.toString(),
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );
    Cookies.set("discord_access_token", response?.data?.access_token, {
      path: "/",
      maxAge: response?.data?.expires_in,
    });
    localStorage.setItem(
      "discord_refresh_token",
      JSON.stringify(response?.data?.refresh_token)
    );

    // getting user data from discord
    const userDetails = await axios.get(
      `${process.env.DISCORD_API_URL}/users/@me`,
      {
        headers: {
          Authorization: `Bearer ${cookies.get("discord_access_token")}`,
        },
      }
    );
    setUser(userDetails);
    navigate("/staging");
  } catch (error) {}
};

// Detect if the app is running in a browser.
export const isBrowser = () => typeof window !== "undefined";

// Get user data from localstorage
export const getUser = () =>
  isBrowser() && window.localStorage.getItem("gatsbyUser")
    ? JSON.parse(window.localStorage.getItem("gatsbyUser"))
    : {};

// Save user data to localstorage

// Return true if user is logged in. Otherwise false.
export const isLoggedIn = () => {
  const user = getUser();
  return !!user.status | !!user.email;
};

export const logout = (callback) => {
  setUser({});
  navigate("/staging");
  Cookies.remove("discord_access_token", { path: "/" });
  localStorage.clear();

  // callback();
};

export const profiles = (e) => {
  e.preventDefault();
  navigate("/profile-credits");
}

export const validateEmail = (email) => {
  var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
  return emailReg.test(email);
};
