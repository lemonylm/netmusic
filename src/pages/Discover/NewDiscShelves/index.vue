<template>
  <div class="playList">
    <div class="playList-content">
      <div class="all-content">
        <div class="header">
          <div class="header-content">
            <span>热门新碟</span>
          </div>
        </div>
        <div class="main">
          <div class="content" >
            <div class="main-content" v-for="(item,index) in descList" :key="item.id" @click="changeList(item.id)">
              <div class="box">
                <img class="image" :src="item.picUrl" alt="" />
              </div>
              <a href="javascript:;" class="text">{{ item.name }}</a>
              <p class="author">
                <a href="javascript:;" class="name">{{ item.artist.name }}</a>
              </p>
            </div>
          </div>
        </div>

        <div class="header">
          <div class="header-content">
            <span>全部新碟</span>
            <div class="list">
              <a href="javascript:;">全部</a>
              <a href="javascript:;">华语</a>
              <a href="javascript:;">欧美</a>
              <a href="javascript:;">韩国</a>
              <a href="javascript:;">日本</a>
            </div>
          </div>
        </div>
        <div class="main">
          <div class="content">
            <div class="main-content" v-for="(item,index) in allList" :key="item.id" @click="changeList(item.id)">
              <div class="box">
                <img class="image" :src="item.picUrl" alt="" />
              </div>
              <a href="javascript:;" class="text">{{ item.name }}</a>
              <p class="author">
                <a href="javascript:;" class="name">{{ item.artist.name }}</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NewDiscShelves",
  data() {
    return {
      descList: {},
      allList: {},
      curIndex: "",
    };
  },
  methods: {
    async getDescList() {
      const result = await this.$API.newDiscShelves.getDescList(this.limit);
      // console.log(result);
      if (result.code === 200) {
        this.descList = result.monthData.splice(0, 10);
      }
    },

  async   changeList(id) {
    
      this.$store.dispatch("updateSongList",id);
    },
    async allDescList() {
      const result = await this.$API.newDiscShelves.allDescList(this.limit);
      if (result.code === 200) {
        this.allList = result.albums;
      }
    },
  },
  mounted() {
    this.getDescList();
    this.allDescList();
  },
};
</script>

<style lang='less' scoped>
.playList {
  height: 100%;
  width: 100%;
  background-color: #f5f5f5;
  .playList-content {
    width: 980px;
    background-color: #fff;
    margin: 0 auto;
    .all-content {
      width: 900px;
      margin: 0 auto;
      padding: 40px 0;
      // background-color: red;
      .header {
        .header-content {
          margin-bottom: 20px;
          // background-color: lightblue;
          height: 40px;
          border-bottom: 2px solid #c20c0c;
          display: flex;
          span {
            font-size: 24px;
            margin-right: 20px;
          }
          .list {
            line-height: 40px;
            a {
              margin-right: 20px;
              // border-right: 1px solid #ccc;
            }
          }
        }
      }
      .main {
        .content {
          margin-bottom: 20px;
          display: flex;
          justify-content: space-between;
          margin-bottom: 35px;
          flex-wrap: wrap;
          .main-content {
            cursor: pointer;
            flex-wrap: wrap;
            width: 153px;
            // background-color: sandybrown;
            .box {
              width: 153px;
              height: 130px;
              background: url(./image/4.png);
              background-position: 0 -845px;
              .image {
                height: 130px;
                width: 130px;
              }
            }
          }

          .text {
            display: block;
            font-size: 14px;
            width: 153px;
            // background-color: yellow;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }

          .author {
            margin-top: 5px;
            font-size: 12px;
            .name {
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
            }
          }
        }
      }
    }
  }
}
</style>
