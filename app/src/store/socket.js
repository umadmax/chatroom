import { types, connectWebSocket } from 'src/store/reducer';
import { receiveMessage } from './reducer';

let socketIO;
let id = 0;

// eslint-disable-next-line
const socket = store => next => (action) => {
  const state = store.getState();
  switch (action.type) {
    case types.MESSAGE_RECEIVED:
      socketIO = window.io();
      socketIO.on('send_message', (message) => {
        store.dispatch(receiveMessage({
          user: state.connectedUser,
          text: message,
          id: ++id,
        }));
      });
      break;
    case types.CHANGE_INPUT:
      break;
    case types.MESSAGE_SEND:
      socketIO = window.io();
      socketIO.emit('send_message', action.value);
      break;
    default:
  }
  next(action);
};

export default socket;

