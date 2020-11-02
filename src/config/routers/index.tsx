import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from '../../main/App';

export const Routers = (): JSX.Element => (
    <Router>
        <Switch>
            <Route exact path="/" component={App} />
        </Switch>
    </Router>
);
