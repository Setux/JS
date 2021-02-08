import React from 'react';
import PropTypes from 'prop-types';
import { formatDistanceToNow } from 'date-fns';

const Task = (props) => {
  const { label, checked, time, onDeleted, onEdit, onComplete } = props;
  const createdTime = formatDistanceToNow(time);
  return (
    <div className="view">
      <input className="toggle" type="checkbox" checked={checked} onChange={onComplete} />
      <label>
        <span className="description">{label}</span>
        <span className="created">created {createdTime} ago</span>
      </label>
      <button className="icon icon-edit" onClick={onEdit} type="button">
        {' '}
      </button>
      <button className="icon icon-destroy" onClick={onDeleted} type="button">
        {' '}
      </button>
    </div>
  );
};

Task.propTypes = {
  label: PropTypes.string.isRequired,
  time: PropTypes.instanceOf(Date).isRequired,
  checked: PropTypes.bool.isRequired,
  onDeleted: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
  onComplete: PropTypes.func.isRequired,
};

export default Task;
