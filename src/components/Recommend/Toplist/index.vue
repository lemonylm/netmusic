<template>
  <div class="item">
    <div class="top_wrap">
      <img :src="list.coverImgUrl" alt="" />
      <div class="info">
        <p class="title">{{ list.name }}</p>
        <div class="icon">
          <div class="play"></div>
          <div class="add"></div>
        </div>
      </div>
    </div>
    <ul class="content_wrap">
      <li
        class="content_item"
        v-for="(item, index) of songs.slice(0, 10)"
        :key="item.id"
      >
        <span class="index">{{ index + 1 }}</span>
        <span class="name">{{ item.name }}</span>
      </li>
      <li class="content_item">
        <p>查看全部></p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Toplist",
  props: {
    list: {
      type: Object,
      default: () => {
        return {
          coverImgUrl: "",
          name: "",
          id: "",
        };
      },
    },
  },
  data() {
    return {
      trackIds: [],
      songs: [],
    };
  },
  watch: {
    list: {
      immediate: true,
      handler(list) {
        this.getPlaylistDetail(list.id);
        // const ids = this.trackIds.reduce((prev, item) => {
        //   return prev + item.id + ','
        // }, '').slice(0, -1)
        // this.getPlaylistSongsDetail(ids)
      },
    },
  },
  methods: {
    async getPlaylistDetail(id) {
      const result = await this.$API.recommend.getPlaylistDetail(id);
      if (result.code === 200) {
        this.trackIds = result.playlist.trackIds;
        this.songs = result.playlist.tracks;
        this.listInfo = {
          coverImgUrl: result.playlist.coverImgUrl,
          name: result.playlist.name,
        };
      }
    },
    // async getPlaylistSongsDetail(ids) {
    //   const result = await this.$API.recommend.getPlaylistSongsDetail(ids);
    //   if(result.code === 200) {
    //     this.songs = result.songs
    //   }
    // }
  },
};
</script>

<style lang="less" scoped>
.item {
  box-sizing: border-box;
  height: 472px;
  flex: 1;
  background: #f4f4f4;
  border: 1px solid #ccc;
  .top_wrap {
    padding: 20px 0 20px 20px;
    display: flex;
    img {
      width: 80px;
      height: 80px;
      box-shadow: 0 5px 5px -1px #aaa;
      border: 1px solid #ccc;
      box-sizing: border-box;
    }
    .info {
      font-weight: 700;
      padding-left: 10px;
      .title {
        font-size: 14px;
        height: 30px;
        line-height: 30px;
      }
      .icon {
        display: flex;
        padding-top: 5px;
        .play {
          width: 22px;
          height: 22px;
          background: url(/image/sprite/index.png) no-repeat -267px -205px;
          margin-right: 10px;
        }
        .add {
          width: 22px;
          height: 22px;
          background: url(/image/sprite/index.png) no-repeat -300px -205px;
        }
      }
    }
  }
  .content_wrap {
    .content_item {
      height: 32px;
      line-height: 32px;
      display: flex;
      &:nth-of-type(1),
      &:nth-of-type(2),
      &:nth-of-type(3) {
        .index {
          color: #c10d0c;
        }
      }
      &:nth-of-type(2n-1) {
        background: #e8e8e8;
      }
      .index {
        width: 35px;
        text-align: center;
        font-size: 16px;
        margin-left: 18px;
      }
      p {
        cursor: pointer;
        margin-left: 150px;
      }
    }
  }
}
</style>
