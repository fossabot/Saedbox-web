import api from './api'

export default {

  user: {
    authenticated: false
  },

  login (email, pass, cb) {
    LoginRequest(email, pass, (res) => {
      this.user.authenticated = res.authenticated
      if (this.user.authenticated) {
        if (cb) cb(true)
      } else {
        if (cb) cb(false)
      }
    })
  },

  checkAuth (cb) {
    api.Get('/me', function (response, error) {
      cb(!error)
    })
  },

  logout (cb) {
    api.Get('/api/logout', function (response, error) {
      cb ? cb() : null
      error ? console.log('logout error') : null
    })
  }
}

function LoginRequest (email, pass, cb) {
  api.Post('/api/login', { email: email, password: pass }, function (response, error) {
    cb ? cb({ authenticated: true }) : null
    error ? console.log('Login Error') : null
  })
}
