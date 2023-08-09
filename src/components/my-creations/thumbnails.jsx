import * as React from 'react'
import { useApplicationContext } from '../../../provider';
import { useEffect } from "react";

export default function Thumbnails({ ImgUrl, ItemIndex, listUid, isAllChecked }) {
    const [isSelected, setisSelected] = React.useState(false);
    const [isAllCheckedPage, setIsAllCheckedPage] = React.useState(isAllChecked);
    const [isTotalSelected, setisTotalSelected] = React.useState(false);
    const { applicationState, setApplicationState } = useApplicationContext();
    const [localItemIndex, setLocalItemIndex] = React.useState();
    const onProductClick = () => {
        setisSelected(true);
        setApplicationState({
            ...applicationState,
            mycreationsSelectedCount: applicationState.mycreationsSelectedCount + 1,
            mycreationsSelectedItemIndex: localItemIndex
        })
        localStorage.setItem(`showItem${applicationState.mycreationsSelectedCount}`, listUid + "," + ItemIndex);
        if (isTotalSelected) {
            setisTotalSelected(false);
            setisSelected(false);
            setIsAllCheckedPage(false);
            setApplicationState({
                ...applicationState,
                mycreationsSelectedCount: applicationState.mycreationsSelectedCount - 1,
                mycreationsSelectedItemIndex: localItemIndex
            });
            localStorage.removeItem(`showItem${applicationState.mycreationsSelectedCount}`);
        }
    }
    useEffect(() => {
        setLocalItemIndex(ItemIndex);
        setisTotalSelected(isAllCheckedPage || isSelected);
        setIsAllCheckedPage(isAllChecked);
    }, [applicationState, isSelected, isAllCheckedPage, isTotalSelected]);
    return (
        <li onClick={onProductClick}><a href="#" {...isTotalSelected ? { className: "box-inn selected" } : { className: "box-inn " }}>
            <div className="figure" ><img src={ImgUrl} alt="review-1" /></div>
            <div className="number-out">
                <div className="number"><em className="far fa-check" /></div>
            </div>
        </a></li>
    )
}