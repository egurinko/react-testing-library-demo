import { CssBaseline } from '@mui/material';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';
import { NetworkError } from '@/components/NetworkError';
import { NotFound } from '@/components/NotFound';
import { Home } from '@/components/home/Index';
import { MyPokemons } from '@/components/my_pokemons/Index';
import { Pokemons } from '@/components/pokemons/Index';
import { PokemonDetail } from '@/components/pokemons/detail/Index';
import { ROUTES } from '@/utils/routes';

import '@/stylesheets/app.css';

const Presenter: React.FC<NoProps> = () => (
  <div>
    <CssBaseline />
    <Navbar />
    <div className="app-container">
      <Routes>
        <Route path={ROUTES.HOME} element={<Home />} />
        <Route path={ROUTES.POKEDEX} element={<Pokemons />} />
        <Route path={ROUTES.POKEMON_DETAIL} element={<PokemonDetail />} />
        <Route path={ROUTES.MY_POKEMONS} element={<MyPokemons />} />
        <Route path={ROUTES.NETWORK_ERROR} element={<NetworkError />} />
        <Route element={<NotFound />} />
      </Routes>
    </div>
  </div>
);

const memoed = React.memo(Presenter);
export { memoed as Presenter };
