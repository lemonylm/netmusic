<template>
  <div class="List" ref="row">
    <div class="title">
      播放列表 <i>({{ songList.length || 0 }})</i>
    </div>
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
</template>

<script>
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
  },

  data() {
    return {
      curIndex: "",
      curId: "",
    };
  },
  mounted() {},
  methods: {
    changeList(index, id) {
      this.curIndex = index;
      this.curId = id;
      this.$emit("changeSong", id);
    },
  },
  computed: {},
  watch: {
    songList: {
      immediate: true,
      handler(list) {
        const tmpList = list.map(async (item) => {
          const infoRes = await this.$API.player.getSongInfo(item);
          if (infoRes.code === 200) {
            return {
              songName: infoRes.songs[0].name,
              singer: infoRes.songs[0].ar[0].name,
              picUrl: infoRes.songs[0].al.picUrl,
            };
          }
        });
        this.songInfoList = tmpList;
      },
    },
    curId(val) {
      let idx = this.songList.findIndex((item) => item.id === val);
      this.$refs.row.scrollTop = 40 + (idx - 2) * 70;
    },
  },
};
</script>

<style scoped lang="less">
.List {
  width: 500px;
  height: 300px;
  color: #fff;
  overflow-y: scroll;
  background: rgba(0, 0, 0, 0.7);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(7.5px);
  -webkit-backdrop-filter: blur(7.5px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  transition: all 1s linear;
  &::-webkit-scrollbar {
    width: 0 !important;
  }
  .title {
    text-align: center;
    font-size: 22px;
    line-height: 50px;
    height: 40px;
    i {
      font-size: 16px;
      color: #888;
    }
  }

  .row {
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
</style>
