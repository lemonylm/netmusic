<template>
  <div class="songs">
        <div class="header">
            <div class="title">
                <h1 class="name">{{$route.params.title}}</h1>
                <img class="img" :src="$route.params.picUrl" alt="">
            </div>
            <h2 class="bofangList">播放列表</h2>
            <div class="songsList">
                <ul>
                    <li @click="play(songs.id)" class="li" v-for="songs in copy_songList" :key="songs.id">
                    <!-- -->
                        <i class="icon el-icon-video-play"></i>
                        <p>{{songs.name}}</p>

                    </li>
                </ul>
            </div>
        </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'EAFList',
  data() {
      return {
          pic: ''
      }
  },
  computed: {
      ...mapState({
          songList: state => state.playlist.songList,
          copy_songList: state => state.playlist.copy_songList,
      })
  },
  methods: {
      play(id){
        this.$store.commit('SET_SONG_LIST', this.copy_songList)
        this.$store.commit('SET_SONG_ID',id)
      }
  },
  mounted() {
      
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
    
    .li {
        &:hover {
            background: #eee;
            cursor: pointer;
        }
    }
</style>
