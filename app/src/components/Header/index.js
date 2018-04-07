import React from 'react';

import ConnectForm from 'src/containers/ConnectForm';

const Header = () => (
  <div className="header">
    <div className="dots">
      <span className="dot is-danger" />
      <span className="dot is-warning" />
      <span className="dot is-success" />
    </div>
    <span className="title">Chatroom</span>
    <ConnectForm />
  </div>
);

export default Header;
