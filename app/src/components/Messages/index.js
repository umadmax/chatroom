import React from 'react';
import PropTypes from 'prop-types';

class Messages extends React.Component {
  componentWillMount() {}

  render() {
    return (
      <div className="messages">
        {this.props.messages.map(message => (
          <div key={message.id} className="message">
            <span className="user">{message.user}:</span>
            <span className="text">{message.text}</span>
          </div>
        ))}
      </div>
    );
  }
}

Messages.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Messages;
