<template>
<main>
 <div class="gauche">
   <my-header></my-header>

   <div class="question">
     <h3>{{question.thematique}}</h3>
     <p>
       
       {{question.question}}
     </p>
   </div>
 </div>
 <div class="droite">
  <div class="choix" v-for="proposition in propositions" :key="proposition">
  <p>
    {{proposition}}
  </p>
  </div>
 </div>
</main>

</template>

<script>
export default {
 name:"QuizView",data(){
   return {
     question: "",
     propositions: null
   }
 },
 components:{

 }, mounted() {

   let url = 'http://localhost:3000/quiz/' + this.$route.params.slug;
   console.log(url)
    this.axios.get(url).then((questions) => {
      this.question = questions.data[this.getRandomInt(questions.data.length)]
      this.propositions = JSON.parse(this.question.reponses).propositions;
      console.log(this.question.goodreponse)
    })
  },methods:{
    getRandomInt(max) {
      return Math.floor(Math.random() * max);
    }
  }
}

</script>

<style scoped>
.gauche{
width: 100%;
height: 100vh;
background-color: #3CC7A1;
}
.droite{
width: 100%;
height: 100vh;
background-color: #202424;
}
</style>