import * as React from 'react'
import { withPrefix } from "gatsby";

const ProfilesTab = ({ state, onChangeFunction }) => {
    return (
        <div className="col-lg-4 col-md-5">
            <div className="profile-box">
                <div className="icon-user">
                    <a href="#setting" data-bs-toggle="modal">
                        <img src={withPrefix("assets/img/icon-user.svg")} alt="icon-user" />
                    </a>
                </div>
                <div className="aside">
                    <div className="name">{state.firstname} {state.lastname}</div>
                    <p>
                        <a href="mailto:firsnamelastname@gmail.com"> {state.email} </a>
                        <br /> <em className="fa fa-map-marker-alt" /> {state.country} <br /> Joined: {state.createdAt} </p>
                    <div className="btn-out">
                        <a href="#" className="btn"> Dreambooth </a>
                    </div>
                </div>
                <div className="icon-edit" onClick={onChangeFunction}>
                    <a href="#edit-profile" data-bs-toggle="modal"> <img src={withPrefix("assets/img/icon-edit.svg")} alt="icon-edit" /> </a>
                </div>
            </div>
        </div>
    )
}

export default ProfilesTab