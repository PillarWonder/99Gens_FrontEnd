import * as React from 'react'
import { withPrefix } from "gatsby";

const SettingsModal = ({ state, onChangeFunction }) => {
    return (
        <div className="profile-modal">
            <div className="modal fade" id="setting" role="dialog">
                <div className="modal-dialog modal-dialog-centered" role="document" >
                    <div className="modal-content">
                        <div className="profile-popup">
                            <div className="box">
                                <div className="icon-user">
                                    <img src={withPrefix("assets/img/icon-user.svg")} alt="icon-user" />
                                </div>
                                <h3>Settings</h3>
                                <div className="form-field alt">
                                    <ul>
                                        <li>
                                            <div className="input-box">
                                                <label>Email</label>
                                                <div className="input-out">
                                                    <div className="input-with-btn">
                                                        <input id="email" name="email" type="text" placeholder="johnny@apple.com" />
                                                        <div className="update-btn">
                                                            <input id="update" name="update" type="submit" defaultValue="Update" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="input-box">
                                                <label>Password</label>
                                                <div className="input-out">
                                                    <div className="input-with-btn">
                                                        <input id="password" name="password" type="password" placeholder="••••••••••••••" />
                                                        <div className="update-btn">
                                                            <input id="update" name="update" type="submit" defaultValue="Update" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                    <div className="options-list">
                                        <div className="check-options">
                                            <input id="checkbox" name="checkbox" type="checkbox" className="styled" />
                                            <label htmlFor="checkbox">
                                                I agree to the{" "} <a href="#">Terms &amp; Conditions</a> of this website.
                                            </label>
                                        </div>
                                    </div>
                                    <div className="options-list">
                                        <h4>Marketing Preferences</h4>
                                        <div className="options-out">
                                            <div className="options-inn">
                                                <div className="check-options">
                                                    <input id="checkbox2" name="checkbox" type="checkbox" className="styled" />
                                                    <label htmlFor="checkbox2">
                                                        Consent option 1 goes here
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="options-inn">
                                                <div className="check-options">
                                                    <input id="checkbox3" name="checkbox" type="checkbox" className="styled" />
                                                    <label htmlFor="checkbox3">
                                                        Consent option 2 goes here
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="options-inn">
                                                <div className="check-options">
                                                    <input id="checkbox4" name="checkbox" type="checkbox" className="styled" />
                                                    <label htmlFor="checkbox4">
                                                        Consent option 3 goes here
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="options-inn">
                                                <div className="check-options">
                                                    <input id="checkbox5" name="checkbox" type="checkbox" className="styled" />
                                                    <label htmlFor="checkbox5">
                                                        Consent option 4 goes here
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="btn-out">
                                        <a href="#" className="btn">
                                            Update Preferences
                                        </a>
                                    </div>
                                </div>
                                <div className="icon-close" data-bs-dismiss="modal">
                                    <img src={withPrefix("assets/img/icon-close.png")} alt="icon-close" />
                                </div>
                            </div>
                            <div className="cancel-btn">
                                <a href="#" data-bs-dismiss="modal">
                                    Cancel
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SettingsModal