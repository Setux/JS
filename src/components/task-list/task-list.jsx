import React from 'react';
import PropTypes from 'prop-types';
import Task from './Task';
import './task-list.css';

const classNames = require('classnames');

export default class TaskList extends React.Component {
  static propTypes = {
    todos: PropTypes.arrayOf(PropTypes.object).isRequired,
    onDeleted: PropTypes.func.isRequired,
    onEdit: PropTypes.func.isRequired,
    onComplete: PropTypes.func.isRequired,
    onChangeLabel: PropTypes.func.isRequired,
  };

  state = {
    label: '',
  };

  onLabelChange = (event) => {
    this.setState({
      label: event.target.value,
    });
  };

  onSubmit = (event) => {
    const { onChangeLabel } = this.props;
    const { label } = this.state;
    event.preventDefault();
    onChangeLabel(label);
    this.setState({
      label: '',
    });
  };

  render() {
    const { todos, onDeleted, onEdit, onComplete } = this.props;
    const elements = todos.map((task) => {
      const { id, ...itemProps } = task;
      const taskClass = classNames({ completed: task.completed }, { editing: task.editing });
      if (task.editing) {
        const { label } = itemProps;
        return (
          <li key={id} className={taskClass}>
            <form onSubmit={this.onSubmit}>
              <input className="edit" defaultValue={label} onChange={this.onLabelChange} />
            </form>
          </li>
        );
      }
      return (
        <li key={id} className={taskClass}>
          <Task
            {...itemProps}
            onDeleted={() => onDeleted(id)}
            onEdit={() => onEdit(id)}
            onComplete={() => onComplete(id)}
          />
        </li>
      );
    });
    return <ul className="todo-list">{elements}</ul>;
  }
}
