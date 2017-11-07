<template>
  <div class="search-list" v-show="searches.length">
    <ul>
      <li class="search-item" v-for="item in searches">
        <span class="text">{{item}}</span>
        <span class="icon">
          <i class="icon-delete"></i>
        </span>
      </li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {
      searches: {
        type: Array,
        default: []
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import '../../common/stylus/variable.styl'
  @import '../../common/stylus/mixin.styl'

  .search-list
    .search-item
      display: flex
      align-items: center
      height: 40px
      overflow: hidden
      .text
        flex: 1
        font-size: $font-size-medium
        color: $color-text-l
      .icon
        extend-click()
        .icon-delete
          font-size $font-size-small
          color: $color-text-d
</style>
