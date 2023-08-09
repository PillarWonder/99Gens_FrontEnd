import * as React from 'react'
import { withPrefix } from "gatsby";

const LedgerTab = ({ state, onChangeFunction }) => {
    return (
        <div className="col-lg-8 col-md-7">
            <div className="purchase-history">
                <div className="title-bar">
                    <div className="credits-heading">
                        <h2>My Ledger</h2>
                        <div className="btn-out">
                            <a href="#" className="btn btn-blue">
                                Buy credits
                            </a>
                        </div>
                    </div>
                    <h3>Credit Spending Log</h3>
                </div>
                <div className="price-table-out">
                    <div className="price-table">
                        <ul>
                            <li className="table-heading">
                                <div className="col-1">Credits</div>
                                <div className="col-2">Date</div>
                                <div className="col-3">Cost</div>
                                <div className="col-4">Billed</div>
                            </li>
                            <li>
                                <div className="price-accord-link">
                                    <div className="col-1">6 credits</div>
                                    <div className="col-2">1/1/2022</div>
                                    <div className="col-3">.80</div>
                                    <div className="col-4">4.8</div>
                                    <div className="col-5">
                                        <span className="arrow">Arrow</span>
                                    </div>
                                </div>
                                <div className="price-accord-cont">
                                    <div className="thumbnails">
                                        <div className="thumbnails-inn">
                                            <div className="item">
                                                <div className="figure">
                                                    <img src={withPrefix("assets/img/placeholder-2.png")} alt="placeholder-2" />
                                                </div>
                                            </div>
                                            <div className="item">
                                                <div className="figure">
                                                    <img src={withPrefix("assets/img/placeholder-2.png")} alt="placeholder-2" />
                                                </div>
                                            </div>
                                            <div className="item">
                                                <div className="figure">
                                                    <img src={withPrefix("assets/img/placeholder-2.png")} alt="placeholder-2" />
                                                </div>
                                            </div>
                                            <div className="item">
                                                <div className="figure">
                                                    <img src={withPrefix("assets/img/placeholder-2.png")} alt="placeholder-2" />
                                                </div>
                                            </div>
                                            <div className="item">
                                                <div className="figure">
                                                    <img src={withPrefix("assets/img/placeholder-2.png")} alt="placeholder-2" />
                                                </div>
                                            </div>
                                            <div className="item">
                                                <div className="figure">
                                                    <img src={withPrefix("assets/img/placeholder-2.png")} alt="placeholder-2" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="price-accord-link active">
                                    <div className="col-1">6 credits</div>
                                    <div className="col-2">1/18/2022</div>
                                    <div className="col-3">1</div>
                                    <div className="col-4">6</div>
                                    <div className="col-5">
                                        <span className="arrow">Arrow</span>
                                    </div>
                                </div>
                                <div className="price-accord-cont active">
                                    <div className="thumbnails">
                                        <div className="thumbnails-inn">
                                            <div className="item">
                                                <div className="figure">
                                                    <img src={withPrefix("assets/img/placeholder-2.png")} alt="placeholder-2" />
                                                </div>
                                            </div>
                                            <div className="item">
                                                <div className="figure">
                                                    <img src={withPrefix("assets/img/placeholder-2.png")} alt="placeholder-2" />
                                                </div>
                                            </div>
                                            <div className="item">
                                                <div className="figure">
                                                    <img src={withPrefix("assets/img/placeholder-2.png")} alt="placeholder-2" />
                                                </div>
                                            </div>
                                            <div className="item">
                                                <div className="figure">
                                                    <img src={withPrefix("assets/img/placeholder-2.png")} alt="placeholder-2" />
                                                </div>
                                            </div>
                                            <div className="item">
                                                <div className="figure">
                                                    <img src={withPrefix("assets/img/placeholder-2.png")} alt="placeholder-2" />
                                                </div>
                                            </div>
                                            <div className="item">
                                                <div className="figure">
                                                    <img src={withPrefix("assets/img/placeholder-2.png")} alt="placeholder-2" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="price-accord-link">
                                    <div className="col-1">6 credits</div>
                                    <div className="col-2">2/30/2022</div>
                                    <div className="col-3">1</div>
                                    <div className="col-4">6</div>
                                    <div className="col-5">
                                        <span className="arrow">Arrow</span>
                                    </div>
                                </div>
                                <div className="price-accord-cont">
                                    <div className="thumbnails">
                                        <div className="thumbnails-inn">
                                            <div className="item">
                                                <div className="figure">
                                                    <img src={withPrefix("assets/img/placeholder-2.png")} alt="placeholder-2" />
                                                </div>
                                            </div>
                                            <div className="item">
                                                <div className="figure">
                                                    <img src={withPrefix("assets/img/placeholder-2.png")} alt="placeholder-2" />
                                                </div>
                                            </div>
                                            <div className="item">
                                                <div className="figure">
                                                    <img src={withPrefix("assets/img/placeholder-2.png")} alt="placeholder-2" />
                                                </div>
                                            </div>
                                            <div className="item">
                                                <div className="figure">
                                                    <img src={withPrefix("assets/img/placeholder-2.png")} alt="placeholder-2" />
                                                </div>
                                            </div>
                                            <div className="item">
                                                <div className="figure">
                                                    <img src={withPrefix("assets/img/placeholder-2.png")} alt="placeholder-2" />
                                                </div>
                                            </div>
                                            <div className="item">
                                                <div className="figure">
                                                    <img src={withPrefix("assets/img/placeholder-2.png")} alt="placeholder-2" />
                                                </div>
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

export default LedgerTab