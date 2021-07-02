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
<<<<<<< HEAD

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
.playBar{
=======
.playBar {
>>>>>>> 952a7d586ed96c618dcbcb51a9aebea0b55d9041
  position: fixed;
  bottom: 0;
}
}
</style>
