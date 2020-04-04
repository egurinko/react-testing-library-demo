import React, { useEffect } from 'react';
import { withStyles, WithStyles, Theme, StyleRules } from '@material-ui/core/styles';
import { Card, CardActionArea, CardContent, Typography, Grid } from '@material-ui/core';
import { KeyboardArrowRight } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import {
  DetailPropsMappedFromState,
  DetailPropsMappedFromDispatch,
} from '../../containers/pokemons/detail';

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

type DetailProps = DetailPropsMappedFromState &
  DetailPropsMappedFromDispatch &
  WithStyles<typeof styles>;

const Detail: React.FC<DetailProps> = ({ classes }) => {
  return <div className={classes.container}>Deital</div>;
};

export default withStyles(styles)(Detail);
