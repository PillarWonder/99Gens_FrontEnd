import * as React from 'react'
import OrderItem from './order-item';

export default function reviewOrderOnlyTab({ valueA, valueB }) {

    return (
        <div className="col-lg-8 col-md-7">
            <div className="order-details">
                <div className="paymment-options">
                    <div className="review-order">
                        <h3>Review Order</h3>
                        <ul>
                            <OrderItem productImg={"assets/img/product-sml.png"} productTitle={"Hoodie"} productDescription={"This is the description of Hoodie"} productPrice={"50"}></OrderItem>
                            <OrderItem productImg={"assets/img/product-sml.png"} productTitle={"BackPack"} productDescription={"This is the description of BackPack"} productPrice={"60"}></OrderItem>
                            <OrderItem productImg={"assets/img/product-sml.png"} productTitle={"GamingMousePad"} productDescription={"This is the description of GamingMousePad"} productPrice={"20"}></OrderItem>
                        </ul>
                    </div>
                </div>
                <div className="bottom-btns"><button href="#" className="btn">Back</button> <button href="#" className="btn btn-blue">Continue To Order</button></div>
            </div>
        </div>
    )
}