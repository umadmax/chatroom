import initialState from './initialState';

export const types = {
  WEBSOCKET_CONNECT: 'WEBSOCKET_CONNECT',
  MESSAGE_SEND: 'MESSAGE_SEND',
  LOG_USER: 'LOG_USER',
  CHANGE_INPUT: 'CHANGE_INPUT',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case types.WEBSOCKET_CONNECT:
      return {
        ...state,
      };
    case types.MESSAGE_SEND:
      return {
        ...state,
      };
    case types.CHANGE_INPUT:
      return {
        ...state,
        [action.name]: action.value,
      };
    case types.LOG_USER:
      return {
        ...state,
        connectedUser: action.user,
        userInput: '',
      };
    default:
      return state;
  }
};

export const connectWebSocket = () => ({
  type: types.WEBSOCKET_CONNECT,
});

export const sendMessage = () => ({
  type: types.MESSAGE_SEND,
});

export const changeInput = ({ name, value }) => ({
  type: types.CHANGE_INPUT,
  name,
  value,
});

export const logUser = user => ({
  type: types.LOG_USER,
  user,
});

export default reducer;

