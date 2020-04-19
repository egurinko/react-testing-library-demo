import React from 'react';
import { withStyles, WithStyles, StyleRules } from '@material-ui/core/styles';
import { BeatLoader } from 'react-spinners';
import {
  LoaderPropsMappedFromState,
  LoaderPropsMappedFromDispatch,
} from '../../containers/common/loader';

const styles = (): StyleRules => ({
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

type LoaderProps = LoaderPropsMappedFromState &
  LoaderPropsMappedFromDispatch &
  WithStyles<typeof styles>;

const Loader: React.FC<LoaderProps> = ({ isLoading, classes }) => (
  <>
    {isLoading ? (
      <div className={classes.modal}>
        <div className={classes.loader}>
          <BeatLoader size="20px" color="hsla(220,40%,45%,1)" />
        </div>
      </div>
    ) : null}
  </>
);

export default withStyles(styles)(Loader);
