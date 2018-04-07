import React from 'react';

const Header = () => (
  <div className="header">
    <div className="dots">
      <span className="dot is-danger" />
      <span className="dot is-warning" />
      <span className="dot is-success" />
    </div>
    <span className="title">Chatroom</span>
    <form className="user-form">
      <input
        type="text"
        className="user-input"
        placeholder="Join room"
      />
      <button type="submit" className="user-button">
        <i className="fas fa-plus" />
      </button>
    </form>
  </div>
);

export default Header;
