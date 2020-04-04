import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { MuiThemeProvider } from '@material-ui/core/styles';
import theme from './utils/theme';
import AppContainer from './containers/app';
import configureStore from './store';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <AppContainer />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root'),
);
