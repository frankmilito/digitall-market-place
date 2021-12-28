import {
  Box,
  Button,
  Grid,
  Typography,
  makeStyles,
  Card,
  CircularProgress,
} from '@material-ui/core'
import React, {useState, useEffect} from 'react'
import Footer from '../components/Footer'
import ProductOverview from '../components/products/ProductOverview'
import Link from 'next/link'
// import background from './images/christian.png'

const useStyles = makeStyles(theme => ({
  main: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  wrapper: {
    background: ` linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
    url('/images/christian1.png');`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    position: 'relative',
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      // marginBottom: "8em",
      padding: '0 2em',
      // height: '100%',
      background: ` linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6  )),
    url('/images/christian1.png');`,
    },
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0 3em',
    width: '100%',
    [theme.breakpoints.down('md')]: {
      padding: 0,
    },
  },
  title: {
    fontFamily: 'Poppins',
    fontSize: '28px',
    fontWeight: '500',
    lineHeight: '30px',
    marginBottom: '20px',
    textTransform: 'capitalize',
    [theme.breakpoints.down('md')]: {
      fontSize: '18px',
      lineHeight: '50px',
      textAlign: 'center',
      color: '#fff',
    },
  },
  content: {
    fontFamily: 'Playfair Display',
    fontSize: '3.5em',
    fontWeight: '700',
    lineHeight: '50px',
    marginTop: '.2em',
    marginBottom: '1em',
    [theme.breakpoints.down('md')]: {
      fontSize: '3em',
      textAlign: 'center',
      color: '#fff',
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '2.2em',
    },
  },
  button: {
    borderRadius: '50px',
    background: '#717fe0',
    color: '#fff',
    padding: '15px 40px',
    textTransform: 'uppercase',

    fontFamily: 'Poppins',
    fontSize: '18px',
    fontWeight: '500',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      fontSize: '14px',
    },
  },

  products: {
    width: '80%',
    position: 'relative',
    top: '-120px',
    [theme.breakpoints.down('sm')]: {
      top: '0',
      width: '100%',
    },
  },
  order2: {
    [theme.breakpoints.down('sm')]: {
      order: '2',
    },
  },
  order1: {
    [theme.breakpoints.down('sm')]: {
      order: '1',
    },
  },
}))
export default function Home() {
  const classes = useStyles()
  return (
    <>
      <div className={classes.main}>
        <Box className={classes.wrapper}>
          <Grid container className={classes.container}>
            <Grid item xs={12} sm={12} md={5} className={classes.order2}>
              <Box>
                <Typography variant='h3' className={classes.title}>
                  New Season
                </Typography>
                <Typography variant='body1' className={classes.content}>
                  JACKETS & COATS
                </Typography>
                <Link href='/products'>
                  <Button variat='contained' className={classes.button}>
                    Shop Now
                  </Button>
                </Link>
              </Box>
            </Grid>
            <Grid
              item
              item
              xs={12}
              sm={12}
              md={5}
              className={classes.order1}
            ></Grid>
          </Grid>
        </Box>

        <Box>
          <ProductOverview />
        </Box>
      </div>
    </>
  )
}
