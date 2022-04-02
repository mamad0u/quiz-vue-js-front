<template>
  <header class="main-header">
    <nav>
       <div class="ac">
        <router-link to="/">Accueil</router-link>
        <div class="score">score: {{valueScore}}</div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'MyHeader',
  computed:{
    valueScore(){
      return this.$store.getters.valueScore
    },
  }

}

</script>

<style scoped>

  nav {
    height: 34px;
      margin: 20px auto;
      width: 80%;
      font-size: 20px;
    display: flex;
    justify-content: space-between;
  align-items: center;
  }
  a {
    text-decoration: none;
  }
@media screen and (min-width:1024px){
    nav {
      margin: 30px auto;
  }
}

</style>
