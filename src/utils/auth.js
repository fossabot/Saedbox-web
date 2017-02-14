/* globals localStorage */
import axios from 'axios'
import { API_URL } from '../config/app'

export default {

  user: {
    authenticated: false
  },

  login (email, pass, cb) {
    LoginRequest(email, pass, (res) => {
      this.user.authenticated = res.authenticated
      if (this.user.authenticated) {
        console.log('login ok')
        if (cb) cb(true)
      } else {
        console.log('login pas ok')
        if (cb) cb(false)
      }
    })
  },

  checkAuth (cb) {
    axios.get(API_URL + '/me', header).then(response => {
      console.log('check ok')
      cb(true)
    }, response => {
      console.log('check pas ok')
      cb(false)
    })
  },

  logout (cb) {
    axios.get(API_URL + '/logout', header).then(response => {
      this.user.authenticated = false
      if (cb) cb()
    }, response => {
      console.log('logout error')
    })
  }
}

var header =
  {
    withCredentials: true
  }

function LoginRequest (email, pass, cb) {
  axios.post(API_URL + '/api/login', {
    email: email,
    password: pass
  }, header).then(response => {
    if (response.status === 200) {
      cb({ authenticated: true })
    } else {
      cb({ authenticated: false })
    }
  }, response => {
    cb({ authenticated: false })
  })
}
