import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import { Product } from '../data/products';

const useStyles = makeStyles(theme => ({
  card: {
    minWidth: 248,
    marginRight: 50,
    marginBottom: 50,
  },
  productImage: {
    height: 0,
    paddingTop: '56.25%',
  },
  description: {
    paddingBottom: '0px !important',
  },
  price: {
    display: 'flex',
    justifyContent: 'flex-end',
    paddingBottom: '10px !important',
  },
}));

const ProductCard: React.FC<Product> = ({ name, price, url }) => {
  const classes = useStyles();
  const formattedPrice: string = (price / 100).toFixed(2);

  return (
    <Card className={classes.card}>
      <CardMedia className={classes.productImage} image={url} />
      <CardContent className={classes.description}>{name}</CardContent>
      <CardContent className={classes.price}>${formattedPrice}</CardContent>
    </Card>
  );
};

export default ProductCard;
