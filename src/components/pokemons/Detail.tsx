import React, { useState, useEffect } from 'react';
import { RouteComponentProps } from 'react-router';
import { Typography, Grid, Chip } from '@material-ui/core';
import { withStyles, WithStyles, Theme, StyleRules } from '@material-ui/core/styles';
import {
  DetailPropsMappedFromState,
  DetailPropsMappedFromDispatch,
} from '../../containers/pokemons/detail';
import Breadcrumbs from '../common/Breadcrumbs';
import { Pokemon } from '../../actions/thunks/fetchPokemons';

const styles = (theme: Theme): StyleRules => ({
  container: {},
  hero: {},
  heroImage: {
    width: 300,
    margin: theme.spacing(3),
  },
  heroCard: {
    width: 400,
    height: 300,
    margin: theme.spacing(3),
    verticalAlign: 'middle',
  },
  heroId: {
    marginBottom: theme.spacing(2),
  },
  heroName: {
    marginBottom: theme.spacing(3),
  },
  heroChip: {
    marginRight: theme.spacing(2),
    height: 40,
    fontSize: theme.typography.h6.fontSize,
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

const Detail: React.FC<DetailProps> = ({ classes, match, pokemons }) => {
  const { id } = match.params;

  const [pokemon, setPokemon] = useState<LocalPokemon>(null);
  useEffect(() => {
    const pokemon = pokemons.find((pokemon) => pokemon.id === Number(id));
    setPokemon(pokemon);
  }, [match, pokemons]);

  return !!pokemon ? (
    <div className={classes.container}>
      <Breadcrumbs />
      <div>
        <Grid container justify="center" className={classes.hero}>
          <img src={pokemon.sprites.front_default!} className={classes.heroImage} />
          <Grid container direction="column" justify="center" className={classes.heroCard}>
            <Typography variant="h4" className={classes.heroId}>
              No. {pokemon.id}
            </Typography>
            <Typography variant="h2" className={classes.heroName}>
              {pokemon.name}
            </Typography>
            <div>
              {pokemon.types.map((type) => {
                return (
                  <Chip
                    size="medium"
                    label={type.type.name}
                    key={type.slot}
                    className={classes.heroChip}
                  />
                );
              })}
            </div>
          </Grid>
        </Grid>
      </div>
      {id}
    </div>
  ) : null;
};

export default withStyles(styles)(Detail);
