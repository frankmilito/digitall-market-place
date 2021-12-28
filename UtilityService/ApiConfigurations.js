import axios from 'axios'
import {handleApiError} from './ApiErrors'
import {string, object, oneOf} from 'prop-types'

// const base_url = process.env.NEXT_PUBLIC_BASE_URL;
const base_url = 'https://fakestoreapi.com/'
const axiosInstance = axios.create({
  baseURL: base_url,
})

export function publicRoute(url, method, data, config) {
  axiosInstance.interceptors.request.use(
    config => {
      return config
    },
    error => Promise.reject(error)
  )
  return new Promise((resolve, reject) => {
    if (method === 'POST') {
      return (
        axiosInstance
          // .post(url, data, config)
          .post(url, data)
          .then(res => resolve(res.data))
          .catch(err => reject(handleApiError(err)))
      )
    }
    if (method === 'GET') {
      return axiosInstance
        .get(url, config)
        .then(res => resolve(res.data))
        .catch(err => reject(handleApiError(err)))
    }
  })
}

function callApi(url, method, data, config) {
  return publicRoute(url, method, data, config)
}
callApi.propTypes = {
  url: string,
  data: object,
  method: oneOf(['POST', 'GET']),
  config: object,
}
export default callApi
