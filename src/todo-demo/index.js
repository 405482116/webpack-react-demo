import React from "react";
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Col } from 'react-bootstrap'
import { Provider } from "react-redux";
import store from "./redux/store";

import TodoApp from "./todo.app";

const rootElement = document.getElementById("root");
ReactDOM.render(
    <Provider store={store}>
        <TodoApp />
    </Provider>,
    rootElement
);