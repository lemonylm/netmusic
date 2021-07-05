<template>
    <div class="recommend_container">
        <div class="recommend_content">
            <div class="swiper_download_wrap">
                <div class="left"></div>
                <div class="right"></div>
                <!-- 轮播图 -->
                <div class="swiper_wrap">
                    <div class="block">
                        <el-carousel autoplay trigger="click">
                            <el-carousel-item v-for="banner of bannerList" :key="banner.bannerId">
                                <img :src="banner.pic" alt="">
                            </el-carousel-item>
                        </el-carousel>
                    </div>
                </div>
                <!-- 下载 -->
                <div class="download_wrap">
                    <div @mouseenter="isDownload = true" @mouseleave="isDownload = false" class="active_box">
                        <div v-show="isDownload"></div>
                    </div>
                    <p class="tip">PC 安卓 iPhone WP iPad Mac 六大客户端</p>
                </div>
            </div>
            <div class="under_content_wrap">
                <div class="left_wrap">
                    <div class="one">
                        <!-- 热门推荐 -->
                            <Title title="热门推荐">
                                <template>
                                    <ul class="type_list">
                                        <li><a href="javascript:;">华语</a></li>
                                        <li><a href="javascript:;">流行</a></li>
                                        <li><a href="javascript:;">摇滚</a></li>
                                        <li><a href="javascript:;">民谣</a></li>
                                        <li><a href="javascript:;">电子</a></li>
                                    </ul>
                                </template>
                            </Title>
                            <div class="content">
                                <Card @click="handler_toPlayList(item.id)" :cardInfo="item" v-for="item in hotRecommendList" :key="item.id"></Card>
                            </div>
                        <!-- 个性化推荐 -->
                            <Title v-if="recommendList.length" title="个性化推荐"></Title>
                            <div v-if="recommendList.length" class="content">
                                <!-- 每日推荐 -->
                                <div @click="handler_toDailyRecommendPlayList" class="day_container">
                                    <div class="img">
                                        <p class="week">{{date.week}}</p>
                                        <p class="day">{{date.day}}</p>
                                    </div>
                                    <p class="text">每日歌曲推荐</p>
                                    <p class="tips">根据你的口味生成,每天6:00更新</p>
                                </div>
                                <Card @click="handler_toPlayList(item.id)" :cardInfo="item" v-for="item in recommendList" :key="item.id"></Card>
                            </div>
                        <!-- 新碟上架 -->
                            <Title title="新碟上架"></Title>
                            <!-- 轮播图 -->
                            <div class="new_album_swiper">
                                <div class="block">
                                    <el-carousel indicator-position="none" arrow="always" :autoplay="false" trigger="click">
                                        <el-carousel-item>
                                            <div class="item_wrap" v-for="album of newAlbum.slice(0,5)" :key="album.id">
                                                <div class="img_wrap">
                                                    <img v-lazy="album.picUrl" alt="">
                                                </div>
                                                <p class="text">{{album.name}}</p>
                                                <p class="author">{{album.artists[0].name}}</p>
                                            </div>
                                        </el-carousel-item>
                                        <el-carousel-item>
                                            <div class="item_wrap" v-for="album of newAlbum.slice(5,10)" :key="album.id">
                                                <div class="img_wrap">
                                                    <img v-lazy="album.picUrl" alt="">
                                                </div>
                                                <p class="text">{{album.name}}</p>
                                                <p class="author">{{album.artists[0].name}}</p>
                                            </div>
                                        </el-carousel-item>
                                    </el-carousel>
                                </div>
                            </div>
                       <!-- 榜单 -->
                            <Title title="榜单"></Title>
                            <div class="content bangdan">
                                <Toplist @click="handler_toPlayList(item.id)" :key="item.id" v-for="item of topList.slice(0,3)" :list = "item"></Toplist>
                            </div>
                    </div>
                </div>
                <div class="right_wrap"></div>
            </div>
        </div>
        <div class="login_box" :style="{'display': isShowLoginBox ? 'block' : 'none'}">
            <div class="header">
                <span>登录</span>
                <span class="close" @click="isShowLoginBox = false">×</span>
            </div>
            <div class="content">
                <div class="wrap">
                    <div class="tel input">
                        <p>手机号: </p>
                        <input v-model="tel" type="text">
                    </div>
                    <div class="password input">
                        <p>密码: </p>
                        <input v-model="password" type="password">
                    </div>
                </div>
                <div class="btn_wrap">
                    <button class="login_btn" @click="login">登录</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import day from 'dayjs'
