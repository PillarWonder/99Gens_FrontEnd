import * as React from 'react'

const orderSummaryTab = ({ CustomClass, Img }) => {
    return (
        <div className="col-lg-4 col-md-5">
            <div className="order-summary">
                <h3>Order Summary</h3>
                <div className="aside">
                    <ul>
                        <li><span className="left-l">Items</span> <span className="right-r">$60.00</span></li>
                        <li><span className="left-l">Shipping+ Handling</span> <span className="right-r">$10.00</span></li>
                        <li><span className="left-l">Tax</span> <span className="right-r">$4.83</span></li>
                    </ul>
                    <div className="total"><span className="left-l">Order Total</span> <span className="right-r">$74.83</span></div>
                </div>
                <div className="gray-box">Disclaimer about submiting art for moderation, time frame for
                    review for art to be moderated will entail.</div>
            </div>
        </div>
    )
}

export default orderSummaryTab