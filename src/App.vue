<template>
  <Navbar/>
  <router-view />
  <WhatsApp/>
  <Footer />
</template>

<script>
import Navbar from './components/NavBar.vue'
import Footer from './components/FooTer.vue'
import WhatsApp from './components/WhatsApp.vue';

export default {
  name: 'App',
  components: {
    Navbar,
    Footer,
    WhatsApp,
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap');

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: "Nunito", serif;;
}

:root{
  --primary-color:#edf2fc;
  --secondary-color:#282828;
}

.dark-theme {
  /* --primary-color:#292e32; */
  --primary-color:#202020  ;
  /* --primary-color:#3f474d; */
  --secondary-color:#fff;
}

body {
  background-size: cover;
  background-position: right center;
  background-color: var(--primary-color);
}
</style>
