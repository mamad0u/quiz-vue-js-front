<template>
  <header class="main-header">
    <nav>
      <router-link to="/">Accueil</router-link>
      <div class="score">score {{valueScore}}</div>
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
      margin: 30px auto;
      width: 80%;
    display: flex;
    justify-content: space-between;
  align-items: center;

  }
  a {
    text-decoration: none;
  }
</style>
