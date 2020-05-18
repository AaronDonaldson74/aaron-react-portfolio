import React, { Component } from "react";
import axios from 'axios';

import PortfolioItem from "./portfolio-item";


export default class PortfolioContainer extends Component {
    constructor() {
        super();

        this.state = {
            pageTitle: "Welcome to my portfolio",
            isLoading: false,
            data: []
        };
        this.handleFilter = this.handleFilter.bind(this);

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
        this.setState({
            data: response.data.portfolio_items
        })
      })
      .catch(error => {
        console.log(error);
      })
      }
    portfolioItems() {
        return this.state.data.map(item => {
            return <PortfolioItem key={item.id} title={item.name} url={'google.com'} slug={item.id}/>;
        });
    }

handlePageTitleUpdate() {
    this.setState({
        pageTitle: "Something Else"
    });
}
componentDidMount() {
    this.getPortfolioItems();
}


render() {
    if (this.state.isLoading) {
        return <div>Loading...</div>;
    }
    
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