import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { withStyles, WithStyles, Theme, StyleRules } from '@material-ui/core/styles';
import { Card, CardActionArea, CardContent, Typography, Grid } from '@material-ui/core';
import {
  IndexPropsMappedFromState,
  IndexPropsMappedFromDispatch,
} from '../../containers/pokemons/index';

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
    <Typography variant="h4">Pokedex</Typography>
    <Grid container>
      {pokemons.map((pokemon) => {
        return (
          <Grid item className={classes.card} key={pokemon.name}>
            <Card>
              <CardActionArea onClick={() => onClickGoDetail(pokemon.id, history)}>
                <img className={classes.image} src={pokemon.sprite!} alt="pokemonMainImage" />
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

export default withRouter(withStyles(styles)(Index));
