import React, { useState, useEffect } from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { Typography, Grid, Button } from '@material-ui/core';
import { withStyles, WithStyles, Theme, StyleRules } from '@material-ui/core/styles';
import {
  DetailPropsMappedFromState,
  DetailPropsMappedFromDispatch,
} from '../../containers/pokemons/detail';
import Hero from './detail/Hero';
import { Pokemon } from '../../actions/thunks/types/fetchPokemons';

const styles = (theme: Theme): StyleRules => ({
  section: {
    margin: theme.spacing(3),
  },
  detailCard: {
    width: 400,
    margin: theme.spacing(3),
    padding: theme.spacing(4),
    border: `solid 3px ${theme.palette.primary.main}`,
  },
  detailSection: {
    marginBottom: theme.spacing(3),
  },
  chip: {
    marginRight: theme.spacing(2),
    height: 40,
    fontSize: theme.typography.h6.fontSize,
  },
  button: {
    width: 400,
    height: 60,
    margin: theme.spacing(2),
  },
});

type MatchParams = {
  id: string;
};

type DetailProps = DetailPropsMappedFromState &
  DetailPropsMappedFromDispatch &
  RouteComponentProps<MatchParams> &
  WithStyles<typeof styles>;

type LocalPokemon = Pokemon | null | undefined;

const Detail: React.FC<DetailProps> = ({ classes, match, pokemons, addPokemon }) => {
  const [pokemon, setPokemon] = useState<LocalPokemon>(null);
  useEffect(() => {
    const { id } = match.params;
    const pokemon = pokemons.find((pokemon) => pokemon.id === Number(id));
    setPokemon(pokemon);
  }, [match, pokemons]);

  return pokemon ? (
    <div className={classes.container}>
      <Grid container justify="center" className={classes.section}>
        <Hero pokemon={pokemon} />
      </Grid>
      <Grid item xs={12} container justify="center" className={classes.section}>
        <Button
          color="secondary"
          variant="contained"
          onClick={() => addPokemon(pokemon)}
          className={classes.button}
        >
          <Typography variant="h5">Add To My Pokemons</Typography>
        </Button>
      </Grid>
    </div>
  ) : null;
};

export default withRouter(withStyles(styles)(Detail));
