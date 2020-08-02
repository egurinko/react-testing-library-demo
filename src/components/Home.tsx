import React from 'react';
import { withStyles, WithStyles, Theme, StyleRules } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { ROUTES } from './App';

const styles = (theme: Theme): StyleRules => ({
  homeRoot: {
    paddingTop: 200,
  },
  link: {
    margin: theme.spacing(8),
    color: theme.palette.secondary.main,
  },
});

type HomeProps = WithStyles<typeof styles>;

const Home: React.FC<HomeProps> = ({ classes }) => (
  <Grid
    container
    direction="column"
    justify="center"
    alignItems="center"
    className={classes.homeRoot}
  >
    <Grid item>
      <Typography variant="h1">Welcome to Pokemon world!</Typography>
    </Grid>
    <Grid item container justify="center">
      <Link to={ROUTES.POKEDEX} className={classes.link}>
        <Typography variant="h4">Pokedex</Typography>
      </Link>
      <Link to={ROUTES.MY_POKEMONS} className={classes.link}>
        <Typography variant="h4">My Pokemons</Typography>
      </Link>
    </Grid>
  </Grid>
);

export default withStyles(styles)(Home);
