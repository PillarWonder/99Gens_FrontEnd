import React from "react"; 
import { navigate } from "gatsby";
import { isLoggedIn } from "../services/auth";
import { useEffect } from "react";
import Header from "../components/header";
import Footer1 from "../components/footer-1";
import ShippingAddressTab from "../components/check-out/shipping-address";
import OrderSummaryTab from "../components/check-out/order-summary-tab";

export default function Layout() {


 
    return (
        <>
            <div className="container-main" id="page">
                {/* Header */}
                <Header></Header>
                {/* Content - Main */}
                <main className="content-main">
                    <div className="shipping-form">
                        <div className="container">
                            <div className="row">
                                <ShippingAddressTab></ShippingAddressTab>
                                <OrderSummaryTab></OrderSummaryTab>  
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
