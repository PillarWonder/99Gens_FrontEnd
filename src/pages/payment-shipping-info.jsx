import React from "react"; 
import { navigate } from "gatsby";
import { isLoggedIn } from "../services/auth";
import { useEffect } from "react";
import Header from "../components/header";
import Footer1 from "../components/footer-1";
import PaymentOptions from "../components/check-out/payment-options";
import OrderSummaryTab from "../components/check-out/order-summary-tab";
import PaymentModal from "../components/check-out/payment-modal";
import PaymentConfirmModal from "../components/check-out/payment-confirm-modal";

export default function Layout() {



    return (
        <>
            <div className="container-main" id="page">
                <Header></Header>
                <main className="content-main">
                    <div className="shipping-form">
                        <div className="container">
                            <div className="row">
                                <PaymentOptions></PaymentOptions>
                                <OrderSummaryTab></OrderSummaryTab>
                            </div>
                        </div>
                    </div>
                    <PaymentModal></PaymentModal>
                    <PaymentConfirmModal></PaymentConfirmModal>
                </main>
                <Footer1></Footer1>
            </div>
        </>
    );
}
