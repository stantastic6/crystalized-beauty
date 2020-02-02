import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import logo from '../../assets/images/logo.png';
import styled from 'styled-components';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    marginBottom: 90,
  },
  appbar: {
    height: 90,
    backgroundColor: 'transparent',
    color: 'black',
    position: 'absolute',
    overflow: 'hidden',
    zIndex: 1000,
  },
  fixedAppBar: {
    position: 'fixed',
    backgroundColor: '#f8f8f8',
    color: 'black',
    transform: 'translateY(0px)',
    transition: 'transform 500ms ease, background 500ms ease',
    '-webkit-transition': 'transform 500ms ease, background 500ms ease',
  },
  title: {
    flexGrow: 1,
  },
  logo: {
    height: 70,
  },
  navGrid: {
    flexDirection: 'row',
    margin: '0 auto',
  },
  navList: {
    listStyle: 'none',
  },
  navListItem: {
    float: 'left',
    width: 'auto',
  },
  navLink: {
    textDecoration: 'none',
  },
}));

const NavLink: React.FC = styled(ListItem)`
  float: left;
  width: auto;

  a {
    :visited {
      text-decoration: none;
      color: black;
    }
  }
`;

const Header: React.FC = () => {
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  });

  const handleScroll = () => {
    const windowScrollTop = window.pageYOffset;
    const header = document.getElementsByTagName('header')[0];

    if (windowScrollTop > header.offsetHeight + 5) {
      header.classList.remove(classes.appbar);
      header.classList.add(classes.fixedAppBar);
    } else {
      header.classList.remove(classes.fixedAppBar);
      header.classList.add(classes.appbar);
    }
  };

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="sticky" className={classes.appbar}>
        <Toolbar>
          <Grid container spacing={4} className={classes.navGrid} justify="flex-start">
            <IconButton>
              <img src={logo} className={classes.logo} alt="logo" />
            </IconButton>
          </Grid>

          <Grid container spacing={4} className={classes.navGrid} justify="flex-end">
            <List className={classes.navList}>
              <NavLink>
                <a href="/" className={classes.navLink}>
                  Home
                </a>
              </NavLink>
              <NavLink>
                <a href="/about" className={classes.navLink}>
                  Our Story
                </a>
              </NavLink>
              {/* <NavLink>Giving Back</NavLink>
              <NavLink>Testimonals</NavLink> */}
            </List>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
