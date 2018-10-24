import $axios from '../../request.js'
import API_URLS from './resource.js'

export function fetchLoginApi (data) {
  return $axios.post(API_URLS.FETCH_LOGIN, { ...data })
}
