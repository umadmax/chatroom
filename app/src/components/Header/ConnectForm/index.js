import React from 'react';
import PropTypes from 'prop-types';

import Field from 'src/containers/Field';

class ConnectForm extends React.Component {
  handleSubmit = (evt) => {
    evt.preventDefault();
    this.props.onSubmit(evt.target.querySelector('input').value);
  };

  render() {
    return (
      <form className="user-form" onSubmit={this.handleSubmit}>
        <Field
          name="userInput"
          placeholder="Join room"
          className="user-input"
        />
        <button type="submit" className="user-button">
          <i className="fas fa-plus" />
        </button>
      </form >
    );
  }
}

ConnectForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ConnectForm;
