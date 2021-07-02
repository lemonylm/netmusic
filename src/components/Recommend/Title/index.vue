<template>
  <div class="title_container">
    <div class="dot"></div>
  </div>
</template>

<script>
export default {
  name: 'Title',
}
</script>

<style lang="less" scoped>
.title_container {
  height: 35px;
  border-bottom: 2px solid #C10D0C;
  box-sizing: border-box;
  .dot {
    width: 33px;
    height: 33px;
    background: url(/image/sprite);
  }
}
</style>
