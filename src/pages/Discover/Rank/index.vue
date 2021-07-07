<template>
  <div class="container">
    <div id="one-box">
      <div class="kind-box">
        <p class="kind-title">云音乐特色榜</p>
        <div>
          <el-radio
            v-model="active"
            class="radio-list"
            v-for="item in toplist"
            :key="item.id"
            :label="item.id"
            @click="showlist(id)"
          >
            <div class="radio-details">
              <div class="img">
                <img :src="item.coverImgUrl" alt="" />
              </div>
              <div class="details">
                <p class="title">{{ item.name }}</p>
                <p class="info">{{ item.updateFrequency }}</p>
              </div>
            </div>
          </el-radio>
        </div>
      </div>
      <div class="album-details">
        <div class="album-details padding-0">
          <div class="cover" >
            <div class="left">
              <div class="img" >
                <img :src="playlistDetail.coverImgUrl" alt="" />
              </div>
            </div>
            <div class="right">
              <div class="title">
                <span class="label">{{ playlistDetail.name }} </span>
                <span class="txt"></span>
              </div>
              <div class="auth">
                <span class="label">   </span>
                <span class="txt"> </span>
              </div>
              <div class="create-time">
                <span class="label icon el-icon-timer" >最近更新: 07月05日</span>
                <span class="txt">(刚刚更新) </span>
              </div>
              <div class="create-firm">
                <span class="label">   </span>
                <span class="txt"></span>
              </div>
              <div class="play-but">
                <button class="blue-button" style="background-color:#4291DA">
                  <span class="icon el-icon-video-play"></span> <span>播放</span>
                </button>
                <button class="white-button">
                  <span class="icon el-icon-star-on"></span> <span>收藏</span>
                </button>
                <button class="white-button">
                  <span class="icon el-icon-download"></span> <span>下载</span>
                </button>
                <button class="white-button">
                  <span class="icon el-icon-download"></span> <span>评论</span>
                </button>
              </div>
            </div>
          </div>
          <div class="details">
            <p class="title">专辑介绍：</p>
            <p class="info"></p>
          </div>
        </div>
        <div class="audio-list">
          <div class="h3-title header title">
            <div class="left">
              <b>包含歌曲列表</b>
              <span>首歌</span>
            </div>
          </div>
          <table class="table">
            <tr>
              <th></th>
              <th>歌曲标题</th>
              <th>时长</th>
              <th>歌手</th>
            </tr>
            <tr v-for="(item, index) in playlistDetail.tracks" :key="item.id">
              <td class="index">
                <span>{{ index + 1 }}</span>
                <span class="iconfont">&#xe638;</span>
              </td>
              <td class="over">
                <p>{{ item.name }}</p>
              </td>
              <td class="timer">
                <span>{{ item.h | timerFilter }}</span>
              </td>
              <td class="td-name" :title="item.ar[0].name">
                <p>{{ item.ar[0].name }}</p>
              </td>
            </tr>
          </table>
        </div>
        <div class="comment-edit">
          <div class="h3-title header title">
            <div class="left">
              <b>评论</b>
              <span>共1305条评论</span>
            </div>
          </div>
          <div class="edit">
            <div class="img">
              <img
                src="http://p3.music.126.net/BCwAFIcu6eOqrLxnvoSlyA==/109951165384856145.jpg?param=50y50"
                alt=""
              />
            </div>
            <div class="textarea">
              <div class="top">
                <textarea placeholder="评论"></textarea>
              </div>
              <div class="footer-right">
                <span>140</span>
                <button class="blue-button">评论</button>
              </div>
            </div>
          </div>
        </div>
        <div class="comment-user">
          <p class="header">精彩评论</p>
          <div class="list-box">
            <div class="list">
              <div class="img">
                <img
                  src="https://p2.music.126.net/onWlC_ycAi0gpcowbeGdaQ==/109951165347289675.jpg?param=50y50"
                  alt=""
                />
              </div>
              <div class="user-info">
                <p class="title">
                  <span class="name">我翘首以盼的惊喜<i>:</i> </span>
                  <span
                    >开口差点没认出来的这里集合太甜了，老薛又尝试新风格啦！</span
                  >
                </p>
                <div class="outher">
                  <p class="title">
                    <span class="name">我翘首以盼的惊喜<i>:</i> </span>
                    <span
                      >开口差点没认出来的这里集合太甜了，老薛又尝试新风格啦！</span
                    >
                  </p>
                </div>
                <div class="footer">
                  <p class="time">10月13日 00:06</p>
                  <div class="right">
                    <span class="iconfont">&#xe775;</span>
                    <span class="count">(50)</span>
                    <i class="line">|</i>
                    <span class="reply">回复</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapfilter} from 'vuex'
