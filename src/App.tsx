import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { withStyles, WithStyles, Theme, StyleRules } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import NotFound from './components/NotFound';
import Home from './components/Home';
import PokemonsIndex from './containers/pokemons/index';
import PokemonsDetail from './containers/pokemons/detail';
import Loader from './containers/common/loader';

const styles = (theme: Theme): StyleRules => ({
  appContainer: {
    padding: theme.spacing(5),
  },
});

type AppProps = WithStyles<typeof styles>;

const App: React.FC<AppProps> = ({ classes }) => (
  <div>
    <CssBaseline />
    <Loader />
    <div className={classes.appContainer}>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/pokemons" exact component={PokemonsIndex} />
          <Route path="/pokemons/:id" exact component={PokemonsDetail} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </div>
  </div>
);

export default withStyles(styles)(App);
