import { connect } from 'react-redux';

import App from 'src/components/App';
import { connectWebSocket } from 'src/store/reducer';

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  connect: () => {
    dispatch(connectWebSocket());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
