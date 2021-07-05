<template>
  <div class="lyric" ref="row">
    <div class="title">
      <p>{{ songName }}</p>
      <p>{{ singer }}</p>
    </div>
    <div class="content">
      <p
        v-for="(item, index) in fmtLyric"
        class="row"
        :class="{ active: index === curIndex }"
      >
        {{ item.text }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Lyric",
  props: {
    currentT: {
      type: Number,
      default: 0,
    },
    id: {
      type: Number,
      default: 0,
    },
    songName: {
      type: String,
      default: "songName",
    },
    singer: {
      type: String,
      default: "singer",
    },
  },
  data() {
    return {
      lyric: "",
    };
  },
  mounted() {
    this.getLyric();
  },
  methods: {
    async getLyric() {
      const res = await this.$API.player.getLyric(this.id);
      if (res.code === 200) {
        this.lyric = res.lrc.lyric;
      }
    },
  },
  computed: {
    // 歌词解析
    fmtLyric() {
      const lrc = this.lyric;
      const timeExp = /\[(\d{2,}):(\d{2})(?:\.(\d{2,3}))?]/g;
      const lines = lrc.split("\n");
      const lyric = [];
      for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        const result = timeExp.exec(line);
        if (!result) {
          continue;
        }
        const text = line.replace(timeExp, "").trim();
        if (text) {
          lyric.push({
            time:
              (result[1] * 6e4 + result[2] * 1e3 + (result[3] || 0) * 1) / 1e3,
            text,
          });
        }
      }
      return lyric;
    },
    // 动态计算当前index
    curIndex() {
      return this.fmtLyric.findIndex((item) => item.time >= this.currentT) - 1;
    },
  },
  watch: {
    // 调整滚动距离
    curIndex: {
      handler() {
        let num = 1;
        let timer = setInterval(() => {
          this.$refs.row.scrollTop =
            (this.curIndex - 1) * 40 + (40 / 50) * (num - 1);
          num++;
          if (num === 50) {
            clearInterval(timer);
          }
        }, 10);
      },
    },
    // 根据id变化重新获取歌词
    id() {
      this.getLyric();
    },
  },
};
</script>

<style scoped lang="less">
.lyric {
  width: 500px;
  height: 300px;
  color: #fff;
  overflow-y: scroll;
  background: rgba(0, 0, 0, 0.7);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(7.5px);
  -webkit-backdrop-filter: blur(7.5px);
  border-radius: 0 10px 10px 0;
  border: 1px solid rgba(255, 255, 255, 0.18);
  transition: all 1s linear;
  &::-webkit-scrollbar {
    width: 0 !important;
  }
  .title {
    text-align: center;
    font-size: 28px;
    line-height: 50px;
    height: 130px;
    p {
      height: 50px;
    }
  }

  .row {
    font-size: 16px;
    padding: 10px 0;
    width: 100%;
    text-align: center;
  }
  .row.active {
    font-size: 20px;
    color: #4df58a;
    text-shadow: 0.5px 0.5px 0.5px #4df58a, 0 0 0.1em #4df58a, 0 0 0.1em #4df58a;
  }
}
</style>
