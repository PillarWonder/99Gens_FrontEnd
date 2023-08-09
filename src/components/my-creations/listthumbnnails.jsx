import * as React from 'react'
import { useEffect } from "react";
import Thumbnail from "./thumbnails";
import MyCarousel from "./myCarousel";
import { useApplicationContext } from "../../../provider";


export default function ListThumbnail({ Value, Carousel }) {
    const { applicationState, setApplicationState } = useApplicationContext();
    let flatIndex = 0;
    const [carouselImgArr, setCarouselImgArr] = React.useState(
        ['https://printful-upload.s3-accelerate.amazonaws.co…over-print-backpack-white-front-639a1671ca040.jpg', 'https://printful-upload.s3-accelerate.amazonaws.co…print-unisex-hoodie-white-front-639a168299dd2.jpg', 'https://printful-upload.s3-accelerate.amazonaws.co…t-unisex-sweatshirt-white-front-639a16791b4a9.jpg', 'https://printful-upload.s3-accelerate.amazonaws.co…r-print-tote-black-15x15-mockup-639a166f03c53.jpg', 'https://printful-upload.s3-accelerate.amazonaws.co…/jigsaw-puzzle-520-pieces-front-639a1672c6492.jpg', 'https://printful-upload.s3-accelerate.amazonaws.co…82/thin-canvas-(in)-18x24-front-639a16724467e.jpg', 'https://printful-upload.s3-accelerate.amazonaws.co…over-print-crop-tee-white-front-639a16798a159.jpg', 'https://printful-upload.s3-accelerate.amazonaws.co…-over-print-gym-bag-white-front-639a167f37033.jpg', 'https://printful-upload.s3-accelerate.amazonaws.co…l-over-print-beanie-white-front-639a1673f1514.jpg', 'https://printful-upload.s3-accelerate.amazonaws.co…rint-premium-pillow-18x18-front-639a1676e1057.jpg', 'https://printful-upload.s3-accelerate.amazonaws.co…rint-womens-joggers-white-front-639a167429caf.jpg', 'https://printful-upload.s3-accelerate.amazonaws.co…ing-mouse-pad-white-18x16-front-639a167259ad9.jpg', 'https://printful-upload.s3-accelerate.amazonaws.co…int-womens-tank-top-white-front-639a167113ac4.jpg', 'https://printful-upload.s3-accelerate.amazonaws.co…ase-glossy-iphone-14-plus-front-639a167166415.jpg', 'https://printful-upload.s3-accelerate.amazonaws.co…ns-athletic-t-shirt-white-front-639a1678907a7.jpg', 'https://printful-upload.s3-accelerate.amazonaws.co…minimalist-backpack-white-front-639a1674a88d3.jpg', 'https://printful-upload.s3-accelerate.amazonaws.co…s-crew-neck-t-shirt-white-front-639a167874131.jpg', 'https://printful-upload.s3-accelerate.amazonaws.co…er-print-duffle-bag-white-front-639a167a18ad0.jpg', 'https://printful-upload.s3-accelerate.amazonaws.co…nt-mens-windbreaker-black-front-639a16841cbb9.jpg', 'https://printful-upload.s3-accelerate.amazonaws.co…nisex-bomber-jacket-white-front-639a167c89831.jpg']
    );
    const [isChecked, setIsChecked] = React.useState(false);

    var products = [
        "backpack", "hoodie", "unisex-sweatshirt", "tote-bag",
        "jigsaw-puzzle-520", "canvas-1824", "crop-tee-s", "gym-bag",
        "beanie", "premium-pillow", "joggers-women", "gaming-mouse-pad",
        "tank-top-women", "tough-iphone-case", "men-atheletic-t-shirt", "minimalist-backpack",
        "women-crew-neck-t-shirt", "duffle-bag", "men-windbreaker", "bomber-jacket"];
    let newObj = [];
    let myArrays = new Array();
    myArrays = Value.carouselData;
    if (Value.carouselData != undefined) {
        flatIndex = applicationState.mycreationsSelectedItemIndex;
        if (myArrays != undefined) {
            for (let k = 0; k <= 19; k++) {
                if (myArrays[flatIndex] != undefined) {
                    newObj.push(JSON.parse(myArrays[flatIndex])[products[k]][0][0]);
                }
            }
        }
    }
    const RenderItems = [];
    if (Value.srcs != undefined) {
        for (let i = 0; i < Value.srcs.length; i++) {
            RenderItems.push(<Thumbnail ImgUrl={Value.srcs[i]} ItemIndex={i} listUid={Value.carousel_uID} isAllChecked={isChecked}></Thumbnail>);
        }
    }

    const onLinkClick = (e) => {
        e.preventDefault();
        setCarouselImgArr(newObj);
    }

    const onCheckClick = (e) => {
        e.preventDefault();
        setIsChecked(!isChecked);
        if (isChecked) {
            setApplicationState({
                ...applicationState,
                mycreationsSelectedCount: applicationState.mycreationsSelectedCount - Value.srcs.length
            });
            for (let i = 0; i < Value.srcs.length; i++) {
                localStorage.removeItem(`showItem${applicationState.mycreationsSelectedCount + i}`);
            }
        } else {
            setApplicationState({
                ...applicationState,
                mycreationsSelectedCount: applicationState.mycreationsSelectedCount + Value.srcs.length
            });
            for (let i = 0; i < Value.srcs.length; i++) {
                localStorage.setItem(`showItem${applicationState.mycreationsSelectedCount + i}`, Value.carousel_uID + "," + i);
            }
        }
    }

    useEffect(() => {
    }, [applicationState.mycreationsSelectedItemIndex, carouselImgArr, isChecked]);

    return (
        <li onClick={onLinkClick}>
            <div className="review-accord-link">
                <div data-label="ID" className="col-1">
                    <div className="thumbs">
                        <p><a href="#">{Value.carousel_uID}</a></p>
                        <div className="aside">
                            <ul>
                                {RenderItems}
                            </ul>
                        </div>
                    </div>
                </div>
                <div data-label="Date" className="col-2">{Value.date.substr(0, 10)}</div>
                <div data-label="Credits" className="col-3">{Value.credits} <span className="arrow">Arrow</span></div>
                <div data-label="Selected" className="col-4" onClick={onCheckClick}>
                    <div className="check-options">
                        <input id="checkbox" name="checkbox" type="checkbox" className="styled" checked={isChecked} />
                        <label htmlFor="checkbox" />
                    </div>
                </div>
            </div>
            <MyCarousel Activeness={Carousel} Images={carouselImgArr}></MyCarousel>
        </li>
    )
}