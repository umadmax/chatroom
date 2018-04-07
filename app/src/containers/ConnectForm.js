import { connect } from 'react-redux';

import ConnectForm from 'src/components/Header/ConnectForm';
import { logUser } from 'src/store/reducer';

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  onSubmit: (user) => {
    dispatch(logUser(user));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ConnectForm);
