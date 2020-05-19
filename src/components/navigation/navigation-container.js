import React,  { Component } from 'react';
import { NavLink } from "react-router-dom"


export default class NavigationContainer extends Component {
    constructor () {
    super();

    }
    render () {
        return (
            <div className="nav-wrapper">
            <div className="left-side">
            <NavLink exact to="/">
                Home
            </NavLink>
            <NavLink to="/about-me">
                About
            </NavLink>
            <NavLink to="/contact-me">
                Contact
            </NavLink>
            <NavLink to="/blog">
                Blog
            </NavLink>
                {false ? <button>Add Blog</button> : null }
            </div>
            <div className="right-side">
                Aaron Donaldson
            </div>
            </div>
        )
    }
}
