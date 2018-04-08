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
        className={this.props.className}
        placeholder={this.props.placeholder}
        onChange={this.handleChange}
        value={this.props.value}
      />
    );
  }
}

Field.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

Field.defaultProps = {
  value: '',
};

export default Field;
