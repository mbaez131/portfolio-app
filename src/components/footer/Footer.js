import React from "react";
import { FaFacebookSquare, FaLinkedin, FaGithubSquare, FaTwitterSquare } from "react-icons/fa";
import "./footer.css";



const Footer = () => {
    return(
    <footer class="footer_fix">
      <div className="wrapper-footer">
        <a href="https://facebook.com" className="fa fa-facebook"><FaFacebookSquare icon={FaFacebookSquare} /></a>
        <a href="https://www.instagram.com" className="fa fa-instagram"><FaLinkedin icon={FaLinkedin} /></a>
        <a href="https://www.google.com" className="fa fa-google"><FaGithubSquare icon={FaGithubSquare} /></a>
        <a href="https://www.twitter.com" className="fa fa-twitter"><FaTwitterSquare icon={FaTwitterSquare} /></a>
        <span>&copy;</span>
        </div>
      </footer> 
      )
}

export default Footer;