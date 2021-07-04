<template>
  <div class="singer">
    <!--歌手列表-->
    <div class="singerSort">
        <div class="singerLs">
            <h2 class="title">推荐</h2>
            <ul class="list">
                <li class="item"  @click="vIf(true)">推荐歌手</li>
                <li class="item" @click="vIf(false)">入驻歌手</li>
            </ul>
            <div class="boder"></div>
            <div class="chinese">
                <h2 class="title">华语</h2>
                <ul class="list">
                    <li class="item">华语男歌手</li>
                    <li class="item">华语女歌手</li>
                    <li class="item">华语组合/乐队</li>
                </ul>
                <div class="boder"></div>
            </div>
            <div class="chinese">
                <h2 class="title">欧美</h2>
                <ul class="list">
                    <li class="item">欧美男歌手</li>
                    <li class="item">欧美女歌手</li>
                    <li class="item">欧美组合/乐队</li>
                </ul>
                <div class="boder"></div>
            </div>
             <div class="chinese">
                <h2 class="title">日本</h2>
                <ul class="list">
                    <li class="item">日本男歌手</li>
                    <li class="item">日本女歌手</li>
                    <li class="item">日本组合/乐队</li>
                </ul>
                <div class="boder"></div>
            </div>
            <div class="chinese">
                <h2 class="title">韩国</h2>
                <ul class="list">
                    <li class="item">韩国男歌手</li>
                    <li class="item">韩国女歌手</li>
                    <li class="item">韩国组合/乐队</li>
                </ul>
                <div class="boder"></div>
            </div>
            <div class="chinese">
                <h2 class="title">其它</h2>
                <ul class="list">
                    <li class="item">其他男歌手</li>
                    <li class="item">其他女歌手</li>
                    <li class="item">其他组合/乐队</li>
                </ul>
                <div class="boder"></div>
            </div>
        </div>
    </div>
    <!--推荐歌手展示-->
    <div class="singerShow" v-if="isShow">
        <!--入驻歌手-->
        <div class="settleSinger">
            <h2>入驻歌手</h2>
            <a href="##">更对 ></a>
            <div class="border"></div>
        </div>
            <!--图片展示-->
        <div class="singerList">
            <div class="singerItem" v-for="(singer,index) in singerList" :key="singer.id" @click="toSongs(singer.id)">
                <img class="image" :src="singer.picUrl" alt="">
                <div class="text">
                    <p class="name">{{singer.name}}</p>
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
            <div class="nameItem" v-for="(sheet,index) in singerSheetList" :key="sheet.id">
                <p class="id">{{sheet.name}}</p>
                <i class="header icon el-icon-user-solid"></i>
            </div>
        </div>
    </div>
    <!--入驻歌手展示-->
    <div v-else>
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
            <div class="singerItem" v-for="(sheet,index) in singerSheetList" :key="sheet.id">
                <img class="image" :src="sheet.picUrl" alt="">
                <div class="text">
                    <p class="name">{{sheet.name}}</p>
                    <a href="##" class="icon el-icon-user-solid"></a>
                </div>
            </div>
        </div>
        <!--歌手名称列表-->
        <div class="singerName">
            <div class="nameItem" v-for="(sheet,index) in singerSheetList" :key="sheet.id">
                <a href="##">{{sheet.name}}</a>
                <i class="icon el-icon-user-solid"></i>
            </div>
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
          hostSinger:[],
          singerSheetList:[],
          isShow:true
      }
  },
  mounted() {
      
  },
  methods: {
        async getSingerList() {
            const result = await this.$API.singer.getSingerList(this.type,this.area)
            console.log(result)
            if(result.code === 200) {
                this.singerList = result.artists.splice(0,10)
            }
            // console.log(this.singerList)
        },
        async hostSingerList(){
            const result = await this.$API.singer.hostSingerList()
            // console.log(result)
            if(result.code === 200){
                this.hostSinger = result.artists.splice(10,10)
            }
        },
        async singerSheet(){
            const result = await this.$API.singer.singerSheet()
            console.log(result)
            if(result.code === 200){
                this.singerSheetList = result.list.artists
            }
            // console.log(this.singerSheetList)
        },
        //切换歌手分类
        vIf(a){
            this.isShow = a
        },
       
        toSongs(id){
            this.$router.push({name:"songList", params: {id}})
        }
        
        
  },
   created() {
        this.getSingerList()
        this.hostSingerList()
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
            cursor: pointer;
        }
        .item{
            width: 160px;
            height: 29px;
            padding-left: 14px;
            cursor: pointer;
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
          background: #fff;
          margin: 30px auto 0;
          border-bottom: 1px solid #ccc;
          box-sizing: border-box;
          display: flex;
          flex-wrap: wrap;
          cursor: pointer;
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
              .id{
                  cursor: pointer;
              }
              .header{
                  cursor: pointer;
              }
          }
      }
  }
}
</style>
