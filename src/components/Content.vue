<template>
  <div class="app">
    <div class="content">
      <div class="contentImg">
        <subjectItem :parentData="subData" />
      </div>
    </div>

  </div>
</template>

<script>
  import subjectItem from './subjectItem.vue'
  export default {
    name: 'Content',
    data(){
      return{
        subData:{}
      }
    },
    created(){
      this.$store.dispatch('INITIALIZE_DATA');
      this.subData=this.$store.state;
    },
    components:{
      subjectItem
    },
    methods:{

    }
  }
</script>

<style scoped>
  .app{
    position: absolute;top:0;left:0;right:0;
    bottom: 0;
    background: url('../images/1-1.jpg') no-repeat top left;
    background-size: cover;
  }
  .content{
    position: absolute;
    width:80%;height:250px;
    top:120px;left:50%;
    transform: translate(-50%,0);
    background: url('../images/2-1.png') no-repeat top left;
    background-size: cover;
  }

  .contentImg{
    width:100%;height:100%;
  }
</style>
