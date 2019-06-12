import React from "react";
import TodoList from "./components/todo.list";
import VisibilityFilters from "./components/todo.filters";

export default function TodoListPage() {
    return (
        <section className="todo-list">
            <h1>List:</h1>
            <TodoList />
            <br></br>
            <VisibilityFilters />
        </section>
    );
}