import React, { Component } from 'react';
import axios from 'axios';

export default class PortfolioManager extends Component {
    constructor() {
        super();

        this.state = {
            portfolioItems: []
        };
    }

    getPortfolioItems() {
        axios.get('https://aarondonaldson.devcamp.space/portfolio/portfolio_items', { withCredentials: true })
      .then(response => {
        this.setState({
            portfolioItems: [...response.data.portfolio_items]
        })
        // console.log("response from get portfolio items", response);
      })
      .catch(error => {
        console.log("An error occured in getting the portfolio items.", error);
      })
      }

      componentDidMount() {
          this.getPortfolioItems();
      }

    render (){
        return (
            <div className="portfolio-manager-wrapper">
                <div className="left-column">
                    <h1>Portfolio form</h1>
                </div>
                <div className="right-column">
                    <h1>Portfolio sidebar</h1>
                    {this.portfolio_items}
                </div>
            </div>
        )
    }
}