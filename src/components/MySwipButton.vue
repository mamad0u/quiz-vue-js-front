<template>
 <div class="big">
     <div class="small" @click="switchbtn()"></div>
 </div>
</template>

<script>
export default {
  name: 'MySwipButton',
  methods:{
      switchbtn(){

      }
  }
}
</script>

<style scoped>
.big{
    width: 60px;
    border-radius: 10000px;
    height: 27px;
    background-color: #fff;
    border: 1px solid gray;
    padding: 1px;
    position: relative;
}
.small{
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background-color: #fff;
    border: 1px solid gray;
    position: absolute;
    transition: 1s;
}
.change-btn{
     left: calc(100% - 28px);
    transition: 1s;
}
</style>
