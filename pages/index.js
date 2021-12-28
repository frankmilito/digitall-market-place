import {Box, Button, Grid, Typography, makeStyles} from '@material-ui/core'
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
      padding: '0 2em',
      background: '#222',
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
      fontSize: '24px',
      lineHeight: '50px',
      textAlign: 'justify',
      color: '#fff',
      marginBottom: '10px',
    },
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
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
      textAlign: 'justify',
      color: '#fff',
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '2.2em',
      textAlign: 'center',
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
