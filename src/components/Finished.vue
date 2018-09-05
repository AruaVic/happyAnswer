<template>
    <div class="finshedContent">
      <div class="scoreContent">
        <p class="score">{{score}}分！</p>
        <p class="say">{{scoreTipsArr[scoreTips]}}</p>
      </div>
      <div class="button" @click="share"></div>
      <div class="alert" v-show="showAlert" @click="share">
        <div class="alertImg"></div>
      </div>
    </div>
</template>
<script>
  export default{
    name: 'Finished',
    data () {
      return{
        showAlert:false,
        score:0,
        scoreTips:0,
        rightAnswer: [2, 7, 12, 13, 18], //正确答案
        scoreTipsArr:['你说，是不是把知识都还给小学老师了？','还不错，但还需要继续加油哦！','不要嘚瑟还有进步的空间！','智商离爆表只差一步了！','你也太聪明啦，葡萄之家欢迎你！']

      }
    },
    methods:{
      share(){
        this.showAlert=!this.showAlert;
      }
    },
    created(){
    this.$store.state.answerid;
      for(var i=0;i<5;i++){
        if(this.rightAnswer[i]===this.$store.state.answerid[i]){
          this.score+=20;
        }
        if(this.score>90){
          this.scoreTips=4;
        }else if(this.score>70){
          this.scoreTips=3;
        }else if(this.score>50){
          this.scoreTips=2;
        }else if(this.score>30){
          this.scoreTips=1;
        }else{
          this.scoreTips=0;
        }
      }
    }
  }
</script>
<style scoped>
  .finshedContent{
    position: absolute;
    top:0;left:0;
    right: 0;bottom: 0;
    background: url(../images/4-1.jpg) no-repeat top left;
    background-size: cover;
  }
  .scoreContent{
    box-sizing: border-box;
    width:60%;height:210px;
    position: absolute;top:5%;left:20%;
    background: url('../images/4-2.png') no-repeat top left;
    background-size: 100% 100%;
    text-align: center;
    padding-top: 110px;
    padding:110px 10px 10px 20px;
  }
  .scoreContent p.score{
    margin:0;
    font-size: 30px;
    font-weight: bold;
    color:#A41D30;
    text-shadow:-1px 0 black,
    0 1px black,
    1px 0 black,
    0 -1px black;
  }
  .scoreContent p.say{
    font-size: 14px;
  }
  .button{
    width:140px;height:56px;
    background: url('../images/4-3.png') no-repeat top left;
    background-size:cover ;
    position: absolute;
    top:40%;left:50%;
    transform: translateX(-50%);
  }
  .alert{
    position: fixed;
    z-index: 5;
    top:0;left:0;right:0;bottom:0;
    background: url('../images/5-1.png') no-repeat top left;
    background-size:cover ;
  }
  .alert .alertImg{
    position: absolute;
    top:10px;left:14.5%;
    width:75%;
    height:260px;
    background: url('../images/5-2.png') no-repeat top left;
    background-size:cover ;
  }
</style>
