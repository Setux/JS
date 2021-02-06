import React from "react";
import PropTypes from "prop-types"
import Task from "./Task/task.js";
import EditItem from "../Edit-item/edit-item.js";
import "./task-list.css";

export default class TaskList extends React.Component {
    static propTypes = {
        todos: PropTypes.arrayOf(PropTypes.object).isRequired,
        onDeleted: PropTypes.func.isRequired,
        onEdit: PropTypes.func.isRequired,
        onComplete: PropTypes.func.isRequired,
        onChange: PropTypes.func.isRequired,
    }

    render() {
        const {todos, onDeleted, onEdit, onComplete, onChange} = this.props
        const elements = todos.map((task) => {
            const {id, ...itemProps} = task
            const classNames = require('classnames')
            const taskClass = classNames({'completed':task.completed}, {'editing':task.editing})
            if (task.editing) {
                return (
                    <li key={id} className={taskClass}>
                        <EditItem {...itemProps}
                        onChange={() => onChange(id)}/>
                    </li>
                )
            }
            return (
                <li key={id} className={taskClass}>
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