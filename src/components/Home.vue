<template>
  <div class="app">
    <div class="title"><span class='titleFont'>第一周</span></div>
    <div class="content">
      <div class="contentImg"></div>
    </div>
    <router-link class="btnBox btnStart" to="/Content"></router-link>
  </div>
</template>

<script>
  export default {
    name: 'Home'
  }
</script>

<style scoped>
  .app{
    position: absolute;top:0;left:0;right:0;
    bottom: 0;
    background: url('../images/1-1.jpg') no-repeat top left;
    background-size: cover;
  }
  .title{
    position: absolute;
    top:0;right:30px;
    width:80px;height:150px;
    background: url('../images/WechatIMG2.png') no-repeat top left;
    background-size: cover;

  }
  .titleFont{
    text-align: center;
    font-size:14px;
    font-weight: bold;
    color:#A47B50;
    position: absolute;
    bottom:10px;left:20px;
  }
  .content{
    position: absolute;
    width:80%;height:250px;
    top:120px;left:50%;
    transform: translate(-50%,0);
  }
  .btnBox{
    width:100px;height:45px;
    position: absolute;
    top:58%;left:50%;
    transform: translate(-50%,0);
  }
  .btnStart{
    background: url('../images/1-4.png') no-repeat top left;
    background-size: 100% 100%;
  }
  .btnNext{
    background: url('../images/2-2.png') no-repeat top left;
    background-size: 100% 100%;
  }
  .btnSubmit{
    background: url('../images/3-1.png') no-repeat top left;
    background-size: 100% 100%;
  }
  .contentImg{
    width:100%;height:100%;
    background: url('../images/1-2.png') no-repeat top left;
    background-size: 100% 100%;
  }
</style>
