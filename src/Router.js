import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { App } from './components/App';
import { TodoForm } from './components/Todo.from'
const BasicRoute = () => (
    <HashRouter>
        <Switch>
            <Route exact path="/" component={App} />
            <Route exact path="/add" component={TodoForm} />
        </Switch>
    </HashRouter>
);


export default BasicRoute;