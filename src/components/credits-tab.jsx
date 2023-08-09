import * as React from 'react'
import { withPrefix } from "gatsby";

const CreditsTab = ({ state, onChangeFunction }) => {
    return (
        <div className="col-lg-8 col-md-7">
            <div className="purchase-history">
                <div className="title-bar">
                    <div className="credits-heading">
                        <h2>Credits : 30</h2>
                        <div className="btn-out">
                            <a href="#" className="btn btn-blue" > Buy credits </a>
                        </div>
                    </div>
                    <h3>Purchase History</h3>
                </div>
                <div className="price-table-out">
                    <div className="price-table alt">
                        <ul>
                            <li className="table-heading">
                                <div className="col-1">Credits</div>
                                <div className="col-2">Date</div>
                                <div className="col-3">Value</div>
                                <div className="col-4">Billed</div>
                            </li>
                            <li>
                                <div className="price-accord-link">
                                    <div className="col-1">
                                        65 Credits added to account
                                    </div>
                                    <div className="col-2">1/1/2022</div>
                                    <div className="col-3">1.5 cPC</div>
                                    <div className="col-4">$1.00</div>
                                    <div className="col-5">
                                        <span className="arrow">Arrow</span>
                                    </div>
                                </div>
                                <div className="price-accord-cont">
                                    <div className="order-details">
                                        <div className="box">
                                            <div className="left-txt">
                                                ORDER # &nbsp; 0000000
                                            </div>
                                            <div className="right-txt">
                                                STATUS &nbsp;{" "}
                                                <span className="green">
                                                    COMPLETE
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="price-accord-link active">
                                    <div className="col-1">
                                        420 Credits added to account
                                    </div>
                                    <div className="col-2">1/18/2022</div>
                                    <div className="col-3">1.2 cpc</div>
                                    <div className="col-4">$5.00</div>
                                    <div className="col-5">
                                        <span className="arrow">Arrow</span>
                                    </div>
                                </div>
                                <div className="price-accord-cont active">
                                    <div className="order-details">
                                        <div className="box">
                                            <div className="left-txt">
                                                ORDER # &nbsp; 0000000
                                            </div>
                                            <div className="right-txt">
                                                STATUS &nbsp;{" "}
                                                <span className="green">
                                                    COMPLETE
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="price-accord-link">
                                    <div className="col-1">
                                        1000 Credits added to account
                                    </div>
                                    <div className="col-2">2/30/2022</div>
                                    <div className="col-3">1 cpc</div>
                                    <div className="col-4">$10.00</div>
                                    <div className="col-5">
                                        <span className="arrow">Arrow</span>
                                    </div>
                                </div>
                                <div className="price-accord-cont">
                                    <div className="order-details">
                                        <div className="box">
                                            <div className="left-txt">
                                                ORDER # &nbsp; 0000000
                                            </div>
                                            <div className="right-txt">
                                                STATUS &nbsp;{" "}
                                                <span className="green">
                                                    COMPLETE
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreditsTab