import React from 'react';
import PropTypes from 'prop-types';

class Field extends React.Component {
  handleChange = (evt) => {
    const { value } = evt.target;
    this.props.onChange(value);
  }

  render() {
    return (
      <input
        type="text"
        name={this.props.name}
        className="user-input"
        placeholder="Join room"
        onChange={this.handleChange}
        value={this.props.value}
      />
    );
  }
}

Field.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Field;
