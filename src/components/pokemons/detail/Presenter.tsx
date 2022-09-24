import { Typography, Grid, Button } from '@mui/material';
import React from 'react';

import type { AddingPokemonState } from '@/store/addingPokemon/types';
import type { PokemonState } from '@/store/pokemons/types';
import { Hero } from './hero/Index';

interface Props {
  addingPokemon: AddingPokemonState;
  handleClick: (_pokemon: PokemonState) => void;
}

const Presenter: React.FC<Props> = ({ addingPokemon, handleClick }) =>
  addingPokemon != null ? (
    <div>
      <Grid container justifyContent="center">
        <Hero />
      </Grid>
      <Grid item xs={12} container justifyContent="center">
        <Button
          color="secondary"
          variant="contained"
          onClick={() => handleClick(addingPokemon)}
        >
          <Typography variant="h5">Add To My Pokemons</Typography>
        </Button>
      </Grid>
    </div>
  ) : null;

const memoed = React.memo(Presenter);
export { memoed as Presenter };
