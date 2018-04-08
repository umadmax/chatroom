import { connect } from 'react-redux';

import ChatBox from 'src/components/ChatBox';
import { sendMessage } from '../store/reducer';

// eslint-disable-next-line
const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  onSubmit: (value) => {
    dispatch(sendMessage(value));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ChatBox);
