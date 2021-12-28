import React, {useState, useEffect} from 'react'
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Typography,
  Box,
} from '@material-ui/core'

import router from 'next/router'
import {makeStyles} from '@material-ui/core/styles'
import {Menu, Close} from '@material-ui/icons'
import {useSelector} from 'react-redux'

const useStyles = makeStyles(theme => ({
  appBar: {
    backgroundColor: '#FFF1DA',
    color: '#000',
    width: '100vw',
  },
  container: {
    // padding: "0 2em ",
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    '& .MuiIconButton-root': {
      padding: '30em',
      paddingRight: '0',
    },
  },

  navlinks: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    fontFamily: 'Playfair Display',
    fontSize: '1.5em',
    padding: '0 1em',
  },
  links: {
    fontFamily: 'Poppins',
    fontWeight: '300',
    textDecoration: 'none',
    color: '#000',
    fontSize: '16px',
    cursor: 'pointer',
    transition: '200ms ease-in-out',
    '&:hover': {
      fontWeight: '600',
    },
  },

  listItems: {
    padding: '1em 2em',
  },

  lists: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    '& .MuiIconButton-root': {
      padding: '0',
    },
  },
}))

const DrawerComponent = () => {
  const [openDrawer, setOpenDrawer] = useState(false)
  const {cart} = useSelector(state => state.products)
  const [cartCount, setCartCount] = useState(0)
  const classes = useStyles()
  // const { cart } = useSelector((state) => state.products);
  useEffect(() => {
    let cartCount = 0
    cart.forEach(item => {
      cartCount += item.qty
    })
    setCartCount(cartCount)
  }, [cart, cartCount])

  return (
    <>
      <Drawer
        anchor='top'
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        className={classes.drawer}
        ModalProps={{
          keepMounted: true,
        }}
      >
        <List style={{margin: '0', padding: '0'}} className={classes.lists}>
          <Box>
            <ListItemText>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'end',
                  marginRight: '10px',
                }}
                onClick={() => setOpenDrawer(false)}
              >
                <IconButton>
                  <Close />
                </IconButton>
              </div>
              <Typography variant='h4' className={classes.logo}>
                Frank & Stores
              </Typography>
            </ListItemText>
          </Box>

          <ListItem
            onClick={() => {
              setOpenDrawer(false)
              router.push('/')
            }}
            className={classes.listItems}
          >
            <ListItemText>
              <Typography variant='body1' className={classes.links}>
                Home
              </Typography>
            </ListItemText>
          </ListItem>

          <ListItem
            onClick={() => {
              router.push('/products')
              setOpenDrawer(false)
            }}
            className={classes.listItems}
          >
            <ListItemText>
              <Typography variant='body1' className={classes.links}>
                Products
              </Typography>
            </ListItemText>
          </ListItem>
        </List>
      </Drawer>
      <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
        <Menu />
      </IconButton>
    </>
  )
}

export default DrawerComponent
