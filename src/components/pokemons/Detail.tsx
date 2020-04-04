import React, { useState, useEffect } from 'react';
import { RouteComponentProps } from 'react-router';
import { withStyles, WithStyles, Theme, StyleRules } from '@material-ui/core/styles';
import {
  DetailPropsMappedFromState,
  DetailPropsMappedFromDispatch,
} from '../../containers/pokemons/detail';
import Breadcrumbs from '../common/Breadcrumbs';
import { Pokemon } from '../../actions/thunks/fetchPokemons';

const styles = (theme: Theme): StyleRules => ({
  container: {},
  hero: {
    textAlign: 'center',
  },
});

type MatchParams = {
  id: string;
};

type DetailProps = DetailPropsMappedFromState &
  DetailPropsMappedFromDispatch &
  RouteComponentProps<MatchParams> &
  WithStyles<typeof styles>;

const initialPokemon: Pokemon = {
  abilities: [],
  base_experience: 0,
  forms: [],
  game_indices: [],
  height: 0,
  id: 0,
  is_default: false,
  held_items: [],
  location_area_encounters: '',
  moves: [],
  name: '',
  order: 0,
  species: {
    name: '',
    url: '',
  },
  sprites: {
    back_default: '',
    back_female: '',
    back_shiny: '',
    back_shiny_female: '',
    front_default: '',
    front_female: '',
    front_shiny: '',
    front_shiny_female: '',
  },
  stats: [],
  types: [],
  weight: 0,
};

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
        <div className={classes.hero}>
          <img src={pokemon.sprites.front_default!} />
        </div>
      </div>
      {id}
    </div>
  ) : null;
};

export default withStyles(styles)(Detail);
