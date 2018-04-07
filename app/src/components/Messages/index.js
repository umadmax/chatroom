import React from 'react';
import PropTypes from 'prop-types';

const Messages = props => (
  <div className="messages">
    {props.messages.map(message => (
      <div key={message.id} className="message">
        <span className="user">{message.user}:</span>
        <span className="text">{message.text}</span>
      </div>
    ))}
  </div>
);

Messages.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Messages;
