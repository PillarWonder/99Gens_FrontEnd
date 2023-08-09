import * as React from 'react'
import { withPrefix } from "gatsby";

const ProfilesModal = ({ state, onChangeProp, onSubmitEmailClickedProp, onSubmitProfileChangeProp }) => {
    return (
        <div className="profile-modal">
            <div className="modal fade" id="edit-profile" role="dialog">
                <div className="modal-dialog modal-dialog-centered" role="document" >
                    <div className="modal-content">
                        <div className="profile-popup">
                            <div className="box">
                                <div className="icon-user">
                                    <img src={withPrefix("assets/img/icon-user.svg")} alt="icon-user" />{" "}
                                    <span className="icon-edit">
                                        <a href="#">
                                            <img src={withPrefix("assets/img/icon-edit.svg")} alt="icon-edit" />
                                        </a>
                                    </span>
                                </div>
                                <h3>Edit Profile</h3>
                                <div className="form-field">
                                    <ul>
                                        <li>
                                            <div className="input-box">
                                                <label>First Name</label>
                                                <div className="input-out">
                                                    <input id="firstname" name="firstname" type="text" onChange={onChangeProp} value={state.firstname} placeholder="First Name" />
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="input-box">
                                                <label>First Name</label>
                                                <div className="input-out">
                                                    <input id="lastname" name="lastname" type="text" onChange={onChangeProp} value={state.lastname} placeholder="Last Name" />
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="input-box">
                                                <label>Email</label>
                                                <div className="input-out">
                                                    <div className="input-with-btn">
                                                        <input id="email" name="changingEmail" type="text" onChange={onChangeProp} value={state.changingEmail} placeholder="johnny@apple.com" />
                                                        <div className="update-btn" onClick={onSubmitEmailClickedProp} >
                                                            <input id="update" name="update" type="submit" value="Update" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="input-box">
                                                <label>Zip Code</label>
                                                <div className="input-out">
                                                    <input id="zipcode" name="zipcode" type="text" onChange={onChangeProp} value={state.zipcode} placeholder={92154} />
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                    <div className="btn-out" onClick={onSubmitProfileChangeProp} data-bs-dismiss="modal">
                                        <a href="#" className="btn">Save</a>
                                    </div>
                                </div>
                                <div className="icon-close" data-bs-dismiss="modal">
                                    <img src={withPrefix("assets/img/icon-close.png")} alt="icon-close" />
                                </div>
                            </div>
                            <div className="cancel-btn">
                                <a href="#" data-bs-dismiss="modal">Cancel</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfilesModal