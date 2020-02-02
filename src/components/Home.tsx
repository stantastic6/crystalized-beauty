import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ProductCard from './ProductCard';
import { products } from '../data/products';
import { Grid, Paper } from '@material-ui/core';
import Carousel from './Carousel';

const useStyles = makeStyles(theme => ({
  container: {
    paddingTop: 50,
    marginBottom: 50,
  },
  cta: {
    marginTop: 30,
  },
  productList: {
    paddingLeft: 20,
  },
}));

const Home: React.FC = () => {
  const classes = useStyles();

  return (
    <>
      <Carousel />
      <Paper className={classes.cta}>Stan</Paper>
      <Grid container className={classes.container}>
        {products.map((product, index) => (
          <Grid item xs={12} sm={4} key={index} className={classes.productList}>
            <ProductCard
              name={product.name}
              description={product.description}
              price={product.price}
              url={product.url}
              key={index}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Home;
