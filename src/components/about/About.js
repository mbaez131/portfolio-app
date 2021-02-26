import Hero from "../hero/Hero";
import React from "react";
import "./about.css";

export default function About() {
    return(
        <React.Fragment>
        <Hero/>
        <div className="about-me">
            <h3>About Me</h3>
            <p>Knowledge-seeking professional with strong passion for computer software programming. Currently working as a junior software programmer, creating multiple projects using frameworks such as node, Jquery, bootstrap and AngularJS.

Have certifications in Agile, Growth-driven design, and AWS platforming/APIs. Creator of effective communication between teams, as well as producing effectual work dependably. </p>
        </div>
        </React.Fragment>
    )
}