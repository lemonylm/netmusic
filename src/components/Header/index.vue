<template>
  <div id="nav">
    <div class="nav_header">
      <div class="nav_header_main">
        <a class="logo_wrap" href="javascript:;"></a>
        <ul class="nav_list">
          <li class="nav_item" :class="{active: path === 'discover'}">
            <router-link :to="{ path: '/discover' }">发现音乐</router-link>
            <div class="delta" :style="{display: path === 'discover' ? 'block' : 'none'}"></div>
          </li>
          <li class="nav_item" :class="{active: path === 'mymusic'}">
            <router-link :to="{ path: '/mymusic' }">我的音乐</router-link>
            <div class="delta" :style="{display: path === 'mymusic' ? 'block' : 'none'}"></div>
          </li>
          <li class="nav_item" style="width: 66px" :class="{active: path === 'friends'}">
            <router-link :to="{ path: '/friends' }">朋友</router-link>
            <div class="delta" :style="{display: path === 'friends' ? 'block' : 'none'}"></div>
          </li>
          <li class="nav_item" style="width: 66px" :class="{active: path === 'store'}">
            <router-link :to="{ path: '/store' }">商城</router-link>
            <div class="delta" :style="{display: path === 'store' ? 'block' : 'none'}"></div>
          </li>
          <li class="nav_item" style="width: 80px" :class="{active: path === 'musician'}">
            <router-link :to="{ path: '/musician' }">音乐人</router-link>
            <div class="delta" :style="{display: path === 'musician' ? 'block' : 'none'}"></div>
          </li>
          <li class="nav_item" style="width: 108px" :class="{active: path === 'download'}">
            <router-link :to="{ path: '/download' }">下载客户端</router-link>
          </li>
        </ul>
        <sup class="hot"></sup>
        <div class="login_wrap">
          <a class="login" href="javascript:;">登录</a>
        </div>
        <div class="creater_center_wrap">
          <div class="creater_center">
            <a href="javascript:;" class="text">创作者中心</a>
          </div>
        </div>
        <div class="search_wrap">
          <div class="search_box">
            <div class="icon"></div>
            <input type="text" placeholder="音乐/视频/电台/用户" />
          </div>
        </div>
      </div>
      <div class="line"></div>
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
#nav {
  .nav_header {
    height: 75px;
    border-bottom: 1px solid #000;
    box-sizing: border-box;
    background: #242424;
    .nav_header_main {
      position: relative;
      width: 1100px;
      height: 70px;
      margin: 0 auto;
      .logo_wrap {
        float: left;
        width: 177px;
        height: 100%;
        box-sizing: border-box;
        padding-right: 20px;
        background: url(/image/sprite/topbar.png);
      }
      .nav_list {
        width: 508px;
        height: 100%;
        float: left;
        .nav_item {
          float: left;
          position: relative;
          width: 94px;
          height: 100%;
          box-sizing: border-box;
          &:hover {
            background: #000;
          }
          &.active {
            background: #000;
            a {
              color: #fff !important;
            }
          }
          .delta {
            position: absolute;
            left: 50%;
            bottom: -1px;
            transform: translateX(-6px);
            width: 0;
            height: 0;
            border: 6px solid #C20C0C;
            border-top-color: transparent;
            border-left-color: transparent;
            border-right-color: transparent;
          }
          a {
            display: block;
            height: 100%;
            padding: 0 19px;
            font-size: 14px;
            line-height: 70px;
            color: #ccc !important;
          }
        }
      }
      .hot {
        position: absolute;
        left: 670px;
        top: 20px;
        width: 28px;
        height: 19px;
        background: url(/image/sprite/topbar.png) no-repeat -190px 0;
      }
      .login_wrap {
        float: right;
        width: 50px;
        height: 100%;
        .login {
          line-height: 69px;
          &:hover {
            color: #fff !important;
          }
        }
      }
      .creater_center_wrap {
        float: right;
        width: 90px;
        height: 100%;
        margin: 0 20px;
        display: flex;
        align-items: center;
        .creater_center {
          height: 30px;
          width: 90px;
          border: 1px solid #4F4F4F;
          border-radius: 16px;
          &:hover {
            border-color: #fff;
          }
          .text {
            display: block;
            width: 100%;
            height: 100%;
            line-height: 30px;
            text-align: center;
            color: #ccc;
            &:hover {
              color: #fff !important;
            }
          }
        }
      }
      .search_wrap {
        float: right;
        width: 158px;
        height: 100%;
        display: flex;
        align-items: center;
        .search_box {
          background-color: #fff;
          width: 100%;
          height: 32px;
          border-radius: 16px;
          display: flex;
          align-items: center;
          overflow: hidden;
          .icon {
            width: 40px;
            height: 30px;
            background: url(/image/sprite/topbar.png) no-repeat 0 -100px;
          }
          input {
            flex: 1;
            border: none;
            outline: none;
          }
        }
      }
    }
    .line {
      height: 5px;
      background-color: #C20C0C;
    }
  }
}
</style>