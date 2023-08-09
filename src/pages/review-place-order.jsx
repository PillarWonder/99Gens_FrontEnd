import React from "react"; 
import { navigate } from "gatsby";
import { isLoggedIn } from "../services/auth";
import { useEffect } from "react";
import Header from "../components/header";
import Footer1 from "../components/footer-1";
import ReviewOrderTab from "../components/check-out/review-order-tab";
import OrderSummaryOrderTab from "../components/check-out/order-summary-review-order-tab";

export default function Layout() {



    return ( 
        <>
            <div className="container-main" id="page">
                <Header></Header>
                <main className="content-main">
                    <div className="shipping-form">
                        <div className="container">
                            <div className="row">
                                <ReviewOrderTab></ReviewOrderTab>
                                <OrderSummaryOrderTab></OrderSummaryOrderTab>
                            </div>
                        </div>
                    </div>
                </main>

                <Footer1></Footer1>
            </div>
        </>
    );
}
