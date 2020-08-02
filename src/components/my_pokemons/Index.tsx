import React from 'react';
import {
  IndexPropsMappedFromState,
  IndexPropsMappedFromDispatch,
} from '../../containers/my_pokemons/index';
import Notification from './index/Notification';
import Pokemons from '../../containers/my_pokemons/index/pokemons';
import '../../stylesheets/my_pokemons/index.css';

type IndexProps = IndexPropsMappedFromState & IndexPropsMappedFromDispatch;

const Index: React.FC<IndexProps> = ({ hasPokemons }) => (
  <div className="my-pokemons__container">
    <h1>My Pokemons</h1>
    <div>{hasPokemons ? <Notification /> : <Pokemons />}</div>
  </div>
);

export default Index;
