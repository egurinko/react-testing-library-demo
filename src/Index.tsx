import { ThemeProvider } from '@mui/material';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { App } from '@/components/app/Index';
import { store } from '@/store';
import theme from '@/utils/theme';

const mounted = document.getElementById('root');

if (mounted != null) {
  const root = ReactDOM.createRoot(mounted);
  root.render(
    <Provider store={store}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  );
}
