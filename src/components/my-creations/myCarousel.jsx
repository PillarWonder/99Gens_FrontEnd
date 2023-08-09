import * as React from 'react'
import { useEffect } from 'react';
import OwlCarousel from "react-owl-carousel2";
import { useApplicationContext } from '../../../provider';


export default function MyCarousel({ Activeness, Images }) {

    const { applicationState, setApplicationState } = useApplicationContext();

    const options = {
        items: 8,
        // autoWidth: true,
        loop: true,
        dragEnabled: false,
        margin: 8,
        nav: true,
        dotsEach: true,
        dots: false,
        autoplay: true,
        // navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
        responsive:{
            0:{
                items:3
            },
            600:{
                items:5
            },
            1000:{
                items:8
            },
            1500:{
                items:10
            }
        }
    };

    const [onActive, setOnActive] = React.useState();

    useEffect(() => {
    }, [onActive, applicationState, Images]);

    const onCarouselBodyClick = (e) => {
    }

    return (
        <div className="review-product-slider" onClick={onCarouselBodyClick}>
            <OwlCarousel id="owl-product3" className="owl-carousel" options={options}>
                {Images.map(function (object, i) {
                    return <div className="item"><a href="#"><img src={Images[i]} alt="review-slider-1" /></a></div>;
                })} 

            </OwlCarousel>
        </div>
    )
}