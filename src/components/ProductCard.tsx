import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import { Product } from '../data/products';
import { Grid } from '@material-ui/core';
import posed from 'react-pose';

const FadeableProductImage = posed(CardMedia)({
  exit: { opacity: 0 },
  enter: { opacity: 1 },
});

const FadeableProductPrices = posed(Grid)({
  exit: { opacity: 0 },
  enter: { opacity: 1 },
});

const FadeableProductName = posed(CardContent)({
  exit: { opacity: 0 },
  enter: { opacity: 1 },
});

const useStyles = makeStyles(theme => ({
  card: {
    minWidth: 248,
    marginRight: 50,
    marginBottom: 50,
    overflowY: 'scroll',
    [theme.breakpoints.down('xs')]: {
      marginRight: 20,
    },
  },
  productImage: {
    height: 0,
    paddingTop: '56.25%',
  },
  description: {
    paddingBottom: '0px !important',
  },
  contentContainer: {
    position: 'relative',
    padding: 0,
  },
  pricingHeader: {
    display: 'flex',
    justifyContent: 'center',
    paddingTop: '12px',
    fontWeight: 600,
  },
  pricesContainer: {
    position: 'absolute',
    top: 0,
  },
  price: {
    display: 'flex',
    justifyContent: 'center',
    padding: '12px 0',
  },
}));

const ProductCard: React.FC<Product> = ({ name, prices, url }) => {
  let cardRef: React.RefObject<HTMLDivElement> = React.createRef();
  const classes = useStyles();
  const formattedPrice = (amount: number): string => `$${(amount / 100).toFixed(2)}`;
  const [imageVisible, setImageVisible] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      cardRef.current?.scrollTo(0, 0);
    }, 300);
  }, [imageVisible, cardRef]);

  return (
    // TODO: Separate price into its own card
    <Card
      className={classes.card}
      onMouseOver={() => setImageVisible(false)}
      onMouseLeave={() => setImageVisible(true)}
      ref={cardRef}
    >
      <CardContent className={classes.contentContainer}>
        <FadeableProductImage
          className={classes.productImage}
          image={url}
          pose={imageVisible ? 'enter' : 'exit'}
        />
        <FadeableProductPrices
          container
          className={classes.pricesContainer}
          pose={imageVisible ? 'exit' : 'enter'}
        >
          <Grid item xs={12} className={classes.pricingHeader}>
            Pricing (per bundle):
          </Grid>
          {prices.map((price, index) => (
            <Grid item xs={6} key={index} className={classes.price}>
              {`${price.length}": ${formattedPrice(price.amount)}`}
            </Grid>
          ))}
        </FadeableProductPrices>
      </CardContent>
      <FadeableProductName className={classes.description} pose={imageVisible ? 'enter' : 'exit'}>
        {name}
      </FadeableProductName>
    </Card>
  );
};

export default ProductCard;
