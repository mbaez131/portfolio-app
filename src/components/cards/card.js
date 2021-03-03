import "./card.css";
import Data from "../../assets/data.json";
import React, { Component, Fragment } from "react";
import Header from "../headerp/headerp";


class Projects extends Component {
    state = {
        data: Data,
    }
    getFilteredProducts() {
        const products = this.state.data.products;
        return products
    }
    render() {
        return(
          <Fragment>
          <Header/>
    <div className="products-container">
    <div className="product-flexer">
          {this.getFilteredProducts().map((card) => {
            return (
              <div key={card.id} className="card">
                <img src={card.image} alt="Sample photo"/>
                <div className="card-text">
                  <h3>{card.title}</h3>
                  <p>{card.description}</p>
                  <p>{card.price}</p>
                  <button type="button" onClick={(e) => {
                    e.preventDefault();
                  }} className="product-button">Github</button>
                </div>
              </div>
            );
          })}
        </div>
        </div>
        </Fragment>
        )
    }
}

export default Projects;


