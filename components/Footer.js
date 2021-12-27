import React from 'react'
import {Box, Grid, Typography} from '@material-ui/core'
import {Facebook, Instagram, Twitter, LinkedIn} from '@material-ui/icons'
import {makeStyles} from '@material-ui/core/styles'
import router from 'next/router'
const useStyles = makeStyles(theme => ({
  wrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#222',
    padding: '5em 1em',
  },
  footerLogo: {
    maxWidth: '100%',
    height: '60px',
    width: '100px',
    backgroundColor: '#fff',
    padding: '10px 0',
  },
  header: {
    fontFamily: 'Poppins',
    fontSize: '18px',
    fontWeight: '900',
    color: '#fff',
    lineHeight: '25px',
  },
  footerList: {
    fontFamily: 'Poppins',
    fontSize: '14px',
    fontWeight: '400',
    lineHeight: '35px',
    color: '#fff',
    cursor: 'pointer',
  },
  icon: {
    marginTop: '10px',
    color: '#fff',
  },
  icons: {
    marginRight: '30px',
    padding: '.5em 0',
  },
  bottomLine: {
    height: '1px',
    width: '100%',
    backgroundColor: '#fff',
    margin: '20px 0',
  },
  dev: {
    marginLeft: 4,
  },
}))
const Footer = () => {
  const classes = useStyles()
  return (
    <>
      <Box className={classes.wrapper}>
        <Grid container xs={12} sm={12} md={10}>
          <Grid item xs={12} sm={12} md={6}>
            <Typography variant='h4' className={classes.header}>
              Contact
            </Typography>
            <Typography variant='h4' className={classes.footerList}>
              (+555) 803-454-0109
            </Typography>
            <Typography variant='h4' className={classes.footerList}>
              franklin@digitalmarketplace.com
            </Typography>
            {/* <Typography variant="h4" className={classes.footerList}>
              info@greenfinite.ng{" "}
            </Typography> */}
            <Typography variant='h4' className={classes.footerList}>
              25D, Drive 3, Prince and Princess Estate
            </Typography>
            <Typography variant='h4' className={classes.icon}>
              <span className={classes.icons}>
                <Facebook />
              </span>
              <span className={classes.icons}>
                <Instagram />
              </span>
              <span className={classes.icons}>
                <Twitter />
              </span>
              <span className={classes.icons}>
                <LinkedIn />
              </span>
            </Typography>
          </Grid>
          <Grid item container xs={12} sm={12} md={6}>
            <Grid item xs={12} sm={12} md={6}>
              <Typography variant='h4' className={classes.header}>
                Company
              </Typography>
              <Typography variant='h4' className={classes.footerList}>
                Contact us{' '}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <Typography variant='h4' className={classes.header}>
                Products{' '}
              </Typography>
              <Typography variant='h4' className={classes.footerList}>
                Men Wears{' '}
              </Typography>

              <Typography variant='h4' className={classes.footerList}>
                Women Wears{' '}
              </Typography>
            </Grid>
          </Grid>
          <Grid container>
            <div className={classes.bottomLine}></div>
            <Grid item>
              <Typography variant='h5' className={classes.footerList}>
                &copy; 2021 Franklin All rights reserved.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default Footer
