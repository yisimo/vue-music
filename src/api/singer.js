/**
 * Created by vince on 2017/9/28.
 */
import jsonp from '../common/js/jsonp'
import { commonParams, options } from './config'
// import axios from 'axios'

export function getSingerList () {
  const url = 'https://c.y.qq.com/v8/fcg-bin/v8.fcg'

  var data = Object.assign({}, commonParams, {
    channel: 'singer',
    page: 'list',
    key: 'all_all_all',
    pagesize: 100,
    pagenum: 1,
    g_tk: 1338128604,
    hostUin: 0,
    platform: 'yqq',
    needNewCode: 0,
    format: 'json'
  })
  return jsonp(url, data, options)
  // 通过axios利用服务端代理获取实时数据
  /* return axios.get(url, {
   params: data
   }).then((res) => {
   return Promise.resolve(res.data)
   }) */
}

export function getSingerDetails (singerId) {
  const url = 'https://c.y.qq.com/v8/fcg-bin/fcg_v8_singer_track_cp.fcg'

  var data = Object.assign({}, commonParams, {
    g_tk: 849416688,
    hostUin: 0,
    needNewCode: 0,
    begin: 0,
    num: 100,
    songstatus: 1,
    platform: 'yqq',
    order: 'listen',
    singermid: singerId
  })

  return jsonp(url, data, options)
}
