import React, { useState, useEffect } from 'react';
import { RouteComponentProps } from 'react-router';
import { Typography, Grid, Chip } from '@material-ui/core';
import { withStyles, WithStyles, Theme, StyleRules } from '@material-ui/core/styles';
import {
  DetailPropsMappedFromState,
  DetailPropsMappedFromDispatch,
} from '../../containers/pokemons/detail';
import Breadcrumbs from '../common/Breadcrumbs';
import { Pokemon } from '../../actions/thunks/types/fetchPokemons';

const styles = (theme: Theme): StyleRules => ({
  container: {},
  hero: {
    margin: theme.spacing(3),
  },
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
  detail: {
    margin: theme.spacing(3),
  },
  detailCard: {
    width: 400,
    margin: `0 ${theme.spacing(3)}px`,
    padding: theme.spacing(4),
    border: `solid 3px ${theme.palette.primary.main}`,
  },
  detailSection: {
    marginBottom: theme.spacing(3),
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
              {pokemon.types.map((type) => (
                <Chip
                  size="medium"
                  label={type.type.name}
                  key={type.slot}
                  className={classes.chip}
                />
              ))}
            </div>
          </Grid>
        </Grid>
        <Grid container justify="center" className={classes.detail}>
          <Grid container direction="column" className={classes.detailCard}>
            <Typography variant="h5" className={classes.detailSection}>
              Height : {pokemon.height}
            </Typography>
            <Typography variant="h5" className={classes.detailSection}>
              Weight : {pokemon.weight}
            </Typography>
            <div className={classes.detailSection}>
              <Typography variant="h5" className={classes.detailSection}>
                Abilities :
              </Typography>
              {pokemon.abilities.map((ability, index) => (
                <Chip
                  size="medium"
                  label={ability.ability.name}
                  key={`ability-${index}`}
                  className={classes.chip}
                />
              ))}
            </div>
          </Grid>
          <Grid container direction="column" className={classes.detailCard}>
            {pokemon.stats.map((stat) => (
              <Typography variant="h5" className={classes.detailSection} key={stat.stat.name}>
                {stat.stat.name} : {stat.base_stat}
              </Typography>
            ))}
          </Grid>
        </Grid>
      </div>
      {id}
    </div>
  ) : null;
};

export default withStyles(styles)(Detail);
