import React from 'react';
import { selectAddingPokemon } from '@/store/addingPokemon/selector';
import { useAppSelector } from '@/store/hooks';
import { Presenter } from './Presenter';

const Index: React.FC<NoProps> = () => {
  const addingPokemon = useAppSelector(selectAddingPokemon);

  return <Presenter addingPokemon={addingPokemon} />;
};

export const Hero = React.memo(Index);
