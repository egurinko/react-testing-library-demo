import React, { useEffect } from 'react';
import { Presenter } from '@/components/app/Presenter';
import { useAppDispatch } from '@/store/hooks';
import { fetchPokemonsThunk } from '@/store/pokemons/thunk';

const Index: React.FC<NoProps> = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchPokemonsThunk());
  }, [dispatch]);

  return <Presenter />;
};

export const App = React.memo(Index);
