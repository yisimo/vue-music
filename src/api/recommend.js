/**
 * Created by vince on 2017/9/23.
 */
import jsonp from '../common/js/jsonp'
import {commomParams, options} from './config'

export default function getRecommend () {
  const url = 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg'
  const data = Object.assign({}, commomParams, {
    platform: 'h5',
    needNewcode: 1,
    uin: 0,
    _: 1506138139421
  })
  return jsonp(url, data, options)
}
