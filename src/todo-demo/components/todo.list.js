import React from "react";
import { connect } from "react-redux";
import Table from 'react-bootstrap/Table'
import Todo from "./todo.item";
import { getTodosByVisibilityFilter } from "../redux/selectors";

const TodoList = ({ todos }) => (
    <Table striped bordered hover>
        <thead>
            <tr>
                <th>#</th>
                <th>Todo Name</th>
                <th>Utils</th>
            </tr>
        </thead>
        <tbody>
            {todos && todos.length
                ? todos.map((todo, index) => {
                    return <Todo key={`todo-${todo.id}`} todo={todo} />;
                })
                : <tr></tr>
            }
        </tbody>
    </Table>
);

const mapStateToProps = state => {
    const { visibilityFilter } = state;
    const todos = getTodosByVisibilityFilter(state, visibilityFilter);
    return { todos };
};
export default connect(mapStateToProps)(TodoList);
