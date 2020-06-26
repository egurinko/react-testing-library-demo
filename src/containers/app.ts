import { connect } from 'react-redux';
import App from '../components/App';
import { RootThunkAction, RootThunkDispatch } from '../actions/thunks/thunkTypes';
import { RootState } from '../reducers';
import { fetchPokemonsThunk } from '../actions/thunks/fetchPokemons';

const fetchPokemons = (): RootThunkAction<void> => (dispatch) => {
  dispatch(fetchPokemonsThunk());
};

const mapStateToProps = (state: RootState) => ({});

const mapDispatchToProps = (dispatch: RootThunkDispatch) => ({
  fetchPokemons: () => dispatch(fetchPokemons()),
});

export type AppPropsMappedFromState = ReturnType<typeof mapStateToProps>;
export type AppPropsMappedFromDispatch = ReturnType<typeof mapDispatchToProps>;

export default connect(mapStateToProps, mapDispatchToProps)(App);
