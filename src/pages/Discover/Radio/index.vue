<template>
  <div class="container">
    <div class="test">radio</div>
    <div class="main-container">
      <div class="main-header">

      </div>
      <div class="main-middle">

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
};
</script>

<style lang="less">
.container{
  height: 2222px;
}
.container .test {
  width: 100%;
  height: 206px;
  margin-top: -100px;
  background-color: #CACCCE;
}
.container .main-container {
  width: 980px;
  // height: 1000px;
  margin: 0 auto;
  background-color: pink;
  display:flex;
  flex-direction: column;
  .main-header {
    margin:40px auto 0;
    width: 900px;
    height: 194px;
    background-color:yellowgreen;
  }
  .main-middle {
    width: 900px;
    height: 643px;
    background-color:skyblue;
    margin:0 auto;
  }
}
</style>
