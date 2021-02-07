import React from 'react';
import PropTypes from 'prop-types';
import './footer.css';

const classNames = require('classnames');

const Footer = (props) => {
  const { buttons, left, onDelete, onFilter } = props;
  const elements = buttons.map((button) => {
    const { id, label, isActive } = button;
    const btnClass = classNames({ selected: isActive });
    return (
      <li key={id}>
        <button type="button" onClick={() => onFilter(id)} className={btnClass}>
          {label}
        </button>
      </li>
    );
  });
  return (
    <footer className="footer">
      <span className="todo-count">{left} items left</span>
      <ul className="filters">{elements}</ul>
      <button type="button" onClick={onDelete} className="clear-completed">
        Clear completed
      </button>
    </footer>
  );
};

Footer.propTypes = {
  buttons: PropTypes.arrayOf(PropTypes.object).isRequired,
  left: PropTypes.number.isRequired,
  onDelete: PropTypes.func.isRequired,
  onFilter: PropTypes.func.isRequired,
};

export default Footer;
