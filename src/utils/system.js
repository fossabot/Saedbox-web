import api from './api'

export default {

  Get (cb) {
    api.Get('/api/system', function (response, error) {
      response ? cb(response.data.data) : null
      error ? console.log('System error') : null
    })
  }
}
