import React from 'react';
import PropTypes from 'prop-types';
import './new-task-form.css';

export default class NewTaskForm extends React.Component {
  static propTypes = {
    onAdd: PropTypes.func.isRequired,
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
    const { onAdd } = this.props;
    const { label } = this.state;
    event.preventDefault();
    onAdd(label);
    this.setState({
      label: '',
    });
  };

  render() {
    const { label } = this.state;
    return (
      <form onSubmit={this.onSubmit}>
        <input className="new-todo" placeholder="What needs to be done?" value={label} onChange={this.onLabelChange} />
      </form>
    );
  }
}
