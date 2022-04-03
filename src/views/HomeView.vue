<template>
<main>
 <div class="gauche">
   <my-header></my-header>
     <div class="swip-mobile">
        <span>Speedy</span>
      <MySwipButton/>
      </div>
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
     <div class="swip-desk">
         <span>Speedy</span>
      <MySwipButton/>
     </div>
   
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
   MySwipButton,

 },
 methods:{
   
 }
}
</script>

<style >
.ac{
      display: flex;
    flex-direction: column;
    align-items: flex-start;
}
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
.categorie{
  height: 50vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content:center;
}
.thematiques li a{
  color: inherit;
}
.swip-mobile{
  width: 200px;
  top: 10px;
  right: 5px;
  z-index: 3;
  position:absolute;
  z-index: 3;
    height: 5vh;
    display: flex;
    align-items: center;
    justify-content: flex-end;
}
.swip-mobile span{
  padding:0 10px ;
}
.droite{
  position: relative;
}
.droite-header{
  position: absolute;
  z-index: 1;
  height: 5vh;
  margin: 30px auto;
  width: 90%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  color:white;
}
.swip-desk{
  display: flex;
  align-items: center;
  justify-content: center;
  display: none;
}
.gauche .categorie{
font-size: 35px;
color: white;
}
.droite .categorie{
  color:#202424;
font-size: 35px;
}
.thematiques li a{
  font-size: 30px;
  color: inherit;
}
@media screen and (min-width:600px){
  .gauche .categorie{
font-size: 45px;
color: white;
}
.droite .categorie{
  color:#202424;
font-size: 45px;
}
  .thematiques li a{
  font-size: 40px;
  color: inherit;
}
}

@media screen and (min-width:1024px){
.swip-desk{
  display: flex;
  align-items: center;
  justify-content: center;
}
.swip-mobile{
display: none;

}
.categorie{
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content:center;
}
  .gauche .categorie{
font-size: 55px;
color: white;
}
.droite .categorie{
  color:#202424;
font-size: 55px;
}
  .thematiques li a{
  font-size: 50px;
  color: inherit;
}
}
</style>
