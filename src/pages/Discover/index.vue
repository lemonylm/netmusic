<template>
  <div>
    <Header></Header>
    discover页
    <router-link :to="{ path: '/discover/recommend' }">推荐</router-link>
    <router-link :to="{ path: '/discover/rank' }">排行</router-link>
    <router-link :to="{ path: '/discover/playlist' }">歌单</router-link>
     <router-link :to="{ path: '/discover/newdiscshelves' }">新碟上架</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "",
};
</script>

<style scoped lang="less">
</style>
