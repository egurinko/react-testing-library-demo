import React from 'react';
import {
  PokemonsPropsMappedFromState,
  PokemonsPropsMappedFromDispatch,
} from '../../../containers/my_pokemons/index/pokemons';
import '../../../stylesheets/my_pokemons/index/pokemons.css';

type PokemonsProps = PokemonsPropsMappedFromState & PokemonsPropsMappedFromDispatch;

const Pokemons: React.FC<PokemonsProps> = ({ myPokemons }) => (
  <div className="my_pokemons_pokemons__container">
    {myPokemons.map((pokemon) => (
      <div key={pokemon.name} className="card">
        <button type="button" className="card__button">
          <img src={pokemon.sprite!} alt={pokemon.name} className="card__image" />
          <h1>{pokemon.name}</h1>
        </button>
      </div>
    ))}
  </div>
);

export default Pokemons;
