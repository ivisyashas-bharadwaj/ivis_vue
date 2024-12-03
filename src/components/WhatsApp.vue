<template>
    <div>
      <div class="whatsapp-button" @click="toggleChat">
        <img src="@/assets/whatsapp.svg" alt="whatsapp" />
      </div>
  
      <div v-show="isChatVisible" class="chat-container">
        <div class="chat-header">
          <img src="@/assets/ivisdp.png" alt="Profile Picture" class="profile-picture" />
          <div class="chat-info">
            <span class="chat-name">IVIS LABS</span>
            <span class="chat-status">Online</span>
          </div>
        </div>
        <div class="chat-messages">
          <div class="message received">
            Hello! ,<br />
            We are excited to discuss your requirements for software solutions and digital transformation. Leave us a message, and we will get back to you promptly.<br />
            <br />
            Best regards, <br />
            IVIS LABS
          </div>
        </div>
        <div class="chat-input">
          <input type="text" v-model="message" placeholder="Type a message" @keypress.enter="sendMessage" />
          <button @click="sendMessage">➤</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isChatVisible: false,
        message: '',
        whatsappNumber: '+916364411444',
      };
    },
    methods: {
      toggleChat() {
        this.isChatVisible = !this.isChatVisible;
      },
      sendMessage() {
        const trimmedMessage = this.message.trim();
        if (trimmedMessage) {
          const whatsappUrl = `https://wa.me/${this.whatsappNumber}?text=${encodeURIComponent(trimmedMessage)}`;
          window.open(whatsappUrl, '_blank');
          this.message = '';
        }
      },
    },
  };
  </script>
  
  <style scoped>
    /* whatsApp chatbox  */

.whatsapp-button {
  position: fixed;
  right: 0;
  bottom: 0;
  z-index: 10;
  margin: 1rem;
  cursor: pointer;
}

.whatsapp-button img{
  width: 50px;
  height: 50px;
}

.whatsapp-button:hover{
  scale: 1.05;
  transition: 0.8s;
}

.chat-container {
  /* display: none; */
  width: 300px;
  border-radius: 1rem;
  z-index: 10;
  position: fixed;
  right: 0;
  bottom: 10%;
  margin: 1rem;
  overflow: hidden;
}
.chat-header {
  background-color: #075e54;
  color: white;
  padding: 10px;
  display: flex;
  align-items: center;
}
.profile-picture {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
  object-fit: cover;
}
.chat-info {
  display: flex;
  flex-direction: column;
}
.chat-name {
  font-weight: bold;
}
.chat-status {
  font-size: 0.8em;
  opacity: 0.8;
}
.chat-messages {
  flex-grow: 1;
  overflow-y: auto;
  padding: 10px;
  background-color: #e5ddd5;
}
.message {
  max-width: 80%;
  padding: 8px 12px;
  border-radius: 10px;
  clear: both;
}
.sent {
  background-color: #dcf8c6;
  float: right;
}
.received {
  background-color: #fff;
  float: left;
}
.chat-input {
  display: flex;
  padding: 10px;
  background-color: #f0f0f0;
  align-items: center;
  box-sizing: border-box;
}

.chat-input input {
  flex-grow: 1;
  border: none;
  border-radius: 20px;
  padding: 10px 15px;
  margin-right: 10px;
}

.chat-input button {
  background-color: #075e54;
  color: white;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  cursor: pointer;
}
  </style>
  