export default {
  name: "rank",
  data() {
    return {
      artistToplist: [],
      toplist: [],//获取榜单
       id: 0,
      playlistDetail:{
         tracks:[
           {
              h:{size: 11037301}
           }
         ]
      }, // 歌曲详情
      playlist: {},
      active:""
    };
  },
filters: {
    timerFilter: function (value) {
      try {
        return (value.size /2400000).toFixed(2);
      } catch (error) {}
    },
  },
  computed: {},
  async mounted() {
     await this.getToplist();
      this.getplaylistDetail();
  },
  methods: {
    async getToplist() {
      const result = await this.$API.rank.getToplist();
      if (result.code === 200) {
        this.toplist = result.list;
      }
    },

    async getplaylistDetail() {   
      const result = await this.$API.rank.getplaylistDetail(this.toplist[0].id);
      if (result.code === 200) {
       this.playlistDetail = result.playlist
      }
      this.active = result.playlist.id
          
    },

    showlist(){
       let active = this.toplist[1].id
    }
     
  },

  created() {
    // this.getToplist();
  
  },
};
</script>

<style lang="less" scoped>
#one-box {
  padding: 0;
  display: flex;
  margin-top: 0;
  .padding-0 {
    padding: 0 !important;
  }
  .album-details {
    padding: 40px;
    flex: 1;
    .comment-user {
      .list-box {
        margin-top: 20px;
        .list {
          display: flex;
          .footer {
            .right {
              .reply {
                &:hover {
                  text-decoration: underline;
                  color: rgb(102, 102, 102);
                }
              }
              .line {
                margin: 0 6px 0 0;
                color: rgb(209, 217, 237);
              }
              .count {
                margin: 0 6px;
                color: rgb(51, 51, 51);
              }
              .iconfont {
                vertical-align: middle;
                font-size: 18px;
                &:hover {
                  color: rgb(9, 77, 127);
                }
                color: rgb(17, 117, 187);
              }
            }
            .time {
              color: #999;
            }
            margin-top: 15px;
            display: flex;
            justify-content: space-between;
          }
          .user-info {
            flex: 1;
            font-size: 12px;
            .outher {
              &::before {
                content: "";
                position: absolute;
                width: 5px;
                height: 5px;
                transform: rotateZ(45deg);
                top: -4px;
                left: 20px;
                border-left: 1px solid rgb(222, 222, 222);
                border-top: 1px solid rgb(222, 222, 222);
                background-color: rgb(244, 244, 244);
                // background-color: #f00;
              }
              position: relative;
              margin-top: 10px;
              padding: 10px;
              box-sizing: border-box;
              border: 1px solid rgb(222, 222, 222);
              background-color: rgb(244, 244, 244);
            }
            .title {
              line-height: 20px;

              color: #333;
              .name {
                color: #0c73c2;
                &:hover {
                  text-decoration: underline;
                }
              }
            }
            margin-left: 15px;
          }
          .img {
            width: 50px;
            img {
              width: 100%;
            }
          }
        }
      }
      .header {
        font-size: 12px;
        font-weight: 600;
        color: rgb(51, 51, 51);
        border-bottom: 1px solid rgb(207, 207, 207);
      }
    }
    .comment-edit {
      margin-top: 40px;
      .edit {
        margin-top: 20px;
        display: flex;
        .textarea {
          flex: 1;
          margin-left: 15px;
          .footer-right {
            margin-top: 10px;
            font-size: 12px;
            text-align: right;
            span {
              color: rgb(153, 153, 153);
            }
            button {
              margin-left: 10px;
              padding: 3px 10px;
            }
          }
          .top {
            &::before {
              content: "";
              position: absolute;
              background-color: #fff;
              width: 10px;
              height: 10px;
              border: 1px solid rgb(205, 205, 205);
              left: -7px;
              top: 10px;
              transform: rotateZ(45deg);
            }
            position: relative;
            border: 1px solid rgb(205, 205, 205);
            height: 63px;
            border-radius: 2px;
            textarea {
              width: 100%;
              height: 100%;
              background-color: #fff;
              position: relative;
              z-index: 1;
              box-sizing: border-box;
              padding: 6px;
              border: 0;
              font-size: 12px;
              color: rgb(51, 51, 51);
            }
          }
        }
        .img {
          width: 50px;
          img {
            width: 100%;
          }
        }
      }
    }
    .album-details {
      .cover {
        display: flex;
        .right {
          .play-but {
            display: flex;
            margin-top: 20px;
                white-button{
                    font-family: 18;
                }
            button {
              margin-right: 10px;
              &.blue-button:hover {
                background-image: linear-gradient(
                  rgb(94, 163, 221),
                  rgb(51, 130, 206)
                );
              }
              &.white-button:hover {
                background-image: linear-gradient(
                  #fff,
                  rgb(225, 225, 225),
                  #fff,
                );

              }
              cursor: pointer;
              display: flex;
              justify-content: center;
              align-items: center;
              .iconfont {
                font-size: 16px;
                transform: translateY(-1px);
                margin-right: 4px;
              }
              span {
                transform: translateY(-2px);
              }
              font-size: 14px;
              height: 30px;
              padding: 0 15px;
            }
          }
          .auth {
            .txt {
              color: rgb(12, 115, 194);
              cursor: pointer;
              &:hover {
                text-decoration: underline;
              }
            }
          }
          .auth,
          .create-time,
          .create-firm {
            font-size: 12px;
            color: rgb(102, 102, 102);
            margin-top: 10px;
            .txt {
              margin-left: 7px;
            }
          }
          .title {
            display: flex;
      
            align-items: center;
            .label {
              &::before {
                content: "";
                position: absolute;
                right: -29px;
                top: -1px;
               
              }
              &::after {
                content: "";
                width: 5px;
                height: 5px;
                position: absolute;
                border-radius: 50%;
                background-color: #fff;
                right: -6px;
                top: 0;
                bottom: 0;
                margin: auto;
              }
              padding: 0 10px;
              line-height: 24px;
              height: 24px;
              font-size: 18px;
              position: relative;
              // background-color: rgb(210,26,26);
             
              color: #000;
              
            }
            .txt {
              line-height: 1;
              margin-left: 26px;
              font-size: 20px;
              color: #333;
            }
          }
        }
        .left {
          margin-right: 30px;
          .img {
            width: 180px;
            img {
              width: 100%;
            }
          }
        }
      }
      .details {
        margin-top: 10px;
        .info {
          line-height: 30px;
          text-indent: 2em;
          font-size: 12px;
          color: rgb(102, 102, 102);
        }
        .title {
          font-size: 12px;
          color: #333;
          font-weight: 600;
        }
      }
    }
    .audio-list {
      margin-top: 20px;
      .table {
        font-size: 12px;
        .index {
          color: rgb(177, 153, 165);
          .iconfont {
            font-size: 16px;
            font-weight: 600;
            cursor: pointer;
            color: rgb(175, 175, 175);
            &:hover {
              color: rgb(102, 102, 102);
            }
          }
          padding: 0 10px;
          display: flex;
          justify-content: space-between;
        }
        color: rgb(102, 102, 102);
        width: 100%;
        line-height: 34px;
        background-color: rgb(247, 247, 247);
        td {
          padding: 0 10px;
        }
        .td-name {
          p {
            width: 100px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }
        }
        tr {
          border: 1px solid rgb(221, 221, 221);
        }
        th {
          padding: 0 10px;
          box-sizing: border-box;
          text-align: left;
          background-image: linear-gradient(
            rgb(255, 255, 255),
            rgb(248, 248, 248)
          );
          border: 1px solid rgb(221, 221, 221);
        }
        th:nth-of-type(1) {
          width: 90px;
        }
        td.over {
          p {
            width: 346px;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
          }
        }
        th:nth-of-type(2) {
          width: 346px;
        }
        th:nth-of-type(3) {
          width: 100px;
        }
      }
    }
  }
  .kind-box {
    padding: 30px 0;
    width: 260px;
    background-color: rgb(249, 249, 249);
    box-sizing: border-box;
    border-right: 1px solid rgb(213, 213, 213);
    .kind-title {
      font-family: simsun, \5b8b\4f53;
      font-size: 15px;
      color: #000;
      font-weight: 600;
      text-indent: 10px;
    }
    ::v-deep .el-radio.radio-list.is-checked {
      background-color: rgb(230, 230, 230);
    }
    .radio-list {
      margin-right: 0;
      display: block;
      ::v-deep .el-radio__input {
        display: none;
      }
      ::v-deep .el-radio__label {
        margin-left: 0;
        padding-left: 0;
      }
      .radio-details {
        display: flex;
        padding: 10px 20px;
        align-items: center;
        .img {
          width: 40px;
          height: 40px;
          margin-right: 10px;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .details {
          height: 36px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          font-size: 12px;
          .title {
            color: #000 !important;
          }
          .info {
            color: #999;
          }
        }
      }
    }
  }
}
.h3-title {
  font-size: 20px;
  color: #333;
  border-bottom: 2px solid #c20c0c;
  &.header {
    font-size: 12px;
    color: rgb(102, 102, 102);
    display: flex;
    justify-content: space-between;
    align-items: center;
    .left {
      position: relative;
      b {
        font-size: 20px;
        color: #333;
        font-weight: 500;
      }
      span {
        // margin: 0px;
        margin-left: 20px;
      }
    }
  }
}
</style>
