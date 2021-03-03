import Navbar from "./components/navbar/Navbar";
import About from "./components/about/About";
import "./App.css";
import React from "react";
import Footer from "./components/footer/Footer";
import Hero from "./components/hero/Hero";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Contact from "../src/components/contact/Contact";
import Projects from "./components/cards/card";
import Header from "./components/headerp/headerp";

function PageRouter() {
  return (
    <div>
    <Navbar />
    <Switch>
      <Route exact path="/" component={About}/>
      <Route path="/Projects" component={Projects}/>
      <Route path="/Contact" component={Contact}/>
    </Switch>
    <Footer/>
    </div>
  );
}

export default PageRouter;
