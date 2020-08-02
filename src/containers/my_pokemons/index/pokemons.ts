import { connect } from 'react-redux';
import Pokemons from '../../../components/my_pokemons/index/Pokemons';
import { RootState } from '../../../reducers';

const mapStateToProps = (state: RootState) => ({
  myPokemons: state.myPokemons,
});

const mapDispatchToProps = () => ({});

export type PokemonsPropsMappedFromState = ReturnType<typeof mapStateToProps>;
export type PokemonsPropsMappedFromDispatch = ReturnType<typeof mapDispatchToProps>;

export default connect(mapStateToProps, mapDispatchToProps)(Pokemons);
