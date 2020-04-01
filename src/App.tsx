import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { CssBaseline } from '@material-ui/core';
import NotFound from './components/NotFound';
import Home from './components/Home';
import PokemonsIndex from './containers/pokemons/index';
import Loader from './containers/common/loader';

const App: React.FC<{}> = () => (
  <div>
    <CssBaseline />
    <Loader />
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/pokemons" exact component={PokemonsIndex} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  </div>
);

export default App;
