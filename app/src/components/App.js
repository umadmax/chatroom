import React from 'react';
import PropTypes from 'prop-types';

import Header from 'src/components/Header';
import Messages from 'src/containers/Messages';
import ChatBox from 'src/containers/ChatBox';

class App extends React.Component {
  componentWillMount() {
    this.props.connect();
  }
  render() {
    return (
      <div id="app">
        <Header />
        <Messages />
        <ChatBox />
      </div>
    );
  }
}

App.propTypes = {
  connect: PropTypes.func.isRequired,
};

export default App;
