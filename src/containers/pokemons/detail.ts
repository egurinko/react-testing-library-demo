import { connect } from 'react-redux';
import Detail from '../../components/pokemons/Detail';
import { RootThunkDispatch } from '../../actions/thunks/thunkTypes';
import { RootState } from '../../reducers';
import { Pokemon } from '../../actions/thunks/types/fetchPokemons';
import { addPokemon, deletePokemon } from '../../actions/index';

const mapStateToProps = (state: RootState) => ({
  pokemons: state.pokemons,
  myPokemons: state.myPokemons,
});

const mapDispatchToProps = (dispatch: RootThunkDispatch) => ({
  addPokemon: (pokemon: Pokemon) => dispatch(addPokemon(pokemon)),
  deletePokemon: (pokemon: Pokemon) => dispatch(deletePokemon(pokemon)),
});

export type DetailPropsMappedFromState = ReturnType<typeof mapStateToProps>;
export type DetailPropsMappedFromDispatch = ReturnType<typeof mapDispatchToProps>;

export default connect(mapStateToProps, mapDispatchToProps)(Detail);
