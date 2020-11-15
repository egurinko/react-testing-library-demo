import React, { ReactElement } from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles';
import theme from '../../utils/theme';

export default (ui: ReactElement): ReactElement => {
  return <MuiThemeProvider theme={theme}>{ui}</MuiThemeProvider>;
};
