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
                            <Card :cardInfo="item" v-for="item in hotRecommendList" :key="item.id"></Card>
                        </div>
                        <!-- 个性化推荐 -->
                        <Title v-if="recommendList.length" title="个性化推荐"></Title>
                        <div v-if="recommendList.length" class="content">
                            <!-- 每日推荐 -->
                            <div class="day_container">
                                <div class="img">
                                    <p class="week">{{date.week}}</p>
                                    <p class="day">{{date.day}}</p>
                                </div>
                                <p class="text">每日歌曲推荐</p>
                                <p class="tips">根据你的口味生成,每天6:00更新</p>
                            </div>
                            <Card :cardInfo="item" v-for="item in recommendList" :key="item.id"></Card>
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
                        <!-- <div class="content">
                            <Card :cardInfo="item" v-for="item in newAlbum" :key="item.id"></Card>
                        </div> -->
                    </div>
                </div>
                <div class="right_wrap"></div>
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
    },
    data() {
        return {
            isDownload: false,
            pageInfo: [],
            hotRecommendList: [],
            recommendList: [],
            newAlbum: [],
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
                case 7:
                    week = '星期日';
                    break;
                default: 
                    week = '星期八';
            }
            this.date = { day: day().$D, week }
        }
    },
    created() {
        this.getHomepage()
        this.getHotRecommend()
        this.getRecommend()
        this.getNewAlbum()
    },
    mounted() {
        this.getDate();
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
                box-sizing: border-box;
                background: #bfa;
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
