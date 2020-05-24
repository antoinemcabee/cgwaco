// contains app routing
import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';


import Nav from './Nav';
import Landing from './Landing';

class App extends Component {

    render() {
        return (
            <div>
                <BrowserRouter>
                    <div>
                        <Nav />
                        <Route exact path='/' component={Landing} />
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

export default (App);