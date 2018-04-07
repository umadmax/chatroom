import React from 'react';

import Header from 'src/components/Header';
import Messages from 'src/containers/Messages';
import ChatBox from 'src/components/ChatBox';

const App = () => (
  <div id="app">
    <Header />
    <Messages />
    <ChatBox />
  </div>
);

export default App;
