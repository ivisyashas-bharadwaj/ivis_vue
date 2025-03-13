<template>
    <div class="ai-chat-page">
      <AiChat />
      <Toast v-if="showToast" @close="showToast = false" />
      <!-- <div class="toast-symbol" @mouseover="showToast = true" @mouseleave="showToast = false"> -->
        <i class="fas fa-comment-dots"></i>
        <div class="toast-content" v-if="showToast">
          <p>Click here to chat with our AI Assistant!</p>
        </div>
      </div>
      <div>
        <AiToast/>
      </div>
    <!-- </div> -->
  </template>
  
  <script>
  import AiChat from '../components/AiChat.vue';
  import AiToast from '@/components/AiToast.vue';
  
  export default {
    components: {
      AiChat,
      AiToast
    },
    data() {
      return {
        showToast: false
      };
    }
  };
  </script>
  
  <style scoped>

  
  .toast-symbol {
    position: fixed;
    bottom: 20px;
    right: 20px;
    cursor: pointer;
    transition: transform 0.3s;
  }
  
  .toast-symbol:hover {
    transform: scale(1.1);
  }
  
  .toast-content {
    display: none;
    position: absolute;
    bottom: 40px;
    right: 0;
    background-color: #15b7b9;
    color: white;
    padding: 10px;
    border-radius: 5px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
    z-index: 1000;
  }
  
  .toast-symbol:hover .toast-content {
    display: block;
  }
  </style>