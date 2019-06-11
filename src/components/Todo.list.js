import * as React from 'react';
import { TodoItem } from './Todo.item';

export class TodoList extends React.Component {
    constructor(props) {
        super(props);
    }
    deleteTask(task) {
        debugger;
        this.props.deleteTask(task);
    }
    toggleComplete(task) {
        debugger
        this.props.toggleComplete(task);
    }
    render() {
        const todoItem = this.props.data.map(todo => {
            return (<TodoItem
                taskId={todo.id}
                key={todo.id}
                task={todo.task}
                complete={todo.complete}
                deleteTask={this.deleteTask.bind(this)}
                toggleComplete={this.toggleComplete.bind(this)} />)
        })
        return (

            <ul className="todo-list">
                {todoItem}
            </ul>);
    }
}
