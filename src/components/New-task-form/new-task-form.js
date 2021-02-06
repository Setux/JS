import React from "react";
import "./new-task-form.css";

export default class NewTaskForm extends React.Component {

    state =  {
        label: ''
    }

    onLabelChange = (e) => {
        this.setState( {
            label: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault()
        this.props.onAdd(this.state.label)
        this.setState({
            label: ''
        })
    }

    render() {
        return (
            <form
            onSubmit={this.onSubmit}>
                <input className="new-todo" placeholder="What needs to be done?" value={this.state.label}
                onChange={this.onLabelChange} autoFocus />
            </form>
        )
    }
}
