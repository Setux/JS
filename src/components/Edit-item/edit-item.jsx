import React from 'react';
import PropTypes from 'prop-types';

export default class EditItem extends React.Component {
  static defaultProps = {
    label: 'Editing task',
  };

  static propTypes = {
    label: PropTypes.string,
    onChange: PropTypes.func.isRequired,
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
    const { onChange } = this.props;
    const { label } = this.state;
    event.preventDefault();
    onChange(label);
    this.setState({
      label: '',
    });
  };

  render() {
    const { label } = this.props;
    return (
      <form onSubmit={this.onSubmit}>
        <input className="edit" defaultValue={label} onChange={this.onLabelChange} />
      </form>
    );
  }
}
