import React from 'react';
import { Redirect } from 'react-router-dom';
import app from '../../Appbasic';

const LogOut = () => {
    app.removeToken();
    return (
        <Redirect to="/"></Redirect>
    );
}

export default LogOut;
