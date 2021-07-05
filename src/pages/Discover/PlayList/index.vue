<template>
  <div class="playList">
    <div class="playList-content">
      <div class="all-content">
        <div class="header">
           <div class="header-content">
            <span>全部</span>
            <a href="javascript:;" class="left">
              <div class="left1">
                <span class="leftText">选择分类</span>
                <i class="iconfont icondown1"></i>
              </div>

              <div class="up">
                <i class="iconfont iconup"></i>
              </div>
              <div class="box">
                <div class="boxHeader">
                  <a href="javascript:;" class="all">全部风格</a>
                </div>
                <div class="boxContent">
                  <div class="left">
                    <div class="leftAll">
                      <i class="tu iconfont icondiqiu"></i>
                      <span class="species">语种</span>
                    </div>
                  </div>
                  <div class="right">
                    <div class="rightAll">
                      <div class="box1">
                        <a href="javascript:;" class="name">华语</a>
                        <i class="i">丨</i>
                        <a href="javascript:;" class="name">华语</a>
                        <i class="i">丨</i>
                        <a href="javascript:;" class="name">华语</a>
                        <i class="i">丨</i>
                        <a href="javascript:;" class="name">华语</a>
                        <i class="i">丨</i>
                        <a href="javascript:;" class="name">华语</a>
                        <i class="i">丨</i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </a>

            <a href="javascript:;" class="right">热门</a>
          </div> 
       
       
       
        </div>
        <div class="main">
          <div class="content">
             <Card :cardInfo="item" v-for="item in playList" :key="item.id">
             </Card>
           
           
          </div>

           
          </div>
        </div>



         
      </div>
    </div>
 
</template>

<script>
export default {
  name: "PlayList",
  components: {
        Card: () => import('@/components/Recommend/Card'),
    },
  data() {
    return {
      playList:[],
    };
  },
  methods: {
    async getPlayList() {
      const result = await this.$API.playList.getPlayList();
       console.log(result)
      if (result.code === 200) {
       
        this.playList = result.result;
        // console.log(this.data.result)
      }
    },
    // async getSingerList() {
    //         const result = await this.$API.singer.getSingerList()
    //         // console.log(result)
    //         if(result.code === 200) {
    //             this.singerList = result.data.artists
    //         }
    //         // console.log(result.data.artists)
    //     },
  },
  created() {
    this.getPlayList()
  }
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
      background-color: #fff;
      margin: 0 auto;
      padding: 40px 0;
      .header {
        .header-content {
          position: relative;
          // background-color: lightblue;
          height: 40px;
          border-bottom: 2px solid #c20c0c;
          display: flex;
          //   line-height: 40px;
          span {
            font-size: 24px;
            margin-right: 20px;
          }
          .left {
            display: block;
            transition: all 1s linear;
            // border-radius: 10%;
            color: #0c73c2;
            height: 31px;
            width: 91px;
            background-color: #fcfcfc;
            text-align: center;
            line-height: 31px;
            background-color: #f9f9f9;

            .leftText {
              font-size: 12px;
              margin-right: -1px;
            }

            .up {
              position: absolute;
              left: 98px;
              bottom: -20px;
              // background-color: black;
              z-index: 999999;
              // opacity: 0;
              display: none;
            }
            .box {
              width: 700px;
              height: 350px;
              // background-color: red;
              position: absolute;
              left: -30px;
              top: 46px;
              z-index: 1000000;
              // opacity: 0;
              border: 1px solid #fff;
              display: none;
              .boxHeader {
                width: 100%;
                height: 50px;
                background-color: yellow;
                line-height: 50px;
                border-bottom: 1px solid #e6e6e6;
                .all {
                  font-size: 12px;
                  border: 1px solid #4b4b4b;
                  padding: 3px 8px;
                  background-color: #f8f8f8;
                  border-radius: 5px;
                  margin-right: 580px;
                  margin-top: 30px;
                }
              }
              .boxContent {
                display: flex;
                .left {
                  width: 100px;
                  height: 300px;
                  background-color: #fff;
                  .leftAll {
                    width: 70px;
                    height: 40px;
                    line-height: 40px;
                    // background-color: rosybrown;
                    margin: 12px 0 0 20px;

                    .to {
                    }
                    .species {
                      font-size: 12px;
                      margin-left: 10px;
                      font-weight: 700;
                    }
                  }
                }
                .right {
                  width: 600px;
                  height: 300px;

                  .rightAll {
                    // background-color: blue;
                    .box1 {
                      display: flex;
                      height: 40px;
                      line-height: 40px;
                      margin-top: 12px;
                      .name {
                        font-size: 12px;
                      }
                      .i {
                        margin: 0 10px;
                      }
                    }
                  }
                }
              }
            }
          }
          // .el-dropdown {
          //   vertical-align: top;

          // }
          // .el-dropdown + .el-dropdown {
          //   margin-left: 15px;
          // }
          // .el-icon-arrow-down {
          //   font-size: 12px;
          // }
          .right {
            position: absolute;
            right: 0px;
            font-size: 12px;
            // border: 1px solid #f5f5f5;
            // border-radius: 10%;
            width: 46px;
            height: 29px;
            text-align: center;
            line-height: 29px;
            background-color: #b70a0b;
            color: #fff;
          }
        }
      }
      .main {
        
        .content {
          display: flex;
          justify-content: space-between;
          margin-bottom: 35px;
         flex-wrap: wrap;
          .container {
            width: 20%;
            position: relative;
           flex-wrap: wrap;
           
            .image {
              height: 140px;
              width: 140px;
            }
            .text {
              display: block;
              font-size: 14px;
              width: 140px;
              overflow: hidden;
              white-space: nowrap;
              text-overflow: ellipsis;
              color: #000;
            }
            .bottom {
              width: 140px;
              height: 27px;
              background: rgba(58, 55, 57, 0.5);
              position: absolute;
              top: 113px;
              line-height: 27px;
              //   background-color: #ccc;

              
              .player {
                float: right;
                margin-right: 8px;
              }
            }
            .author {
              margin-top: 5px;
              color: #999;
              .name {
                margin-left: 5px;
                color: #000;

              }
              .count{

              }
            }
          }
        }
      }
    }
  }
}
</style>
