<template>
  <div class="container">
    <div class="header">
      <div class="main-header">
        <div v-show="isShow === 'one'" class="swiper">
          <ul v-for="item in 18" :key="item">
            <li>
              <a href="##">
                <div class="imgs">
                  <img
                    src="http://p1.music.126.net/icULXvfqWJMFvcjTrXSLeA==/109951165406422565.jpg"
                    alt=""
                  />
                </div>
                <span>情感</span>
              </a>
            </li>
          </ul>
          <span class="one" @click="isShow = 'one'">&lt;</span>
          <span class="two" @click="isShow = 'two'">&gt;</span>
        </div>
        <div v-show="isShow === 'two'" class="swiper">
          <ul v-for="item in 3" :key="item">
            <li>
              <a href="##">
                <div class="imgs">
                  <img
                    src="http://p1.music.126.net/icULXvfqWJMFvcjTrXSLeA==/109951165406422565.jpg"
                    alt=""
                  />
                </div>
                <span>音乐</span>
              </a>
            </li>
          </ul>
          <span class="one" @click="isShow = 'one'">&lt;</span>
          <span class="two" @click="isShow = 'two'">&gt;</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
};
</script>

<style lang = 'less' scoped>
.main-header {
  margin: 40px auto 0;
  // width: 900px;
  height: 194px;
  // background-color: skyblue;
  .swiper {
    position: relative;
    .one {
      position: absolute;
      top: 85px;
      left: 0;
      font-size: 20px;
      cursor: pointer;
    }
    .two {
      font-size: 20px;
      position: absolute;
      top: 85px;
      right: 0;
      cursor: pointer;
    }
  }
  ul {
    width: 933px;
    li {
      float: left;
      margin: 0 0 25px 33px;
      a {
        width: 70px;
        height: 70px;
        display: block;
        text-align: center;
        overflow: hidden;
        color: #888;
        .imgs {
          width: 48px;
          height: 48px;
          margin: 2px auto 0;
        }
      }
      a:hover {
        background-color: rgb(246, 247, 247);
        span {
          color: #888;
        }
      }
    }
  }
}
</style>
