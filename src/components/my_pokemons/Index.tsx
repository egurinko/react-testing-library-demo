import React from 'react';
import { useAppSelector } from '@/store/hooks';
import {
  selectHasMyPokemons,
  selectMyPokemons
} from '@/store/myPokemons/selector';
import { Presenter } from './Presenter';

const Index: React.FC<NoProps> = () => {
  const hasMyPokemons = useAppSelector(selectHasMyPokemons);
  const myPokemons = useAppSelector(selectMyPokemons);

  return <Presenter hasMyPokemons={hasMyPokemons} myPokemons={myPokemons} />;
};

export const MyPokemons = React.memo(Index);
