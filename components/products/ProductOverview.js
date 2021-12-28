import React, {useEffect, useState} from 'react'
import {
  Box,
  CircularProgress,
  Grid,
  MenuItem,
  Typography,
} from '@material-ui/core'
import Head from 'next/head'
import TextField from '@material-ui/core/TextField'
import {makeStyles} from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import {getAllProduct, sortedProducts} from '../../redux/actions/products'
import {useDispatch, useSelector} from 'react-redux'
import {useRouter} from 'next/router'
import {formatMoney} from '../../UtilityService/Helpers'
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
    // marginLeft: '10px',
    marginBottom: '1em',
    marginTop: '2em',
    [theme.breakpoints.down('md')]: {
      fontSize: '20px',
      lineHeight: '40px',
      textAlign: 'center',
      marginBottom: '1.5em',
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
    marginBottom: '3em',
  },
  product: {
    marginBottom: '40px',
  },
  card: {
    width: '90%',
    border: '1px solid #f3f3f3',
    borderRadius: '5px',
    flexDirection: 'column',
    [theme.breakpoints.down('md')]: {
      padding: '1em',
      textAlign: 'left',
    },
  },
  media: {
    height: 300,
  },
  cardContent: {
    color: '#999',
    fontFamily: 'Poppins',
    fontSize: '16px',
    fontWeight: '400',
    padding: '0 !important',
    marginBottom: '5px',
  },
  btn: {
    width: '100%',
  },
  progress: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  menuItems: {
    textTransform: 'capitalize',
  },
}))

function ProductsOverview() {
  const router = useRouter()
  const dispatch = useDispatch()
  const classes = useStyles()
  const [loading, setLoading] = useState(false)
  const [sortedValue, setSortedValue] = useState('')
  const {products} = useSelector(state => state.products)

  const sortParams = [
    'All',
    'electronics',
    'jewelery',
    "men's clothing",
    "women's clothing",
  ]
  useEffect(() => {
    setLoading(true)
    if (products.length === 0) {
      dispatch(getAllProduct(() => setLoading(false)))
    } else {
      setLoading(false)
    }
  }, [])

  const trimmedString = str => {
    length = 12
    return str.substring(0, length)
  }

  const handleChange = e => {
    setSortedValue(e.target.value)
    setLoading(true)
    dispatch(sortedProducts(e.target.value, () => setLoading(false)))
  }
  return (
    <>
      <Head>
        <title>Frank & Stores - Products</title>
        <meta name='description' content='Digital market place' />
        <meta
          name='viewport'
          content='minimum-scale=1, initial-scale=1, width=device-width'
        />
      </Head>
      <Box className={classes.box}>
        <Grid container className={classes.wrapper}>
          <Grid item md={12} id='#some-id'>
            <Typography variant='h2' className={classes.title}>
              Product Overview
            </Typography>
          </Grid>
          <Grid item xs={10} md={4} className={classes.products}>
            <TextField
              select
              fullWidth
              label='Sort Products By'
              onChange={handleChange}
              value={sortedValue}
              variant='filled'
            >
              {sortParams.map(params => (
                <MenuItem
                  value={params}
                  key={params}
                  className={classes.menuItems}
                >
                  {params}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item container className={classes.container}>
            {loading ? (
              <div className={classes.progress}>
                <CircularProgress />
              </div>
            ) : products && products.length > 0 ? (
              products.map(product => (
                <Grid item xs={12} sm={12} md={3} className={classes.product}>
                  <Card className={classes.card} elevation={0}>
                    <CardMedia
                      component='img'
                      image={product.image}
                      alt='product'
                      className={classes.media}
                    />
                    <CardContent>
                      <Typography
                        variant='h5'
                        component='div'
                        className={classes.cardContent}
                      >
                        {trimmedString(product.title)}
                      </Typography>
                      <Typography className={classes.cardContent}>
                        {formatMoney(product.price)}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button
                        size='small'
                        variant='contained'
                        color='primary'
                        fullWidth
                        className={classes.btn}
                        onClick={() => router.push(`/products/${product.id}`)}
                      >
                        Quick View{' '}
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))
            ) : (
              ''
            )}
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default ProductsOverview
