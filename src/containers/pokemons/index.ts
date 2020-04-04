import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as H from 'history';
import Index from '../../components/pokemons/Index';
import { RootThunkAction, RootThunkDispatch } from '../../actions/thunks/thunkTypes';
import { RootState } from '../../reducers';
import { fetchPokemonsThunk } from '../../actions/thunks/fetchPokemons';

const fetchPokemons = (): RootThunkAction<void> => (dispatch) => {
  dispatch(fetchPokemonsThunk());
};

const onClickGoDetail = (pokemonId: number, history: H.History): RootThunkAction<void> => () => {
  history.push(`/pokemons/${pokemonId}`);
};

const mapStateToProps = (state: RootState) => ({
  pokemons: state.pokemons,
});

const mapDispatchToProps = (dispatch: RootThunkDispatch) => ({
  fetchPokemons: () => dispatch(fetchPokemons()),
  onClickGoDetail: (pokemonId: number, history: H.History) =>
    dispatch(onClickGoDetail(pokemonId, history)),
});

export type IndexPropsMappedFromState = ReturnType<typeof mapStateToProps>;
export type IndexPropsMappedFromDispatch = ReturnType<typeof mapDispatchToProps>;

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Index));
