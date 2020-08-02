import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { CssBaseline } from '@material-ui/core';
import Navbar from './Navbar';
import NotFound from './NotFound';
import NetworkError from './NetworkError';
import Home from './home/Index';
import PokemonsIndex from '../containers/pokemons/index';
import PokemonsDetail from '../containers/pokemons/detail';
import MyPokemonsIndex from '../containers/my_pokemons/index';
import { AppPropsMappedFromState, AppPropsMappedFromDispatch } from '../containers/app';
import '../stylesheets/app.css';

type AppProps = AppPropsMappedFromState & AppPropsMappedFromDispatch;

export const ROUTES = {
  HOME: '/',
  POKEDEX: '/pokemons',
  POKEMON_DETAIL: '/pokemons/:id',
  MY_POKEMONS: '/my_pokemons',
  NETWORK_ERROR: '/network_error',
};

const App: React.FC<AppProps> = ({ fetchPokemons }) => {
  useEffect(() => {
    fetchPokemons();
  }, [fetchPokemons]);

  return (
    <div>
      <CssBaseline />
      <Navbar />
      <div className="app-container">
        <Switch>
          <Route path={ROUTES.HOME} exact component={Home} />
          <Route path={ROUTES.POKEDEX} exact component={PokemonsIndex} />
          <Route path={ROUTES.POKEMON_DETAIL} exact component={PokemonsDetail} />
          <Route path={ROUTES.MY_POKEMONS} exact component={MyPokemonsIndex} />
          <Route path={ROUTES.NETWORK_ERROR} exact component={NetworkError} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </div>
  );
};

export default App;
