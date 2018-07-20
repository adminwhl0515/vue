import axios from 'axios'
import {HOME_LIST} from '@/server/index.js'

export default {
  getHomeList (cb) {
    axios.get(HOME_LIST)
      .then((data) => {
        console.log(data)
        cb(data)
      })
      .catch((err) => {
        console.log(err)
      })
  }
}
