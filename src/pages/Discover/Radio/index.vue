<template>
  <div class="container">
    <!-- <div class="test">radio</div> -->
    <div class="main-container">
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
      <div class="main-middle">
        <RdiTop :rdiTopInfo="this.plyList"></RdiTop>
        <RdiTop :rdiTopInfo="this.plyList"></RdiTop>
      </div>
      <div class="main-more">
        <RdiMore :rdiMoreInfo="this.rdiList"></RdiMore>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      isShown: false,
      headerCategory: [],
      plyList: [],
      rdiList: [],
      // 轮播图
      isShow: "one",
      itemIndex: 0,
    };
  },
  components: {
    RdiTop: () => import("@/components/Radio/rdiTop"),
    RdiMore: () => import("@/components/Radio/rdiMore"),
  },
  created() {
    this.getHeaderCategory();
    this.getPlyList();
    this.getRdiList();
  },
  methods: {
    async getHeaderCategory() {
      const result = await this.$API.radio.getHeaderCategory();
      if (result.code === 200) {
        this.headerCategory = result.data;
      }
    },
    async getPlyList() {
      const result = await this.$API.radio.getPlyList();
      if (result.code === 200) {
        // console.log(result)
        this.plyList = result.programs;
        console.log(this.plyList)
      }
    },
    async getRdiList() {
      const result = await this.$API.radio.getRdiList();
      if (result.code === 200) {
        this.rdiList = result.subscribers;
      }
    },
    select(index) {
      this.itemIndex = index;
    },
  },
  computed: {},
};
</script>

<style lang="less"  scoped>
.container {
  background-color: #f5f5f5;
}
.container .main-container {
  width: 980px;
  margin: 0 auto;
  background-color: white;
  // border: 1px solid paleturquoise;
  display: flex;
  flex-direction: column;
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
  .main-middle {
    width: 900px;
    height: 643px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
  }
  .main-more {
    width: 900px;
    margin: 0 auto;
    // background-color: skyblue;
  }
}
</style>
