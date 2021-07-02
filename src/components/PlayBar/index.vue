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
        </div>
        <Progress
          :percent="percentMusic"
          :percent-progress="currentProgress"
          @percentChange="progressMusic"
          @percentChangeEnd="progressMusicEnd"
        />
      </div>
      <!-- 时间进度 -->
      <div class="time">
        <em class="cur">{{ curTime }}</em> / {{ totalTime }}
      </div>
      <!-- 分享等选项 -->
      <div class="oper">
        <a class="icn" href="javascript:;" title="画中画歌词"></a>
        <a class="like" href="javascript:;" title="收藏"></a>
        <a class="share" href="javascript:;" title="分享"></a>
      </div>
      <!-- 控制条 -->
      <div class="controller">
        <a class="volume" href="javascript:;" title="音量"></a>
        <a class="mode" href="javascript:;" :title="mode"></a>
        <a class="list" href="javascript:;" title="播放列表"></a>
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
      currentProgress: 0, // 当前缓冲进度
      curTime: "00:00",
      totalTime: "04:00",
      mode: ["播放", "随机", "循环"],
    };
  },
  computed: {
    //   计算进度条的进度
    percentMusic() {
      //   const duration = this.currentMusic.duration;
      //   return this.currentTime && duration ? this.currentTime / duration : 0;
    },
  },
  methods: {
    //   修改锁定状态
    changeStatus() {
      let { isLock } = this;
      this.isLock = !isLock;
    },
    // 修改音乐显示时长
    progressMusic(percent) {
      //   this.currentTime = this.currentMusic.duration * percent;
    },
    // 修改音乐进度
    progressMusicEnd(percent) {
      //   this.audioEle.currentTime = this.currentMusic.duration * percent;
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
  transition: all 0.5s linear 0.5s;
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
        &:hover {
          background-position: -30px -130px;
        }
      }
      .nxt {
        background-position: -80px -130px;
        &:hover {
          background-position: -110px -130px;
        }
      }
      .ply {
        background-image: url("./imgs/playbar.png");
        width: 36px;
        height: 36px;
        background-position: 0 -204px;
        margin: 2px 8px;
        &:hover {
          background-position: -40px -204px;
        }
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
        float: left;
        a {
          display: block;
        }
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
          width: 14px;
          height: 15px;
          position: relative;
          left: 10px;
          top: 4px;
          &:hover {
            background-position: -130px -103px;
          }
        }
      }
    }
    .time {
      float: left;
      color: #797979;
      font-size: 14px;
      position: relative;
      top: 20px;
      left: 10px;
      .cur {
        color: #a1a1a1;
      }
    }
    .oper {
      float: left;
      margin: 7px 0 0 28px;
      a {
        display: inline-block;
        width: 25px;
        height: 25px;
        margin-left: 2px;
      }
      .like {
        background-position: -88px -163px;
        background-image: url("./imgs/playbar.png");
        &:hover {
          background-position: -88px -189px;
        }
      }
      .icn {
        background-position: -88px -163px;
        background: url("./imgs/icn.png") no-repeat 0 0;
        &:hover {
          background-position: 0px -25px;
        }
      }
      .share {
        background-position: -114px -163px;
        background-image: url("./imgs/playbar.png");
        &:hover {
          background-position: -114px -189px;
        }
      }
    }
    .controller {
      position: relative;
      left: 20px;
      top: 7px;
      a {
        display: inline-block;
        width: 25px;
        height: 25px;
        margin-right: 2px;
      }
      .volume {
        background-image: url("./imgs/playbar.png");
        background-position: -2px -248px;
        &:hover {
          background-position: -31px -248px;
        }
      }
      .mode {
        background-image: url("./imgs/playbar.png");
        background-position: -3px -344px;
        &:hover {
          background-position: -33px -344px;
        }
      }
      .list {
        background-image: url("./imgs/playbar.png");
        background-position: -42px -68px;
        &:hover {
          background-position: -42px -98px;
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
      //   user-select: none;
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
