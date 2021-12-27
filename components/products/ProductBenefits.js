import React from 'react'
import {Box, Grid, Typography} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
const useStyles = makeStyles(theme => ({
  box: {
    display: 'flex',
    justifyContent: 'center',
  },
  wrapper: {
    width: '80%',
    margin: '2em 0 5em 0',
    [theme.breakpoints.down('md')]: {
      margin: '1em 0 3em 0',
    },
  },
  container: {
    display: 'flex',
    // justifyContent: 'center',
    margin: '1em 0',
  },
  title: {
    fontFamily: 'Poppins',
    textTransform: 'uppercase',
    fontSize: '40px',
    fontWeight: '700',
    lineHeight: '60px',
    marginLeft: '10px',
    [theme.breakpoints.down('md')]: {
      fontSize: '30px',
      fontWeight: '700',
      lineHeight: '40px',
      textAlign: 'center',
    },
  },
  content1: {
    fontFamily: 'Poppins',
    fontSize: '15px',
    fontWeight: '400',
    lineHeight: '28px',
    marginTop: '.2em',
    marginBottom: '1em',
    [theme.breakpoints.down('md')]: {
      fontSize: '14px',
      lineHeight: '30px',
      textAlign: 'justify',
    },
  },
  products: {
    display: 'flex',
    // justifyContent: 'space-around',
    marginBottom: '2em',
  },
  product: {
    marginBottom: '20px',
  },
  card: {
    width: '90%',
    border: '1px solid #f3f3f3',
    // display: 'flex',
    // justifyContent: 'center',
    // alignItems: 'center',
    borderRadius: '5px',
    flexDirection: 'column',
    [theme.breakpoints.down('md')]: {
      padding: '1em',
      textAlign: 'left',
    },
  },
  cardContent: {
    color: '#999',
    fontFamily: 'Poppins',
    fontSize: '16px',
    fontWeight: '400',
    padding: '0 !important',
    // textAlign: 'left',
  },
  btn: {
    width: '100%',
  },
  media: {
    '&:hover': {
      transform: 'scale(1.5)',
    },
  },
}))

function ProductBenefits() {
  const classes = useStyles()
  return (
    <>
      <Box className={classes.box}>
        <Grid container className={classes.wrapper}>
          <Grid item md={6}>
            <Typography variant='h2' className={classes.title}>
              Product Overview
            </Typography>
          </Grid>
          <Grid item md={12} className={classes.products}>
            <Typography className={classes.content1}>All Products</Typography>
            {/* <Typography className={classes.content1}>Women</Typography>
            <Typography className={classes.content1}>Men</Typography>
            <Typography className={classes.content1}>Jewelry</Typography> */}
          </Grid>
          <Grid item container className={classes.container}>
            <Grid item xs={12} sm={12} md={3} className={classes.product}>
              <Card className={classes.card} elevation={0}>
                <CardMedia
                  component='img'
                  height='100%'
                  image='/images/girl.webp'
                  alt='product'
                  className={classes.media}
                />
                <CardContent>
                  <Typography
                    variant='h5'
                    component='div'
                    className={classes.cardContent}
                  >
                    Esprit Ruffle Shirt
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    size='small'
                    variant='contained'
                    color='primary'
                    fullWidth
                    className={classes.btn}
                  >
                    Quick View{' '}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={12} sm={12} md={3} className={classes.product}>
              <Card className={classes.card} elevation={0}>
                <CardMedia
                  component='img'
                  height='100%'
                  image='/images/girl.webp'
                  alt='product'
                />
                <CardContent>
                  <Typography
                    variant='h5'
                    component='div'
                    className={classes.cardContent}
                  >
                    Esprit Ruffle Shirt{' '}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    size='small'
                    variant='contained'
                    color='primary'
                    fullWidth
                    className={classes.btn}
                  >
                    Quick View{' '}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={12} sm={12} md={3} className={classes.product}>
              <Card className={classes.card} elevation={0}>
                <CardMedia
                  component='img'
                  height='100%'
                  image='/images/girl.webp'
                  alt='product'
                />
                <CardContent>
                  <Typography
                    variant='h5'
                    component='div'
                    className={classes.cardContent}
                  >
                    Esprit Ruffle Shirt
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    size='small'
                    variant='contained'
                    color='primary'
                    fullWidth
                    className={classes.btn}
                  >
                    Quick View{' '}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={12} sm={12} md={3} className={classes.product}>
              <Card className={classes.card} elevation={0}>
                <CardMedia
                  component='img'
                  height='100%'
                  image='/images/girl.webp'
                  alt='product'
                />
                <CardContent>
                  <Typography
                    variant='h5'
                    component='div'
                    className={classes.cardContent}
                  >
                    Esprit Ruffle Shirt
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    size='small'
                    variant='contained'
                    color='primary'
                    fullWidth
                    className={classes.btn}
                  >
                    Quick View{' '}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={12} sm={12} md={3} className={classes.product}>
              <Card className={classes.card} elevation={0}>
                <CardMedia
                  component='img'
                  height='100%'
                  image='/images/girl.webp'
                  alt='product'
                />
                <CardContent>
                  <Typography
                    variant='h5'
                    component='div'
                    className={classes.cardContent}
                  >
                    Esprit Ruffle Shirt
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    size='small'
                    variant='contained'
                    color='primary'
                    fullWidth
                    className={classes.btn}
                  >
                    Quick View{' '}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={12} sm={12} md={3} className={classes.product}>
              <Card className={classes.card} elevation={0}>
                <CardMedia
                  component='img'
                  height='100%'
                  image='/images/girl.webp'
                  alt='product'
                />
                <CardContent>
                  <Typography
                    variant='h5'
                    component='div'
                    className={classes.cardContent}
                  >
                    Esprit Ruffle Shirt
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    size='small'
                    variant='contained'
                    color='primary'
                    fullWidth
                    className={classes.btn}
                  >
                    Quick View{' '}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default ProductBenefits