export default {
    name:"Recommend",
    components: {
        Title: () => import('@/components/Recommend/Title'),
        Card: () => import('@/components/Recommend/Card'),
        Toplist: () => import('@/components/Recommend/Toplist')
    },
    data() {
        return {
            tel:'',
            password: '',
            isShowLoginBox: false,
            isDownload: false,
            pageInfo: [],
            hotRecommendList: [],
            recommendList: [],
            newAlbum: [],
            topList: [],
            date: {
                day: 0,
                week: '星期八'
            }
        }
    },
    computed: {
        bannerList() {
            return (( this.pageInfo[0] || {} ).extInfo || {}).banners
        }
    },
    methods: {
        async getHomepage() {
            const result = await this.$API.recommend.getHomePage()
            if(result.code === 200) {
                this.pageInfo = result.data.blocks
            }
        },
        async getHotRecommend() {
            const result = await this.$API.recommend.getHotRecommend()
            if(result.code === 200) {
                this.hotRecommendList = result.result
            }
        },
        async getRecommend() {
            const result = await this.$API.recommend.getRecommend();
            if(result.code === 200) {
                this.recommendList = result.recommend.slice(0,3)
            }
        },
        async getNewAlbum() {
            const result = await this.$API.recommend.getNewAlbum();
            if(result.code === 200) {
                this.newAlbum = result.albums
            }
        },
        async getTopList() {
            const result = await this.$API.recommend.getTopList();
            if(result.code === 200) {
                this.topList = result.list
            }
        },
        async login () {
            const result = await this.$API.recommend.login(this.tel, this.password);
            if(result.code === 200) {
                localStorage.setItem('token', result.token);
                console.log(result)
                this.$store.dispatch('get_userInfo', result.profile)
                this.$bus.$emit('set_login', true)
                this.$notify({
                    title: '登录成功',
                    type: 'success'
                });
                this.isShowLoginBox = false
            } else {
                this.$notify.error({
                    title: '用户名或密码错误',
                });
            }
        },
        getDate() {
            let week = day().$W;
            switch(week) {
                case 1:
                    week = '星期一';
                    break;
                case 2:
                    week = '星期二';
                    break;
                case 3:
                    week = '星期三';
                    break;
                case 4:
                    week = '星期四';
                    break;
                case 5:
                    week = '星期五';
                    break;
                case 6:
                    week = '星期六';
                    break;
                case 0:
                    week = '星期日';
                    break;
                default: 
                    week = '星期八';
            }
            this.date = { day: day().$D, week }
        },
        changeIsShowLoginBox() {
            this.$bus.$on('chang_isShowLoginBox', () => {
                this.isShowLoginBox = true
            })
        },
        async handler_toDailyRecommendPlayList() {
            const result = await this.$API.recommend.getDailyRecommendPlayList();
            if(result.code === 200) {
                if(this.$store.state.user.userInfo.nickname) {
                    this.$store.commit('SET_SONG_LIST', result.data.dailySongs)
                    this.$router.push('/discover/songlist')
                }
                else
                    this.$notify.error({
                        title: '请登录后再试',
                    });
            }
        },
        handler_toPlayList(id) {
            this.$store.dispatch('updateSongList', id);
            this.$router.push('/discover/songlist')
        }
    },
    created() {
        this.getHomepage()
        this.getHotRecommend()
        this.getRecommend()
        this.getNewAlbum()
        this.getTopList()
    },
    mounted() {
        this.getDate();
        this.changeIsShowLoginBox()
    }
};
</script>

