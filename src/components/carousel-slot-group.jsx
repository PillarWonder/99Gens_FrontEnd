import * as React from 'react'
import { withPrefix } from "gatsby";
import ProductSlot from './product-slot';

const CustomClass = [
    "backpack", "hoodie", "unisex-sweatshirt", "tote-bag",
    "jigsaw-puzzle-520", "canvas-1824", "crop-tee-s", "gym-bag",
    "beanie", "premium-pillow", "joggers-women", "gaming-mouse-pad",
    "tank-top-women", "tough-iphone-case", "men-atheletic-t-shirt", "minimalist-backpack",
    "women-crew-neck-t-shirt", "duffle-bag", "men-windbreaker", "bomber-jacket",
    "one-piece-swimsuit", "unisex-track-pants", "unisex-wide-leg-pants",
    "long-sleeve-midi-dress", "womens-cropped-windbreaker"];

const ToolTips = [
    "Backpack", "Hoodie", "Sweatshirt", "Tote Bag",
    "Puzzle", "Canvas", "Crop Tee", "Gym Bag",
    "Beanie", "Pillow", "Joggers", "Mousepad",
    "Tanktop", "Iphone Case", "ATHLETIC TEE", "Mini Backpack",
    "Women T-Shirt", "Duffle Bag", "Windbreaker", "Bomber Jacket",
    "Swimsuit", "Track Pants", "Wide Leg pants", "Midi Dress",
    "Women Windbreaker"
];

export default function Layout({ customID }) {
    const createElements = [];
    for (let i = 0; i < 24; i++) {
        createElements.push(<ProductSlot CustomClass={CustomClass[i] + " figure"} CustomAlt={ToolTips[i]} keyID={i} Img={withPrefix("assets/img/green-little-balls.gif")} Product={ToolTips[i]} OrderNum={i}> </ProductSlot>);
    }

    const forName = "item item" + customID;
    return (
        <div className={forName}>
            <div className="container-inn">
                <div className="row" id="product-carousel-slot">
                    {createElements}
                </div>
            </div>
        </div>
    )
}