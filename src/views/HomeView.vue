<template>
<main>
 <div class="gauche">
   <my-header></my-header>
   <div class="content">
     <div class="categorie">
      <h2>Histoire</h2> 
     </div>
   </div>
 </div>
 <div class="droite">
   <div class="droite-header">
     <p>ezgzegezg</p>
     <MySwipButton></MySwipButton>
   </div>
     <div class="content">
     <div class="categorie">
      <h2>Géographie</h2> 
     </div>
   </div>
 </div>
</main>

</template>

<script>
import MySwipButton from "@/components/MySwipButton.vue"
export default {
 name:"HomeView",
 components:{
   MySwipButton
 }
}
</script>

<style>
.droite-header{
  margin: 30px auto;
  width: 80%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  color:white;
}
.droite-header p{
  padding: 0 10px;
}
.gauche .categorie{
font-size: 50px;
color: white;
}
.droite .categorie{
  color:#202424;
font-size: 50px;
}

</style>
