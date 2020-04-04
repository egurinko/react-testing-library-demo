import React, { useEffect } from 'react';
import { RouteComponentProps } from 'react-router';
import { withStyles, WithStyles, Theme, StyleRules } from '@material-ui/core/styles';
import { Card, CardActionArea, CardContent, Typography, Grid } from '@material-ui/core';
import {
  IndexPropsMappedFromState,
  IndexPropsMappedFromDispatch,
} from '../../containers/pokemons/index';
import Breadcrumbs from '../common/Breadcrumbs';

const styles = (theme: Theme): StyleRules => ({
  container: {
    textAlign: 'center',
  },
  card: {
    width: 250,
    margin: theme.spacing(3),
  },
  image: {
    width: '100%',
  },
});

type IndexProps = IndexPropsMappedFromState &
  IndexPropsMappedFromDispatch &
  RouteComponentProps<{}> &
  WithStyles<typeof styles>;

const Index: React.FC<IndexProps> = ({ pokemons, onClickGoDetail, classes, history }) => (
  <div className={classes.container}>
    <Breadcrumbs />
    <Typography variant="h4">Pokedex</Typography>
    <Grid container>
      {pokemons.map((pokemon) => {
        return (
          <Grid item className={classes.card} key={pokemon.name}>
            <Card>
              <CardActionArea onClick={() => onClickGoDetail(pokemon.id, history)}>
                <img className={classes.image} src={pokemon.sprites.front_default!} />
                <CardContent>
                  <Typography variant="h5">{pokemon.name}</Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  </div>
);

export default withStyles(styles)(Index);
