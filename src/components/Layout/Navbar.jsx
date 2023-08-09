import React from "react"; 
import { Link } from "gatsby";
export default function Navbar() {
  return (
    <header className="header-home">
      <div className="container">
        <div className="brand">
          <Link to="/" title="99 Generations">
            <img
              src="/assets/img/brand-99-generations.svg"
              alt="brand-99-generations"
            />
          </Link>
        </div>
        <div className="main-menu">
          <div className="menu-btn menu-bar">
            <div className="icon-bar">
              <span></span>
            </div>
          </div>
          <div className="nav-bar">
            <div className="nav-inn">
              <div className="menu-close menu-bar">
                <button className="fal fa-times"></button>
              </div>
              <nav>
                <ul>
                  <li>
                    <a href="#">Pricing</a>
                  </li>
                  <li>
                    <a href="#">My Creations</a>
                  </li>
                  <li>
                    <a href="#">My Store</a>
                  </li>
                </ul>
              </nav>
              <div className="btn-out">
                <a href="#" className="btn btn-gray">
                  CREDITS: <span className="count">30</span>
                </a>
                <a href="#" className="icon-user">
                  <em className="fa fa-user"></em>
                </a>
                <a href="#" className="btn btn-blue">
                  Sign up
                </a>{" "}
              </div>
            </div>
          </div>
        </div>
        <div className="user-mbl">
          <a href="#" className="fa fa-user"></a>
        </div>
        <div className="overlay"></div>
      </div>
    </header>
  );
}
