<template>
  <div class="playBar" :class="{ hide: !isLock }">
    <div class="wrap">
      <div class="btns">
        <a href="javascript:;" title="上一首" class="prv"></a>
        <a
          href="javascript:;"
          :title="isPlay ? '播放' : '暂停'"
          class="ply"
        ></a>
        <a href="javascript:;" title="上一首" class="nxt"></a>
      </div>
    </div>
    <div class="lock-bg">
      <div
        @click="changeStatus"
        class="lock"
        :class="{ unlock: !isLock }"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PlayBar",
  data() {
    return {
      isLock: true,
      isPlay: false,
    };
  },
  methods: {
    changeStatus() {
      let { isLock } = this;
      this.isLock = !isLock;
    },
  },
};
</script>

<style scoped lang="less">
.playBar {
  width: 100%;
  height: 63px;
  font-size: 12px;
  background-image: url("./imgs/playbar.png");
  background-repeat: repeat-x;
  background-position: 0 10px;
  transition: all 0.8s linear 0.5s;
  position: relative;
  .wrap {
    width: 980px;
    height: 42px;
    background-color: skyblue;
    position: absolute;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
    .btns {
      width: 137px;
      height: 42px;
      a {
        float: left;
        display: block;
      }
      .prv,
      .nxt {
        margin-top: 8px;
        width: 28px;
        height: 28px;
        background-color: red;
      }
      .ply {
        width: 36px;
        background-color: red;
        height: 36px;
      }
    }
  }
  .lock-bg {
    position: absolute;
    right: 0;
    top: -1px;
    height: 73px;
    background-image: url("./imgs/playbar.png");
    width: 70px;
    background-position: 0 -383px;
    .lock {
      user-select: none;
      position: absolute;
      left: 16px;
      top: 2px;
      width: 18px;
      height: 18px;
      background-position: -100px -380px;
      background-image: url("./imgs/playbar.png");
      &:hover {
        background-position: -100px -400px;
      }
    }
    .unlock {
      transform: translateX(3px);
      background-position: -82px -380px;
      &:hover {
        background-position: -82px -400px;
      }
    }
  }
}
.hide {
  transform: translateY(43px);
  &:hover {
    transform: translateY(0);
    transition: all 0.2s linear 0.2s;
  }
}
</style>
