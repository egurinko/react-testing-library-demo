import React from 'react';
import { RouteComponentProps } from 'react-router';
import { withStyles, WithStyles, Theme, StyleRules } from '@material-ui/core/styles';
import {
  DetailPropsMappedFromState,
  DetailPropsMappedFromDispatch,
} from '../../containers/pokemons/detail';

const styles = (theme: Theme): StyleRules => ({
  container: {
    textAlign: 'center',
  },
});

type MatchParams = {
  id: string;
};

type DetailProps = DetailPropsMappedFromState &
  DetailPropsMappedFromDispatch &
  RouteComponentProps<MatchParams> &
  WithStyles<typeof styles>;

const Detail: React.FC<DetailProps> = ({ classes, match }) => {
  const { id } = match.params;
  return <div className={classes.container}>{id}</div>;
};

export default withStyles(styles)(Detail);
