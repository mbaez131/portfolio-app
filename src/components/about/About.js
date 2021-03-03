import Hero from "../hero/Hero";
import React from "react";
import "./about.css";
import "./about.scss";

export default function About() {
    return(
        <React.Fragment>
        <div className="landing-container">
        <Hero/>
        <div className="about-me">
            <h3 className="about-header">About Me</h3>
            <p className="about-text">Knowledge-seeking professional with strong passion for computer software programming. Currently working as a junior software programmer, creating multiple projects using frameworks such as NodeJS, Jquery, Twitter Bootstrap and AngularJS.

Have certifications in Agile, Growth-driven design, and AWS platforming/APIs. Creator of effective communication between teams, as well as producing effectual work dependably. Young eager to learn student of software programming, furthering my career every day at a time. </p>
<div id="container">
  <button type="button" onClick={(e) => {
      e.preventDefault();
      window.location.href='https://docs.google.com/document/d/1HEyJTdvX6zw490WnIjsoUIgvATmOF_oCR6OohqrSN_Y/edit?usp=sharing';
  }} class="learn-more">
    <span class="circle" aria-hidden="true">
      <span class="icon arrow"></span>
    </span>
    <span class="button-text">My Resume</span>
  </button>
</div>
        </div>
        </div>
        <div className="skill-container">
            <h2 className="skill-header">
                Skills
            </h2>
            <p className="skill-text">
            • Contract Labor
            • Advertising
            • Algorithms
            • Strategic Communications
            • Public Speaking
            • Data Research
            </p>
        </div>
        </React.Fragment>
    )
}