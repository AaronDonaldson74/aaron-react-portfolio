import React, { Component } from 'react';
import { Link } from "react-router-dom";


class Blog extends Component {
    constructor() {
        super();
    }

    render() {
    return (
        <div>
            <h2>Blog...</h2>
            <div>
                <Link to="/about-me">Read More about me</Link>
            </div>
        </div>
    );
    }
}
export default Blog