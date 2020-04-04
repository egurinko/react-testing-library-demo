import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Detail from '../../components/pokemons/Detail';
import { RootThunkAction, RootThunkDispatch } from '../../actions/thunks/thunkTypes';
import { RootState } from '../../reducers';
import { Pokemon } from '../../actions/thunks/types/fetchPokemons';
import { addPokemon } from '../../actions/index';

const mapStateToProps = (state: RootState) => ({
  pokemons: state.pokemons,
  myPokemons: state.myPokemons,
});

const mapDispatchToProps = (dispatch: RootThunkDispatch) => ({
  addPokemon: (pokemon: Pokemon) => dispatch(addPokemon(pokemon)),
});

export type DetailPropsMappedFromState = ReturnType<typeof mapStateToProps>;
export type DetailPropsMappedFromDispatch = ReturnType<typeof mapDispatchToProps>;

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Detail));
