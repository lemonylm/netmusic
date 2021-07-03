<template>
  <div>
    <Header path="discover"></Header>
    <div class="discover_nav_container">
      <div class="discover_nav_content">
        <ul class="discover_nav_list">
          <li class="discover_nav_item">
            <router-link :class="{active: $route.path === '/discover/recommend'}" :to="{ path: '/discover/recommend' }">推荐</router-link>
          </li>
          <li class="discover_nav_item">
            <router-link :class="{active: $route.path === '/discover/rank'}" :to="{ path: '/discover/rank' }">排行榜</router-link>
          </li>
          <li class="discover_nav_item">
            <router-link :class="{active: $route.path === '/discover/radio'}" :to="{ path: '/discover/radio' }">主播电台</router-link>
          </li>
        </ul>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "",
};
</script>

<style scoped lang="less">
.discover_nav_container {
  height: 35px;
  background: #C20C0C;
  margin-top: -5px;
  .discover_nav_content {
    width: 1100px;
    height: 100%;
    margin: 0 auto;
    padding-left: 180px;
    box-sizing: border-box;
    .discover_nav_list {
      .discover_nav_item {
        float: left;
        a {
          color: #fff;
          display: block;
          padding: 3px 13px;
          margin: 6px 17px 0;
          border-radius: 10px;
        } 
        a:hover {
          color: #fff !important;
          background: #9B0909;
        }
        a.active {
          background: #9B0909;
        }
      }
    }
  }
}
</style>
