import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { CssBaseline } from '@material-ui/core';
import NotFound from './components/NotFound';
import Index from './components/Index';
import Loader from './containers/common/loader';

const App: React.FC<{}> = () => (
  <div>
    <CssBaseline />
    <h1>react-testing-library demo</h1>
    <Loader />
    <Router>
      <Switch>
        <Route path="/" exact component={Index} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  </div>
);

export default App;
