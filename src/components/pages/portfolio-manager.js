import React, { Component } from 'react';
import axios from 'axios';

import PortfolioSidebarList from "../portfolio/portfolio-sidebar-list";
import PortfolioForm from "../portfolio/portfolio-form";

export default class PortfolioManager extends Component {
    constructor() {
        super();

        this.state = {
            portfolioItems: []
        };
        this.handleSuccessfulFormSubmission = this.handleSuccessfulFormSubmission.bind(this)
        this.handleFormSubmissionError = this.handleFormSubmissionError.bind(this)
    }

    handleSuccessfulFormSubmission(portfolioItem) {
        //TODO
        //UPdate the portfolioItems state 
        //and add the portfolioItem to the list
    }

    handleFormSubmissionError(error) {
        console.log("handleFormSubmissionError error", error)
    }

    getPortfolioItems() {
        axios.get('https://aarondonaldson.devcamp.space/portfolio/portfolio_items', { withCredentials: true })
      .then(response => {
        this.setState({
            portfolioItems: [...response.data.portfolio_items]
        })
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
                    <PortfolioForm
                        handleSuccessfulFormSubmission={this.handleSuccessfulFormSubmission}
                        handleFormSubmissionError={this.handleFormSubmissionError}
                    />                
                </div>
                <div className="right-column">
                    <PortfolioSidebarList data={this.state.portfolioItems} />
                </div>
            </div>
        )
    }
}