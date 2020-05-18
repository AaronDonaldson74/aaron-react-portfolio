import React,  { Component } from 'react';
import { NavLink } from "react-router-dom"


export default class NavigationContainer extends Component {
    constructor () {
    super();

    }
    render () {
        return (
            <div>
            <NavLink exact to="/">
                Home
            </NavLink>
            <NavLink exact to="/about-me">
                About
            </NavLink>
            <NavLink exact to="/contact-me">
                Contact
            </NavLink>
            <NavLink exact to="/blog">
                Blog
            </NavLink>
                {false ? <button>Add Blog</button> : null }
            </div>
        )
    }
}
