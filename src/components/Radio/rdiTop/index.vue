<template>
  <div class="container">
    <div class="middle-header">
      <h3>
        <a href="javascript:;">音乐推荐</a>
      </h3>
      <a href="javascript:">更多 ></a>
    </div>

    <!-- 隔行变色表格 -->
    <div class="all">
      <ul
        v-for="(row, index) in rdiTopInfo"
        :key="index"
        :class="{ on: index % 2 == 0, off: index % 2 != 0 }"
      >
        <li
          @mouseover="mouseOver"
          @mouseleave="mouseLeave"
          @mouseenter="curIndex = index"
        >
          <i :class="{ active: curIndex === index }" @click="changeSong">
            <img src="@/../public/image/radio/iconall.png" alt="" />
          </i>
          <a class="cvrleft" title="播放">
            <img class="album" :src="row.blurCoverUrl" alt="" />
            <!-- <i class="imgs" ref="ply" v-show="true">
            <img src="@/../public/image/radio/iconall.png" alt="" />
          </i> -->
          </a>
          <div class="cvrmiddle">
            <a class="top">{{ row.name }}</a>
            <a class="bottom">{{ row.radio.name }}</a>
          </div>
          <a class="cvrright"> {{ row.radio.category }} </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "RdiTop",
  props: ["rdiTopInfo"],
  data() {
    return {
      active: "display:block",
      actives: "display:none",
      curIndex: null,
      // isShow: true,
      // currentIndex: -1,
      // number: 99,
    };
  },
  methods: {
    mouseOver() {},
    mouseLeave() {
      this.curIndex = null;
    },
    changeSong(){
      this.$store.dispatch("playOneSong",this.rdiTopInfo[this.curIndex].mainSong.id)
    },
  },
};
</script>

<style lang = 'less' scoped>
.container {
  box-sizing: border-box;
}
.middle-header {
  width: 426px;
  height: 42px;
  display: flex;
  justify-content: space-between;
  border-bottom: 2px solid #c20c0c;
  background-color: white;
  h3 {
    a {
      color: #333;
      font-size: 28px;
    }
    a:hover {
      color: #333 !important;
      text-decoration: underline;
    }
  }
  a {
    margin-top: 14px;
  }
  a:hover {
    color: #333 !important;
    text-decoration: underline;
  }
}
// 列表组件
ul {
  position: relative;
  height: 60px;
  li {
    padding-top: 10px;
    display: flex;
    .cvrleft {
      margin-left: 20px;
      width: 40px;
      height: 40px;
      .album {
        width: 40px;
        height: 40px;
      }
    }
    .cvrmiddle {
      width: 254px;
      .top {
        color: #333;
        display: block;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        word-wrap: normal;
        cursor: pointer;
      }
      .bottom {
        color: #999;
        cursor: pointer;
      }
      a:hover {
        color: #333 !important;
        text-decoration: underline;
      }
    }
    .cvrright {
      height: 16px;
      cursor: pointer;
      line-height: 16px;
      border: 1px solid #999;
      font-size: 12px;
    }
    a:hover {
      color: #999 !important;
      text-decoration: underline;
    }
    i {
      position: absolute;
      display: none;
      /* display: block; */
      width: 22px;
      height: 22px;
      top: 32px;
      left: 44px;
      overflow: hidden;
      margin: -11px 0 0 -11px;
      background-position: 0 -85px;
      _background-position: 0 0;
    }
    i.active {
      display: block;
    }
  }
}
ul:hover {
  background-color: #eeeeee;
}
.on {
  background: #ffffff;
}
.off {
  background: #f7f7f7;
}
.all {
  border: 1px solid rgb(227, 227, 227);
}
</style>
