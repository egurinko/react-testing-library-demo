import React, { useCallback, useEffect } from 'react';
import { useMatch } from 'react-router';
import { setAddingPokemon } from '@/store/addingPokemon';
import { selectAddingPokemon } from '@/store/addingPokemon/selector';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { addToMyPokemon } from '@/store/myPokemons';
import { selectPokemons } from '@/store/pokemons/selector';
import type { PokemonState } from '@/store/pokemons/types';
import { Presenter } from './Presenter';

const Index: React.FC<NoProps> = () => {
  const match = useMatch('/pokemons/:id');
  const dispatch = useAppDispatch();
  const pokemons = useAppSelector(selectPokemons);
  const addingPokemon = useAppSelector(selectAddingPokemon);

  const handleClick = useCallback(
    (pokemon: PokemonState) => {
      dispatch(addToMyPokemon(pokemon));
    },
    [dispatch]
  );

  useEffect(() => {
    const id = match?.params.id;
    const pokemon = pokemons.find((pokemon) => pokemon.id === Number(id));
    if (pokemon != null) {
      setAddingPokemon(pokemon);
    }
  }, [match, pokemons]);

  return <Presenter addingPokemon={addingPokemon} handleClick={handleClick} />;
};

export const PokemonDetail = React.memo(Index);
