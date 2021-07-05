<template>
  <div>
    <div class="rdimore" v-for="item in 4" :key="item">
      <div class="title">
        <span class="left" @click="tuijian">音乐电台推荐</span>
        <p class="right" @click="gengduo">更多 ></p>
      </div>

      <ul class="rdiList">
        <li v-for="item in 4" :key="item">
          <a>
            <img
              src="@/../public/image/radio/bg.jpg"
              alt=""
            />
          </a>
          <div class="cnt">
            <a href="##">音乐记事本</a>
            <p>音乐</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "RdiMore",
  props: ["rdiMoreInfo"],
  data() {
    return {
      rdiList: [],
    };
  },
  methods: {
    tuijian() {},
    gengduo() {},
    group(array, subGroupLength) {
      let index = 0;
      let newArray = [];
      while (index < array.length) {
        newArray.push(array.slice(index, (index += subGroupLength)));
      }
      return newArray;
    },
    mounted() {
      // this.rdiList = rdiMoreInfo
      // this.group(this.rdiMoreInfo,4);
    },
  },

  //   computed:{
  //       rdiList() {
  //           return(
  //               group(this.rdiMoreInfo,4)||[]
  //               )
  //       }
  //   }
};
</script>

<style lang = 'less' scoped>
.rdimore {
  width: 900px;
  height: 364px;
  // background-color: #caccce;
  .title {
    display: flex;
    justify-content: space-between;
    border-bottom: 2px solid red;
    span {
      font-size: 28px;
    }
    p {
      margin-top: 10px;
    }
  }
  .rdiList {
    display: flex;
    flex-wrap: wrap;
    li {
      width: 434px;
      height: 160px;
      padding-right: 14px;
      // border: 1px solid green;
      a {
        position: relative;
        img {
          width: 120px;
          height: 120px;
          position: absolute;
          top: 20px;
          left: 0;
        }
      }
      .cnt {
        width: 295px;
        height: 64px;
        // background-color: skyblue;
        margin: 50px 0 0 140px;
        a {
          font-size: 20px;
          color: #333;
        }
        a:hover {
          text-decoration: underline;
          color: #333 !important;
        }
        p {
          margin-top: 20px;
          color: #333;
        }
      }
    }
  }
}
</style>
