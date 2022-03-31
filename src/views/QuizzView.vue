<template>
<main>
 <div class="gauche">
   <my-header></my-header>
   <div class="question">
     
     <h3>{{question.thematique}}</h3>
     <p >
       {{question.question}} 
    
     </p>
     {{valueSwitch}}
      {{timer}}
   </div>
 </div>
 <div class="droite">
  <div class="choix" v-for="proposition in propositions" :key="proposition" @click="goodAnswer(proposition)">
    {{proposition}}
  </div>
 </div>
 <div class="good-bad good" v-if="reponseFinal">
   <p>bravo la vrai réponse était {{question.goodreponse}}</p>
   <router-link to="/">home</router-link>
  

 </div>
 <div class="good-bad bad" v-else-if="reponseFinal == false">
   <p>dommage la bonne réponse etait {{question.goodreponse}}</p>
   <p>vous avez repondu {{proposition}}</p>
   <router-link to="/">home</router-link>
 </div>
</main>

</template>

<script>
export default {
 name:"QuizView",data(){
   return {
     question: "",
     propositions: null,
     timer:0,
     reponseFinal:null
   }
 },
 components:{

 }, mounted() {
    if(this.$store.getters.valueSwitch){
         setInterval(()=>{
           this.timer++
        },1000);  
        } else {
          console.log("false")
        }
   

   let url = 'http://localhost:3000/quiz/' + this.$route.params.slug;
   console.log(url)
    this.axios.get(url).then((questions) => {
      this.question = questions.data[this.getRandomInt(questions.data.length)]
      this.propositions = JSON.parse(this.question.reponses);
    })




  },methods:{
    getRandomInt(max) {
      return Math.floor(Math.random() * max);
    },
      goodAnswer(proposition){
        if(proposition == this.question.goodreponse){
          this.reponseFinal = true
          if(this.$store.getters.valueSwitch && this.timer <= 5){
            this.incrementScoreSpeddy(2)
          }if(this.$store.getters.valueSwitch && this.timer > 5 && this.timer <= 10){
            this.incrementScoreSpeddy(1.5)
          } else if (this.$store.getters.valueSwitch == false || this.timer > 10){
            this.incrementScore();
          }
          

        } else {
          this.reponseFinal = false
        }
      }, incrementScore(){
        this.$store.commit('incrementScore');
      },incrementScoreSpeddy(value){
        this.$store.commit('incrementScoreSpeddy',value);
      }
     
  },computed:{
    valueSwitch(){
      return this.$store.getters.valueSwitch
    },
    valueScore(){
      return this.$store.getters.valueScore
    },
  }
}

</script>

<style scoped>
.gauche{
flex: 50%;
height: 100vh;
background-color: #3CC7A1;
}
.droite{
display: flex;
flex-wrap: wrap;
flex: 50%;
height: 100vh;
background-color: #202424;

}
.choix {
height: 50%;
width: 50%;
color: white;
border: 2px solid black;
display: flex;
align-items: center;
justify-content: center;
transition: border .2s ease-in-out;
cursor: pointer;
}
.choix:hover {
  border: 2px solid #3CC7A1;
}
.question h3 {
  font-size: 3rem;
  margin-top: 7rem;
}
.question p {
font-size: 1.4rem;
font-weight: 400;
max-width: 500px;
margin: 20px auto;
}
.good-bad {
  position: absolute;
  width: 100%;
  height: 100%;
display: flex;
align-items: center;
justify-content: center;
}
.good {
  background: #3CC7A1;
}
.bad {
background: red;
}
</style>