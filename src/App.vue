<template>
 
  <router-view/>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Pacifico&family=Roboto:wght@100;300;400;500;700&display=swap');
*{
  margin: 0;
  padding: 0;
  list-style: none;
  text-decoration: none;
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
}

.gauche{
width: 100%;
height: 50vh;
background-color: #202424;
color: #F6EFEF;
position: relative;

}
.droite{
width: 100%;
height: 50vh;
background-color: #3CC7A1;
}
.main-header{
  position:absolute ;
  z-index: 1;
  width: 100%;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}


nav a{
color: #F6EFEF;

}
@media screen and (min-width:1024px){
main{
  display: flex;
}
.gauche{
width: 100%;
height: 100vh;
background-color: #202424;
color: #F6EFEF;
}
.droite{
width: 100%;
height: 100vh;
background-color: #3CC7A1;
}
}


</style>
