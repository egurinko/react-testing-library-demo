import { createMuiTheme } from '@material-ui/core/styles';

export default createMuiTheme({
  palette: {
    primary: {
      light: 'hsla(15, 90%, 60%, 1)',
      main: 'hsla(15, 70%, 60%, 1)',
      dark: 'hsla(15, 70%, 40%, 1)',
    },
    secondary: {
      light: 'hsla(180, 60%, 65%, 1)',
      main: 'hsla(180, 40%, 65%, 1)',
      dark: 'hsla(180, 40%, 45%, 1)',
    },
    background: {
      default: 'hsla(170, 50%, 50%, 1)',
    },
    text: {
      primary: 'hsla(0, 100%, 100%, 1)',
    },
  },
});
