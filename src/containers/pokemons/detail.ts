import { connect } from 'react-redux';
import Detail from '../../components/pokemons/Detail';
import { RootThunkAction, RootThunkDispatch } from '../../actions/thunks/thunkTypes';
import { RootState } from '../../reducers';

const mapStateToProps = (state: RootState) => ({});

const mapDispatchToProps = (dispatch: RootThunkDispatch) => ({});

export type DetailPropsMappedFromState = ReturnType<typeof mapStateToProps>;
export type DetailPropsMappedFromDispatch = ReturnType<typeof mapDispatchToProps>;

export default connect(mapStateToProps, mapDispatchToProps)(Detail);
