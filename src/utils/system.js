import api from './api'

export default {

  Get (context, cb) {
    api.Get('/api/system', function (response, error) {
      response ? cb(response.data.data, context) : null
      error ? console.log('System error') : null
    })
  }
}
