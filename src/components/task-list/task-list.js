import React from "react";
import Task from "../task/task.js";
import EditItem from "../edit-item/edit-item.js";
import "./task-list.css";

export default class TaskList extends React.Component {

    render() {
        const {todos, onDeleted, onEdit, onComplete, onChange} = this.props
        const elements = todos.map((task) => {
            let styleClass;
            const {id, ...itemProps} = task

            if (task.completed) {
                styleClass = "completed"
            } else if (task.editing) {
                styleClass = "editing"
                return (
                    <li key={id} className={styleClass}>
                        <EditItem {...itemProps}
                        onChange={() => onChange(id)}/>
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
                <ul className="todo-list">
                    {elements}
                </ul>
        )
    }
}