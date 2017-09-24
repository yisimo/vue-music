<template>
  <div>recommend</div>
</template>

<script type="text/ecmascript-6">
  import {ERR_OK} from '../../api/config'
  import {param} from '../../common/js/param'
 // import {getRecommend} from '../../api/recommend'

  export default {
    created () {
      this._getRecommend()
    },
    methods: {
      _getRecommend () {
        /* jsonp抓取数据 */
        /* getRecommend().then((res) => {
          if (res.code === ERR_OK) {
            console.log(res.data.slider)
          }
        }) */
        /* ajax抓取数据 */
        let url = 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg'
        const data = Object.assign({}, {
          g_tk: 5381,
          uin: 0,
          format: 'json',
          inCharset: 'utf-8',
          outCharset: 'utf-8',
          notice: 0,
          platform: 'h5',
          needNewCode: 1
        // _: 1506138139421
        })
        console.log(data)
        let newData = param(data)
        console.log(newData)
        url += (url.indexOf('?') < 0 ? '?' : '&') + newData
        console.log(url)
        this.$http.get(url).then((response) => {
          if (response === ERR_OK) {
            response = response.body
            console.log(response.data.slider)
          }
        }, response => {
          console.log('未能正确获取数据')
        })
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
