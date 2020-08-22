import { connect } from 'react-redux';
import Hero from '../../../components/pokemons/detail/Hero';
import { RootState } from '../../../reducers';

const mapStateToProps = (state: RootState) => ({
  addingPokemon: state.addingPokemon,
});

const mapDispatchToProps = () => ({});

export type HeroPropsMappedFromState = ReturnType<typeof mapStateToProps>;
export type HeroPropsMappedFromDispatch = ReturnType<typeof mapDispatchToProps>;

export default connect(mapStateToProps, mapDispatchToProps)(Hero);
