import React from "react";
import "./app.css";
import TodoHeader from "../todo-header/todo-header.js";
import TaskList from "../task-list/task-list.js";

export default class App extends React.Component {
    state = {
        todoData: [
            {label: "Task 1", completed: false, editing: false, id: 1},
            {label: "Task 2", completed:false, editing: false, id:2},
            {label: "Task 3", completed: false, editing: false, id:3}
        ]
    }
    onEdit = (id) => {
        this.setState(({todoData}) => {
            const index = todoData.findIndex((el) => el.id === id)
            todoData[index].editing = true
            todoData[index].completed = false
            return {
                todoData: todoData
            }
        })
    }
    completedItem = (id) => {
        this.setState(({todoData}) => {
            const index = todoData.findIndex((el) => el.id === id)
            todoData[index].completed = !todoData[index].completed
            return {
                todoData: todoData
            }
        })
    }
    deleteItem = (id) => {
        this.setState(({ todoData }) => {
            const index = todoData.findIndex((el) => el.id === id)
            const newData = [
                ...todoData.slice(0, index),
                ...todoData.slice(index + 1)
            ]
            return {
                todoData: newData
            }
        })
    }
    render() {
        return (
            <section className="todoapp">
                <TodoHeader />
                <TaskList todos={this.state.todoData}
                          onDeleted={ this.deleteItem }
                          onEdit={this.onEdit}
                          onComplete={this.completedItem} />
            </section>
        )
    }
}
