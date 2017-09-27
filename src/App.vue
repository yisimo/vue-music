<template>
  <div id="app">
    <m-header></m-header>
    <tab></tab>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
 // import {urlParse} from './common/js/util'
  import MHeader from './components/m-header/m-header.vue'
  import Tab from './components/tab/tab.vue'
  import Recommend from './components/recommend/recommend.vue'

  export default {
    data () {
      return {
        recommend: {
        /*  id: (() => {
            let queryParam = urlParse()
            return queryParam.id
          })() */
        }
      }
    },
    created () {
    },
    components: {
      MHeader,
      Tab,
      Recommend
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
</style>
