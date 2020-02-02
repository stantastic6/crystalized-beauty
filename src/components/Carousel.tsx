import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useState, useEffect } from 'react';
import posed, { PoseGroup } from 'react-pose';
import Group1Image from '../assets/images/group_1.jpg';
import { Grid } from '@material-ui/core';

const AnimatedDiv = posed.div({
  enter: {
    opacity: 1,
    transition: {
      duration: 700,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 700,
    },
  },
});

const images = [Group1Image];

const useStyles = makeStyles(theme => ({
  carousel: {
    position: 'relative',
    display: 'inline-flex',
    width: '100%',
  },
  carouselImage: {
    width: '100%',
    height: 'auto',
  },
}));

const Carousel: React.FC = () => {
  const classes = useStyles();
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const carouselTimer = setTimeout(() => {
      setSlideIndex((slideIndex + 1) % images.length);
    }, 5000);

    return () => {
      clearTimeout(carouselTimer);
    };
  });

  return (
    <Grid container className={classes.carousel}>
      <Grid item xs={12}>
        <PoseGroup>
          {images.map(
            (image, index) =>
              index === slideIndex && (
                <AnimatedDiv key={index}>
                  <img src={image} className={classes.carouselImage} alt="" />
                </AnimatedDiv>
              )
          )}
        </PoseGroup>
      </Grid>
    </Grid>
  );
};

export default Carousel;
