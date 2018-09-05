<template>
    <div class="subBox">
      <div class="title"><span class='titleFont'>{{showData.topic_name}}</span></div>
      <div class="subjectContent">
        <div class="subTitle">{{showData.topic_name}}</div>
        <div class="subItem" v-for="(item,index) in showData.topic_answer" @click="selectItem(index,item.topic_answer_id)"><span class="itemTitle" :class="chooseId==index?'active':''">{{index===0?'A':(index===1?'B':(index===2?'C':'D'))}}</span>{{item.answer_name}}</div>
      </div>
      <div class="btnBox btnNext" @click="btn" v-if="ifHasSub"></div>
      <router-link class="btnBox btnSubmit" to="/Finished" v-if="!ifHasSub"></router-link>
    </div>
</template>
<script>
  export default{
    name: 'subjectItem',
    data () {
      return {
        showData:[],
        activeState:false,
        chooseId:-1,
        answer:-1,
        ifHasSub:true
      }
    },
    props:{
      parentData:{
        type:Object
      }
    },
    created(){
      this.showData=this.parentData.itemDetail[this.parentData.itemNum-1];
    },
    methods:{
      selectItem(index,selectedId){
        this.chooseId=index;
        this.answer=selectedId;
      },
      btn(){
        if(this.answer===-1){
          alert('请选择答案哦！');
          return;
        }
        if(this.$store.state.itemNum===5){
          this.ifHasSub=false;
          this.$store.dispatch('ADD_ITEMNUM',this.answer);
          console.log("----->",this.$store.state.answerid);
          return;
        }
        this.$store.dispatch('ADD_ITEMNUM',this.answer);
        this.showData=this.parentData.itemDetail[this.parentData.itemNum-1];
        this.chooseId=-1;
        this.answer=-1;
      }
    }
  }
</script>
<style scoped>
  .subBox{
    position: relative;
  }
.subjectContent{
  font-size: 14px;
  color:#fff;
  padding:15% 25%;
}
  .subItem{
    margin:10px 0;
  }
  .itemTitle{
    display: inline-block;
    width:15px;height:15px;
    line-height: 15px;
    margin-right: 10px;
    border:1px solid #fff;
    border-radius: 50%;
    text-align: center;
  }
  .title{
    position: fixed;
    top:-120px;right:30px;
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
    bottom:10px;left:25px;
  }
  .active{
    background: #FED318;
    color:#354044;
  }
  .btnBox{
    width:100px;height:45px;
    position: absolute;
    top:110%;left:50%;
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
</style>
