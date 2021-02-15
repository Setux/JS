import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Task from './Task';
import './task-list.css';

const classNames = require('classnames');

const TaskList = (props) => {
  const [changedLabel, setChangedLabel] = useState('');

  const onLabelChange = (event) => {
    setChangedLabel(event.target.value);
  };

  const changeElement = (id) => (event) => {
    event.preventDefault();
    const { confirmChanges } = props;
    confirmChanges({ changedLabel, id });
  };
  const { todos, onDeleted, onEdit, onComplete } = props;

  const elements = todos.map((task) => {
    const { id, ...itemProps } = task;
    const taskClass = classNames({ completed: task.completed }, { editing: task.editing });
    if (task.editing) {
      const { label } = itemProps;
      return (
        <li key={id} className={taskClass}>
          <form onSubmit={changeElement(id)}>
            <input required className="edit" defaultValue={label} onChange={onLabelChange} />
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
};

TaskList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
  onDeleted: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
  onComplete: PropTypes.func.isRequired,
  confirmChanges: PropTypes.func.isRequired,
};
export default TaskList;
