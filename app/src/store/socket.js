import { types } from 'src/store/reducer';
import { receiveMessage, addMessage } from './reducer';

let socketIO;

// eslint-disable-next-line
const socket = store => next => (action) => {
  const state = store.getState();
  switch (action.type) {
    case types.WEBSOCKET_CONNECT:
      socketIO = window.io();
      console.log(socketIO);
      store.dispatch(receiveMessage());
      break;
    case types.MESSAGE_RECEIVED:
      console.log('Message received');
      socketIO.on('send_message', (data) => {
        console.log(data);
        store.dispatch(addMessage({
          user: data.username,
          value: data.message,
        }));
      });
      break;
    case types.MESSAGE_SEND:
      socketIO.emit('send_message', {
        username: state.connectedUser,
        message: action.value,
      });
      break;
    case types.LOG_USER:
      console.log('Username changed');
      socketIO.emit('change_username', { username: action.user });
      break;
    default:
  }
  next(action);
};

export default socket;

