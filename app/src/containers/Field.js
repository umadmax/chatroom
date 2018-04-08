import { connect } from 'react-redux';

import Field from 'src/components/Field';
import { changeInput } from 'src/store/reducer';

const mapStateToProps = (state, ownProps) => ({
  value: state[ownProps.name],
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onChange: (value) => {
    dispatch(changeInput({ name: ownProps.name, value }));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Field);
