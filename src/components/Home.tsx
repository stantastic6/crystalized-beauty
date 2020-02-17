import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ProductCard from './ProductCard';
import { products } from '../data/products';
import { Box, Grid, Paper, Typography } from '@material-ui/core';
import Carousel from './Carousel';
import Logo from '../assets/logos/logo.png';

const useStyles = makeStyles(theme => ({
  container: {
    paddingTop: 50,
    marginBottom: 50,
  },
  cta: {
    marginTop: 30,
    padding: 20,
  },
  email: {
    padding: 20,
    width: '100%',
  },
  productList: {
    paddingLeft: 50,
    [theme.breakpoints.down('xs')]: {
      paddingLeft: 20,
    },
  },
  logoContainer: {
    textAlign: 'center',
  },
}));

const Home: React.FC = () => {
  const classes = useStyles();

  return (
    <>
      <Carousel />
      <Grid container justify="center" alignItems="center">
        <Paper className={classes.cta}>
          <Typography variant="subtitle1" align="center" gutterBottom>
            Welcome to
          </Typography>
          <Typography variant="h2" component="h2" align="center">
            Crystalized Hair Collection
          </Typography>
          <Typography variant="h6" component="h6" align="center" gutterBottom>
            Luxurious, fantasy hair for every woman of all textures
          </Typography>
          <Box className={classes.logoContainer} component="div">
            <img src={Logo} alt="" />
          </Box>
        </Paper>
      </Grid>
      <Grid container className={classes.container}>
        {products.map((product, index) => (
          <Grid item xs={12} sm={6} lg={4} key={index} className={classes.productList}>
            <ProductCard
              name={product.name}
              prices={product.prices}
              url={product.url}
              key={index}
            />
          </Grid>
        ))}
        <Grid container justify="center" alignItems="center">
          <Paper className={classes.email}>
            <Typography variant="subtitle1" align="center" gutterBottom>
              To place an order, please email: <br />
              <a href="mailto:crystalizedhairquarters@gmail.com">
                crystalizedhairquarters@gmail.com
              </a>
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
