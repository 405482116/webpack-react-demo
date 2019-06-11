import React from 'react';
import { TodoList } from './Todo.list';
import { TodoForm } from './Todo.from';

export class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                { "id": "0001", "task": "吃饭", "complete": false },
                { "id": "0002", "task": "睡觉", "complete": false },
                { "id": "0003", "task": "打豆豆", "complete": true },
            ]
        }
    }
    // 根据id删除一项任务
    handleTaskDelete(taskId) {
        debugger;
        const data = this.state.data;
        data.splice(data.findIndex(v => v.id === taskId), 1);
        this.setState({ data });
    }

    // 切换一项任务的完成状态
    handleToggleComplete(taksId) {
        var data = this.state.data;
        debugger;
        for (let i in data) {
            if (data[i].id === taksId) {
                data[i].complete = data[i].complete ? false : true;
                break;
            }
        }
        this.setState({ data });
    }

    // 给新增的任务一个随机的id
    generateId() {
        return Math.floor(Math.random() * 9000) + 1000;
    }

    // 新增一项任务
    handleSubmit(task) {
        let data = this.state.data;
        debugger;
        const id = this.generateId();
        data = [{ "id": id, "task": task, "complete": false }, ...data];//data.concat([{ "id": id, "task": task, "complete": false }]);
        this.setState({ data });
    }

    render() {
        return (
            <div className="container">
                <h1 className="text-center">React Todo</h1>
                <a href='#/add'>Todo add page</a>
                <TodoList data={this.state.data}
                    deleteTask={this.handleTaskDelete.bind(this)}
                    toggleComplete={this.handleToggleComplete.bind(this)}
                />
                <TodoForm submitTask={this.handleSubmit.bind(this)} />
            </div>
        )
    }
}


