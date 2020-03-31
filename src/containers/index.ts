import { connect } from 'react-redux';
import Index from '../components/Index';
import { RootThunkAction, RootThunkDispatch } from '../actions/thunks/thunkTypes';
import { RootState } from '../reducers';
import { fetchPokemonsThunk } from '../actions/thunks/fetchPokemons';

const fetchPokemons = (): RootThunkAction<void> => (dispatch) => {
  dispatch(fetchPokemonsThunk());
};

const mapStateToProps = (state: RootState) => ({
  pokemons: state.pokemons,
});

const mapDispatchToProps = (dispatch: RootThunkDispatch) => ({
  fetchPokemons: () => dispatch(fetchPokemons()),
});

export type IndexPropsMappedFromState = ReturnType<typeof mapStateToProps>;
export type IndexPropsMappedFromDispatch = ReturnType<typeof mapDispatchToProps>;

export default connect(mapStateToProps, mapDispatchToProps)(Index);
