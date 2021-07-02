<template>
  <div class="singer">
    <!--歌手列表-->
    <div class="singerSort">
        <div class="singerLs">
            <h2 class="title">推荐</h2>
            <ul class="list">
                <li class="item">入驻歌手</li>
                <li class="item">推荐歌手</li>
            </ul>
            <div class="boder"></div>

           <!-- <div class="chinese">
                <h2></h2>
                <ul class="chineseSinger">
                    <li class="item">华语男歌手</li>
                    <li class="item">华语女歌手</li>
                    <li class="item">华语组合/乐队</li>
                </ul>
            </div>-->
            <div class="chinese">
            <h2 class="title">华语</h2>
            <ul class="list">
                <li class="item">华语男歌手</li>
                <li class="item">华语女歌手</li>
                <li class="item">华语组合/乐队</li>
            </ul>
            <div class="boder"></div>
            </div>
        </div>
    </div>
    <!--歌手展示-->
    <div class="singerShow">
        <!--入驻歌手-->
        <div class="settleSinger">
            <h2>入驻歌手</h2>
            <a href="##">更对 ></a>
            <div class="border"></div>
        </div>
            <!--图片展示-->
        <div class="singerList">
            <div class="singerItem">
                <img class="image" src="" alt="">
                <div class="text">
                    <p class="name">hhh</p>
                    <a href="##" class="icon el-icon-user-solid"></a>
                </div>
            </div>
        </div>
        <!--热门歌手-->
        <div class="settleSinger">
            <h2>热门歌手</h2>
            <a href="##">更对 ></a>
            <div class="border"></div>
        </div>
            <!--图片展示-->
        <div class="singerList">
            <div class="singerItem" v-for="(host,index) in hostSinger" :key="host.id">
                <img class="image" :src="host.picUrl" alt="">
                <div class="text">
                    <p class="name">{{host.name}}</p>
                    <a href="##" class="icon el-icon-user-solid"></a>
                </div>
            </div>
        </div>
        <!--歌手名称列表-->
        <div class="singerName">
            <div class="nameItem">
                <a href="##">张惠妹</a>
                <i class="icon el-icon-user-solid"></i>
            </div>
            <div class="nameItem">
                <a href="##">张惠妹</a>
                <i class="icon el-icon-user-solid"></i>
            </div>
            <div class="nameItem">
                <a href="##">张惠妹</a>
                <i class="icon el-icon-user-solid"></i>
            </div>
            <div class="nameItem">
                <a href="##">张惠妹</a>
                <i class="icon el-icon-user-solid"></i>
            </div>
            <div class="nameItem">
                <a href="##">张惠妹</a>
                <i class="icon el-icon-user-solid"></i>
            </div>
            <div class="nameItem">
                <a href="##">张惠妹</a>
                <i class="icon el-icon-user-solid"></i>
            </div>
            <div class="nameItem">
                <a href="##">张惠妹</a>
                <i class="icon el-icon-user-solid"></i>
            </div>
            <div class="nameItem">
                <a href="##">张惠妹</a>
                <i class="icon el-icon-user-solid"></i>
            </div>
            <div class="nameItem">
                <a href="##">张惠妹</a>
                <i class="icon el-icon-user-solid"></i>
            </div>
             <div class="nameItem">
                <a href="##">张惠妹</a>
                <i class="icon el-icon-user-solid"></i>
            </div>
             <div class="nameItem">
                <a href="##">张惠妹</a>
                <i class="icon el-icon-user-solid"></i>
            </div>
             <div class="nameItem">
                <a href="##">张惠妹</a>
                <i class="icon el-icon-user-solid"></i>
            </div>
        </div>
    </div>

    
  </div>
</template>

<script>
export default {
  name: "Singer",
  data() {
      return {
          type:-1,
          area:-1,
          singerList:[],
          hostSinger:[]
      }
  },
  mounted() {
      
  },
  methods: {
       async getSingerList() {
            const result = await this.$API.singer.getSingerList()
            // console.log(result)
            if(result.code === 200) {
                this.singerList = result.data.artists
            }
            // console.log(result.data.artists)
        },
        async hostSingerList(){
            const result = await this.$API.singer.hostSingerList()
            // console.log(result)
            if(result.code === 200){
                this.hostSinger = result.data.artists
            }
        },
        async CollectionSinger(){
            const result = await this.$API.singer.CollectionSinger()
            // console.log(result)
        },
        async singerSheet(){
            const result = await this.$API.singer.singerSheet()
            // console.log(result)
        }
  },
   created() {
        this.getSingerList()
        this.hostSingerList()
        this.CollectionSinger()
        this.singerSheet()
    },
  computed:{
      
  }
};
</script>

<style lang="less" scoped>
.singer {
  width: 980px;
  margin: 0 auto;
  display: flex;
  /* 歌手分类 */
  .singerSort{
      width: 180px;
      border-left: 1px solid #ccc;
      border-right: 1px solid #ccc;
      .singerLs{
        width: 160px;
        margin: 50px auto 0;

        .title{
            width: 146px;
            height: 25px;
            padding-left: 14px;
            font-size: 18px;
        }
        .item{
            width: 160px;
            height: 29px;
            padding-left: 14px;
        }
        .boder{
            width: 160px;
            height: 1px;
            margin: 10px auto 0;
            border: 1px solid #ccc;
            box-sizing: border-box;
        }
        .chinese{
            margin-top: 20px;
        }
      }
  }
    /* 歌手名单 */
  .singerShow{
      width: 800px;
      .settleSinger{
          width: 720px;
          height: 40px;
          background: #fff;
          margin: 40px auto 0;
          h2{
              font-size: 24px;
              float: left;
              margin-top: 5px;
          }
          a{
              float:right;
              margin-top: 26px;
              
          }
      }
      .singerList{
          width: 720px;
          height: 368px;
          background: #fff;
          margin: 30px auto 0;
          border: 1px solid #ccc;
          box-sizing: border-box;
          display: flex;
          flex-wrap: wrap;
          .singerItem{
              width: 130px;
              height: 154px;
              flex-grow: 1;
              .image{
                  width: 130px;
                  height: 130px;
              }
              .text{
                  width: 130px;
                  height: 24px;
                  display: flex;
                  align-items: center;
                  justify-content: space-between;
              }
          }
      }
      .singerName{
          width: 720px;
          margin: 0 auto;
          border: 1px dotted #ccc;
          display: flex;
          flex-wrap: wrap;
          box-sizing: border-box;
          .nameItem{
              width: 130px;
              height: 30px;
              display: flex;
              align-items: center;
              padding-left: 17px;
              flex-grow: 1;
          }
      }
  }
}
</style>
