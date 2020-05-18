import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Container, Box, Grid, Paper } from '@material-ui/core'
import { Redirect } from 'react-router-dom';

import Copyright from '../../component/AppFooter'
import Header from '../../component/AppHeader';
import Sidebar from '../../component/AppSidebar';
import app from '../../Appbasic';
import './index.css'

class Dashboard extends Component {
    state = {
        open: true
    }
    handleDrawerOpen = () => {
        this.setState({
            open: true
        })
    };
    handleDrawerClose = () => {
        this.setState({
            open: false
        })
    };

    handleLogout = () => {
        app.removeToken();
        return <Redirect to="/"></Redirect>
    }

    render() {
        return (
            <div className="root">
                <CssBaseline />
                <Header handleLogout={this.handleLogout} handleDrawerOpen={this.handleDrawerOpen} open={this.state.open} />
                <Sidebar handleDrawerClose={this.handleDrawerClose} open={this.state.open} />
                <main className="content">
                    <div className="appBarSpacer" />
                    <Container maxWidth="lg" className="container">
                        <Grid container spacing={3}>

                            <Grid item xs={12} md={12} lg={12}>
                                <Paper className="fixedHeightPaper">

                                </Paper>
                            </Grid>
                        </Grid><Box pt={4}>
                            <Copyright />
                        </Box>
                    </Container>
                </main>
            </div>
        );
    }
}

export default Dashboard;
