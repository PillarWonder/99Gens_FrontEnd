import * as React from "react";
import { useEffect } from "react";
import { withPrefix } from "gatsby";
import { useApplicationContext } from "../../provider";
import { navigate } from "gatsby";
import { Helmet } from "react-helmet";
import { isLoggedIn } from "../services/auth";
import Footer from "../components/footer";
import Header from "../components/header";
 
export default function Layout() {
    useEffect(() => {
    }, []);

    const [state, setState] = React.useState({
        detailedDescription_tab: ""
    });

    const onChange = (e) => {
        setState({ ...state, [e.target.name]: e.target.value });
    }

    const { applicationState, setApplicationState } = useApplicationContext();

    const onGenerateClick = (e) => {
        e.preventDefault();
        setApplicationState({
            ...applicationState,
            detailedDescription_tab: state.detailedDescription_tab
        });
        navigate("/choose-art");
    }
    return (
        <>
            <div className="container-main" id="page">
                {/* Header */}
                <Header></Header>
                {/* Content - Main */}
                <main className="content-main">
                    <div className="product-tabs">
                        <div className="container">
                            <h1>Remixer</h1>
                            {/* <div className="tab-links2">
                                <ul className="nav">
                                    <li><a href="#default" data-bs-toggle="active">Default</a></li>
                                    <li><a href="#advanced" className="tab" data-bs-toggle="tab">Advanced</a></li>
                                    <li><a href="#bulk" data-bs-toggle="tab">Bulk</a></li>
                                </ul>
                            </div> */}
                            <div className="tab-content">
                                {/* <div className="tab-pane" id="default"> */}
                                    <div className="box">
                                        <div className="search-form">
                                            <form method="get" action="#">
                                                <label>Enter a detailed description:</label>
                                                <div className="textarea-box">
                                                    <textarea name="detailedDescription_tab" id="commentsart2" cols={5} rows={5} placeholder="Edit the text to remix your generative results..." defaultValue={""}  onChange={onChange} />
                                                </div>
                                            </form>
                                        </div>
                                        <div className="bottom-btn">
                                            <div className="btn-out"><a href="#" onClick={onGenerateClick} className="btn">GENERATE ART</a></div>
                                            <div className="image-count"><a href="#">*82 Credits / Image*</a></div>
                                        </div>
                                    </div>
                                    <div className="bottom-box"><span>*Step count impacts price. <a href="#">Learn More.</a></span></div>
                                {/* </div> */}
                                {/* <div className="tab-pane active" id="advanced">
                                    <div className="box">
                                        <div className="form-box">
                                            <div className="form-row">
                                                <div className="aside-out">
                                                    <div className="aside">
                                                        <h4>Resolution <span className="sml">/ 32 pixel resolution</span></h4>
                                                        <div className="resolution-box">
                                                            <div className="resolution-bar">
                                                                <div className="txt-l">W</div>
                                                                <div className="range-slider">
                                                                    <input className="range-slider__range" type="range" defaultValue={512} min={0} max={1000} />
                                                                    <span className="range-slider__value">512</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="resolution-box">
                                                            <div className="resolution-bar">
                                                                <div className="txt-l">H</div>
                                                                <div className="range-slider">
                                                                    <input className="range-slider__range" type="range" defaultValue={512} min={0} max={1000} />
                                                                    <span className="range-slider__value">512</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="aside">
                                                        <h4>CFG Scale</h4>
                                                        <div className="resolution-box">
                                                            <div className="resolution-bar alt">
                                                                <div className="range-slider">
                                                                    <input className="range-slider__range" type="range" defaultValue={512} min={0} max={1000} />
                                                                    <span className="range-slider__value">512</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-row">
                                                <div className="aside-out">
                                                    <div className="aside">
                                                        <h4>Steps</h4>
                                                        <div className="resolution-box">
                                                            <div className="resolution-bar alt">
                                                                <div className="range-slider">
                                                                    <input className="range-slider__range" type="range" defaultValue={512} min={0} max={1000} />
                                                                    <span className="range-slider__value">512</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="aside">
                                                        <h4>Number of Images</h4>
                                                        <div className="resolution-box">
                                                            <div className="resolution-bar alt">
                                                                <div className="range-slider">
                                                                    <input className="range-slider__range" type="range" defaultValue={512} min={0} max={1000} />
                                                                    <span className="range-slider__value">512</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-field">
                                                <form method="get" action="#">
                                                    <ul>
                                                        <li>
                                                            <label>Steps</label>
                                                            <select id="ims" name="select" className="ims">
                                                                <option value="kims">k_Ims</option>
                                                                <option value="kims2">k_Ims 2</option>
                                                                <option value="kims3">k_Ims 3</option>
                                                            </select></li>
                                                        <li className="input-with-checkbox">
                                                            <div className="check-options">
                                                                <input id="checkbox2" name="checkbox2" type="checkbox" className="styled" />
                                                                <label htmlFor="checkbox2">Seed</label>
                                                            </div>
                                                            <input id="firstname" name="firstname" type="text" placeholder={37832786} />
                                                        </li>
                                                        <li>
                                                            <label>Ai Model</label>
                                                            <select id="stable" name="select" className="stable">
                                                                <option value="stablediffusion1">Stable Diffusion v1.5</option>
                                                                <option value="stablediffusion2">Stable Diffusion v1.6</option>
                                                                <option value="stablediffusion3">Stable Diffusion v1.7</option>
                                                            </select></li>
                                                    </ul>
                                                </form>
                                            </div>
                                            <div className="bottom-btn">
                                                <div className="btn-out"><a href="#" className="btn">GENERATE ART</a></div>
                                                <div className="right-r">
                                                    <div className="image-count"><a href="#">*82 Credits / Image*</a></div>
                                                    <div className="check-option-btm">
                                                        <div className="check-options">
                                                            <input id="checkbox" name="checkbox" type="checkbox" className="styled" />
                                                            <label htmlFor="checkbox">Lock Settings</label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div> */}
                                {/* <div className="tab-pane" id="bulk">
                                    <div className="box">
                                        <div className="product-table">
                                            <div className="table-inn">
                                                <div className="table-heading">
                                                    <h4>Bulk Image Control</h4>
                                                    <div className="selected-btn-out"><span className="selected-btn">98 Selected : <span className="blue">81 Credits</span></span></div>
                                                </div>
                                                <table>
                                                    <thead>
                                                        <tr>
                                                            <th><strong>Steps <em><img src="assets/img/polygon-right.png" alt="polygon-right" /></em></strong></th>
                                                            <th>40</th>
                                                            <th>41</th>
                                                            <th>42</th>
                                                            <th>43</th>
                                                            <th>44</th>
                                                            <th>45</th>
                                                            <th>46</th>
                                                            <th>47</th>
                                                            <th>48</th>
                                                            <th>49</th>
                                                            <th>50</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>6</td>
                                                            <td><div className="check-options">
                                                                <input id="checkbox3" name="checkbox3" type="checkbox" className="styled" defaultChecked="checked" />
                                                                <label htmlFor="checkbox3" />
                                                            </div></td>
                                                            <td><div className="check-options">
                                                                <input id="checkbox4" name="checkbox4" type="checkbox" className="styled" defaultChecked="checked" />
                                                                <label htmlFor="checkbox4" />
                                                            </div></td>
                                                            <td><div className="check-options">
                                                                <input id="checkbox5" name="checkbox5" type="checkbox" className="styled" defaultChecked="checked" />
                                                                <label htmlFor="checkbox5" />
                                                            </div></td>
                                                            <td><div className="check-options">
                                                                <input id="checkbox6" name="checkbox6" type="checkbox" className="styled" defaultChecked="checked" />
                                                                <label htmlFor="checkbox6" />
                                                            </div></td>
                                                            <td><div className="check-options">
                                                                <input id="checkbox7" name="checkbox7" type="checkbox" className="styled" defaultChecked="checked" />
                                                                <label htmlFor="checkbox7" />
                                                            </div></td>
                                                            <td><div className="check-options">
                                                                <input id="checkbox8" name="checkbox8" type="checkbox" className="styled" defaultChecked="checked" />
                                                                <label htmlFor="checkbox8" />
                                                            </div></td>
                                                            <td><div className="check-options">
                                                                <input id="checkbox9" name="checkbox9" type="checkbox" className="styled" defaultChecked="checked" />
                                                                <label htmlFor="checkbox9" />
                                                            </div></td>
                                                            <td><div className="check-options">
                                                                <input id="checkbox10" name="checkbox10" type="checkbox" className="styled" defaultChecked="checked" />
                                                                <label htmlFor="checkbox10" />
                                                            </div></td>
                                                            <td><div className="check-options">
                                                                <input id="checkbox11" name="checkbox11" type="checkbox" className="styled" defaultChecked="checked" />
                                                                <label htmlFor="checkbox11" />
                                                            </div></td>
                                                            <td><div className="check-options">
                                                                <input id="checkbox12" name="checkbox12" type="checkbox" className="styled" defaultChecked="checked" />
                                                                <label htmlFor="checkbox12" />
                                                            </div></td>
                                                            <td><div className="check-options">
                                                                <input id="checkbox13" name="checkbox13" type="checkbox" className="styled" defaultChecked="checked" />
                                                                <label htmlFor="checkbox13" />
                                                            </div></td>
                                                        </tr>
                                                        <tr>
                                                            <td>6.5</td>
                                                            <td><div className="check-options">
                                                                <input id="checkbox14" name="checkbox14" type="checkbox" className="styled" defaultChecked="checked" />
                                                                <label htmlFor="checkbox14" />
                                                            </div></td>
                                                            <td><div className="check-options">
                                                                <input id="checkbox15" name="checkbox15" type="checkbox" className="styled" defaultChecked="checked" />
                                                                <label htmlFor="checkbox15" />
                                                            </div></td>
                                                            <td><div className="check-options">
                                                                <input id="checkbox16" name="checkbox16" type="checkbox" className="styled" defaultChecked="checked" />
                                                                <label htmlFor="checkbox16" />
                                                            </div></td>
                                                            <td><div className="check-options">
                                                                <input id="checkbox17" name="checkbox17" type="checkbox" className="styled" defaultChecked="checked" />
                                                                <label htmlFor="checkbox17" />
                                                            </div></td>
                                                            <td><div className="check-options">
                                                                <input id="checkbox18" name="checkbox18" type="checkbox" className="styled" defaultChecked="checked" />
                                                                <label htmlFor="checkbox18" />
                                                            </div></td>
                                                            <td><div className="check-options">
                                                                <input id="checkbox19" name="checkbox19" type="checkbox" className="styled" defaultChecked="checked" />
                                                                <label htmlFor="checkbox19" />
                                                            </div></td>
                                                            <td><div className="check-options">
                                                                <input id="checkbox20" name="checkbox20" type="checkbox" className="styled" defaultChecked="checked" />
                                                                <label htmlFor="checkbox20" />
                                                            </div></td>
                                                            <td><div className="check-options">
                                                                <input id="checkbox21" name="checkbox21" type="checkbox" className="styled" defaultChecked="checked" />
                                                                <label htmlFor="checkbox21" />
                                                            </div></td>
                                                            <td><div className="check-options">
                                                                <input id="checkbox22" name="checkbox22" type="checkbox" className="styled" defaultChecked="checked" />
                                                                <label htmlFor="checkbox22" />
                                                            </div></td>
                                                            <td><div className="check-options">
                                                                <input id="checkbox23" name="checkbox23" type="checkbox" className="styled" defaultChecked="checked" />
                                                                <label htmlFor="checkbox23" />
                                                            </div></td>
                                                            <td><div className="check-options">
                                                                <input id="checkbox24" name="checkbox24" type="checkbox" className="styled" defaultChecked="checked" />
                                                                <label htmlFor="checkbox24" />
                                                            </div></td>
                                                        </tr>
                                                        <tr>
                                                            <td>7</td>
                                                            <td><div className="check-options">
                                                                <input id="checkbox25" name="checkbox25" type="checkbox" className="styled" defaultChecked="checked" />
                                                                <label htmlFor="checkbox25" />
                                                            </div></td>
                                                            <td><div className="check-options">
                                                                <input id="checkbox26" name="checkbox26" type="checkbox" className="styled" defaultChecked="checked" />
                                                                <label htmlFor="checkbox26" />
                                                            </div></td>
                                                            <td><div className="check-options">
                                                                <input id="checkbox27" name="checkbox27" type="checkbox" className="styled" defaultChecked="checked" />
                                                                <label htmlFor="checkbox27" />
                                                            </div></td>
                                                            <td><div className="check-options">
                                                                <input id="checkbox28" name="checkbox28" type="checkbox" className="styled" defaultChecked="checked" />
                                                                <label htmlFor="checkbox28" />
                                                            </div></td>
                                                            <td><div className="check-options">
                                                                <input id="checkbox29" name="checkbox29" type="checkbox" className="styled" />
                                                                <label htmlFor="checkbox29" />
                                                            </div></td>
                                                            <td><div className="check-options">
                                                                <input id="checkbox30" name="checkbox30" type="checkbox" className="styled" defaultChecked="checked" />
                                                                <label htmlFor="checkbox30" />
                                                            </div></td>
                                                            <td><div className="check-options">
                                                                <input id="checkbox31" name="checkbox31" type="checkbox" className="styled" defaultChecked="checked" />
                                                                <label htmlFor="checkbox31" />
                                                            </div></td>
                                                            <td><div className="check-options">
                                                                <input id="checkbox32" name="checkbox32" type="checkbox" className="styled" defaultChecked="checked" />
                                                                <label htmlFor="checkbox32" />
                                                            </div></td>
                                                            <td><div className="check-options">
                                                                <input id="checkbox33" name="checkbox33" type="checkbox" className="styled" defaultChecked="checked" />
                                                                <label htmlFor="checkbox33" />
                                                            </div></td>
                                                            <td><div className="check-options">
                                                                <input id="checkbox34" name="checkbox34" type="checkbox" className="styled" defaultChecked="checked" />
                                                                <label htmlFor="checkbox34" />
                                                            </div></td>
                                                            <td><div className="check-options">
                                                                <input id="checkbox35" name="checkbox35" type="checkbox" className="styled" defaultChecked="checked" />
                                                                <label htmlFor="checkbox35" />
                                                            </div></td>
                                                        </tr>
                                                        <tr>
                                                            <td>7.5</td>
                                                            <td><div className="check-options">
                                                                <input id="checkbox36" name="checkbox36" type="checkbox" className="styled" defaultChecked="checked" />
                                                                <label htmlFor="checkbox36" />
                                                            </div></td>
                                                            <td><div className="check-options">
                                                                <input id="checkbox37" name="checkbox37" type="checkbox" className="styled" defaultChecked="checked" />
                                                                <label htmlFor="checkbox37" />
                                                            </div></td>
                                                            <td><div className="check-options">
                                                                <input id="checkbox38" name="checkbox38" type="checkbox" className="styled" defaultChecked="checked" />
                                                                <label htmlFor="checkbox38" />
                                                            </div></td>
                                                            <td><div className="check-options">
                                                                <input id="checkbox39" name="checkbox39" type="checkbox" className="styled" defaultChecked="checked" />
                                                                <label htmlFor="checkbox39" />
                                                            </div></td>
                                                            <td><div className="check-options">
                                                                <input id="checkbox40" name="checkbox40" type="checkbox" className="styled" defaultChecked="checked" />
                                                                <label htmlFor="checkbox40" />
                                                            </div></td>
                                                            <td><div className="check-options">
                                                                <input id="checkbox41" name="checkbox41" type="checkbox" className="styled" defaultChecked="checked" />
                                                                <label htmlFor="checkbox41" />
                                                            </div></td>
                                                            <td><div className="check-options">
                                                                <input id="checkbox42" name="checkbox42" type="checkbox" className="styled" defaultChecked="checked" />
                                                                <label htmlFor="checkbox42" />
                                                            </div></td>
                                                            <td><div className="check-options">
                                                                <input id="checkbox43" name="checkbox43" type="checkbox" className="styled" defaultChecked="checked" />
                                                                <label htmlFor="checkbox43" />
                                                            </div></td>
                                                            <td><div className="check-options">
                                                                <input id="checkbox44" name="checkbox44" type="checkbox" className="styled" defaultChecked="checked" />
                                                                <label htmlFor="checkbox44" />
                                                            </div></td>
                                                            <td><div className="check-options">
                                                                <input id="checkbox45" name="checkbox45" type="checkbox" className="styled" defaultChecked="checked" />
                                                                <label htmlFor="checkbox45" />
                                                            </div></td>
                                                            <td><div className="check-options">
                                                                <input id="checkbox46" name="checkbox46" type="checkbox" className="styled" defaultChecked="checked" />
                                                                <label htmlFor="checkbox46" />
                                                            </div></td>
                                                        </tr>
                                                        <tr>
                                                            <td>8</td>
                                                            <td><div className="check-options">
                                                                <input id="checkbox47" name="checkbox47" type="checkbox" className="styled" defaultChecked="checked" />
                                                                <label htmlFor="checkbox47" />
                                                            </div></td>
                                                            <td><div className="check-options">
                                                                <input id="checkbox48" name="checkbox48" type="checkbox" className="styled" defaultChecked="checked" />
                                                                <label htmlFor="checkbox48" />
                                                            </div></td>
                                                            <td><div className="check-options">
                                                                <input id="checkbox49" name="checkbox49" type="checkbox" className="styled" defaultChecked="checked" />
                                                                <label htmlFor="checkbox49" />
                                                            </div></td>
                                                            <td><div className="check-options">
                                                                <input id="checkbox50" name="checkbox50" type="checkbox" className="styled" defaultChecked="checked" />
                                                                <label htmlFor="checkbox50" />
                                                            </div></td>
                                                            <td><div className="check-options">
                                                                <input id="checkbox51" name="checkbox51" type="checkbox" className="styled" defaultChecked="checked" />
                                                                <label htmlFor="checkbox51" />
                                                            </div></td>
                                                            <td><div className="check-options">
                                                                <input id="checkbox52" name="checkbox52" type="checkbox" className="styled" defaultChecked="checked" />
                                                                <label htmlFor="checkbox52" />
                                                            </div></td>
                                                            <td><div className="check-options">
                                                                <input id="checkbox53" name="checkbox53" type="checkbox" className="styled" defaultChecked="checked" />
                                                                <label htmlFor="checkbox53" />
                                                            </div></td>
                                                            <td><div className="check-options">
                                                                <input id="checkbox54" name="checkbox54" type="checkbox" className="styled" defaultChecked="checked" />
                                                                <label htmlFor="checkbox54" />
                                                            </div></td>
                                                            <td><div className="check-options">
                                                                <input id="checkbox55" name="checkbox55" type="checkbox" className="styled" defaultChecked="checked" />
                                                                <label htmlFor="checkbox55" />
                                                            </div></td>
                                                            <td><div className="check-options">
                                                                <input id="checkbox56" name="checkbox56" type="checkbox" className="styled" defaultChecked="checked" />
                                                                <label htmlFor="checkbox56" />
                                                            </div></td>
                                                            <td><div className="check-options">
                                                                <input id="checkbox57" name="checkbox57" type="checkbox" className="styled" defaultChecked="checked" />
                                                                <label htmlFor="checkbox57" />
                                                            </div></td>
                                                        </tr>
                                                        <tr>
                                                            <td>8.5</td>
                                                            <td><div className="check-options">
                                                                <input id="checkbox58" name="checkbox58" type="checkbox" className="styled" defaultChecked="checked" />
                                                                <label htmlFor="checkbox58" />
                                                            </div></td>
                                                            <td><div className="check-options">
                                                                <input id="checkbox59" name="checkbox59" type="checkbox" className="styled" defaultChecked="checked" />
                                                                <label htmlFor="checkbox49" />
                                                            </div></td>
                                                            <td><div className="check-options">
                                                                <input id="checkbox60" name="checkbox60" type="checkbox" className="styled" defaultChecked="checked" />
                                                                <label htmlFor="checkbox60" />
                                                            </div></td>
                                                            <td><div className="check-options">
                                                                <input id="checkbox61" name="checkbox61" type="checkbox" className="styled" defaultChecked="checked" />
                                                                <label htmlFor="checkbox61" />
                                                            </div></td>
                                                            <td><div className="check-options">
                                                                <input id="checkbox62" name="checkbox62" type="checkbox" className="styled" defaultChecked="checked" />
                                                                <label htmlFor="checkbox62" />
                                                            </div></td>
                                                            <td><div className="check-options">
                                                                <input id="checkbox63" name="checkbox63" type="checkbox" className="styled" defaultChecked="checked" />
                                                                <label htmlFor="checkbox63" />
                                                            </div></td>
                                                            <td><div className="check-options">
                                                                <input id="checkbox64" name="checkbox64" type="checkbox" className="styled" defaultChecked="checked" />
                                                                <label htmlFor="checkbox64" />
                                                            </div></td>
                                                            <td><div className="check-options">
                                                                <input id="checkbox65" name="checkbox65" type="checkbox" className="styled" defaultChecked="checked" />
                                                                <label htmlFor="checkbox65" />
                                                            </div></td>
                                                            <td><div className="check-options">
                                                                <input id="checkbox66" name="checkbox66" type="checkbox" className="styled" defaultChecked="checked" />
                                                                <label htmlFor="checkbox66" />
                                                            </div></td>
                                                            <td><div className="check-options">
                                                                <input id="checkbox67" name="checkbox67" type="checkbox" className="styled" defaultChecked="checked" />
                                                                <label htmlFor="checkbox67" />
                                                            </div></td>
                                                            <td><div className="check-options">
                                                                <input id="checkbox68" name="checkbox68" type="checkbox" className="styled" defaultChecked="checked" />
                                                                <label htmlFor="checkbox68" />
                                                            </div></td>
                                                        </tr>
                                                        <tr>
                                                            <td>9</td>
                                                            <td><div className="check-options">
                                                                <input id="checkbox69" name="checkbox69" type="checkbox" className="styled" defaultChecked="checked" />
                                                                <label htmlFor="checkbox69" />
                                                            </div></td>
                                                            <td><div className="check-options">
                                                                <input id="checkbox70" name="checkbox70" type="checkbox" className="styled" defaultChecked="checked" />
                                                                <label htmlFor="checkbox70" />
                                                            </div></td>
                                                            <td><div className="check-options">
                                                                <input id="checkbox71" name="checkbox71" type="checkbox" className="styled" defaultChecked="checked" />
                                                                <label htmlFor="checkbox71" />
                                                            </div></td>
                                                            <td><div className="check-options">
                                                                <input id="checkbox72" name="checkbox72" type="checkbox" className="styled" defaultChecked="checked" />
                                                                <label htmlFor="checkbox72" />
                                                            </div></td>
                                                            <td><div className="check-options">
                                                                <input id="checkbox73" name="checkbox73" type="checkbox" className="styled" defaultChecked="checked" />
                                                                <label htmlFor="checkbox73" />
                                                            </div></td>
                                                            <td><div className="check-options">
                                                                <input id="checkbox74" name="checkbox74" type="checkbox" className="styled" defaultChecked="checked" />
                                                                <label htmlFor="checkbox74" />
                                                            </div></td>
                                                            <td><div className="check-options">
                                                                <input id="checkbox75" name="checkbox75" type="checkbox" className="styled" defaultChecked="checked" />
                                                                <label htmlFor="checkbox75" />
                                                            </div></td>
                                                            <td><div className="check-options">
                                                                <input id="checkbox76" name="checkbox76" type="checkbox" className="styled" defaultChecked="checked" />
                                                                <label htmlFor="checkbox76" />
                                                            </div></td>
                                                            <td><div className="check-options">
                                                                <input id="checkbox77" name="checkbox77" type="checkbox" className="styled" defaultChecked="checked" />
                                                                <label htmlFor="checkbox77" />
                                                            </div></td>
                                                            <td><div className="check-options">
                                                                <input id="checkbox78" name="checkbox78" type="checkbox" className="styled" defaultChecked="checked" />
                                                                <label htmlFor="checkbox78" />
                                                            </div></td>
                                                            <td><div className="check-options">
                                                                <input id="checkbox79" name="checkbox79" type="checkbox" className="styled" defaultChecked="checked" />
                                                                <label htmlFor="checkbox79" />
                                                            </div></td>
                                                        </tr>
                                                        <tr>
                                                            <td>9.5</td>
                                                            <td><div className="check-options">
                                                                <input id="checkbox80" name="checkbox80" type="checkbox" className="styled" defaultChecked="checked" />
                                                                <label htmlFor="checkbox80" />
                                                            </div></td>
                                                            <td><div className="check-options">
                                                                <input id="checkbox81" name="checkbox81" type="checkbox" className="styled" defaultChecked="checked" />
                                                                <label htmlFor="checkbox81" />
                                                            </div></td>
                                                            <td><div className="check-options">
                                                                <input id="checkbox82" name="checkbox82" type="checkbox" className="styled" defaultChecked="checked" />
                                                                <label htmlFor="checkbox82" />
                                                            </div></td>
                                                            <td><div className="check-options">
                                                                <input id="checkbox83" name="checkbox83" type="checkbox" className="styled" defaultChecked="checked" />
                                                                <label htmlFor="checkbox83" />
                                                            </div></td>
                                                            <td><div className="check-options">
                                                                <input id="checkbox84" name="checkbox84" type="checkbox" className="styled" defaultChecked="checked" />
                                                                <label htmlFor="checkbox84" />
                                                            </div></td>
                                                            <td><div className="check-options">
                                                                <input id="checkbox85" name="checkbox85" type="checkbox" className="styled" defaultChecked="checked" />
                                                                <label htmlFor="checkbox85" />
                                                            </div></td>
                                                            <td><div className="check-options">
                                                                <input id="checkbox86" name="checkbox86" type="checkbox" className="styled" defaultChecked="checked" />
                                                                <label htmlFor="checkbox86" />
                                                            </div></td>
                                                            <td><div className="check-options">
                                                                <input id="checkbox87" name="checkbox87" type="checkbox" className="styled" defaultChecked="checked" />
                                                                <label htmlFor="checkbox87" />
                                                            </div></td>
                                                            <td><div className="check-options">
                                                                <input id="checkbox88" name="checkbox88" type="checkbox" className="styled" defaultChecked="checked" />
                                                                <label htmlFor="checkbox88" />
                                                            </div></td>
                                                            <td><div className="check-options">
                                                                <input id="checkbox89" name="checkbox89" type="checkbox" className="styled" defaultChecked="checked" />
                                                                <label htmlFor="checkbox89" />
                                                            </div></td>
                                                            <td><div className="check-options">
                                                                <input id="checkbox90" name="checkbox90" type="checkbox" className="styled" defaultChecked="checked" />
                                                                <label htmlFor="checkbox90" />
                                                            </div></td>
                                                        </tr>
                                                        <tr>
                                                            <td>10</td>
                                                            <td><div className="check-options">
                                                                <input id="checkbox91" name="checkbox91" type="checkbox" className="styled" defaultChecked="checked" />
                                                                <label htmlFor="checkbox91" />
                                                            </div></td>
                                                            <td><div className="check-options">
                                                                <input id="checkbox92" name="checkbox92" type="checkbox" className="styled" defaultChecked="checked" />
                                                                <label htmlFor="checkbox92" />
                                                            </div></td>
                                                            <td><div className="check-options">
                                                                <input id="checkbox93" name="checkbox93" type="checkbox" className="styled" defaultChecked="checked" />
                                                                <label htmlFor="checkbox93" />
                                                            </div></td>
                                                            <td><div className="check-options">
                                                                <input id="checkbox94" name="checkbox94" type="checkbox" className="styled" defaultChecked="checked" />
                                                                <label htmlFor="checkbox94" />
                                                            </div></td>
                                                            <td><div className="check-options">
                                                                <input id="checkbox95" name="checkbox95" type="checkbox" className="styled" defaultChecked="checked" />
                                                                <label htmlFor="checkbox95" />
                                                            </div></td>
                                                            <td><div className="check-options">
                                                                <input id="checkbox96" name="checkbox96" type="checkbox" className="styled" defaultChecked="checked" />
                                                                <label htmlFor="checkbox96" />
                                                            </div></td>
                                                            <td><div className="check-options">
                                                                <input id="checkbox97" name="checkbox97" type="checkbox" className="styled" defaultChecked="checked" />
                                                                <label htmlFor="checkbox97" />
                                                            </div></td>
                                                            <td><div className="check-options">
                                                                <input id="checkbox98" name="checkbox98" type="checkbox" className="styled" defaultChecked="checked" />
                                                                <label htmlFor="checkbox98" />
                                                            </div></td>
                                                            <td><div className="check-options">
                                                                <input id="checkbox99" name="checkbox99" type="checkbox" className="styled" defaultChecked="checked" />
                                                                <label htmlFor="checkbox99" />
                                                            </div></td>
                                                            <td><div className="check-options">
                                                                <input id="checkbox100" name="checkbox100" type="checkbox" className="styled" defaultChecked="checked" />
                                                                <label htmlFor="checkbox100" />
                                                            </div></td>
                                                            <td><div className="check-options">
                                                                <input id="checkbox101" name="checkbox101" type="checkbox" className="styled" defaultChecked="checked" />
                                                                <label htmlFor="checkbox101" />
                                                            </div></td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                                <div className="btm-sml-txt"><em><img src="assets/img/polygon-up.png" alt="polygon-up" /></em> <br /> CFG Scale</div>
                                            </div>
                                            <div className="bottom-btn">
                                                <div className="btn-out"><a href="#" className="btn">GENERATE ART</a></div>
                                                <div className="image-count"><a href="#">*82 Credits / Image*</a></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bottom-box"><span>*Step count impacts price. <a href="#">Learn More.</a></span></div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </main>
                {/* Footer */}
                <Footer></Footer>
            </div>
        </>
    );
}