import { navigate } from 'gatsby';
import * as React from 'react'
import { useApplicationContext } from "../../provider";
import { isLoggedIn } from '../services/auth';

export default function PaymentOptions({ imgSrc, userPrompt }) {

    const { applicationState, setApplicationState } = useApplicationContext();

    const onRemixClick = (e) => {
        e.preventDefault();
        setApplicationState({
            ...applicationState,
            detailedDescription: userPrompt,
        });
            navigate("/choose-art");
    }

    const onMerchifyClick = (e) => {
        e.preventDefault();
            navigate("/select-merch");

    }

    return (
        <div className="col-lg-4 col-sm-6">
            <div className="box">
                <div className="figure">
                    <img src={imgSrc} alt="featured-image-1" />{" "}
                    <div className="btns">
                        <a href="#" className="btn btn-blue" onClick={onRemixClick}>REMIX <em className="icn-rex" /></a>{" "}
                        <a href="#" className="btn btn-blue" onClick={onMerchifyClick}>MERCHIFY <em className="icn-crt" /></a>
                    </div>
                </div>
                <h3>3D</h3>
            </div>
        </div>
    )
}
