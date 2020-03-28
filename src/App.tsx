import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NotFound from './components/NotFound';
import Index from './components/Index';

const App: React.FC<{}> = () => (
  <div>
    <h1>react-testing-library demo</h1>
    <Router>
      <Switch>
        <Route path="/" exact component={Index} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  </div>
);

export default App;
