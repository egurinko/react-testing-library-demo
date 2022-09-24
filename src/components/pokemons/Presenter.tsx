import {
  Card,
  CardActionArea,
  CardContent,
  Typography,
  Grid
} from '@mui/material';
import React from 'react';
import type { PokemonState } from '@/store/pokemons/types';

interface Props {
  pokemons: PokemonState[];
  handleClick: (_pokemonId: number) => void;
}

const Presenter: React.FC<Props> = ({ pokemons, handleClick }) => (
  <div>
    <Typography variant="h4">Pokedex</Typography>
    <Grid container>
      {pokemons.map((pokemon) => (
        <Grid item key={pokemon.name}>
          <Card>
            <CardActionArea onClick={() => handleClick(pokemon.id)}>
              <img src={pokemon.sprite ?? ''} alt="pokemonMainImage" />
              <CardContent>
                <Typography variant="h5">{pokemon.name}</Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      ))}
    </Grid>
  </div>
);

const memoed = React.memo(Presenter);
export { memoed as Presenter };
