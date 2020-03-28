import { connect } from 'react-redux';
import Index from '../components/Index';
import { RootThunkAction, RootThunkDispatch } from '../actions/thunks/thunkTypes';
import { RootState } from '../reducers';

const mapStateToProps = (state: RootState) => ({});

const mapDispatchToProps = (dispatch: RootThunkDispatch) => ({});

export type IndexPropsMappedFromState = ReturnType<typeof mapStateToProps>;
export type IndexPropsMappedFromDispatch = ReturnType<typeof mapDispatchToProps>;

export default connect(mapStateToProps, mapDispatchToProps)(Index);
