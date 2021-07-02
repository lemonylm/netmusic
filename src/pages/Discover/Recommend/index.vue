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
                <div class="left_wrap"></div>
                <div class="right_wrap"></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"Recommend",
    data() {
        return {
            isDownload: false,
            pageInfo: []
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
        } 
    },
    created() {
        this.getHomepage()
    }
};
</script>

<style scoped lang="less">
.recommend_container {
    background: url(/image/recommend/background.jpg) -250px 0 no-repeat;
    background-size: 130% 750px;
    background-color: #F5F5F5;
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
                height: 1000px;
                background: #baf;
                box-sizing: border-box;
            }
            .right_wrap {
                width: 252px;
                box-sizing: border-box;
                background: #bfa;
            }
        }
    }
}
</style>
