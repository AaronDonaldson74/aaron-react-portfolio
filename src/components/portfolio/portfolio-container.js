import React, { Component } from "react";
import axios from 'axios';

import PortfolioItem from "./portfolio-item";


export default class PortfolioContainer extends Component {
    constructor() {
        super();

        this.state = {
            pageTitle: "Welcome to my portfolio",
            isLoading: false,
            data: [
                {title: "Quip", category: "eCommerce", slug: 'quip' },
                {title: "Eventbright", category: "Scheduling", slug: 'eventbright' },
                {title: "Ministry Safe", category: "Enterprise", slug: 'ministry-safe' }
            ]
        };
        this.handleFilter = this.handleFilter.bind(this);
        this.getPortfolioItems = this.getPortfolioItems.bind(this);

    }

    handleFilter(filter) {
        this.setState({
            data: this.state.data.filter(item => {
                return item.category === filter;
            })
        })
    }

    getPortfolioItems() {
        axios.get('https://aarondonaldson.devcamp.space/portfolio/portfolio_items')
      .then(response => {
        // handle success
        console.log("response data",response);
      })
      .catch(error => {
        // handle error
        console.log(error);
      })
      }
    portfolioItems() {
        return this.state.data.map(item => {
            return <PortfolioItem title={item.title} url={'google.com'} slug={item.slug}/>;
        })
    }

handlePageTitleUpdate() {
    this.setState({
        pageTitle: "Something Else"
    });
}

render() {
    if (this.state.isLoading) {
        return <div>Loading...</div>;
    }
    
    this.getPortfolioItems();
        return (
            <div>
                <h2>{this.state.pageTitle}</h2>
                {/* <h2>A component can only return one item. The parent div of this Htag is the one item.</h2> */}
                <button onClick={() => this.handleFilter("eCommerce")}>eCommerce</button>
                <button onClick={() => this.handleFilter("Scheduling")}>Scheduling</button>
                <button onClick={() => this.handleFilter("Enterprise")}>Enterprise</button>
                {this.portfolioItems()}
            </div>
        )
    }
}