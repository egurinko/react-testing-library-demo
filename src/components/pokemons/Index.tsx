import React, { useEffect } from 'react';
import { withStyles, WithStyles, Theme, StyleRules } from '@material-ui/core/styles';
import {
  Paper,
  TableRow,
  TableHead,
  Table,
  TableBody,
  TableCell,
  TableContainer,
} from '@material-ui/core';
import {
  IndexPropsMappedFromState,
  IndexPropsMappedFromDispatch,
} from '../../containers/pokemons/index';

const styles = (theme: Theme): StyleRules => ({
  container: {
    padding: theme.spacing(5),
  },
  table: {
    minWidth: 650,
  },
});

type IndexProps = IndexPropsMappedFromState &
  IndexPropsMappedFromDispatch &
  WithStyles<typeof styles>;

const Index: React.FC<IndexProps> = ({ fetchPokemons, pokemons, classes }) => {
  useEffect(() => {
    fetchPokemons();
  }, []);

  return (
    <div className={classes.container}>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>No.</TableCell>
              <TableCell align="right">Name</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {pokemons.map((pokemon, index) => (
              <TableRow key={pokemon.name}>
                <TableCell component="th" scope="row">
                  {index + 1}
                </TableCell>
                <TableCell align="right">{pokemon.name}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default withStyles(styles)(Index);
