import { createMuiTheme } from '@material-ui/core/styles';

export default createMuiTheme({
  palette: {
    primary: {
      light: 'hsla(40,100%,60%,1)',
      main: 'hsla(40,100%,40%,1)',
      dark: 'hsla(40,100%,30%,1)',
    },
    secondary: {
      light: 'hsla(220,60%,45%,1)',
      main: 'hsla(220,40%,45%,1)',
      dark: 'hsla(220,40%,30%,1)',
    },
    background: {
      default: 'hsla(43,21%,94%, 01)',
    },
    text: {
      primary: 'hsla(45,10%,30%,1)',
      secondary: 'hsla(40,100%,40%,1)',
    },
  },
});
