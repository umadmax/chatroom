import { connect } from 'react-redux';

import Messages from 'src/components/Messages';
import { receiveMessage } from 'src/store/reducer';

const mapStateToProps = state => ({
  messages: state.messages,
});

const mapDispatchToProps = dispatch => ({
  receiveMessage: () => {
    dispatch(receiveMessage);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Messages);

