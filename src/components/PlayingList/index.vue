<template>
  <div class="list-wrap">
    <div class="title">
      播放列表 <i>({{ songList.length || 0 }})</i>
    </div>
    <div class="List" ref="row">
      <div class="content">
        <p
          @click="changeList(index, item.id)"
          class="row"
          v-for="(item, index) in songList"
          :class="{ active: curId === item.id }"
        >
          <span class="albumPic"> <img :src="item.picUrl" /></span>
          <span class="name"> {{ item.songName }}</span>
          <span class="singer"> {{ item.singer }}</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import throttle from "lodash/throttle";
export default {
  name: "PlayingList",
  props: {
    songList: {
      type: Array,
      default: () => {
        return [
          {
            id: "",
            songName: "",
            singer: "",
            picUrl: "",
            desc: "",
          },
        ];
      },
    },
    curId: {
      type: Number,
      default: 1858083996,
    },
  },
  data() {
    return {
      curIndex: "",
    };
  },
  methods: {
    changeList: throttle(
      function (index, id) {
        this.curIndex = index;
        this.$store.dispatch("playOneSong", id);
      },
      500,
      { trailing: false }
    ),
  },
  watch: {
    curId: {
      handler(val) {
        let idx = this.songList.findIndex((item) => item.id === val);
        this.$refs.row.scrollTop = 40 + (idx - 2) * 70;
      },
    },
  },
};
</script>

<style scoped lang="less">
.list-wrap {
  width: 500px;
  height: 300px;
  background: rgba(0, 0, 0, 0.7);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(7.5px);
  -webkit-backdrop-filter: blur(7.5px);
  border-radius: 10px 0 0 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  transition: all 1s linear;
  color: #fff;
  .title {
    content-visibility: auto;
    contain-intrinsic-size: 40px;
    text-align: center;
    font-size: 22px;
    line-height: 50px;
    height: 40px;
    i {
      font-size: 16px;
      color: #888;
    }
  }
  .List {
    width: 500px;
    height: 260px;
    overflow-y: scroll;
    &::-webkit-scrollbar {
      width: 0 !important;
    }

    .row {
      content-visibility: auto;
      contain-intrinsic-size: 50px;
      display: flex;
      align-items: center;
      cursor: pointer;
      text-indent: 20px;
      height: 50px;
      font-size: 16px;
      padding: 10px 0;
      width: 100%;
      &.active {
        color: cyan;
        text-shadow: 0.5px 0.5px 0.5px cyan, 0 0 0.1em cyan, 0 0 0.1em cyan;
        background-color: #555;
        transition: all 0.5s;
      }
      .albumPic {
        img {
          width: 50px;
          height: 50px;
          border-radius: 10px;
        }
      }
      .name {
        width: 250px;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
      }
      .singer {
        width: 200px;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
      }
    }
  }
}
</style>
