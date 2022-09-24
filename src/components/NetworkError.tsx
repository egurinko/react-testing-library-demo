import { Typography, Grid } from '@mui/material';
import React from 'react';

const NetworkError: React.FC<NoProps> = () => (
  <Grid container justifyContent="space-around">
    <Grid item xs={6}>
      <Typography variant="h1">Pica!!</Typography>
    </Grid>
    <Grid item xs={6}>
      <img
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
        alt="picachu"
      />
    </Grid>
    <Grid item xs={12}>
      <Typography variant="h5">
        Maybe internet connection is not good.
      </Typography>
    </Grid>
  </Grid>
);

const memoed = React.memo(NetworkError);
export { memoed as NetworkError };
