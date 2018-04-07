import initialState from './initialState';

export const types = {
  WEBSOCKET_CONNECT: 'WEBSOCKET_CONNECT',
  MESSAGE_SEND: 'MESSAGE_SEND',
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
    default:
      return state;
  }
};

export const WEBSOCKET_CONNECT = () => ({
  type: types.WEBSOCKET_CONNECT,
});

export const MESSAGE_SEND = () => ({
  type: types.MESSAGE_SEND,
});

export default reducer;

