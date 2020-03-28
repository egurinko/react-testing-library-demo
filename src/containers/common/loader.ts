import { connect } from 'react-redux';
import Loader from '../../components/common/Loader';
import { RootThunkAction, RootThunkDispatch } from '../../actions/thunks/thunkTypes';
import { RootState } from '../../reducers';

const mapStateToProps = (state: RootState) => ({
  isLoading: state.isLoading,
});

const mapDispatchToProps = (dispatch: RootThunkDispatch) => ({});

export type LoaderPropsMappedFromState = ReturnType<typeof mapStateToProps>;
export type LoaderPropsMappedFromDispatch = ReturnType<typeof mapDispatchToProps>;

export default connect(mapStateToProps, mapDispatchToProps)(Loader);
