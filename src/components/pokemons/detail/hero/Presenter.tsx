import { Typography, Grid } from '@mui/material';
import React from 'react';
import type { AddingPokemonState } from '@/store/addingPokemon/types';

interface Props {
  addingPokemon: AddingPokemonState;
}

const Presenter: React.FC<Props> = ({ addingPokemon }) =>
  addingPokemon != null ? (
    <>
      <img src={addingPokemon.sprite ?? ''} alt={addingPokemon.name} />
      <Grid container direction="column" justifyContent="center">
        <Typography variant="h4">No. {addingPokemon.id}</Typography>
        <Typography variant="h2">{addingPokemon.name}</Typography>
      </Grid>{' '}
    </>
  ) : null;

const memoed = React.memo(Presenter);
export { memoed as Presenter };
