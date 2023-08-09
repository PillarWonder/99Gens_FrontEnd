import React from "react"; 

export default function Footer() {
  return (
    <div>
      {" "}
      <footer class="footer-main">
        <div class="container">
          <div class="icons">
            <img src="/assets/img/icons-ai.svg" alt="icons-ai" />
          </div>
          <div class="brand">
            <a href="index.html" title="AtlasHoldings">
              <img
                src="/assets/img/brand-99generations.svg"
                alt="brand-99generations"
              />
            </a>
          </div>
          <div class="foot-sub-title">By robots, for humans.™</div>
          <div class="foot-wrap">
            <p>&copy;2022</p>
            <div class="foot-menu">
              <ul>
                <li>
                  <a href="terms.html">Terms &amp; Conditions</a>
                </li>
                <li>
                  <a href="privacy.html">Privacy</a>
                </li>
                <li>
                  <a href="cookie-policy.html">Cookie Policy</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
