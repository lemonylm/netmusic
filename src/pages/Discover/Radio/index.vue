<template>
  <div class="container">
    <div class="test">radio</div>
    <div class="main-container">
      <div class="main-header">
        <ul v-for="item in 15" :key="item">
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
        <ul>
          <li>
            <a href="##">
              <div class="imgs">
                <img
                  src="http://p1.music.126.net/icULXvfqWJMFvcjTrXSLeA==/109951165406422565.jpg"
                  alt=""
                />
              </div>
              <span>推荐</span>
            </a>
          </li>
          <li>
            <a href="##">
              <div class="imgs">
                <img
                  src="http://p1.music.126.net/icULXvfqWJMFvcjTrXSLeA==/109951165406422565.jpg"
                  alt=""
                />
              </div>
              <span>推荐</span>
            </a>
          </li>
          <li>
            <a href="##">
              <div class="imgs">
                <img
                  src="http://p1.music.126.net/icULXvfqWJMFvcjTrXSLeA==/109951165406422565.jpg"
                  alt=""
                />
              </div>
              <span>推荐</span>
            </a>
          </li>
        </ul>
      </div>
      <div class="main-middle">
        <div class="left">
          <div class="middle-header">
            <h3>
              <a href="javascript:;">永劫无间</a>
            </h3>
            <a href="javascript:">更多 ></a>
          </div>
          <!-- 隔行变色表格 -->

          <ul
            v-for="(item, index) in 10"
            :key="index"
            class="content"
            ref="contents"
            @mouseover="mouseOver"
            @mouseleave="mouseLeave"
            :style="active"
          >
            <li class="item">
              <a class="cvrleft" title="播放">
                <img
                  src="http://p1.music.126.net/SLASkSEu_TZdKfukCtaEtA==/109951165776991634.jpg?param=40x40"
                  alt=""
                />
                <i class="imgs" ref="ply" :style="actives">
                  <img
                    src="https://s2.music.126.net/style/web2/img/iconall.png?e4ea7e2d7061b982427f4e18ef2e26b1"
                    alt=""
                  />
                </i>
              </a>
              <div class="cvrmiddle">
                <a class="top"
                  >《时光唱片店》第五期：应该活在当下还是好好规划人生？</a
                >
                <a class="bottom">《时光唱片店》</a>
              </div>
              <a class="cvrright"> 风灵月影 </a>
            </li>
          </ul>
        </div>
        <div class="right">
          <div class="middle-header">
            <h3>
              <a href="javascript:;">7.8公测</a>
            </h3>
            <a href="javascript:">更多 ></a>
          </div>
          <ul
            v-for="(item, index) in 10"
            :key="index"
            class="content"
            ref="contents"
            @mouseover="mouseOver"
            @mouseleave="mouseLeave"
            :style="active"
          >
            <li class="item">
              <a class="cvrleft" title="播放">
                <img
                  src="http://p1.music.126.net/SLASkSEu_TZdKfukCtaEtA==/109951165776991634.jpg?param=40x40"
                  alt=""
                />
                <i class="imgs" ref="ply" :style="actives">
                  <img
                    src="https://s2.music.126.net/style/web2/img/iconall.png?e4ea7e2d7061b982427f4e18ef2e26b1"
                    alt=""
                  />
                </i>
              </a>
              <div class="cvrmiddle">
                <a class="top"
                  >《时光唱片店》第五期：应该活在当下还是好好规划人生？</a
                >
                <a class="bottom">《时光唱片店》</a>
              </div>
              <a class="cvrright"> 风灵月影 </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="main-more">
        <div class="rdimore" v-for="item in 4" :key="item">
          <div class="title">
            <span class="left" @click="tuijian">音乐电台推荐</span>
            <p class="right" @click="gengduo">更多 ></p>
          </div>

          <ul class="rdiList">
            <li v-for="item in 4" :key="item">
              <a>
                <img
                  src="https://p2.music.126.net/L5qthiLu91qFUXfBhQ3wRg==/109951165771082767.jpg?param=200y200"
                  alt=""
                />
              </a>
              <div class="cnt">
                <a href="##">音乐记事本</a>
                <p>我对不起老刘哇！</p>
              </div>
            </li>
          </ul>
        </div>
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
      active: "",
      actives: "",
    };
  },
  methods: {
    mouseOver() {
      this.active = "background-color:#eee";
      this.actives = "display:block";
    },
    mouseLeave() {
      this.active = "";
      this.actives = "";
      this.$refs.contents.style = "";
      this.$refs.ply.style = "";
    },
    tuijian() {},
    gengduo() {},
  },
};
</script>

<style lang="less">
.container {
  // height: 2222px;
  background-color: #f5f5f5;
}
.container .test {
  width: 100%;
  height: 206px;
  margin-top: -100px;
  background-color: #80869e;
}
.container .main-container {
  width: 980px;
  margin: 0 auto;
  border: 1px solid paleturquoise;
  display: flex;
  flex-direction: column;
  .main-header {
    margin: 40px auto 0;
    // width: 900px;
    height: 194px;
    // background-color: yellowgreen;
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
    .left {
      width: 426px;
      height: 643px;
      float: left;
    }
    .right {
      width: 426px;
      height: 643px;
      float: right;
    }
    .middle-header {
      width: 426px;
      height: 42px;
      display: flex;
      justify-content: space-between;
      border-bottom: 2px solid #c20c0c;
      h3 {
        a {
          color: #333;
          font-size: 28px;
        }
        a:hover {
          color: #333 !important;
          text-decoration: underline;
        }
      }
      a {
        margin-top: 14px;
      }
      a:hover {
        color: #333 !important;
        text-decoration: underline;
      }
    }
    // 列表组件
    .content {
      position: relative;
      height: 60px;
      .item {
        padding-top: 10px;
        display: flex;
        .cvrleft {
          margin-left: 20px;
          width: 40px;
          height: 40px;
          .imgs {
            position: absolute;
            display: none;
            // display: block;
            width: 22px;
            height: 22px;
            top: 32px;
            left: 44px;
            overflow: hidden;
            margin: -11px 0 0 -11px;
            background-position: 0 -85px;
            _background-position: 0 0;
          }
        }
        .cvrmiddle {
          width: 254px;
          .top {
            color: #333;
            display: block;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            word-wrap: normal;
            cursor: pointer;
          }
          .bottom {
            color: #999;
            cursor: pointer;
          }
          a:hover {
            color: #333 !important;
            text-decoration: underline;
          }
        }
        .cvrright {
          height: 16px;
          cursor: pointer;
          line-height: 16px;
          border: 1px solid #999;
          font-size: 12px;
        }
        a:hover {
          color: #999 !important;
          text-decoration: underline;
        }
      }
    }
  }
  .main-more {
    width: 900px;
    margin: 0 auto;
    // background-color: skyblue;
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
  }
}
// .on {
//   background: pink;
// }
// .off {
//   background: skyblue;
// }
</style>
