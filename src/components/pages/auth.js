import React, { Component } from 'react'
import loginImg from "../../../static/assets/images/auth/login.jpg"
import Login from "../auth/login";

export default class Auth extends Component {
    constructor(props) {
        super(props);

        this.handleSuccessfulAuth = this.handleSuccessfulAuth.bind(this);
        this.handleUnSuccessfulAuth = this.handleUnSuccessfulAuth.bind(this);

    }

    handleSuccessfulAuth() {
        this.props.handleSuccessfulLogin();
        this.props.history.push("/");
    }

    handleUnSuccessfulAuth() {
        this.props.handleUnSuccessfulLogin();
    }



    render() {
        return (
            <div className="auth-page-wrapper">
                <div className="left-column" 
                    style={{
                        backgroundImage: `url(${loginImg})`
                    }}
                />

                <div className="right-column">
                    <Login 
                        handleSuccessfulAuth={this.handleSuccessfulAuth}
                        handleUnSuccessfulAuth={this.handleUnSuccessfulAuth}
                    />
                </div>
            </div>
        )
    }
}