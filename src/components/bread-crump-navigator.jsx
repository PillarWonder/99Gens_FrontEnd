import { navigate } from 'gatsby';
import * as React from 'react'


export default function breadCrumbNavigator({valueA, valueB}) {
    const onGenerate = (e) => {
        e.preventDefault();
        navigate("/staging");
    }

    const onChooseArt = (e) => {
        e.preventDefault();
        navigate("/choose-art");

    }

    const onChooseMerch = (e) => {
        e.preventDefault();
        navigate("/select-merch");
    }

    const onCheckout = (e) => {
        e.preventDefault();
        navigate("/shipping-address");
    }

    return (
        <div className="breadcrumb">
            <ul>
                <li><a href="#" onClick={onGenerate}>Generate</a></li>
                <li><a href="#" onClick={onChooseArt}>Choose Art</a></li>
                <li><a href="#" onClick={onChooseMerch}>Choose Merch</a></li>
                <li><a href="#" onClick={onCheckout}>Checkout</a></li>
            </ul>
        </div>
    )
}
