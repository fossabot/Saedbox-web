import axios from 'axios'
import { API_URL } from '../config/app'
var headers =
  {
    withCredentials: true
  }

export default {

  Get (path, cb) {
    axios.get(API_URL + path, headers).then(response => {
      cb(response, null)
    }, error => {
      cb(null, error)
    })
  },

  Post (path, data, cb) {
    axios.post(API_URL + path, data, headers).then(response => {
      cb(response, null)
    }, error => {
      cb(null, error)
    })
  }

}
