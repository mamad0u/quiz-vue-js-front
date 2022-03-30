<template>
  <header class="main-header">
    <nav>
      <router-link to="/">Accueil</router-link>
      <div class="score">score</div>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'MyHeader',

}

</script>

<style scoped>
  nav {
      margin: 30px auto;
      width: 80%;
    display: flex;
    justify-content: space-between;
  }
  a {
    text-decoration: none;
  }
</style>
