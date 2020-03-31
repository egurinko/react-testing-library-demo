import React, { useEffect } from 'react';
import { withStyles, WithStyles, Theme, StyleRules } from '@material-ui/core/styles';
import { IndexPropsMappedFromState, IndexPropsMappedFromDispatch } from '../containers/index';

const styles = (theme: Theme): StyleRules => ({
  modal: {
    position: 'fixed',
    zIndex: 1500,
    top: 0,
    left: 0,
    height: '100%',
    width: '100%',
    background: 'rgba(0, 0, 0, .3)',
  },
  loader: {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
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
    <div>
      <h1>Index</h1>
    </div>
  );
};

export default withStyles(styles)(Index);
