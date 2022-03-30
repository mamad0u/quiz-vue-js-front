<template>
<main>
 <div class="gauche">
   <my-header></my-header>
 </div>
 <div class="droite">
     <MySwipButton></MySwipButton>

 </div>
</main>

</template>

<script>
import MySwipButton from "@/components/MySwipButton.vue"
export default {
 name:"QuizzView",
 components:{
   MySwipButton
 }
}
</script>

<style>

</style>
