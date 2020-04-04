import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Detail from '../../components/pokemons/Detail';
import { RootThunkAction, RootThunkDispatch } from '../../actions/thunks/thunkTypes';
import { RootState } from '../../reducers';

const mapStateToProps = (state: RootState) => ({
  pokemons: state.pokemons,
});

const mapDispatchToProps = (dispatch: RootThunkDispatch) => ({});

export type DetailPropsMappedFromState = ReturnType<typeof mapStateToProps>;
export type DetailPropsMappedFromDispatch = ReturnType<typeof mapDispatchToProps>;

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Detail));
