import { connect } from 'react-redux';
import Index from '../../components/my_pokemons/Index';
import { RootState } from '../../reducers';

const mapStateToProps = (state: RootState) => ({
  hasPokemons: state.myPokemons.length === 0,
});

const mapDispatchToProps = () => ({});

export type IndexPropsMappedFromState = ReturnType<typeof mapStateToProps>;
export type IndexPropsMappedFromDispatch = ReturnType<typeof mapDispatchToProps>;

export default connect(mapStateToProps, mapDispatchToProps)(Index);
