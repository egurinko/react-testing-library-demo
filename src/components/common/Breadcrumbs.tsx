import React, { useEffect, useState } from 'react';
import { RouteComponentProps } from 'react-router';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { withStyles, WithStyles, Theme, StyleRules } from '@material-ui/core/styles';
import { Breadcrumbs, Typography } from '@material-ui/core';
import { KeyboardArrowRight } from '@material-ui/icons';
import { ROUTES } from '../App';

const styles = (theme: Theme): StyleRules => ({
  backIcon: {
    fontSize: 'x-large',
    color: theme.palette.primary.main,
  },
  breadcrumb: {
    color: theme.palette.secondary.main,
    textAlign: 'left',
  },
});

type BreadcrumbProps = RouteComponentProps<{}> & WithStyles<typeof styles>;

type BreadcrumType = {
  url: string;
  name: string;
};

const Breadcrumb: React.FC<BreadcrumbProps> = ({ classes, match }) => {
  const [breadcrumbs, setBreadcrumbs] = useState<BreadcrumType[]>([]);

  useEffect(() => {
    const breadcrumbs = getBreadcrumbs();
    setBreadcrumbs(breadcrumbs);
  }, [match]);

  const getBreadcrumbs = (): BreadcrumType[] => {
    const splitedUrls = match.url.split('/');

    const joinedUrls = getJoinedUrls(splitedUrls);
    joinedUrls.pop();

    return getNameMappedUrls(joinedUrls);
  };

  const getJoinedUrls = (splitedUrls: string[]): string[] => {
    return splitedUrls.map((_, index) => {
      return splitedUrls.reduce((acc, currentValue, currentIndex) => {
        if (currentIndex === 0) {
          return acc;
        }
        if (index >= currentIndex) {
          return acc + '/' + currentValue;
        }
        return acc;
      }, '');
    });
  };

  const getNameMappedUrls = (joinedUrls: string[]): BreadcrumType[] => {
    return joinedUrls.map((url) => ({
      url,
      name: getMappedName(url),
    }));
  };

  const getMappedName = (url: string): string => {
    let name = 'Home';
    for (const key in ROUTES) {
      // @ts-ignore: Object defined by const emits error
      if (ROUTES[key] === url) {
        name = key;
      }
    }
    return name;
  };

  return (
    <>
      <Breadcrumbs
        separator={<KeyboardArrowRight className={classes.backIcon} />}
        aria-label="breadcrumb"
      >
        {breadcrumbs.map((breadcrumb) => {
          return (
            <Link to={breadcrumb.url} className={classes.breadcrumb} key={breadcrumb.url}>
              <Typography variant="h6">{breadcrumb.name}</Typography>
            </Link>
          );
        })}
      </Breadcrumbs>
    </>
  );
};

export default withRouter(withStyles(styles)(Breadcrumb));
