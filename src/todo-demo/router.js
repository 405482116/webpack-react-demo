import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import TodoListPage from "./todo.list.page";
import AddTodo from "./components/todo.add";
const BasicRoute = () => (
    <HashRouter>
        <Switch>
            <Route exact path="/" component={TodoListPage} />
            <Route exact path="/add" component={AddTodo} />
        </Switch>
    </HashRouter>
);


export default BasicRoute;