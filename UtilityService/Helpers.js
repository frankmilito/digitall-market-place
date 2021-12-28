import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
toast.configure()
export const formatMoney = money => {
  return new Intl.NumberFormat('de-DE', {
    style: 'currency',
    currency: 'NGN',
  }).format(money)
}
