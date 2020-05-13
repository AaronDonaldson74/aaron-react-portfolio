import React, { Component } from "react";
import PortfolioItem from "./portfolio-item";

export default class PortfolioContainer extends Component {
    constructor() {
        super();
        console.log("Portfolio container has rendered");
    }

    portfolioItems() {
        const data = ["Quip", "Eventbright", "Ministry Safe"];

        return data.map(item => {
            return <PortfolioItem />;
        })
    }

    render() {
        return (
            <div>
                <h2>Portfolio Items Go Here...</h2>
                <h2>A component can only return one item. The parent div of this Htag is the one item.</h2>
                <PortfolioItem />
                {this.portfolioItems()}
            </div>
        )
    }
}