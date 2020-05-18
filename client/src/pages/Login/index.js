import React, { Component, Fragment } from 'react';
import { Redirect } from 'react-router-dom'

import LoginForm from './component/LoginForm';
import app from '../../Appbasic';

class LoginContainer extends Component {
    state = { username: "", password: "", isAuthenticated: false }

    handleAuthentication = (event) => {
        event.preventDefault();
        if (
            this.state.username.toLowerCase() === "admin" &&
            this.state.password.toLowerCase() === "admin"
        ) {
            this.setState({
                isAuthenticated: true
            })
            app.setToken("sdklhafkjlsdhafsdjfhvskgksdklhafkjlsdhafsdjfhvskgk");
        }
    };

    handleInput = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    viewHandler = () => {
        if (this.state.isAuthenticated) {
            return <Redirect to="/home"></Redirect>;
        }
        else {
            return <LoginForm
                handleInput={this.handleInput}
                handleAuthentication={this.handleAuthentication}
            />

        }
    }

    render() {
        return (
            <Fragment>
                {this.viewHandler()}
            </Fragment>
        );
    }
}

export default LoginContainer;