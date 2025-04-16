<template>
  <LoadingScreen :isLoading="isLoading" />
  <Navbar v-show="!isLoading"/>
  <router-view v-show="!isLoading"/>
  <Toast v-show="!isLoading" />
  <WhatsApp v-show="!isLoading"/>
  <AiToast v-if="!isLoading"/>
  <Footer v-show="!isLoading"/>
</template>

<script>
import Navbar from './components/NavBar.vue'
import Footer from './components/FooTer.vue'
import WhatsApp from './components/WhatsApp.vue'
import LoadingScreen from './components/LoadingScreen.vue'
import AiToast from './components/AiToast.vue'
import Toast from './components/Toast.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    Footer,
    WhatsApp,
    LoadingScreen,
    AiToast,
    Toast
  },
  data() {
    return {
      isLoading: true
    }
  },
  mounted() {
    window.addEventListener('load', this.handleLoad)
    
    // Fallback timeout
    setTimeout(() => {
      this.isLoading = false
    }, 1000)
  },
  methods: {
    handleLoad() {
      this.isLoading = false
      window.removeEventListener('load', this.handleLoad)
    }
  },
  beforeUnmount() { 
    window.removeEventListener('load', this.handleLoad)
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
  --bg1:#54d6d8;
  --card-bg : white;
  --shadow : rgba(0,0,0,0.1);
  --chat-bg: #ffffff;
  --chat-message-bg: #f0f0f0;
  --chat-text: #1a1a1a;
  --chat-user-message-bg: #0066cc;
  --chat-user-text: #ffffff;
  --chat-input-bg: #f8f9fa;
  --chat-border: rgba(0, 0, 0, 0.06);
  --chat-shadow: rgba(0, 0, 0, 0.05);
  --chat-timestamp: #666;
  --chat-typing-dot: #a0a0a0;
}

.dark-theme {
  /* --primary-color:#292e32; */
  --primary-color:#2d3748  ;
  /* --primary-color:#3f474d; */
  --secondary-color:#f7fafc;
  --bg1:#1fbabc;
  /* --card-bg : #5f7991; */
  --card-bg : #e3f2fd;
  --shadow : rgba(255, 255, 255, 0.8);
  --chat-bg: #1e2a3a;
  --chat-message-bg: #2d3748;
  --chat-text: #e2e8f0;
  --chat-user-message-bg: #15b7b9;
  --chat-user-text: #ffffff;
  --chat-input-bg: #2d3748;
  --chat-border: rgba(255, 255, 255, 0.1);
  --chat-shadow: rgba(0, 0, 0, 0.2);
  --chat-timestamp: #a0aec0;
  --chat-typing-dot: #718096;
}

.dark-theme img:not(.picture, .title, .content-body .image img){
  filter: brightness(0.9) contrast(1.75);
}

body,
.theme-transition {
  transition: background-color 0.3s ease, color 0.3s ease;
}

/* Remove transition interference for specific elements */
.no-theme-transition,
.no-theme-transition * {
  transition: none !important;
} 

body {
  background-size: cover;
  background-position: right center;
  background-color: var(--primary-color);
  /* max-width: 1920px; */
  margin: 0 auto;
}
</style>
