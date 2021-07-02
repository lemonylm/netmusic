<template>
  <div id="app">
    <router-view />
    <PlayBar class="playBar" />
  </div>
</template>
 <script>
import PlayBar from "components/PlayBar";
export default {
  components: {
    PlayBar,
  },
};
</script>
<style lang="less">
.playBar {
  position: fixed;
  bottom: 0;
  z-index: 9999;
}
</style>
