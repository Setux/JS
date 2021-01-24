import React from "react";
import Task from "../task/task.js";
import Footer from "../footer/footer";
import "./task-list.css";

export default class TaskList extends React.Component {
    render() {
        const {todos, onDeleted, onEdit, onComplete} = this.props
        const elements = todos.map((task) => {
            let styleClass;
            const {id, ...itemProps} = task

            if (task.completed) {
                styleClass = "completed"
            } else if (task.editing) {
                styleClass = "editing"
                return (
                    <li key={id} className={styleClass}>
                        <Task {...itemProps}/>
                        <input className="edit" defaultValue="Editing task"/>
                    </li>
                )
            }
            return (
                <li key={id} className={styleClass}>
                    <Task
                        {...itemProps}
                        onDeleted={() => onDeleted(id)}
                        onEdit={() => onEdit(id)}
                        onComplete={() => onComplete(id)}/>
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
}