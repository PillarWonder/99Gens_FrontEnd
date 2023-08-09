import * as React from 'react'
import {navigate} from 'gatsby';


export default function ShippingAddress({valueA, valueB}) {

    const [state, setState] = React.useState({
        firstname: "",
        lastname: "",
        addressLine1: "",
        addressLine2: "",
        city:"",
        state:"",
        country:"",
        zipcode:""
    });

    const toogleContinue = (e) => {
        e.preventDefault();
        navigate("/payment-shipping-info");
    }
    const toogleBack = (e) => {
        e.preventDefault();
        navigate("/select-merch");
    }

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
                            <li className="active">Dot</li>
                            <li>Dot</li>
                            <li>Dot</li>
                        </ul>
                    </div>
                    <div className="form-field">
                        <h3>Shipping Address</h3>
                        <form action="#" method="post">
                            <ul>
                                <li className="sml-cl"><input id="firstname" name="firstname" type="text" placeholder="First Name" onChange={onChange} value={state.firstname} /></li>
                                <li className="sml-cl"><input id="lastname" name="lastname" type="text" placeholder="Last Name" onChange={onChange}  value={state.lastname}/></li>
                                <li><input id="addressline1" name="addressLine1" type="text" placeholder="Address Line 1" onChange={onChange} value={state.addressLine1}/></li>
                                <li><input id="addressline2" name="addressLine2" type="text" placeholder="Address Line 2 (Optional)" onChange={onChange} value={state.addressLine2}/></li>
                                <li className="sml-cl"><input id="city" name="city" type="text" placeholder="City" onChange={onChange} value={state.city}/></li>
                                <li className="sml-cl"><input id="state" name="state" type="text" placeholder="State" onChange={onChange} value={state.state}/></li>
                                <li className="sml-cl"><input id="country" name="country" type="text" placeholder="Country" onChange={onChange} value={state.country}/></li>
                                <li className="sml-cl"><input id="zipcode" name="zipcode" type="text" placeholder="Zip Code" onChange={onChange} value={state.zipcode}/></li>
                            </ul>
                            <div className="check-options">
                                <input id="checkbox" name="checkbox" type="checkbox" className="styled" />
                                <label htmlFor="checkbox">Save as Billing Address</label>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="bottom-btns"><a href="#" onClick={toogleBack} className="btn">Back</a> <a href="#" onClick={toogleContinue} className="btn btn-blue">Continue</a></div>
            </div>
        </div>
    )
}
