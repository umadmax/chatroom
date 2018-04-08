import React from 'react';
import PropTypes from 'prop-types';

import Field from 'src/containers/Field';

class ChatBox extends React.Component {
  handleSubmit = (evt) => {
    evt.preventDefault();
    this.props.onSubmit(evt.target.querySelector('input').value);
  }

  render() {
    return (
      <form className="message-form" onSubmit={this.handleSubmit}>
        <Field
          name="messageInput"
          className="message-input"
          placeholder="What do you want to say ?"
        />
      </form>
    );
  }
}

ChatBox.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ChatBox;
