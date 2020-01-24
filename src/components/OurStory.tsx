import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  centeredGrid: {
    textAlign: 'center',
    marginTop: '100px',
  },
  bodyGrid: {
    marginTop: 30,
  },
}));

const OurStory: React.FC = () => {
  const classes = useStyles();

  return (
    // <Container>
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={12}>
          <Typography variant="h3" className={classes.centeredGrid} gutterBottom>
            Our Story
          </Typography>
        </Grid>
        <Grid container justify="center" className={classes.bodyGrid}>
          <Grid item xs={6}>
            <Typography variant="body1" gutterBottom>
              Crystalized Beauty Enterprises began as the brainchild of a pair best friends who decided to launch a
              business together based on their passion of exploring both inner and outer beauty. in the making,
              Crystalized Hair focuses on providing quality products and services to all clients, while cultivating an
              environment where self-discovery, purpose finding, and self-acceptance flourishes.
            </Typography>
          </Grid>
        </Grid>
        <Grid container justify="center" className={classes.bodyGrid}>
          <Grid item xs={6}>
            <Typography variant="body1" gutterBottom>
              At Crystalized Hair, your mane won’t be the only shining and glorious part of you – the same shall be for
              your soul. We invite you to shop with us, and discover not only your favorite hair texture or length, but
              also your dreams, visions and personal sense of beauty.
            </Typography>
          </Grid>
        </Grid>
        <Grid container justify="center" className={classes.bodyGrid}>
          <Grid item xs={6}>
            <Typography variant="body1" gutterBottom>
              Crystalize yourself...
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </div>
    // </Container>
  );
};

export default OurStory;
