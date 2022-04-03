<template>
<main>
 <div class="gauche">
   <my-header></my-header>
   <div class="question">
     <h3>Thématique</h3>
     <h4>{{question.thematique}}</h4>
     <p >
       {{question.question}} 
    
     </p>
  
   </div>
 </div>
 <div class="droite">
    <div class="good-bad good" v-if="reponseFinal">
      <div class="contenu">
   <h5>VRAI <span>+{{scoreAffichage}}pts</span></h5>
   <p>bravo la vrai réponse était:</p>
    <p>{{question.goodreponse}}</p>
   <div class="retour-acceuil"><router-link to="/">Accueil</router-link></div>
      </div>
 </div>
 <div class="good-bad bad" v-else-if="reponseFinal == false">
    <div class="contenu">
   <h5>FAUX</h5>
   <p>dommage la bonne réponse etait:</p>
    <p>{{question.goodreponse}}</p>
   <div class="retour-acceuil"><router-link to="/">Accueil</router-link></div>
      </div>
 </div>
  <div class="choix" v-for="proposition in propositions" :key="proposition" @click="goodAnswer(proposition)">
    {{proposition}}
  </div>
 </div>

</main>

</template>

<script>
export default {
 name:"QuizView",data(){
   return {
     question: "",
     questions:null,
     propositions: null,
     timer:0,
     reponseFinal:null,
     update:false,
     scoreAffichage:1

   }
 },
 components:{

 }, mounted() {
    if(this.$store.getters.valueSwitch){
         setInterval(()=>{
           this.timer++
        },1000);  
        }
      if(this.update == false) {
      let url = 'http://localhost:3000/quiz/' + this.$route.params.slug;
      this.axios.get(url).then((questions) => {
      this.questions = questions.data
      this.question = this.questions[this.getRandomInt(this.questions.length)]
      this.propositions = JSON.parse(this.question.reponses);
      this.update = true
    })
      }

  },methods:{
    getRandomInt(max) {
      return Math.floor(Math.random() * max);
    },deleteQuestion(question){
      this.questions.splice(question,1)
      console.log(this.questions)
      console.log(question)

    },
      goodAnswer(proposition){
        if(proposition == this.question.goodreponse){
          this.reponseFinal = true
          if(this.$store.getters.valueSwitch && this.timer <= 5){
            this.incrementScoreSpeddy(2)
            return this.scoreAffichage = 2
          }if(this.$store.getters.valueSwitch && this.timer > 5 && this.timer <= 10){
            this.incrementScoreSpeddy(1.5)
            return this.scoreAffichage = 1.5

          } else if (this.$store.getters.valueSwitch == false || this.timer > 10){
            this.incrementScore();
            return this.scoreAffichage = 1

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
background-color: #3CC7A1;
}
.droite{
position: relative;
background-color: #202424;
}
.choix {
height: calc(100% / 4);
width: 100%;
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
.question{
  height: 50vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.question h4 {
  font-size: 30px;
}
h3{
  font-size: 40px;
}
h4{
  padding: 10px;
}
h5 span{
  font-size: 30px;
}
.question p {
font-size: 18px;
font-weight: 400;
max-width: 300px;
margin: 20px auto;
}
.good-bad {
  position: absolute;
  width: 100%;
  height: 100%;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
color:white;
text-align: left;
}
.good-bad h5{
  font-size:50px;
  padding: 15px 0;
}
.good h5{
 color:#63C730
}
.bad h5{
  color:#C82F30;
}
.good-bad p{
  font-size:22px;
  padding: 2px;
}
.good {
background-color: #202424;
  
}
.bad {
background-color: #202424;

}
.ac{
    display: flex;
    width: 100%;
    justify-content: space-between;
    }

  .retour-acceuil{
    display: flex;
    justify-content: center;
    height: 40px;
    width: 120px;
    align-items: center;
    background-color: #fff;
    border-radius: 10000px;
    margin: 20px 0;
    box-shadow:0px 0px 5px 0px rgba(255,255,255,0.3);
  }
 .retour-acceuil a{
    color: #202424;
    }
@media screen and (min-width:600px){
  .droite{
display: flex;
flex-wrap: wrap;
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
.question h4 {
  font-size: 40px;
}
h3{
  font-size: 60px;
 
}
h4{
  padding: 15px;
}
.question p {
font-size: 20px;
max-width: 500px;
}

}
@media screen and (min-width:1024px){
  .question p {
max-width: 450px;
}
.question{
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
h4{
  padding: 20px 0 30px;
}
  .retour-acceuil{
    display: flex;
    justify-content: center;
    height: 40px;
    width: 120px;
    align-items: center;
    background-color: #fff;
    border-radius: 10000px;
    margin: 40px 0;
    box-shadow:0px 0px 5px 0px rgba(255,255,255,0.3);
  }

}


</style>