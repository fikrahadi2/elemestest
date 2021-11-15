<template>
  <div>
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style>
@font-face {
  font-family: "Rubik";
  src: local("Rubik"),
   url(./fonts/Rubik-Regular.ttf) format("truetype")
}
#app {
  font-family: "Rubik";
}
</style>
