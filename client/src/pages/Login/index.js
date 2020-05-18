import React, { Component, Fragment } from 'react';

import LoginForm from './component/LoginForm';


class LoginContainer extends Component {
    state = { username: "", password: "", isAuthenticated: false }

    viewHandler = () => {
        return <LoginForm/>
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