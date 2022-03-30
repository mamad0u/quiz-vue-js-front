<template>
<main>
 <div class="gauche">
   <my-header></my-header>
   <div class="content">
     <div class="categorie">
      <h2>Histoire</h2> 
        <ul class="thematiques">
            
          <li class="thematique"><router-link to="/quiz/bataille">bataille</router-link></li>
          <li class="thematique"><router-link to="/quiz/politique">politique</router-link></li>
          <li class="thematique"><router-link to="/quiz/inventions">inventions</router-link></li>
        </ul>
     </div>
   </div>
 </div>
 <div class="droite">
   <div class="droite-header">
     <span>Speedy</span>
     <MySwipButton></MySwipButton>
   </div>
     <div class="content">
      <div class="categorie">
          <h2>Géographie</h2> 
           <ul class="thematiques">
              <li class="thematique"><router-link to="/quiz/capitale">capitale</router-link></li>
              <li class="thematique"><router-link to="/quiz/population">population</router-link></li>
              <li class="thematique"><router-link to="/quiz/superficie">superficie</router-link></li>
          </ul>
      </div>
   </div>
 </div>
</main>

</template>

<script>
import MySwipButton from "@/components/MySwipButton.vue"
export default {
 name:"HomeView",
 data() {
			return {
			}
		},
 components:{
   MySwipButton
 },
 methods:{
   
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
.droite-header span{
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
