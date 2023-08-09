/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/ssr-apis/
 */
import React from "react"; 
import Provider from "./provider";
import { withPrefix } from "gatsby";
const HeadComponents = [
  <script key="jquery" src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossOrigin="anonymous" />,
];

export const wrapRootElement = Provider;
export function onRenderBody(
  { setHtmlAttributes, setHeadComponents, setPostBodyComponents },pluginOptions) {
  setHtmlAttributes({ lang: `en` });
  setHeadComponents(HeadComponents);
  setPostBodyComponents([
    <script key="sjjjjdfjdfjfj" src={withPrefix("https://code.jquery.com/jquery-3.4.1.min.js")} integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=" crossOrigin="anonymous" />,
    <script await key="sdsllflldfdfsfdfdsd" src={withPrefix("/assets/js/jquery.min.js")} />,
    
    <script await key="sjfdfks" src={withPrefix("/assets/js/popper.min.js")} />,
    <script await key="msmddsd" src={withPrefix("/assets/js/bootstrap.min.js")} />,
    <script await key="sdjsewdjsj" src={withPrefix("/assets/js/choose-art.js")} />,
    <script await key="sdjsdjsj" src={withPrefix("/assets/js/auth.js")} />,

    <script await key="wwwwwww" src={withPrefix("assets/plugins/before-after-image-viewer/dist/beforeafter.jquery-1.0.0.js")} />,
    <script await key="ddddddd" src={withPrefix("https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js")} />,
    <script await key="ffffff" src={withPrefix("assets/plugins/resize-drag-rotate-box-modeling/box-modeling-custom.js")} />,
    <script await key="zzzxc" src={withPrefix("https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js")} />,
    <script await key="asveww" src={withPrefix("https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js")} />,
  ]);
}
