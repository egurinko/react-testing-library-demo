import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { withStyles, WithStyles, Theme, StyleRules } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import NotFound from './NotFound';
import Home from './Home';
import PokemonsIndex from '../containers/pokemons/index';
import PokemonsDetail from '../containers/pokemons/detail';
import MyPokemonsIndex from '../containers/my_pokemons/index';
import Loader from '../containers/common/loader';
import { AppPropsMappedFromState, AppPropsMappedFromDispatch } from '../containers/app';

const styles = (theme: Theme): StyleRules => ({
  appContainer: {
    padding: theme.spacing(5),
  },
});

type AppProps = AppPropsMappedFromState & AppPropsMappedFromDispatch & WithStyles<typeof styles>;

export const ROUTES = {
  Home: '/',
  Pokedex: '/pokemons',
  POKEMON_DETAIL: '/pokemons/:id',
  My_Pokemons: '/my_pokemons',
};

const App: React.FC<AppProps> = ({ fetchPokemons, classes }) => {
  useEffect(() => {
    fetchPokemons();
  }, []);

  return (
    <div>
      <CssBaseline />
      <Loader />
      <div className={classes.appContainer}>
        <Router>
          <Switch>
            <Route path={ROUTES.Home} exact component={Home} />
            <Route path={ROUTES.Pokedex} exact component={PokemonsIndex} />
            <Route path={ROUTES.POKEMON_DETAIL} exact component={PokemonsDetail} />
            <Route path={ROUTES.My_Pokemons} exact component={MyPokemonsIndex} />
            <Route component={NotFound} />
          </Switch>
        </Router>
      </div>
    </div>
  );
};

export default withStyles(styles)(App);
