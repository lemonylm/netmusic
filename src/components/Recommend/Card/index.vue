<template>
  <div class="container">
    <img :src="cardInfo.picUrl" alt="">
    <p>{{cardInfo.name}}</p>
    <div class="mask">
      <div class="ear"></div>
      <span class="count">{{playCount}}</span>
      <div class="play_box">
        <div class="play"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: ['cardInfo'],
  computed: {
    playCount() {
      let playCount = this.cardInfo.playCount || this.cardInfo.playcount
      if(playCount < 10000) return playCount
      const count = Math.round(playCount / 10000)
      if(count < 10000) {
        return count + '万'
      } else {
        return (count/10000).toFixed(1) + '亿'
      }
    }
  }
}
</script>

<style lang="less" scoped>
.container {
  width: 25%;
  padding-bottom: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  img {
    width: 140px;
    height: 140px;
    border: 1px solid #D2D2D2;
  }
  p {
    width: 140px;
    font-size: 14px;
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
