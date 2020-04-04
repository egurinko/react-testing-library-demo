import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Index from '../../components/my_pokemons/Index';
import { RootThunkAction, RootThunkDispatch } from '../../actions/thunks/thunkTypes';
import { RootState } from '../../reducers';

const mapStateToProps = (state: RootState) => ({
  myPokemons: state.myPokemons,
});

const mapDispatchToProps = (dispatch: RootThunkDispatch) => ({});

export type IndexPropsMappedFromState = ReturnType<typeof mapStateToProps>;
export type IndexPropsMappedFromDispatch = ReturnType<typeof mapDispatchToProps>;

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Index));
