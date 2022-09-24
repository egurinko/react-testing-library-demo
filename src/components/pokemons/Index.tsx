import React, { useCallback } from 'react';
import { useNavigate } from 'react-router';
import { useAppSelector } from '@/store/hooks';
import { selectPokemons } from '@/store/pokemons/selector';
import { Presenter } from './Presenter';

const Index: React.FC<NoProps> = () => {
  const navigate = useNavigate();
  const pokemons = useAppSelector(selectPokemons);

  const handleClick = useCallback(
    (pokemonId: number) => {
      navigate(`/pokemons/${pokemonId}`);
    },
    [navigate]
  );

  return <Presenter pokemons={pokemons} handleClick={handleClick} />;
};

export const Pokemons = React.memo(Index);
