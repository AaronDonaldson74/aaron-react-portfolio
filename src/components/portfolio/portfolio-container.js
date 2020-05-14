import React, { Component } from "react";
import PortfolioItem from "./portfolio-item";

export default class PortfolioContainer extends Component {
    constructor() {
        super();

        this.state = {
            pageTitle: "Welcome to my portfolio",
            data: [
                {title: "Quip"},
                {title: "Eventbright"},
                {title: "Ministry Safe"}
            ]
        };
    }

    portfolioItems() {
        return this.state.data.map(item => {
            return <PortfolioItem title={item.title} url={'google.com'}/>;
        })
    }

    render() {
        return (
            <div>
                <h2>{this.state.pageTitle}</h2>
                <h2>A component can only return one item. The parent div of this Htag is the one item.</h2>
                {this.portfolioItems()}
            </div>
        )
    }
}