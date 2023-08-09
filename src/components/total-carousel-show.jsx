import * as React from 'react'
import { withPrefix } from "gatsby";
import CarouselSlotGroup from "./carousel-slot-group";

export default function TotalCarouselShow() {
    let thumbnail_count = [];
    thumbnail_count = JSON.parse(localStorage.getItem("mergify"));
    const createElements_carousel = [];
    for (let i = 1; i <= thumbnail_count.length; i++) {
      createElements_carousel.push(<CarouselSlotGroup customID={i}></CarouselSlotGroup>);
    }
    
    return (
        <div id="owl-select-merch" className="owl-carousel">
            {createElements_carousel}
        </div>
    )
}