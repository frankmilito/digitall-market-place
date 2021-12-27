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
import {getAllProduct, getSingleProduct} from '../../redux/actions/products'
import {addToCart, adjustQuantity} from '../../redux/actions/cart'
import useFunctions from '../../UtilityService/useFunctions'

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
    '&:hover': {color: '#3D8754'},
    [theme.breakpoints.down('md')]: {
      fontSize: '16px',
      width: '150px',
      height: '50px',
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
      fontSize: '20px',
      lineHeight: '24px',
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
  }, [productID])

  //   useEffect(() => {
  //     let cartCount = 0

  //     // cart.forEach((item) => {
  //     //   cartCount += item.qty;
  //     //   setCartCount(cartCount);
  //     // });
  //     for (let i = 0; i < cart.length; i++) {
  //       if (cart[i].product_id === product.product_id) {
  //         cartCount += cart[i].qty
  //         setCartCount(cartCount)
  //       }
  //     }
  //   }, [cart, cartCount])
  const addCart = id => {
    dispatch(addToCart(id))
    toast()
  }

  return (
    <Container style={{marginTop: 10 + 'rem', marginBottom: 115 + 'px'}}>
      <>
        <Grid container className={classes.container}>
          <Grid item xs={12} md={5}>
            {loading && <CircularProgress />}
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
              € {product?.price}
            </Typography>
            {/* <Link href="#"> */}
            <Typography className={classes.description}>
              {product?.description}
            </Typography>
            <Button
              variant='contained'
              color='primary'
              onClick={() => addCart()}
              className={classes.button}
            >
              Add to cart
            </Button>
            {/* </Link> */}

            {/* <Typography component='p'>
              <Link href='/cart'>
                <Typography className={`${classes.view}`}>View Cart</Typography>
              </Link>
            </Typography> */}
          </Grid>
        </Grid>
      </>
    </Container>
  )
}

export default ProductDetails
