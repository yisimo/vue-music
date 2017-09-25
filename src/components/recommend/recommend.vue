<template>
  <div class="recommend">
    <scroll class="recommend-content" ref="scroll" :data="discList">
      <div>
        <div v-if="slider.length" class="slider-wrapper" ref="sliderWrapper">
          <slider>
            <div v-for="(item,index) in slider">
              <a :href="item.linkUrl">
                <img class="needsclick" :src="item.picUrl">
              </a>
            </div>
          </slider>
        </div>
        <div class="recommend-list">
        </div>
      </div>

      <div class="loading-container">
      </div>
    </scroll>
  </div>
</template>

<script type="text/ecmascript-6">
 // import {ERR_OK} from '../../api/config' // ajax获取数据
 // import {param} from '../../common/js/param' // ajax获取数据
 // import {getRecommend} from '../../api/recommend' // jsonp抓取数据
  import Slider from '../../base/slider/slider.vue'
  import Scroll from '../../base/scroll/scroll.vue'

  const ERR_OK = 0

  export default {
    data () {
      return {
        recommends: [],
        discList: [],
        slider: [],
        radioListd: [],
        songList: []
      }
    },
    components: {
      Slider,
      Scroll
    },
    created () {
      this._getRecommend()
    },
    methods: {
      _getRecommend () {
        // mock数据
        this.$http.get('/api/recommend').then((response) => {
          response = response.body
          if (response.errno === ERR_OK) {
            this.recommends = Object.assign({}, this.recommends, response.data)
            this.slider = this.recommends.data.slider
          }
        })
        // 通过jsonp抓取数据
        /* getRecommend().then((res) => {
          if (res.code === ERR_OK) {
            console.log(res.data.slider)
          }
        }) */
        // 通过ajax获取数据
      /*  let url = 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg'
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
        let newData = param(data)
        url += (url.indexOf('?') < 0 ? '?' : '&') + newData
        this.$http.get(url).then((response) => {
          if (response === ERR_OK) {
            response = response.body
            console.log(response.data.slider)
          }
        }, response => {
          console.log('未能正确获取数据')
        }) */
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .recommend
    position: fixed
    width: 100%
    top: 88px
    bottom: 0
    .recommend-content
      height: 100%
      overflow: hidden
      .slider-wrapper
        position: relative
        width: 100%
        overflow: hidden
</style>
