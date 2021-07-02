<template>
  <div id="nav">
    <div class="nav_header">
      <div class="nav_header_main">
        <a class="logo_wrap" href="javascript:;"></a>
        <ul class="nav_list">
          <li class="nav_item" :class="{active: path === 'discover'}">
            <router-link :to="{ path: '/discover' }">发现音乐</router-link>
          </li>
          <li class="nav_item" :class="{active: path === 'mymusic'}">
            <router-link :to="{ path: '/mymusic' }">我的音乐</router-link>
          </li>
          <li class="nav_item" style="width: 66px" :class="{active: path === 'friends'}">
            <router-link :to="{ path: '/friends' }">朋友</router-link>
          </li>
          <li class="nav_item" style="width: 66px" :class="{active: path === 'store'}">
            <router-link :to="{ path: '/store' }">商城</router-link>
          </li>
          <li class="nav_item" style="width: 80px" :class="{active: path === 'musician'}">
            <router-link :to="{ path: '/musician' }">音乐人</router-link>
          </li>
          <li class="nav_item" style="width: 108px" :class="{active: path === 'download'}">
            <router-link :to="{ path: '/download' }">下载客户端</router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  props: ['path']
};
</script>

<style lang="less" scoped>
.active {
  background: #000;
}
#nav {
  .nav_header {
    height: 70px;
    background: #242424;
    .nav_header_main {
      width: 1100px;
      height: 100%;
      margin: 0 auto;
      .logo_wrap {
        float: left;
        width: 177px;
        height: 70px;
        box-sizing: border-box;
        padding-right: 20px;
        background: url(/image/sprite/topbar.png);
      }
      .nav_list {
        width: 508px;
        height: 70px;
        float: left;
        .nav_item {
          float: left;
          width: 94px;
          height: 70px;
          box-sizing: border-box;
          &:hover {
            background: #000;
          }
          a {
            display: block;
            height: 100%;
            padding: 0 19px;
            font-size: 14px;
            line-height: 70px;
            color: #fff !important;
          }
        }
      }
    }
  }
}
</style>
