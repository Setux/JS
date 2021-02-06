import React from "react";
import { nanoid } from "nanoid";
import "./app.css";
import NewTaskForm from "../New-task-form";
import TaskList from "../Task-list";
import Footer from "../Footer";

export default class App extends React.Component {

    state = {
        todoData: [
            this.createTodoEl("Task 1"),
            this.createTodoEl("Task 2"),
            this.createTodoEl("Task 3")
        ],
        buttonsData: [
            {label: "All", isActive: true, id: 1},
            {label: "Active", isActive: false, id: 2},
            {label: "Completed", isActive: false, id: 3},
        ],
        filteredData: [],
        isSearch: false
    }


    onDeleteCompleted = () => {
        this.setState(({todoData, filteredData}) => {
            const newTodoData = todoData.filter(el => {
                return (!el.completed)
            })
            if (filteredData.length > 0) {
                const newFilterData = filteredData.filter(el => {
                    return (!el.completed)
                })
                return {
                    todoData: newTodoData,
                    filteredData: newFilterData
                }
            }
            return {
                todoData: newTodoData,
            }
        })
    }

    onFilter = (id) => {
        this.setState(({todoData, buttonsData}) => {
            const falseData = buttonsData.map((el) => {
                return {...el, isActive:false}
            })
            const index = buttonsData.findIndex((el) => el.id === id)
            const oldButtonItem = buttonsData[index]
            const newButtonItem = {...oldButtonItem, isActive: true}
            const newButtonData = [
                ...falseData.slice(0, index),
                newButtonItem,
                ...falseData.slice(index + 1)
            ]
            let filterData
            let isSearched

            switch(id) {
                case 1:
                    filterData = []
                    isSearched = false
                    break

                case 2:
                    filterData = todoData.filter((el) => !el.completed)
                    isSearched = true
                    break

                case 3:
                    filterData = todoData.filter((el) => el.completed)
                    isSearched = true
                    break

                default:
                    break
            }
            return {
                buttonsData: newButtonData,
                filteredData: filterData,
                isSearch: isSearched
            }
        })
    }

    addItem = (text) => {
        const newItem = this.createTodoEl(text)
        this.setState(({todoData, filteredData}) => {
            const newData = [
                ...todoData,
                newItem
            ]
            if (filteredData.length > 0) {
                const newFilterData = [
                    ...filteredData,
                    newItem
                ]
                return {
                    todoData: newData,
                    filteredData: newFilterData
                }
            }
            return {
                todoData: newData
            }
        })
    }

    editItem = (id, text) => {
        this.setState(({todoData}) => {
            const index = todoData.findIndex((el) => el.id === id)
            const oldItem = todoData[index]
            const newItem = {...oldItem, label: text}
            const newData = [
                ...todoData.slice(0, index),
                newItem,
                ...todoData.slice(index + 1)
            ]
            return {
                todoData: newData
            }
        })
    }

    onEdit = (id) => {
        this.setState(({todoData}) => {
            const index = todoData.findIndex((el) => el.id === id)
            const oldItem = todoData[index]
            const newItem = {...oldItem, editing: !oldItem.editing}
            const newData = [
                ...todoData.slice(0, index),
                newItem,
                ...todoData.slice(index + 1)
            ]
            return {
                todoData: newData
            }
        })
    }

    completedItem = (id) => {
        this.setState(({todoData, filteredData}) => {
            const indexTodo = todoData.findIndex((el) => el.id === id)
            const oldTodoItem = todoData[indexTodo]
            const newTodoItem = {...oldTodoItem, completed: !oldTodoItem.completed, checked: !oldTodoItem.checked}
            const newTodoData = [
                ...todoData.slice(0, indexTodo),
                newTodoItem,
                ...todoData.slice(indexTodo + 1)
            ]
            if (filteredData.length > 0) {
                const indexFilter = filteredData.findIndex((el) => el.id === id)
                const oldFilterItem = filteredData[indexFilter]
                const newFilterItem = {...oldFilterItem, completed: !oldFilterItem.completed, checked: !oldFilterItem.checked}
                const newFilterData = [
                    ...filteredData.slice(0, indexFilter),
                    newFilterItem,
                    ...filteredData.slice(indexFilter + 1)
                ]
                return {
                    todoData: newTodoData,
                    filteredData: newFilterData
                }
            }
            return {
                todoData: newTodoData,
            }
        })
    }

    deleteItem = (id) => {
        this.setState(({ todoData, filteredData }) => {
            const indexTodo = todoData.findIndex((el) => el.id === id)
            const newTodoData = [
                ...todoData.slice(0, indexTodo),
                ...todoData.slice(indexTodo + 1)
            ]
            if (filteredData.length > 0) {
                const indexFilter = filteredData.findIndex((el) => el.id === id)
                const newFilterData = [
                    ...filteredData.slice(0, indexFilter),
                    ...filteredData.slice(indexFilter + 1)
                ]
                return {
                    todoData: newTodoData,
                    filteredData: newFilterData
                }
            }
            return {
                todoData: newTodoData
            }
        })
    }

    createTodoEl(label) {
        return {
            label,
            completed: false,
            editing: false,
            checked: false,
            time: new Date(),
            id: nanoid(8)
        }
    }

    render() {
        const {todoData, buttonsData, filteredData, isSearch} = this.state
        const toDo = todoData.filter((el) => !el.completed).length
        const list = isSearch === true ? <TaskList todos={filteredData}
                                              onDeleted={ this.deleteItem }
                                              onEdit={this.onEdit}
                                              onComplete={this.completedItem}
                                              onChange={this.editItem}/> : <TaskList todos={todoData}
                                                                                     onDeleted={ this.deleteItem }
                                                                                     onEdit={this.onEdit}
                                                                                     onComplete={this.completedItem}
                                                                                     onChange={this.editItem}/>

        return (
            <section className="todoapp">
                <header>
                    <h1>todos</h1>
                    <NewTaskForm
                    onAdd={this.addItem}/>
                </header>
                <section className="main">
                    {list}
                            <Footer buttons={buttonsData}
                                    left={toDo}
                                    onDelete={this.onDeleteCompleted}
                                    onFilter={this.onFilter}/>
                </section>
            </section>
        )
    }
}
