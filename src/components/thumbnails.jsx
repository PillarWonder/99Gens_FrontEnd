import * as React from 'react';
import { useApplicationContext } from "../../provider";

export default function Thumbnail({ id, src, number, customclass, alt }) {

    const [selectedState, setSelectedState] = React.useState("");
    const { applicationState, setApplicationState } = useApplicationContext();

    // const onClickThumbnail = (e) => {
    //     e.preventDefault();
    //     setSelectedState("selected");
    // }

    return (
        <li onClick={onClickThumbnail}>
            <a href="#" id={id} className={ number == applicationState.currentThumbnail ? customclass: customclass + " selected"}>
                <div className="figure1">
                    <img className="image-slot" src={src} alt={alt} />
                </div>
                <div className="aside">
                    <div className="number">{number}</div>
                </div>
            </a>
        </li>
    )
}

