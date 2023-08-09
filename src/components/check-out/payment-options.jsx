import * as React from 'react'

export default function PaymentOptions({valueA, valueB}) {

    const [state, setState] = React.useState({
        cardnumber: "",
        expirationdate: "",
        cvv: ""
    });

    const onChange = (e) => {
        e.preventDefault();
        setState({...state, [e.target.name]: e.target.value});
    }

    return (
        <div className="col-lg-8 col-md-7">
            <div className="order-details">
                <div className="paymment-options">
                    <div className="steps">
                        <ul>
                            <li>Dot</li>
                            <li className="active">Dot</li>
                            <li>Dot</li>
                        </ul>
                    </div>
                    <div className="form-field">
                        <h3>Payment Options</h3>
                        <div className="radio-options">
                            <input id="radio-1" name="radio" type="radio" className="styled" />
                            <label htmlFor="radio-1">Credit or Debit card <em><img src="assets/img/cards.png" alt="cards" /></em></label>
                        </div>
                        <form action="#" method="post">
                            <ul>
                                <li><input id="cardnumber" name="cardnumber" onChange={onChange} type="text" placeholder="Card Number" /></li>
                                <li className="sml-cl"><input id="expirationdate" onChange={onChange} name="expirationdate" type="text" placeholder="Expiration Date" /></li>
                                <li className="sml-cl"><input id="cvv" name="cvv" onChange={onChange} type="text" placeholder="CVV" /></li>
                            </ul>
                            <div className="paymment-method">
                                <p><a href="#">Billing Address</a> SAME AS SHIPPING ADDRESS </p>
                                <ul>
                                    <li>
                                        <div className="radio-options">
                                            <input id="radio-2" name="radio" type="radio" className="styled" />
                                            <label htmlFor="radio-2"><em><img src="assets/img/pay.png" alt="pay" /></em></label>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="radio-options">
                                            <input id="radio-3" name="radio" type="radio" className="styled" />
                                            <label htmlFor="radio-3"><em><img src="assets/img/google-pay.png" alt="google-pay" /></em></label>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="radio-options">
                                            <input id="radio-4" name="radio" type="radio" className="styled" />
                                            <label htmlFor="radio-4"><em><img src="assets/img/paypal.png" alt="paypal" /></em></label>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="sharepay-box">
                    <div className="radio-options">
                        <input id="radio-5" name="radio" type="radio" className="styled" />
                        <label htmlFor="radio-5">Share pay</label>
                    </div>
                    <p>Send your purchase to someone else to pay for <a href="#">Learn More</a></p>
                </div>
                <div className="bottom-btns"><a href="#paymment" className="btn" data-bs-toggle="modal">Back</a> <a href="#send-order" className="btn btn-blue" data-bs-toggle="modal">Continue</a></div>
            </div>
        </div>
    )
}
