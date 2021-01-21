import React from "react";
import Task from "../task/task.js";
import Footer from "../footer/footer";
import "./task-list.css";

const TaskList = ({todos}) => {
    const elements = todos.map((task) => {
        let styleClass;

        if (task.completed) {
            styleClass = "completed"
        } else if (task.editing) {
            styleClass = "editing"
            return (
                <li className={styleClass}>
                    <Task label = {task.label}/>
                    <input className="edit" value="Editing task"/>
                </li>
            )
        }
        return (
            <li className={styleClass}>
                <Task label = {task.label}/>
            </li>
        )
    })
    return (
        <section className="main">
            <ul className="todo-list">
                {elements}
            </ul>
            <Footer/>
        </section>
    )
}
export default TaskList;