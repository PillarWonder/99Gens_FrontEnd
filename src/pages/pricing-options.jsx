import * as React from "react";

import Footer1 from "../components/footer-1";
import Header1 from "../components/header";
import { isLoggedIn } from "../services/auth";
import { useEffect } from "react";
import { navigate } from "gatsby";

export default function Layout() {


    return (
        <>
            <div className="container-main" id="page">
                {/* Header */}
                <Header1></Header1>
                {/* Content - Main */}
                <main className="content-main">
                    <div className="pricing-tables">
                        <div className="container">
                            <h1>Pricing Options</h1>
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="box">
                                        <h3>65 <br /> credits</h3>
                                        <div className="price-out">
                                            <div className="price">$1.00</div>
                                            <p>1.5 Cents <br /> per credit</p>
                                        </div>
                                        <div className="btn-out"><a href="#" className="btn">Buy Now</a></div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="box selected">
                                        <h3>420 <br /> credits </h3>
                                        <div className="price-out">
                                            <div className="price">$5.00</div>
                                            <p>1.2 Cents <br /> per credit</p>
                                        </div>
                                        <div className="btn-out"><a href="#" className="btn">Buy Now</a></div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="box">
                                        <h3>1,000 <br /> credits</h3>
                                        <div className="price-out">
                                            <div className="price">$10.00</div>
                                            <p>1 Cent <br /> per credit</p>
                                        </div>
                                        <div className="btn-out"><a href="#" className="btn">Buy Now</a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>

                {/* Footer */}
                <Footer1></Footer1>
            </div>
        </>
    );
}
