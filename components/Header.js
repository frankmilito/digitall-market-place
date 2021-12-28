import React, {useState, useEffect} from 'react'
import Link from 'next/link'
import {
  AppBar,
  CssBaseline,
  Toolbar,
  Typography,
  useTheme,
  useMediaQuery,
  Grid,
  IconButton,
  Box,
  Badge,
  ListItem,
} from '@material-ui/core'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import PersonOutlineIcon from '@material-ui/icons/PersonOutline'
import {ShoppingCart} from '@material-ui/icons/'
import router from 'next/router'
import {makeStyles} from '@material-ui/core/styles'
import DrawerComponent from './Drawer'
import {useSelector} from 'react-redux'
// import classes from "./styles/Home.module.css";

const useStyles = makeStyles(theme => ({
  appBar: {
    backgroundColor: '#fff',
    color: '#000',
    width: '100vw',
    borderBottom: '1px solid #ededed',
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    // margin: "0 3em",

    '& .MuiIconButton-root': {
      padding: 0,
      paddingRight: '8px',
    },
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'space-between',
    },
  },
  headerlinks: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    maxWidth: '100%',
  },
  navlinks: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '1em 0',
  },
  logo: {
    fontFamily: 'Playfair Display',
    fontSize: '1.8em',
    fontWeight: 700,
    [theme.breakpoints.down('md')]: {
      fontSize: '1.5em',
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '1em',
    },
  },
  links: {
    fontFamily: 'Poppins',
    fontWeight: '400',
    textDecoration: 'none',
    color: '#000',
    fontSize: '16px',
    cursor: 'pointer',
    transition: '200ms ease-in-out',
    '&:hover': {
      fontWeight: '600',
      color: '#000',
    },
    [theme.breakpoints.down('md')]: {
      fontSize: '14px',
    },
  },
  account: {
    border: '1px solid #646464',
    borderRadius: '25px',
    padding: '6px 15px',
  },
  tableItem: {
    fontSize: '14px',
    color: '#252C32',
    lineHeight: '24px',
    fontWeight: 'normal',
    fontStyle: 'normal',
    [theme.breakpoints.down('xs')]: {
      fontSize: '10px',
      lineHeight: '20px',
    },
  },
}))

function Header() {
  // const [cartCount, setCartCount] = useState(0);
  const [openDropDown, setOpenDropDown] = useState(false)
  const [count, setCartCount] = useState(0)
  const {cart} = useSelector(state => state.products)
  const [openDrawer, setOpenDrawer] = useState(false)
  const classes = useStyles()
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

  const closehandler = () => {
    setOpenDrawer(false)
  }

  useEffect(() => {
    let cartCount = 0
    cart.forEach(item => {
      cartCount += item.qty
    })
    setCartCount(cartCount)
  }, [cart])

  const toggle = () => {
    setOpenDropDown(true)
  }

  return (
    <>
      <AppBar position='fixed' elevation={0} className={classes.appBar}>
        <CssBaseline />
        <Toolbar>
          <Grid
            container
            justifyContent={isMobile ? 'space-between' : 'center'}
            className={classes.container}
          >
            <Grid item sm={2}>
              <Link href='/'>
                <Typography className={classes.logo}>Frank & Stores</Typography>
              </Link>
            </Grid>
            {isMobile ? (
              <>
                <Box>
                  <IconButton onClick={() => router.push('/cart')}>
                    <Badge badgeContent={count} color='primary'>
                      <ShoppingCart />
                    </Badge>
                  </IconButton>{' '}
                  <DrawerComponent
                    openDrawer={openDrawer}
                    close={closehandler}
                  />
                </Box>
              </>
            ) : (
              <Grid item sm={7} md={5}>
                <div className={classes.navlinks}>
                  <>
                    <Typography
                      variant='body1'
                      className={classes.links}
                      variant='body1'
                    >
                      <Link
                        href='/'
                        // style={{ textDecoration: "none" }}
                      >
                        <ListItem>Home</ListItem>
                      </Link>
                    </Typography>
                    <Typography
                      variant='body1'
                      className={classes.links}
                      variant='body1'
                    >
                      <Link
                        href='/products'

                        // style={{ textDecoration: "none" }}
                      >
                        <ListItem> Products</ListItem>
                      </Link>
                    </Typography>

                    <Typography
                      variant='body1'
                      className={classes.links}
                      onClick={() => router.push('/cart')}
                      variant='body1'
                      className={classes.links}
                    >
                      <IconButton>
                        <Badge badgeContent={count} color='primary'>
                          <ShoppingCart />
                        </Badge>
                      </IconButton>{' '}
                      <ListItem style={{display: 'inline'}}>Cart</ListItem>
                    </Typography>
                  </>
                </div>
              </Grid>
            )}
          </Grid>
        </Toolbar>
      </AppBar>
    </>
  )
}

export default Header
