<template>
  <div class="songs">
        <div class="header">
            <div class="title">
                <h1 class="name">{{detail.name}}</h1>
                <img class="img" :src="detail.cover" alt="">
            </div>
            <h2 class="bofangList">播放列表</h2>
            <div class="songsList">
                <ul>
                    <li  v-for="(songs,index) in songs" :key="songs.id">
                    <!-- -->
                        <i class="icon el-icon-video-play" @click="play(songs.id)"></i>
                        <p>{{songs.name}}</p>

                    </li>
                </ul>
            </div>
        </div>
  </div>
</template>

<script>
export default {
  name: '',
  data() {
      return {
          id:0,
          songs:[],
          detail:{}
      }
  },
  mounted() {
    //   console.log(this.$route.params.id)
      this.id = this.$route.params.id
    //   console.log(this.id)
      this.getHostSongs()
      this.getSingerDetails()
  },
  methods: {
      async getHostSongs(){
          const result = await this.$API.singer.hostSongs(this.id)
          console.log(result)
          if(result.code === 200){
              this.songs = result.songs
          }
          console.log(this.songs)
      },
      async getSingerDetails(){
          const result = await this.$API.singer.singerDetails(this.id)
        //   console.log(result)
          if(result.code === 200){
              this.detail = result.data.artist
          }
        //   console.log(this.detail)
      },
      play(){
          this.$store.dispatch('updateSingerList',this.songs)
      }
  },
  created(){
      
  }
}
</script>

<style lang="less" scoped>
    .songs{
        width: 100%;
        height: 100%;
        .header{
            width: 710px;
            height: 100%;
            border-left: 1px solid #ccc;
            border-right: 1px solid #ccc;
            position: relative;
            margin: 0 auto;
            .title{
                width:500px;
                height: 400px;
                margin: auto;
                .name{
                    font-size: 28px;
                }
                .nameMini{
                    font-size: 18px;
                }
                .img{
                    width: 500px;
                    height: 300px;
                }
            }
            .bofangList{
                font-size: 28px;
                text-align: center;
                border-bottom: 1px solid #ccc;
                padding-bottom: 20px;
            }
            .songsList{
                font-size: 14px;
                margin-left: 200px;
                li{
                    font-size: 14px;
                    margin-top: 10px;
                    display: flex;
                    align-items: center;
                    p{
                        padding-left: 20px;
                    }
                }
            }
        }
    }
    

</style>
