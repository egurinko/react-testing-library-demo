import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  Box
} from '@mui/material';
import React from 'react';
import type { PokemonState } from '@/store/pokemons/types';

interface Props {
  pokemons: PokemonState[];
  handleClick: (_pokemonId: number) => void;
}

const Presenter: React.FC<Props> = ({ pokemons, handleClick }) => (
  <Box mx={5}>
    <Typography variant="h4" mx="auto">
      Pokedex
    </Typography>
    <Grid container spacing={4}>
      {pokemons.map((pokemon) => (
        <Grid item xs={3} flexGrow={0} key={pokemon.name}>
          <Card>
            <CardActionArea onClick={() => handleClick(pokemon.id)}>
              <CardMedia
                component="img"
                image={pokemon.sprite ?? ''}
                alt={pokemon.name}
              />
              <CardContent sx={{ textAlign: 'center' }}>
                <Typography variant="h5">{pokemon.name}</Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      ))}
    </Grid>
  </Box>
);

const memoed = React.memo(Presenter);
export { memoed as Presenter };
