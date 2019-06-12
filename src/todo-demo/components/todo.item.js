import React from "react";
import { connect } from "react-redux";
import cx from "classnames";
import { toggleTodo, deleteTodo } from "../redux/actions";

const Todo = ({ todo, toggleTodo, deleteTodo }) => (
    <tr>
        <td>
            <input type="checkbox" onChange={() => toggleTodo(todo.id)} />
        </td>
        <td>
            <span className={cx(
                "todo-item__text",
                todo && todo.completed && "todo-item__text--completed"
            )}>
                {todo.content}
            </span>
        </td>
        <td><button type="button" className="btn btn-link"
            onClick={() => deleteTodo(todo.id)}>Delete</button></td>
    </tr>
);

// export default Todo;
export default connect(
    null,
    { toggleTodo, deleteTodo },
)(Todo);
