/**
 * Created by vince on 2017/10/31.
 */
import jsonp from '../common/js/jsonp'
import {commonParams, options} from '../api/config'

export function getTopList () {
  const url = 'https://c.y.qq.com/v8/fcg-bin/fcg_myqq_toplist.fcg'
  const data = Object.assign({}, commonParams, {
    g_tk: 1875828054,
    notice: 0,
    platform: 'h5',
    needNewCode: 1
  })
  return jsonp(url, data, options)
}
