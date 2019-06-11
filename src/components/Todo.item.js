import * as React from 'react';

export class TodoItem extends React.Component {
    constructor(props) {
        super(props);
    }
    toggleComplete() {
        this.props.toggleComplete(this.props.taskId);
    }
    editTask(e) { }
    deleteTask() {
        this.props.deleteTask(this.props.taskId);
    }
    handleMouseOver(e) { }
    handleMouseOut(e) { }
    render() {
        let task = this.props.task;
        let itemChecked;
        if (this.props.complete) {
            task = <s>{task}</s>
            itemChecked = true;
        } else {
            itemChecked = false;
        }
        return (
            <li className="todo-item"
                onMouseOver={this.handleMouseOver.bind(this)}
                onMouseOut={this.handleMouseOut.bind(this)}>
                <input type="checkbox" checked={itemChecked ? 1 : 0} onChange={this.toggleComplete.bind(this)} className="pull-left" />
                {task}
                <div className="pull-right">
                    <button type="button" className="btn btn-xs close" onClick={this.editTask.bind(this)} ref="editBtn">编辑</button>
                    <button type="button" className="btn btn-xs close" onClick={this.deleteTask.bind(this)} ref="deleteBtn">删除</button>
                </div>
            </li>
        );
    }
}
