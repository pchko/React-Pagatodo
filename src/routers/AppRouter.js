import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import { Navbar } from '../components/Navbar';
import BankDetailScreen from '../screens/Bank/BankDetailScreen';
import BankScreen from '../screens/Bank/BankScreen';
import HomeScreen from '../screens/Home/HomeScreen';

function AppRouter() {
    return (
        <Router>
            <div>
                <Navbar />
                <div className="container mt-2">
                    <Switch>
                        <Route exact path="/bank/:idBank" component={BankDetailScreen} />
                        <Route exact path="/banks" component={BankScreen} />
                        <Route exact path="/" component={HomeScreen} />
                        <Redirect to="/" />
                    </Switch>
                </div>
            </div>
        </Router>
    );
}

export default AppRouter
