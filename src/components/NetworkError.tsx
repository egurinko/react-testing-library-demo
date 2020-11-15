import React from 'react';
import { withStyles, WithStyles, StyleRules, Theme } from '@material-ui/core/styles';
import { Typography, Grid } from '@material-ui/core';

const styles = (theme: Theme): StyleRules => ({
  title: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  pica: {
    color: theme.palette.primary.light,
  },
  logo: {
    width: 400,
  },
  detail: {
    textAlign: 'center',
  },
});

type NetworkErrorProps = WithStyles<typeof styles>;

const NetworkError: React.FC<NetworkErrorProps> = ({ classes }) => (
  <Grid container justify="space-around">
    <Grid item xs={6} className={classes.title}>
      <Typography variant="h1" className={classes.pica}>
        Pica!!
      </Typography>
    </Grid>
    <Grid item xs={6}>
      <img
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
        alt="picachu"
        className={classes.logo}
      />
    </Grid>
    <Grid item xs={12} className={classes.detail}>
      <Typography variant="h5">Maybe internet connection is not good.</Typography>
    </Grid>
  </Grid>
);

export default withStyles(styles)(NetworkError);
