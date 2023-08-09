/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

import React from "react"; 
import "./static/assets/css/custom-styles.css"
import "./static/assets/css/styles.css";
import "./static/assets/css/bootstrap.min.css";
import "./static/assets/css/brands.min.css";
import "./static/assets/css/light.min.css";
import "./static/assets/css/regular.min.css";
import "./static/assets/css/solid.min.css";
import "./static/assets/css/duotone.min.css";
import "./static/assets/css/fontawesome.min.css";
import "./static/assets/css/python.css";
import "./static/assets/css/mockup.css";
import "./static/assets/css/art-styles.css";
import "./static/assets/css/components.css";

import Provider from "./provider";
const $ = require("jquery");

export const onInitialClientRender = () => {
  $(document).ready(function () {
    // console.log("The answer is don't think about it!")
  });
};

export const wrapRootElement = Provider;
