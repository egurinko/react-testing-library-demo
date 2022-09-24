import { Typography, Grid } from '@mui/material';
import React from 'react';
import type { AddingPokemonState } from '@/store/addingPokemon/types';

interface Props {
  addingPokemon: AddingPokemonState;
}

const Presenter: React.FC<Props> = ({ addingPokemon }) =>
  addingPokemon != null ? (
    <Grid container direction="row" justifyContent="center">
      <Grid item>
        <img
          width={200}
          src={addingPokemon.sprite ?? ''}
          alt={addingPokemon.name}
        />
      </Grid>
      <Grid item mt={6}>
        <Typography variant="h4">No. {addingPokemon.id}</Typography>
        <Typography variant="h2">{addingPokemon.name}</Typography>
      </Grid>
    </Grid>
  ) : null;

const memoed = React.memo(Presenter);
export { memoed as Presenter };
