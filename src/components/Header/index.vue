<template>
  <div id="nav">
    <router-link :to="{ path: '/discover' }">Discover</router-link> |
    <router-link :to="{ path: '/mymusic' }">MyMusic</router-link>
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style lang="less" scoped>
</style>
