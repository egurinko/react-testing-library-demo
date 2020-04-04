import React, { useEffect } from 'react';
import { RouteComponentProps } from 'react-router';
import { withStyles, WithStyles, Theme, StyleRules } from '@material-ui/core/styles';
import { Card, CardActionArea, CardContent, Typography, Grid } from '@material-ui/core';
import { KeyboardArrowRight } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import {
  IndexPropsMappedFromState,
  IndexPropsMappedFromDispatch,
} from '../../containers/pokemons/index';

const styles = (theme: Theme): StyleRules => ({
  link: {
    color: theme.palette.secondary.main,
    textAlign: 'left',
  },
  backIcon: {
    fontSize: 'large',
  },
  container: {
    padding: theme.spacing(5),
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

const Index: React.FC<IndexProps> = ({
  fetchPokemons,
  pokemons,
  onClickGoDetail,
  classes,
  history,
}) => {
  useEffect(() => {
    fetchPokemons();
  }, []);

  return (
    <div className={classes.container}>
      <Link to="/" className={classes.link}>
        <Typography variant="h6">
          <KeyboardArrowRight className={classes.backIcon} />
          Back to Home
        </Typography>
      </Link>
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
};

export default withStyles(styles)(Index);
