<template>
  <div class="recommend">
    <scroll class="recommend-content" ref="scroll" :data="discList">
      <div>
        <div v-if="recommends.length" class="slider-wrapper" ref="sliderWrapper">
          <slider>
            <div v-for="item in recommends">
              <a :href="item.linkUrl">
                <img class="needsclick" @load="loadImage" :src="item.picUrl">
              </a>
            </div>
          </slider>
        </div>
        <div class="recommend-list">
          <h1 class="list-title">热门歌单介绍</h1>
          <ul>
            <li v-for="item in discList" class="item">
              <div class="icon">
                <img width="60" height="60" v-lazy="item.imgurl">
              </div>
              <div class="text">
                <h2 class="name" v-html="item.creator.name"></h2>
                <p class="desc" v-html="item.dissname"></p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div class="loading-container">
      </div>
    </scroll>
  </div>
</template>

<script type="text/ecmascript-6">
  import {ERR_OK} from '../../api/config'
 // import {param} from '../../common/js/param' // ajax获取数据
  import {getRecommend, getDiscList} from '../../api/recommend' // jsonp抓取数据
  import Slider from '../../base/slider/slider.vue'
  import Scroll from '../../base/scroll/scroll.vue'

  export default {
    data () {
      return {
        recommends: [],
        discList: []
      }
    },
    components: {
      Slider,
      Scroll
    },
    created () {
      this._getRecommend()
      this._getDiscList()
    },
    methods: {
      _getRecommend () {
        // 通过axios抓取数据
        getRecommend().then((res) => {
          if (res.code === ERR_OK) {
            this.recommends = res.data.slider
          }
        })
        // mock数据
      /*  this.$http.get('/api/recommend').then((response) => {
         response = response.body
         if (response.errno === ERR_OK) {
         this.recommends = Object.assign({}, this.recommends, response.data)
         this.slider = this.recommends.data.slider
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
      },
      _getDiscList () {
        getDiscList().then((res) => {
          if (res.code === ERR_OK) {
            this.discList = res.data.list
          }
        })
      },
      loadImage() {
        if (!this.checkloaded) {
          this.checkloaded = true
          this.$refs.scroll.refresh()
        }
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import '../../common/stylus/variable.styl'

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
      .recommend-list
        .list-title
          height: 65px
          line-height: 65px
          text-align: center
          font-size: $font-size-medium
          color: $color-theme
        .item
          display: flex
          padding: 0 20px 20px
          box-sizing: border-box
          align-items: center
          .icon
            flex:0 0 60px
            width: 60px
            padding-right: 20px
          .text
            display: flex
            flex-flow: column
            justify-content: center
            flex: 1
            line-height: 20px
            overflow: hidden
            font-size: $font-size-medium
            .name
              margin-bottom: 10px
              color: $color-text
            .desc
              color: $color-text-d
</style>
