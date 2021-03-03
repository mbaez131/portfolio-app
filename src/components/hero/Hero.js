import React from "react";
import "./hero.css";
import profile from "../../assets/about.JPG";

export default function Hero() {
    return (
        <React.Fragment>
            {/* <div className="hero-image">
        </div> */}
        <img className="hero-image" src={profile} alt="profile" />
        </React.Fragment>
    )
}