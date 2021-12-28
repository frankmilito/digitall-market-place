import {GET_ALL_PRODUCTS, GET_SINGLE_PRODUCTS} from './Contants'
import callApi from '../../UtilityService/ApiConfigurations'
import Swal from 'sweetalert2'
import axios from 'axios'

// Get single product
export const getSingleProduct = (data, cb) => async dispatch => {
  try {
    const res = await callApi(`products/${data}`, 'GET')
    if (res) {
      dispatch({
        type: GET_SINGLE_PRODUCTS,
        payload: res,
      })
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Error occured',
        text: res.message,
      })
    }
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: 'Error occured',
      text: 'Oops! something went wrong',
    })
  } finally {
    cb()
  }
}

// get all products
export const getAllProduct = cb => async dispatch => {
  try {
    const res = await callApi('products', 'GET')

    if (res) {
      dispatch({
        type: GET_ALL_PRODUCTS,
        payload: res,
      })
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Error occured',
        text: res.message,
      })
    }
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: 'Error occured',
      text: 'Oops! something went wrong',
    })
  } finally {
    cb()
  }
}

export const sortedProducts = (data, cb) => async dispatch => {
  const url = data === 'All' ? 'products' : `products/category/${data}`
  try {
    const res = await callApi(url, 'GET')

    if (res) {
      dispatch({
        type: GET_ALL_PRODUCTS,
        payload: res,
      })
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Error occured',
        text: res.message,
      })
    }
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: 'Error occured',
      text: 'Oops! something went wrong',
    })
  } finally {
    cb()
  }
}
