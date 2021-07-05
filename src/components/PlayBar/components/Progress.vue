<template>
  <div class="wrapper">
    <!--进度条拖动-->
    <div ref="mmProgress" class="mmProgress" @click="barClick">
      <div class="btmbar" ref="btmbar"></div>
      <div class="mmProgress-bar"></div>
      <div ref="mmPercentProgress" class="mmProgress-outer"></div>
      <div ref="mmProgressInner" class="mmProgress-inner"></div>
    </div>
    <div
      ref="dot"
      class="mmProgress-dot"
      @mousedown.prevent="barDown"
      @touchstart.prevent="barDown"
    >
      <div class="curText" v-show="isShowText">
        {{ (totalTime * (progressWidth / 466) || 0) | fmtTime }}
      </div>
    </div>
  </div>
</template>

<script>
const dotWidth = 15;
import dayjs from "dayjs";
export default {
  name: "Progress",
  props: {
    // 进度值一
    percent: {
      type: [Number],
      default: 0,
    },
    // 进度值二（歌曲缓冲进度用）
    percentProgress: {
      type: [Number],
      default: 0,
    },
    // 总时间
    totalTime: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      move: {
        status: false, // 是否可拖动
        startX: 0, // 记录最开始点击的X坐标
        left: 0, // 记录当前已经移动的距离
      },
      progressWidth: 0,
      isShowText: false,
    };
  },
  watch: {
    percent(newPercent) {
      if (newPercent >= 0 && !this.move.status) {
        const barWidth = this.$refs.mmProgress.clientWidth - dotWidth;
        const offsetWidth = newPercent * barWidth;
        this.moveSilde(offsetWidth);
      }
    },
    percentProgress(newValue) {
      let offsetWidth = this.$refs.mmProgress.clientWidth * newValue;
      this.$refs.mmPercentProgress.style.width = `${offsetWidth}px`;
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.bindEvents();
      const barWidth = this.$refs.mmProgress.clientWidth - dotWidth;
      const offsetWidth = this.percent * barWidth;
      this.moveSilde(offsetWidth);
    });
  },
  beforeDestroy() {
    this.unbindEvents();
  },
  methods: {
    // 添加绑定事件
    bindEvents() {
      document.addEventListener("mousemove", this.barMove);
      document.addEventListener("mouseup", this.barUp);

      document.addEventListener("touchmove", this.barMove);
      document.addEventListener("touchend", this.barUp);
    },
    // 移除绑定事件
    unbindEvents() {
      document.removeEventListener("mousemove", this.barMove);
      document.removeEventListener("mouseup", this.barUp);

      document.removeEventListener("touchmove", this.barMove);
      document.removeEventListener("touchend", this.barUp);
    },
    // 点击事件
    barClick(e) {
      let rect = this.$refs.mmProgress.getBoundingClientRect();
      let offsetWidth = Math.min(
        this.$refs.mmProgress.clientWidth - dotWidth,
        Math.max(0, e.clientX - rect.left)
      );
      this.moveSilde(offsetWidth);
      this.commitPercent(true);
    },
    // 鼠标按下事件
    barDown(e) {
      this.isShowText = true;
      this.move.status = true;
      this.move.startX = e.clientX || e.touches[0].pageX;
      this.move.left = this.$refs.mmProgressInner.clientWidth;
    },
    // 鼠标/触摸移动事件
    barMove(e) {
      if (!this.move.status) {
        return false;
      }
      e.preventDefault();
      let endX = e.clientX || e.touches[0].pageX;
      let dist = endX - this.move.startX;
      let offsetWidth = Math.min(
        this.$refs.mmProgress.clientWidth - dotWidth,
        Math.max(0, this.move.left + dist)
      );
      this.moveSilde(offsetWidth);
    },
    // 鼠标/触摸释放事件
    barUp(e) {
      this.isShowText = false;
      if (this.move.status) {
        this.commitPercent(true);
        this.move.status = false;
      }
    },
    // 移动滑块
    moveSilde(offsetWidth) {
      this.progressWidth = offsetWidth;
      this.$refs.dot.style.transform = `translateX(${offsetWidth}px)`;
      this.$refs.mmProgressInner.style.width = `${offsetWidth}px`;
    },
    // 修改 percent
    commitPercent(isEnd = false) {
      const { mmProgress, mmProgressInner } = this.$refs;
      const lineWidth = mmProgress.clientWidth - dotWidth;
      const percent = mmProgressInner.clientWidth / lineWidth;
      this.$emit(isEnd ? "percentChangeEnd" : "percentChange", percent);
    },
  },
  filters: {
    fmtTime(value) {
      if (!value) return "00:00";
      return dayjs(Math.floor(value * 1000)).format("mm:ss");
    },
  },
};
</script>

<style lang="less" scoped>
.wrapper {
  position: relative;
  height: 30px;
  .mmProgress-dot {
    cursor: pointer;
    position: absolute;
    top: 3px;
    left: -4px;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: #fff;
    transform: translateY(-50%);
    z-index: 9999;
    background-image: url("../imgs/iconall.png");
    background-position: -4px -254px;
    .curText {
      text-align: center;
      position: absolute;
      width: 35px;
      height: 15px;
      top: -25px;
      background: rgba(255, 255, 255, 0.65);
      box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
      backdrop-filter: blur(5.5px);
      -webkit-backdrop-filter: blur(5.5px);
      border-radius: 5px;
      border: 1px solid rgba(255, 255, 255, 0.18);
    }
  }
}
.mmProgress {
  height: 9px;
  top: 6px;
  width: 466px;
  position: relative;
  user-select: none;
  cursor: pointer;
  overflow: hidden;
  .btmbar {
    border-radius: 6px;
    top: 0;
    width: 100%;
    height: 9px;
    position: absolute;
    background-image: url("../imgs/statbar.png");
    background-position: right 0;
    z-index: 101;
  }
  .mmProgress-bar {
    border-radius: 6px;
    height: 9px;
    width: 100%;
    background: skyblue;
    background-position: right -30px;
    background-image: url("../imgs/statbar.png");
    z-index: 100;
  }
  .mmProgress-outer {
    position: absolute;
    top: 50%;
    left: 5px;
    display: inline-block;
    width: 0;
    height: 9px;
    margin-top: -1px;
    background: rgba(255, 255, 255, 0.2);
  }
  .mmProgress-inner {
    border-radius: 5px;
    top: 2px;
    position: absolute;
    display: inline-block;
    width: 0;
    height: 9px;
    margin-top: -2px;
    background-image: url("../imgs/statbar.png");
    background-position: right -66px;
    z-index: 999;
  }
}
</style>
