import React from "react";
import "./app.css";
import TodoHeader from "../todo-header/todo-header.js";
import TaskList from "../task-list/task-list.js";

const App = () => {
    const todoData = [
        {label: "Completed task", completed: true, editing: false},
        {label: "Editing task", completed:false, editing: true},
        {label: "Active task", completed: false, editing: false}
    ];

    return (
        <section className="todoapp">
            <TodoHeader />
            <TaskList todos={todoData} />
        </section>
    )
}
export default App;
