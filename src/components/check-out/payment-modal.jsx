import * as React from 'react'
import {navigate} from 'gatsby';

export default function PaymentModal0({valueA, valueB}) {
    const onSendClick = (e) =>{
        e.preventDefault();
        navigate("/review-place-order");
    }
    return (
        <div className="paymment-modal">
            <div className="modal fade" id="send-order" role="dialog">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="icon-close" data-bs-dismiss="modal"><img src="assets/img/icon-close.png" alt="icon-close" /></div>
                        <div className="form-field">
                            <h3>Send Order</h3>
                            <form action="#" method="post">
                                <ul>
                                    <li><input id="personal" name="personal" type="text" placeholder="Personal Message (optional)" /></li>
                                    <li><input id="email" name="email" type="text" placeholder="enter email" /></li>
                                </ul>
                                <div className="btn-out" data-bs-dismiss="modal"><button  onClick={onSendClick} className="btn btn-blue">Send</button></div>
                                <div className="share-link">
                                    <div className="input-out">
                                        <input id="share" name="share" type="text" placeholder="|NALoremipsumdolorsitametconsectetura" />
                                        <div className="copy-btn"><button>Copy link</button></div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}