<style scoped lang="less">
.recommend_container {
    overflow: hidden;
    background: url(/image/recommend/background.jpg) -250px 0 no-repeat;
    background-size: 130% 750px;
    background-color: #F5F5F5;
    overflow: hidden;
    .recommend_content {
        width: 982px;
        margin: 0 auto;
        .swiper_download_wrap {
            position: relative;
            height: 285px;
            .left{
                width: 225px;
                height: 120px;
                position: absolute;
                left: -254px;
                top: 30px;
                background: url(/image/recommend/bg-left.png) no-repeat 0 0 / cover;
            }
            .right{
                width: 196px;
                height: 131px;
                right: -225px;
                top: 30px;
                position: absolute;
                background: url(/image/recommend/bg-right.png) no-repeat 0 0 / cover;
            }
            .swiper_wrap {
                float: left;
                width: 730px;
                height: 100%;
                .block {
                    width: 100%;
                    height: 100%;
                    .el-carousel {
                        height: 100%;
                        width: 100%;
                        & /deep/ .el-carousel__container {
                            width: 100%;
                            height: 100% !important;
                        }
                        & /deep/ .el-carousel__indicators {
                            width: 50%;
                            display: flex;
                            justify-content: space-around;
                        }
                        .el-carousel__item {
                            height: 100%;
                            width: 100%;
                            img {
                                width: 100%;
                                height: 100%;
                            }
                        }
                    }
                }
            }
            .download_wrap {
                float: left;
                width: 252px;
                height: 100%;
                background: url(/image/sprite/download.png);
                display: flex;
                flex-direction: column;
                .active_box {
                    width: 215px;
                    height: 56px;
                    margin: 186px 0 0 19px;
                    cursor: pointer;
                    & div {
                        width: 100%;
                        height: 100%;
                        background: url(/image/sprite/download.png) 0 416px;
                    }
                }
                .tip {
                    color: #aaa;
                    text-align: center;
                    margin: 14px 0;
                }
            }
        }
        .under_content_wrap {
            width: 982px;
            box-sizing: border-box;
            display: flex;
            .left_wrap {
                width: 730px;
                background: #fff;
                box-sizing: border-box;
                padding: 20px 20px 40px;
                .content {
                    padding: 20px 0 0;
                    display: flex;
                    flex-wrap: wrap;
                    &.bangdan {
                        display: flex;
                        padding: 20px 0 40px;
                    }
                }
                .new_album_swiper {
                    padding: 20px 0;
                    height: 186px;
                    .block {
                        width: 100%;
                        height: 100%;
                        .el-carousel {
                            height: 100%;
                            width: 100%;
                            border: 1px solid #ccc;
                            & /deep/ .el-carousel__container {
                                width: 100%;
                                height: 100% !important;
                                .el-carousel__arrow--left {
                                    margin-left: -15px;
                                    width: 30px;
                                    height: 30px;
                                }
                                .el-carousel__arrow--right {
                                    margin-right: -15px;
                                    width: 30px;
                                    height: 30px;
                                }
                            }
                            & /deep/ .el-carousel__indicators {
                                width: 50%;
                                display: flex;
                                justify-content: space-around;
                            }
                            .el-carousel__item {
                                background: #F5F5F5;
                                padding: 0 20px;
                                height: 100%;
                                width: 100%;
                                box-sizing: border-box;
                                display: flex;
                                padding-top: 25px;
                                justify-content: space-around;
                                &.is-animating {
                                    -webkit-transition: -webkit-transform 1s ease-in-out;
                                    transition: -webkit-transform 1s ease-in-out;
                                    transition: transform 1s ease-in-out;
                                    transition: transform 1s ease-in-out,-webkit-transform 1s ease-in-out;
                                }
                                .item_wrap {
                                    width: 118px;
                                    .img_wrap {
                                        background: url(/image/sprite/coverall.png) no-repeat 0 -570px;
                                        box-shadow: 0 10px 5px -3px #ccc;
                                        img {
                                            width: 100px;
                                            height: 100px;
                                            border: 1px solid #ccc;
                                        }
                                    }
                                    p {
                                        height: 15px;
                                        line-height: 15px;
                                        &.text {
                                            margin-top: 5px;
                                        }
                                        &.author {
                                            color: #666;
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
            .right_wrap {
                width: 252px;
                background: #eee;
                box-sizing: border-box;
            }
        }
    }
    .login_box {
        width: 530px;
        height: 371px;
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        margin: auto;
        z-index: 9999;
        border-radius: 5px;
        .header {
            width: 530px;
            height: 38px;
            box-sizing: border-box;
            background: #2D2D2D;
            color: #fff;
            font-weight: 700;
            font-size: 14px;
            line-height: 38px;
            padding-left: 20px;
            .close {
                float: right;
                font-size: 30px;
                margin-right: 10px;
                line-height: 30px;
                cursor: pointer;
            }
        }
        .content {
            width: 530px;
            height: 333px;
            box-sizing: border-box;
            background: #fff;
            display: flex;
            flex-direction: column;
            align-items: center;
            .wrap {
                margin-top: 70px;
                width: 50%;
                height: 40%;
                .input {
                    display: flex;
                    width: 100%;
                    height: 50%;
                    align-items: center;
                    justify-content: flex-end;
                    & p {
                        font-size: 14px;
                        margin-right: 5px;
                    }
                    & input {
                        width: 78%;
                        height: 30px;
                        border-radius: 5px;
                        border: 1px solid #ccc;
                        outline: none;
                        padding-left: 3px;
                    }
                }
            }
            .btn_wrap {
                width: 50%;
                height: 50px;
                text-align: center;
                .login_btn {
                    cursor: pointer;
                    margin-top: 30px;
                    background: #C20C0C;
                    color: #fff;
                    width: 60%;
                    height: 50px;
                    border: none;
                    border-radius: 25px;
                }
            } 
        }
    }
}
.day_container {
  cursor: pointer;
  width: 25%;
  padding-bottom: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  .img {
    width: 139px;
    height: 139px;
    border: 1px solid #D2D2D2;
    background: url(/image/sprite/index.png) no-repeat -260px -310px ;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    .week {
      width: 100%;
      height: 33px;
      text-align: center;
      color: #fff;
      line-height: 33px;
      font-size: 14px;
    }
    .day {
        font-size: 90px;
        font-weight: 700;
        height: 106px;
        width: 100%;
        text-align: center;
        line-height: 106px;
    }
  }
  .text {
    width: 140px;
    font-size: 14px;
  }
  .tips {
      width: 140px;
      color: #aaa;
  }
  .mask {
    width: 140px;
    height: 27px;
    position: absolute;
    top: 113px;
    border: 1px solid #000;
    background-color: rgba(0, 0, 0, .5);
    display: flex;
    align-items: center;
    .ear {
      width: 14px;
      height: 11px;
      background: url(/image/sprite/iconall.png) no-repeat 0 -24px;
      margin: 0 6px 0 10px;
    }
    .count {
      color: #eee;
    }
    .play_box {
      flex: 1;
      .play {
      width: 16px;
      height: 17px;
      float: right;
      margin-right: 10px;
      background:  url(/image/sprite/iconall.png) no-repeat 0 0;
    }
    }
  }
}
</style>
