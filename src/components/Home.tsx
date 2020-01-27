import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import ProductCard from './ProductCard';
import { products } from '../data/products';

const useStyles = makeStyles(theme => ({
  container: {
    paddingTop: 50,
    marginBottom: 50,
  },
  productContainer: {
    flexGrow: 1,
    display: 'inline-flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
}));

const Home: React.FC = () => {
  const classes = useStyles();

  return (
    <Container maxWidth={false} className={classes.container}>
      <div>Carousel</div>
      <div className={classes.productContainer}>
        {products.map((product, index) => (
          <ProductCard
            name={product.name}
            description={product.description}
            price={product.price}
            url={product.url}
            key={index}
          />
        ))}
      </div>
    </Container>
  );
};

export default Home;
