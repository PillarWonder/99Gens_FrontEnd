import * as React from 'react'
import { navigate } from 'gatsby';
import OrderItem from './order-item';
export default function reviewOrderTab({ valueA, valueB }) {

    const onPlaceOrder = (e) => {
        e.preventDefault();
        navigate("/order-summary");
    }

    return (
        <div className="col-lg-8 col-md-7">
            <div className="order-details">
                <div className="paymment-options">
                    <div className="steps">
                        <ul>
                            <li>Dot</li>
                            <li>Dot</li>
                            <li className="active">Dot</li>
                        </ul>
                    </div>
                    <div className="review-order">
                        <h3>Review Order</h3>
                        <ul>
                            <OrderItem productImg={"assets/img/product-sml.png"} productTitle={"Hoodie"} productDescription={"This is the description of Hoodie"} productPrice={"50"}></OrderItem>
                            <OrderItem productImg={"assets/img/product-sml.png"} productTitle={"BackPack"} productDescription={"This is the description of BackPack"} productPrice={"60"}></OrderItem>
                            <OrderItem productImg={"assets/img/product-sml.png"} productTitle={"GamingMousePad"} productDescription={"This is the description of GamingMousePad"} productPrice={"20"}></OrderItem>
                        </ul>
                    </div>
                </div>
                <div className="shipping-options">
                    <h3>Shipping Options</h3>
                    <ul>
                        <li>
                            <div className="radio-options">
                                <input id="radio-5" name="radio" type="radio" className="styled" />
                                <label htmlFor="radio-5">Tuesday, Oct 18th - Wednesday, October 20th <br /> <span className="sml">$5.99 Standard Shipping</span></label>
                            </div>
                        </li>
                        <li>
                            <div className="radio-options">
                                <input id="radio-6" name="radio" type="radio" className="styled" />
                                <label htmlFor="radio-6">Monday, Oct 20th - Thursday, October 23 <br /> <span className="sml">$8.00 UPS Shipping</span></label>
                            </div>
                        </li>
                        <li>
                            <div className="radio-options">
                                <input id="radio-7" name="radio" type="radio" className="styled" />
                                <label htmlFor="radio-7">Tuesday, Oct 11th <br /> <span className="sml">$22.00 Overnight Shipping</span></label>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="place-order-box">
                    <div className="box">
                        <div className="left-btn">
                            <div className="btn-out"><button onClick={onPlaceOrder} className="btn btn-blue">Place Your Order</button></div>
                        </div>
                        <div className="aside">
                            <div className="total">Order Total: $151.00</div>
                            <p>Disclaimer about submiting art for moderation, time frame for review for art to be moderated will entail.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
