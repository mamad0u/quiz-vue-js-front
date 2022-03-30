<template>
<main>
 <div class="gauche">
   <my-header></my-header>
 </div>
 <div class="droite">
 </div>
</main>

</template>

<script>
export default {
 name:"QuizView",
 
 components:{

 }, mounted() {

   let url = 'http://localhost:3000/quiz/' + this.$route.params.slug;
   console.log(url)
    this.axios.get(url).then((response) => {
      console.log(response.data)
    })
  },computed:{
    
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