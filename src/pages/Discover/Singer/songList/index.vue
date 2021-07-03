<template>
  <div class="songs">
        <div class="header">
            <div class="title">
                <h1 class="name">张惠妹</h1>
                <p class="nameMini">阿妹；阿密特</p>
                <img class="img" src="../image/1.png" alt="">
            </div>
            <h2 class="bofangList">播放列表</h2>
            <div class="songsList">
                <ul>
                    <li>
                        <i class="icon el-icon-video-play"></i>
                        <p>老鼠爱大米</p>

                    </li>
                </ul>
            </div>
        </div>
  </div>
</template>

<script>
export default {
  name: '',
  mounted() {
      console.log(this.$route)
  },
  methods: {
      async getHostSongs(){
          const result = this.$API.singer.hostSongs()
          
      }
  },
  created(){
      this.getHostSongs()
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
