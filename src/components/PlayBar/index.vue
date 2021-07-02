<template>
  <div class="playBar" :class="{ hide: !isLock }">
    <!-- 版心 -->
    <div class="wrap">
      <!-- 按钮 -->
      <div class="btns">
        <a href="javascript:;" title="上一首" class="prv"></a>
        <a
          href="javascript:;"
          :title="isPlay ? '播放' : '暂停'"
          class="ply"
        ></a>
        <a href="javascript:;" title="上一首" class="nxt"></a>
      </div>
      <!-- 专辑图片 -->
      <div class="album">
        <img src="./imgs/404_cloud.png" />
      </div>
      <!-- 播放条 -->
      <div class="play">
        <div class="words">
          <a class="songName" href="javascript:;">呼吸决定</a>
          <a class="band" href="javascript:;">Fine乐团</a>
          <a class="src" href="javascript:;"></a>
          <span></span>
        </div>
        <Progress />
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
import Progress from "./components/Progress.vue";
export default {
  name: "PlayBar",
  components: {
    Progress,
  },
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
  .wrap {
    width: 980px;
    height: 42px;
    position: absolute;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
    .btns {
      float: left;
      width: 137px;
      height: 42px;
      a {
        float: left;
        display: block;
      }
      .prv,
      .nxt {
        margin-top: 7px;
        width: 28px;
        height: 28px;
        background-image: url("./imgs/playbar.png");
      }
      .prv {
        background-position: 0 -130px;
      }
      .nxt {
        background-position: -80px -130px;
      }
      .ply {
        background-image: url("./imgs/playbar.png");
        width: 36px;
        height: 36px;
        background-position: 0 -204px;
        margin: 2px 8px;
      }
    }
    .album {
      cursor: pointer;
      float: left;
      margin: 3px 15px 0 0;
      width: 34px;
      height: 34px;
      border-radius: 3px;
      background-color: red;
      img {
        width: 34px;
        height: 34px;
      }
    }
    .play {
      height: 40px;
      float: left;
      .words {
        .songName {
          color: #e8e8e8;
          &:hover {
            color: #9b9b9b;
          }
        }
        .band {
          max-width: 220px;
          margin-left: 15px;
          color: #9b9b9b;
          &:hover {
            color: #e8e8e8;
          }
        }
        .src {
          display: inline-block;
          background-image: url("./imgs/playbar.png");
          background-position: -110px -103px;
        }
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
