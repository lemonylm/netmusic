<template>
  <div class="title_container">
    <div class="dot"></div>
    <span class="title">{{title}}</span>
    <slot></slot>
    <div class="right">
      <div class="box">
        <div class="more"></div>
        <span class="text">更多</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Title',
  props: ['title']
}
</script>

<style lang="less" scoped>
.title_container {
  width: 100%;
  height: 35px;
  border-bottom: 2px solid #C10D0C;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  .dot {
    width: 33px;
    height: 33px;
    background: url(/image/sprite/index.png) no-repeat -225px -154px ;
  }
  .title {
    font-size: 20px;
  }
  .type_list {
    li {
      padding: 0 15px;
      float: left;
      &+li {
        border-left: 1px solid #aaa;
      }
      a {
        color: #66667F;
      }
    }
  }
  .right {
    flex: 1;
    .box {
      cursor: pointer;
      .more {
        float: right;
        width: 12px;
        height: 12px;
        background: url(/image/sprite/index.png) no-repeat 0 -238px;
      }
      .text {
        float: right;
      }
    }
  }
}
</style>
