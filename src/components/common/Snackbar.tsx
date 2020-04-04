import React from 'react';
import { withStyles, WithStyles, Theme, StyleRules } from '@material-ui/core/styles';
import { Snackbar as SnackbarComponent } from '@material-ui/core';
import { CheckCircle } from '@material-ui/icons';
import { Alert, AlertTitle } from '@material-ui/lab';
import { Snackbar as SnackbarType } from '../../reducers/snackbar';

const styles = (theme: Theme): StyleRules => ({
  alert: {
    width: 300,
    display: 'flex',
    alignItems: 'center',
  },
  alertTitle: {
    fontSize: theme.typography.h5.fontSize,
    margin: 0,
  },
  alertIcon: {
    fontSize: theme.typography.h5.fontSize,
  },
});

type OwnProps = {
  snackbar: SnackbarType;
  handleClose: () => void;
};

type SnackbarProps = OwnProps & WithStyles<typeof styles>;

const Snackbar: React.FC<SnackbarProps> = ({ snackbar, handleClose, classes }) => (
  <SnackbarComponent
    anchorOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    open={snackbar.isOpen}
    autoHideDuration={3000}
    onClose={handleClose}
  >
    <Alert
      iconMapping={{ success: <CheckCircle className={classes.alertIcon} /> }}
      severity="success"
      className={classes.alert}
    >
      <AlertTitle className={classes.alertTitle}>{snackbar.message}</AlertTitle>
    </Alert>
  </SnackbarComponent>
);

export default withStyles(styles)(Snackbar);
