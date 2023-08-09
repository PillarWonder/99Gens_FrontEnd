import * as React from 'react'
import {navigate} from 'gatsby';

export default function paymentConfirmModal({valueA, valueB}) {
    const onBackClick = (e) => {
        e.preventDefault();
        navigate("/shipping-address");
    }
    const onBackToOrder = (e) => {
        e.preventDefault();
        navigate("/shipping-address");
    }
    return (
        <div className="paymment-modal">
            <div className="modal fade" id="paymment" role="dialog">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="icon-close" data-bs-dismiss="modal"><img src="assets/img/icon-close.png" alt="icon-close" /></div>
                        <h3>Your order has been sent !</h3>
                        <p>Your order has been sent to Firstname Lastname.</p>
                        <p>They will recieve an email with your order request and a link to enter their payment information.</p>
                        <p>You will receive an email confirmation if your order request is confirmed or denied.</p>
                        <div className="bottom-btns" data-bs-dismiss="modal"><a href="#" onClick={onBackToOrder} className="btn" data-bs-dismiss="modal">Back To My Order</a> <a href="#" onClick={onBackClick} className="btn btn-blue">Back To Creating</a></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
