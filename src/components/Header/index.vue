<template>
  <div id="nav">
    <div class="nav_header">
      <div class="nav_header_main">
        <img class="logo" src="@/" alt="">
        <router-link :class="{active: path === 'discover'}" :to="{ path: '/discover' }">Discover</router-link> |
        <router-link :class="{active: path === 'mymusic'}" :to="{ path: '/mymusic' }">MyMusic</router-link>
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
  color: red;
}
#nav {
  .nav_header {
    height: 70px;
    background: #242424;
    .nav_header_main {
      width: 1100px;
      height: 100%;
      margin: 0 auto;
      .logo {
        width: 177px;
        height: 59px;
      }
    }
  }
}
</style>
