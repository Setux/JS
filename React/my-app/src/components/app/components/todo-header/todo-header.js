import React from "react";
import NewTaskForm from "../new-task-form/new-task-form.js";
import "./todo-header.css";

const TodoHeader = () => {
    return (
        <header>
            <h1>todos</h1>
            <NewTaskForm/>
        </header>
    )
}
export default TodoHeader;