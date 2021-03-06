import React, {useState, useEffect} from 'react'
import Link from 'next/link'
import {useRouter} from 'next/router'
import {useDispatch, useSelector} from 'react-redux'
import {
  Box,
  Button,
  CircularProgress,
  Container,
  Grid,
  IconButton,
  Typography,
  makeStyles,
} from '@material-ui/core'
import {getSingleProduct} from '../../redux/actions/products'
import {addToCart} from '../../redux/actions/cart'
import useFunctions from '../../UtilityService/useFunctions'
import {formatMoney} from '../../UtilityService/Helpers'
import {CLEAR_SINGLE_PRODUCT} from '../../redux/actions/Contants'

const useStyles = makeStyles(theme => ({
  quantityValue: {
    [theme.breakpoints.up('md')]: {
      marginLeft: 16,
      marginRight: 16,
    },
    color: '#000',
  },
  iconBtn: {
    color: '#000',
  },

  logo: {
    maxWidth: '100%',
    [theme.breakpoints.down('md')]: {
      width: '200px',
      height: '200px',
    },
    // [theme.breakpoints.up("md")]: {
    //   width: "100%",
    // },
  },
  title: {
    display: 'inline',
    fontFamily: 'Playfair Display',
    fontSize: '40px',
    fontWeight: '500',
    margin: '1em 0',
    [theme.breakpoints.down('md')]: {
      fontSize: '20px',
      lineHeight: '20px',
    },
  },
  progress: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  button: {
    borderRadius: '50px',
    color: '#fff',
    padding: '15px 45px',
    textTransform: 'capitalize',
    fontFamily: 'Playfair Display',
    fontSize: '18px',
    fontWeight: '500',
    margin: '1em 0',
    '&:hover': {color: '#fff'},
    [theme.breakpoints.down('md')]: {
      fontSize: '16px',
    },
  },
  container: {
    display: 'flex',
    justifyContent: 'space-evenly',
    // alignItems: 'center',
    [theme.breakpoints.down('md')]: {
      textAlign: 'center',
    },
  },
  content: {
    fontFamily: 'Playfair Display',
    fontSize: '24px',
    fontWeight: '700',
    // lineHeight: "22px",

    [theme.breakpoints.down('md')]: {
      fontSize: '20px',
      lineHeight: '24px',
    },
  },
  description: {
    fontFamily: 'Poppins',
    fontSize: '20px',
    fontWeight: 300,
    textTransform: 'capitalize',
    margin: '1em 0 ',
    [theme.breakpoints.down('md')]: {
      fontSize: '16px',
      lineHeight: '24px',
      textAlign: 'justify',
    },
  },
  add: {
    fontFamily: 'Poppins',
    fontSize: '18px',
    fontWeight: '500',
    // lineHeight: "22px",

    [theme.breakpoints.down('md')]: {
      fontSize: '20px',
      lineHeight: '24px',
    },
  },

  items: {},
}))
function ProductDetails() {
  const [cartCount, setCartCount] = useState(0)
  const classes = useStyles()
  const dispatch = useDispatch()
  const toast = useFunctions()
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const {product, cart} = useSelector(state => state.products)

  const productID = router.query.productId
  useEffect(() => {
    setLoading(true)
    if (productID) {
      dispatch(
        getSingleProduct(productID, () => {
          setLoading(false)
        })
      )
    }
    return () => {
      dispatch({
        type: CLEAR_SINGLE_PRODUCT,
      })
    }
  }, [productID])

  useEffect(() => {
    let cartCount = 0
    for (let i = 0; i < cart.length; i++) {
      if (cart[i].product_id === product.product_id) {
        cartCount += cart[i].qty
        setCartCount(cartCount)
      }
    }
  }, [cart, cartCount])

  const addCart = id => {
    dispatch(addToCart(id))
    toast()
  }

  return (
    <Container style={{marginTop: 10 + 'rem', marginBottom: 115 + 'px'}}>
      <>
        <Grid container className={classes.container}>
          {loading ? (
            <CircularProgress />
          ) : (
            <>
              <Grid item xs={12} md={5}>
                <Box>
                  <img
                    src={product?.image}
                    alt='product '
                    className={classes.logo}
                  />
                </Box>
              </Grid>
              <Grid item xs={12} md={5} className={classes.items}>
                <Typography className={classes.title}>
                  <small className={classes.grams}>{product?.title}</small>
                </Typography>
                <Typography className={classes.content}>
                  {formatMoney(product?.price)}
                </Typography>
                {/* <Link href="#"> */}
                <Typography className={classes.description}>
                  {product?.description}
                </Typography>
                <Button
                  variant='contained'
                  color='primary'
                  onClick={() => addCart(product?.id)}
                  className={classes.button}
                >
                  Add to cart
                </Button>
              </Grid>
            </>
          )}
        </Grid>
      </>
    </Container>
  )
}

export default ProductDetails
