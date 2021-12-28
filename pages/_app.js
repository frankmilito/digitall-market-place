import React, {useState, useEffect} from 'react'
import Head from 'next/head'
import '../styles/globals.css'
import {ThemeProvider} from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import theme from '../src/theme'
// import { useStore } from '../redux/store';
import {createWrapper} from 'next-redux-wrapper'
import Router from 'next/router'
import {PersistGate} from 'redux-persist/integration/react'
import {persistor} from '../redux/store'
import {makeStyles} from '@material-ui/core/styles'
import AppLayout from '../components/Layout'
import {Provider} from 'react-redux'
import {store} from '../redux/store'
import Spinner from '../components/Spinner'
import Backdrop from '@material-ui/core/Backdrop'
import NProgress from 'nprogress'

const useStyles = makeStyles(theme => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}))

function MyApp({Component, pageProps}) {
  const classes = useStyles()
  const [open, setOpen] = useState(false)
  const [progress, setProgress] = useState(10)

  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles)
    }
  }, [])

  Router.events.on('routeChangeStart', url => {
    NProgress.start()
    setOpen(true)
  })

  Router.events.on('routeChangeComplete', url => {
    NProgress.done()
    setOpen(false)
  })

  const HandleClose = () => {
    setOpen(false)
  }

  return (
    <React.Fragment>
      <Head>
        <title>Demo Digital Market Place</title>
        <meta name='description' content='Digital market place' />
        <meta
          name='viewport'
          content='minimum-scale=1, initial-scale=1, width=device-width'
        />
      </Head>

      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <CssBaseline />
          <PersistGate loading={null} persistor={persistor}>
            <AppLayout>
              {open && (
                <Backdrop
                  className={classes.backdrop}
                  open={open}
                  onClick={HandleClose}
                >
                  <Spinner />
                </Backdrop>
              )}
              <Component {...pageProps} />
            </AppLayout>
          </PersistGate>
        </Provider>
      </ThemeProvider>
    </React.Fragment>
  )
}

const makeStore = () => store
const wrapper = createWrapper(makeStore)
//withRedux wrapper that passes the store to the App Component
export default wrapper.withRedux(MyApp)

// export default MyApp;
