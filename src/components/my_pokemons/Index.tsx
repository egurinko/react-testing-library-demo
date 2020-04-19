import React from 'react';
import { withStyles, WithStyles, Theme, StyleRules } from '@material-ui/core/styles';
import { Card, CardActionArea, CardContent, Typography, Grid } from '@material-ui/core';
import { NotificationImportant } from '@material-ui/icons';
import {
  IndexPropsMappedFromState,
  IndexPropsMappedFromDispatch,
} from '../../containers/my_pokemons/index';

const styles = (theme: Theme): StyleRules => ({
  container: {
    textAlign: 'center',
  },
  cards: {
    marginTop: theme.spacing(20),
  },
  notification: {
    fontSize: 50,
    margin: theme.spacing(5),
  },
  card: {
    width: 250,
    margin: theme.spacing(3),
  },
  image: {
    width: '100%',
    backgroundColor: theme.palette.primary.main,
  },
});

type IndexProps = IndexPropsMappedFromState &
  IndexPropsMappedFromDispatch &
  WithStyles<typeof styles>;

const Index: React.FC<IndexProps> = ({ myPokemons, classes }) => (
  <div className={classes.container}>
    <Typography variant="h4">My Pokemons</Typography>
    <Grid container justify="center" className={classes.cards}>
      {myPokemons.length === 0 ? (
        <Grid item xs={12}>
          <NotificationImportant className={classes.notification} />
          <Typography variant="h4">Please add pokemons !</Typography>
        </Grid>
      ) : (
        myPokemons.map((pokemon) => {
          return (
            <Grid item className={classes.card} key={pokemon.name}>
              <Card>
                <CardActionArea>
                  <img className={classes.image} src={pokemon.sprite!} />
                  <CardContent>
                    <Typography variant="h5">{pokemon.name}</Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          );
        })
      )}
    </Grid>
  </div>
);

export default withStyles(styles)(Index);
