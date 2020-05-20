import React, { Component } from 'react'
import loginImg from "../../../static/assets/images/auth/login.jpg"
import Login from "../auth/login";

export default class Auth extends Component {
    render() {
        return (
            <div className="auth-page-wrapper">
                <div className="left-column" 
                    style={{
                        backgroundImage: `url(${loginImg})`
                    }}
                />

                <div className="right-column">
                    <Login />
                </div>
            </div>
        )
    }
}