/**
 * Created by vince on 2017/9/23.
 */
// import jsonp from '../common/js/jsonp'
import {commonParams} from './config'
// import {options} from './config'
import axios from 'axios'

export function getRecommend () {
  const url = '/api/getRecommend'
  const data = Object.assign({}, commonParams, {
    g_tk: 392159046,
    format: 'json',
    platform: 'h5',
    needNewCode: 1
  })
  return axios.get(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}

export function getDiscList() {
  const url = '/api/getDiscList'

  const data = Object.assign({}, commonParams, {
    g_tk: 392159046,
    rnd: Math.random(),
    hostUin: 0,
    platform: 'yqq',
    needNewCode: 0,
    categoryId: 10000000,
    sortId: 5,
    sin: 0,
    ein: 29,
    format: 'json'
  })

  return axios.get(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}
