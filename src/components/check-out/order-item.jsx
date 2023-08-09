import * as React from 'react'

export default function OrderItem({productImg, productTitle, productDescription, productPrice}) {
    const [state, setState] = React.useState({
        itemCount: 1
    });

    const onClickUp = (e) => {
        e.preventDefault();
        setState({...state, itemCount: state.itemCount+1});

    }

    const onClickDown = (e) => {
        e.preventDefault();
        setState({...state, itemCount: state.itemCount-1});
        if(state.itemCount <= 0) {
            setState({...state, itemCount: 0});
        }
    }

    const onChange = (e) => {
        e.preventDefault();
        setState({...state, [e.target.name] :e.target.value });
    }
    return (
        <li>
            <div className="col-1">
                <div className="figure"><img src={productImg} alt="product-sml" /></div>
            </div>
            <div className="col-2">
                <h4>{productTitle}</h4>
                <p>{productDescription}</p>
            </div>
            <div className="col-3">
                <div className="price">${productPrice}</div>
            </div>
            <div className="col-4">
                <div className="qty">
                    <form action="#" method="post">
                        <div className="bgnumber">
                            <input name="itemCount" onChange={onChange} type="text" id="qty" className="number" value={state.itemCount} />
                        </div>
                        <div className="plusminus">
                            <input type="button" name="add" onClick={onClickUp} className="increment" />
                            <input type="button" name="subtract" onClick={onClickDown} className="decrement" />
                        </div>
                    </form>
                </div>
            </div>
        </li>
    )
}

