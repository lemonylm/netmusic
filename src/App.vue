<template>
  <div id="app">
    <router-view />
    <PlayBar class="playBar" />
  </div>
</template>
 <script>
import PlayBar from "components/PlayBar";
// import Recommend from "components/Recommend";
export default {
  components: {
    PlayBar,
    // Recommend,
  },
};
</script>
<style lang="less">
.playBar {
  position: fixed;
  bottom: 0;
}
</style>
