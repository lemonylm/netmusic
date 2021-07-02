<template>
  <div class="playBar" :class="{ hide: !isLock }">
    <!-- 版心 -->
    <div class="wrap">
      <!-- 按钮 -->
      <div class="btns">
        <a href="javascript:;" title="上一首" class="prv" @click="prev"></a>
        <a
          href="javascript:;"
          v-show="!isPlay"
          title="播放"
          class="ply"
          @click="audioPlay(true)"
        ></a>
        <a
          href="javascript:;"
          v-show="isPlay"
          title="暂停"
          class="ply pas"
          @click="audioPlay(false)"
        ></a>
        <a href="javascript:;" title="上一首" class="nxt" @click="next"></a>
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
        <em class="cur">{{ curTime | fmtTime }}</em> / {{ totalTime | fmtTime }}
      </div>
      <!-- 分享等选项 -->
      <div class="oper">
        <a class="icn" href="javascript:;" title="画中画歌词"></a>
        <a class="like" href="javascript:;" title="收藏"></a>
        <a class="share" href="javascript:;" title="分享"></a>
      </div>
      <!-- 控制条 -->
      <div class="controller">
        <div class="volumeBar">
          <a
            @click="showVolume()"
            class="volume"
            v-show="volume !== 0"
            href="javascript:;"
            title="音量"
          ></a>
          <a
            @click="showVolume()"
            class="volume mute"
            v-show="volume === 0"
            href="javascript:;"
            title="静音"
          ></a>
          <div class="bar" :class="{ active: isShowVolume }">
            <div class="curr" ref="vBar"></div>
            <span
              ref="vBtn"
              class="btn"
              @mousedown="btnDown($event, true)"
            ></span>
          </div>
        </div>
        <a
          @click="changeMode(0)"
          class="mode"
          v-show="currentMode === 0"
          href="javascript:;"
          :title="mode[0]"
        ></a>
        <a
          @click="changeMode(1)"
          class="mode mode1"
          v-show="currentMode === 1"
          href="javascript:;"
          :title="mode[1]"
        ></a>
        <a
          @click="changeMode(2)"
          class="mode mode2"
          v-show="currentMode === 2"
          href="javascript:;"
          :title="mode[2]"
        ></a>

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
    <audio ref="audio" :src="audioPath"></audio>
  </div>
</template>

