import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import LandingComponent from './myComponents/LandingComponent';
import PatientPortal from './myComponents/PatientPortal';
import HomePage from './myComponents/HomePage';
import Specialist from './myComponents/Specialist';
import FeedbackOrQuery from './myComponents/FeedbackOrQuery';

ReactDOM.render(
    <>
        <BrowserRouter>
            <LandingComponent />
            
            <Switch>
                <Route exact path="/"> <HomePage /> </Route>
                <Route exact path="/patient-portal"> <PatientPortal /> </Route>
                <Route exact path="/our-specialists"> <Specialist /> </Route>
                <Route exact path="/feedback"> <FeedbackOrQuery /> </Route>
                <Route exact path="/our-specialists"> <Specialist /> </Route>
            </Switch>
        </BrowserRouter>
    </>, document.getElementById("root")
);