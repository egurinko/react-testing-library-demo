import React from 'react';
import { Typography, Grid, Chip } from '@material-ui/core';
import { withStyles, WithStyles, Theme, StyleRules } from '@material-ui/core/styles';
import { Pokemon } from '../../../actions/thunks/types/fetchPokemons';

const styles = (theme: Theme): StyleRules => ({
  heroImage: {
    width: 300,
    margin: `0 ${theme.spacing(3)}px`,
  },
  heroCard: {
    width: 400,
    height: 300,
    margin: `0 ${theme.spacing(3)}px`,
    verticalAlign: 'middle',
  },
  heroId: {
    marginBottom: theme.spacing(2),
  },
  heroName: {
    marginBottom: theme.spacing(3),
  },
  chip: {
    marginRight: theme.spacing(2),
    height: 40,
    fontSize: theme.typography.h6.fontSize,
  },
});

type OwnProps = {
  pokemon: Pokemon;
};

type HeroProps = OwnProps & WithStyles<typeof styles>;

const Hero: React.FC<HeroProps> = ({ classes, pokemon }) => (
  <>
    <img src={pokemon.sprites.front_default!} className={classes.heroImage} />
    <Grid container direction="column" justify="center" className={classes.heroCard}>
      <Typography variant="h4" className={classes.heroId}>
        No. {pokemon.id}
      </Typography>
      <Typography variant="h2" className={classes.heroName}>
        {pokemon.name}
      </Typography>
    </Grid>
  </>
);

export default withStyles(styles)(Hero);
