<template>
  <div id="app">
    <div id="nav">
      <router-link :to="{ path: '/discover' }">Discover</router-link> ||
      <router-link :to="{ path: '/mymusic' }">MyMusic</router-link>
    </div>
    <router-view />
    <audio src=""></audio>
  </div>
</template>

<style lang="less">
</style>
