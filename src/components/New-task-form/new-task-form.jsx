import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './new-task-form.css';

const NewTaskForm = (props) => {
  const [label, setLabel] = useState('');
  const onLabelChange = (event) => {
    setLabel(event.target.value);
  };

  const onSubmit = (event) => {
    const { onAdd } = props;
    event.preventDefault();
    onAdd(label);
    setLabel('');
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        required
        className="new-todo"
        placeholder="What needs to be done?"
        value={label}
        onChange={onLabelChange}
      />
    </form>
  );
};

NewTaskForm.propTypes = {
  onAdd: PropTypes.func.isRequired,
};

export default NewTaskForm;
