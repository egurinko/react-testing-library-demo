import { connect } from 'react-redux';
import Index from '../../components/my_pokemons/Index';
import { RootState } from '../../reducers';

const mapStateToProps = (state: RootState) => ({
  myPokemons: state.myPokemons,
});

const mapDispatchToProps = () => ({});

export type IndexPropsMappedFromState = ReturnType<typeof mapStateToProps>;
export type IndexPropsMappedFromDispatch = ReturnType<typeof mapDispatchToProps>;

export default connect(mapStateToProps, mapDispatchToProps)(Index);
