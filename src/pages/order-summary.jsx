import React from "react"; 
import { navigate } from "gatsby";
import { isLoggedIn } from "../services/auth";
import { useEffect } from "react";
import Header from "../components/header";
import Footer1 from "../components/footer-1";
import BreadCrumbNavigator from "../components/bread-crump-navigator";
import ReviewOrderOnlyTab from "../components/check-out/review-order-only-tab";
import OrderSummaryTab from "../components/check-out/order-summary-tab";

export default function Layout() {



    return (
        <>
            <div className="container-main" id="page">
                <Header></Header>
                <main className="content-main">
                    <BreadCrumbNavigator></BreadCrumbNavigator>
                    <div className="shipping-form">
                        <div className="container">
                            <div className="row">
                                <ReviewOrderOnlyTab></ReviewOrderOnlyTab>
                                <OrderSummaryTab></OrderSummaryTab>
                            </div>
                        </div>
                    </div>
                </main>

                <Footer1></Footer1>
            </div>
        </>
    );
}
