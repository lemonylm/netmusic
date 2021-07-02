<template>
    <div class="recommend_container">
        <div class="recommend_content">
            <div class="swiper_download_wrap">
                <div class="swiper_wrap"></div>
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
