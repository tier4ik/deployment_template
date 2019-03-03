import './scripts/main.js'
import './sass/main.sass'

if (process.env.NODE_ENV !== 'production') {
  require('./pug/index.pug')
}