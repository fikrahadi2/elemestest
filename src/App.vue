<template>
  <div>
    <Navbar />
    <router-view/>
    <Footer />
    <BottomNavbar />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import BottomNavbar from "@/components/Navbar/BottomNavbar"

export default {
  name: 'App',
  components: {
    Navbar,
    Footer,
    BottomNavbar
  }
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
