// Last Update by Kevin Glasow on 07/12/2018

// *********************************************************************************
// firstComponentRoutes.js - contains a set of routes for rending the top most component of the main page
// *********************************************************************************

// DEPENDENCIES
// =============================================================
import React from 'react'
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import Portfolio from "../components/Portfolio"
import Profile from "../components/Profile"
import ContactForm from "../components/ContactForm"

// Creating the Switch for the main section of the site
// =============================================================
const Main = () => (
    <main>
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={ Profile } />
                <Route path='/Profile' component={ Profile } />
                <Route path='/Portfolio' component={ Portfolio } />
                <Route path='/Contact' component={ ContactForm } />
            </Switch>
        </BrowserRouter>
    </main>
)

// Exporting the elements as "Main"
export default Main;