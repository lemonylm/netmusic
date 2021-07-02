<template>
    <div class="recommend_container">
        <div class="recommend_content">
            <div class="swiper_download_wrap">
                <!-- 轮播图 -->
                <div class="swiper_wrap">
                    <div class="block">
                        <el-carousel trigger="click" height="150px">
                            <el-carousel-item>
                                <img src="/image/萌萌哒.jpg" alt="">
                            </el-carousel-item>
                        </el-carousel>
                    </div>
                </div>
                <!-- 下载 -->
                <div class="download_wrap"></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"Recommend",
};
</script>

<style scoped lang="less">
.recommend_container {
    .recommend_content {
        width: 982px;
        margin: 0 auto;
        background: pink;
        .swiper_download_wrap {
            height: 285px;
            background: #bfa;
            .swiper_wrap {
                float: left;
                width: 730px;
                height: 100%;
                background: #baf;
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
                        .el-carousel__item {
                            height: 100%;
                            width: 100%;
                        }
                    }
                }
            }
            .download_wrap {
                float: left;
                width: 252px;
                height: 100%;
                background: #bff;
            }
        }
    }
}
</style>
