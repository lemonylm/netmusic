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

#one-box {
  min-height: 700px;
  width: 1000px;
  margin: 0 auto;
  margin-top: 5px;
  background-color: #fff;
  border: 1px solid #d3d3d3;
  border-top: 0;
  border-bottom: 0;
  padding: 40px;
  box-sizing: border-box;
}
/**
  <div id="left-box">  </div>
*/
#left-box {
  min-height: 300px;
}
/**
  <div id="right-box">  </div>
*/
#right-box {
  min-height: 300px;
}
#nprogress .bar {
  background: red !important;
}

.playBar {
  position: fixed;
  bottom: 0;
  z-index: 9999;
}


</style>