<script>
import Progress from "./components/Progress.vue";
import dayjs from "dayjs";
import throttle from "lodash/throttle";
export default {
  name: "PlayBar",
  components: {
    Progress,
  },
  data() {
    return {
      isLock: true,
      isPlay: false,
      isMute: false,
      isShowVolume: false,
      volume: 50,
      startY: 0,
      currentProgress: 0, // 当前缓冲进度
      curTime: 0,
      totalTime: 0,
      mode: ["顺序播放", "单曲循环", "随机"],
      currentMode: 0,
      audioPath:
        "http://m801.music.126.net/20210702215034/954b4251053d36aacfcb0281b4765c6a/jdymusic/obj/wo3DlMOGwrbDjj7DisKw/8833391338/95b3/efe8/12b8/a0947809e3a0c3be9d460033dbae8259.mp3",
      isDown: false,
    };
  },
  methods: {
    //   修改锁定状态
    changeStatus() {
      let { isLock } = this;
      this.isLock = !isLock;
    },
    // 修改音乐显示时长
    progressMusic(percent) {
      this.curTime = this.totalTime * percent;
    },
    // 修改音乐进度
    progressMusicEnd(percent) {
      this.$refs.audio.currentTime = this.totalTime * percent;
    },
    // 播放和暂停
    audioPlay(flag) {
      this.isPlay = flag;
      if (flag) {
        this.$refs.audio.play();
        this.timer = setInterval(() => {
          this.curTime = this.$refs.audio.currentTime;
          this.totalTime = this.$refs.audio.duration;
        }, 500);
      } else {
        this.$refs.audio.pause();
        clearInterval(this.timer);
      }
    },
    // 更换模式
    changeMode(mode) {
      mode++;
      if (mode === 3) {
        this.currentMode = 0;
      } else {
        this.currentMode = mode;
      }
    },
    // 下一首
    next() {},
    // 上一首
    prev() {},
    // 显示bar
    showVolume() {
      //   let { isMute } = this;
      //   this.isMute = !isMute;
      //   this.$refs.audio.volume = this.isMute ? 0 : 1;
      this.isShowVolume = !this.isShowVolume;
    },
    // 调整音量
    changeVolume(e) {
      let { isDown } = this;
      if (isDown) {
        let dis = e.clientY - this.startY;
        if (dis > 50) {
          dis = 50;
        } else if (dis < -50) {
          dis = -50;
        }
        this.volume = 50 - dis;
        this.$refs.audio.volume = (50 - dis) / 100;
        this.$refs.vBar.style.height = 50 - dis + "px";
        this.$refs.vBtn.style.top = 50 + dis + "px";
      }
    },
    // 音量按钮按下
    btnDown(e, isDown) {
      this.isDown = isDown;
      this.startY = e.clientY;
    },
  },
  computed: {
    //   计算进度条的进度
    percentMusic() {
      const { curTime, totalTime } = this;
      return curTime / totalTime || 0;
    },
  },
  watch: {
    audioPath: {
      handler() {
        this.curTime = this.$refs.audio.currentTime;
        this.totalTime = this.$refs.audio.duration;
      },
    },
  },
  filters: {
    fmtTime(value) {
      if (!value) return "00:00";
      return dayjs(Math.floor(value * 1000)).format("mm:ss");
    },
  },
  mounted() {
    window.addEventListener(
      "mousemove",
      throttle(this.changeVolume, 20, { trailing: false })
    );
    window.addEventListener("mouseup", () => {
      this.isDown = false;
    });
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
  user-select: none;
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
        cursor: pointer;
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
      .ply.pas {
        background-position: 0 -165px;
        &:hover {
          background-position: -40px -165px;
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
        height: 15px;
        a {
          float: left;
        }
        .songName {
          color: #e8e8e8;
          &:hover {
            color: #9b9b9b;
          }
        }
        .band {
          max-width: 220px;
          margin-left: 10px;
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
          margin-left: 7px;
          margin-top: 1px;
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
      top: 18px;
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
      float: left;
      margin-left: 20px;
      margin-top: 7px;
      a {
        display: inline-block;
        width: 25px;
        height: 25px;
        margin-right: 2px;
      }
      .volumeBar {
        position: relative;
        float: left;
        width: 25px;
        height: 25px;
        margin-right: 2px;
        .bar {
          position: absolute;
          top: -124px;
          left: -4px;
          width: 32px;
          height: 113px;
          background-position: 0 -503px;
          background-image: url("./imgs/playbar.png");
          display: none;
          .curr {
            width: 4px;
            position: absolute;
            height: 50px;
            top: auto;
            bottom: 8px;
            left: 14px;
            background-position: -40px bottom;
            background-image: url("./imgs/playbar.png");
          }
          .btn {
            width: 18px;
            height: 20px;
            display: block;
            position: absolute;
            background-position: -40px -250px;
            left: 7px;
            top: 50px;
            background-image: url("./imgs/iconall.png");
          }
        }
        .bar.active {
          display: block;
        }
        .volume {
          background-image: url("./imgs/playbar.png");
          background-position: -2px -248px;
          &:hover {
            background-position: -31px -248px;
          }
        }
        .volume.mute {
          background-image: url("./imgs/playbar.png");
          background-position: -104px -69px;
          &:hover {
            background-position: -126px -69px;
          }
        }
      }

      .mode {
        background-image: url("./imgs/playbar.png");
        background-position: -3px -344px;
        &:hover {
          background-position: -33px -344px;
        }
      }
      .mode.mode1 {
        background-image: url("./imgs/playbar.png");
        background-position: -66px -344px;
        &:hover {
          background-position: -93px -344px;
        }
      }
      .mode.mode2 {
        background-image: url("./imgs/playbar.png");
        background-position: -66px -248px;
        &:hover {
          background-position: -93px -248px;
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
      cursor: pointer;
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
