import React from 'react';
import type { PokemonState } from '@/store/pokemons/types';
import { Notification } from './Notification';
import '@/stylesheets/my_pokemons/index.css';

interface Props {
  hasMyPokemons: boolean;
  myPokemons: PokemonState[];
}

const Presenter: React.FC<Props> = ({ hasMyPokemons, myPokemons }) => (
  <div className="my-pokemons__container">
    <h1>My Pokemons</h1>
    <div>
      {hasMyPokemons ? (
        <Notification />
      ) : (
        <div className="my_pokemons_pokemons__container">
          {myPokemons.map((pokemon) => (
            <div key={pokemon.name} className="card">
              <button type="button" className="card__button">
                <img
                  src={pokemon.sprite ?? ''}
                  alt={pokemon.name}
                  className="card__image"
                />
                <h1>{pokemon.name}</h1>
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  </div>
);

const memoed = React.memo(Presenter);
export { memoed as Presenter };
