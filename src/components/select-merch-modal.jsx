import * as React from 'react'
import { withPrefix } from "gatsby";

const SelectMerchModal = ({  }) => {
    return (
        <div className="select-merch-modal">
            <div className="modal fade" id="select-merch" role="dialog">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="product-details" id="modal-heading-top">
                            <div className="heading-top">
                            </div>
                            <div className="product-img-out">
                                <div className="product-img">
                                    <div className="product-lrg">
                                        <div className="show zoom" id='ex3' style={{ position: "relative" }}>
                                            <img id="show-img" src={withPrefix("assets/img/green-little-balls.gif")} alt="product-bag-1" as="image" width="300" height="300" />
                                        </div>
                                        <div className="bottom-btns">
                                            <button className="btn btn-dark-blue">Add to Cart</button>
                                            <button className="btn btn-blue">Buy Now</button>
                                        </div>
                                    </div>
                                    <div className="small-img">
                                        <div className="small-container">
                                            <div id="small-img-roll">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SelectMerchModal