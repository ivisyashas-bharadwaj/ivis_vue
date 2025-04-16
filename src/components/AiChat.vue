<!-- src/components/CompanyChat.vue -->
<template>
    <div class="chat-interface">
      <!-- Main Chat Area -->
      <div class="main-chat">
        <!-- Chat Header -->
        <div class="chat-header">
          <div class="chat-header-title">
            <h2><span class="company-name">IVIS LABS</span> AI Assistant</h2>
            <span class="status-badge">
              <span class="status-dot"></span>
              Online
            </span>
          </div>
        </div>
  
        <!-- Messages Area -->
        <div class="messages-container" ref="messagesContainer">
          <div v-if="!messages.length" class="welcome-screen">
            <div class="welcome-header">
              <!-- <img src="" alt="AI Assistant" class="ai-logo"> -->
              <h1>Welcome to <span class="company-name">IVIS LABS</span> AI Assistant</h1>
              <p class="welcome-subtitle">I'm your AI-powered company guide. How can I help you today?</p>
            </div>
  
            <div class="suggested-prompts">
              <h3>Try asking about:</h3>
              <div class="prompt-grid">
                <div v-for="(prompt, index) in examplePrompts" 
                     :key="index"
                     class="prompt-item"
                     @click="usePrompt(prompt)">
                  <i class="fas fa-lightbulb"></i>
                  {{ prompt }}
                </div>
              </div>
            </div>
          </div>
  
          <div v-else class="messages">
            <div v-for="(message, index) in messages" 
                 :key="index"
                 :class="['message', message.role]">
              <div class="message-content">
                <div class="message-text" v-if="!message.isTyping">
                  <span v-if="message.role === 'assistant' && message.isTyping === false && message.displayContent !== message.content">
                    {{ message.displayContent }}<span class="cursor"></span>
                  </span>
                  <span v-else v-html="formatMessage(message.content)"></span>
                </div>
                <div class="message-text typing" v-else>
                  <div class="typing-indicator">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
                <div class="message-timestamp">
                  {{ formatTime(message.timestamp) }}
                </div>
              </div>
            </div>
          </div>
        </div>
  
        <!-- Input Area -->
        <div class="input-container">
          <div class="input-box">
            <textarea 
              v-model="userInput"
              @keydown.enter.prevent="sendMessage"
              placeholder="Message Company AI..."
              :disabled="isTyping"
              rows="1"
              ref="inputArea"
              @input="autoResize"
            ></textarea>
            <button 
              class="send-button"
              @click="sendMessage" 
              :disabled="isTyping || !userInput.trim()">
              <img src="../assets/send.svg" alt="" :height="25" :width="25">
            </button>
          </div>
          <div class="input-footer">
            <div class="input-info">
              <i class="fas fa-info-circle"></i>
              <span>AI Assistant is in beta. Responses may not be entirely accurate.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { ref, onMounted, watch } from 'vue';
  import { aiService } from '../services/aiService';
  
  export default {
    name: 'CompanyChat',
    setup() {
      const messages = ref([]);
      const userInput = ref('');
      const isTyping = ref(false);
      const messagesContainer = ref(null);
      const inputArea = ref(null);
      const typewriterSpeed = ref(30); // Speed in milliseconds
  
      const examplePrompts = [
        "What services does your company offer?",
        "Tell me about your company's history",
        "What makes your company unique?",
        "What are your company's core values?"
      ];

      watch(messages, (newMessages, oldMessages) => {
      // Check if a new assistant message was added
      if (newMessages.length > oldMessages.length) {
        const lastMessage = newMessages[newMessages.length - 1];
        if (lastMessage.role === 'assistant' && !lastMessage.isTyping) {
          // Automatically scroll to bottom when new messages arrive
          scrollToBottom();
        }
      }
    }, { deep: true });
  
      const formatTime = (timestamp) => {
        return new Intl.DateTimeFormat('en-US', {
          hour: 'numeric',
          minute: 'numeric',
          hour12: true
        }).format(timestamp);
      };
  
      const formatMessage = (content) => {
        // Add any message formatting logic here
        return content;
      };
  
      const autoResize = () => {
        if (inputArea.value) {
          inputArea.value.style.height = 'auto';
          inputArea.value.style.height = inputArea.value.scrollHeight + 'px';
        }
      };
  
      const scrollToBottom = () => {
        setTimeout(() => {
          if (messagesContainer.value) {
            messagesContainer.value.scrollTop = messagesContainer.value.scrollHeight;
          }
        }, 100);
      };
  
      const usePrompt = (prompt) => {
        userInput.value = prompt;
        inputArea.value?.focus();
      };
  
      const sendMessage = async () => {
        if (!userInput.value.trim() || isTyping.value) return;
  
        // Add user message
        messages.value.push({
          role: 'user',
          content: userInput.value,
          timestamp: new Date()
        });
  
        // Clear input and resize
        userInput.value = '';
        if (inputArea.value) {
          inputArea.value.style.height = 'auto';
        }
  
        scrollToBottom();
  
        // Show typing indicator
        isTyping.value = true;
        messages.value.push({
          role: 'assistant',
          isTyping: true,
          timestamp: new Date()
        });
  
        try {
          const response = await aiService.getChatResponse(messages.value[messages.value.length - 2].content);
  
          // Remove typing indicator and add response
          messages.value.pop();
          messages.value.push({
            role: 'assistant',
            content: response,
            displayContent: '', // Start with empty display content
            isTyping: false,
            timestamp: new Date(),
            typewriterIndex: 0
          });
          
          // Start typewriter effect
          startTypewriter(messages.value.length - 1);
        } catch (error) {
          console.error('Error:', error);
          messages.value.pop();
          messages.value.push({
            role: 'assistant',
            content: 'Sorry, there was an error processing your request.',
            displayContent: '',
            isTyping: false,
            timestamp: new Date(),
            typewriterIndex: 0
          });
          
          // Start typewriter effect for error message
          startTypewriter(messages.value.length - 1);
        } finally {
          isTyping.value = false;
          scrollToBottom();
        }
      };
  
      const startTypewriter = (messageIndex) => {
        const message = messages.value[messageIndex];
        if (!message || message.role !== 'assistant') return;
        
        const content = message.content;
        let currentIndex = 0;
        
        const typeNextChar = () => {
          if (currentIndex < content.length) {
            message.displayContent = content.substring(0, currentIndex + 1);
            currentIndex++;
            setTimeout(typeNextChar, typewriterSpeed.value);
            scrollToBottom();
          } else {
            // Typing complete
            message.displayContent = content;
          }
        };
        
        typeNextChar();
      };
  
      onMounted(() => {
        if (inputArea.value) {
          inputArea.value.focus();
        }
      });
  
      return {
        messages,
        userInput,
        isTyping,
        messagesContainer,
        inputArea,
        examplePrompts,
        formatTime,
        formatMessage,
        autoResize,
        usePrompt,
        sendMessage
      };
    }
  };
  </script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Expletus+Sans:ital,wght@0,400..700;1,400..700&display=swap');
.chat-interface {
  height: 90vh;
  background: var(--primary-color);
  display: flex;
  flex-direction: column;
}

.company-name{
  font-family: "Expletus Sans", sans-serif;
  font-weight: 500;
  letter-spacing: 2.76px;
  color: #15b7b9
}

.main-chat {
  flex: 1;
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  /* background: var(--primary-color); */
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05);
  border-radius: 20px;
  overflow: hidden;
  background: var(--chat-bg);
  box-shadow: 0 0 20px var(--chat-shadow);
}

/* Header Styles */
.chat-header {
  padding: 20px 30px;
  background: #ffffff;
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: var(--chat-bg);
  border-bottom: 1px solid var(--chat-border)
}

.chat-header-title {
  display: flex;
  align-items: center;
  gap: 12px;
  
}

.chat-header-title h2 {
  font-size: 1.5rem;
  color: #1a1a1a;
  font-weight: 600;
  margin: 0;
  color: var(--chat-text);
}

.status-badge {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 0.875rem;
  color: #28a745;
  background: rgba(40, 167, 69, 0.1);
  padding: 4px 12px;
  border-radius: 20px;
}

.status-dot {
  width: 8px;
  height: 8px;
  background: #28a745;
  border-radius: 50%;
  animation: pulse 2s infinite;
}

/* Welcome Screen Styles */
.welcome-screen {
  padding: 40px;
  text-align: center;
  max-width: 900px;
  margin: 0 auto;
}

.welcome-header {
  margin-bottom: 40px;
}

.ai-logo {
  width: 80px;
  height: 80px;
  margin-bottom: 20px;
  animation: floatAnimation 3s ease-in-out infinite;
}

.welcome-header h1 {
  font-size: 2.5rem;
  color: var(--chat-text);
  margin-bottom: 16px;
  font-weight: 700;
}

.welcome-subtitle {
  font-size: 1.1rem;
  color: #666;
  max-width: 600px;
  margin: 0 auto;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 20px;
  margin: 40px 0;
}

.feature-card {
  background: #ffffff;
  padding: 24px;
  border-radius: 16px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

a{
  text-decoration: none;
}

.feature-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
}

.feature-card i {
  font-size: 2rem;
  color: #0066cc;
  margin-bottom: 16px;
}

.feature-card h3 {
  font-size: 1.25rem;
  color: #1a1a1a;
  margin-bottom: 8px;
}

.feature-card p {
  color: #666;
  font-size: 0.95rem;
  line-height: 1.5;
}

/* Prompt Styles */
.suggested-prompts {
  margin-top: 40px;
}

.suggested-prompts h3 {
  font-size: 1.25rem;
  color: var(--chat-text);
  margin-bottom: 20px;
}

.prompt-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 16px;
}

.prompt-item {
  background: #f8f9fa;
  padding: 16px;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  border: 1px solid rgba(0, 0, 0, 0.05);
  display: flex;
  align-items: center;
  gap: 12px;
}

.prompt-item:hover {
  background: #ffffff;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  transform: translateY(-2px);
}

.prompt-item i {
  color: #0066cc;
}

/* Messages Container */
.messages-container {
  flex: 1;
  overflow-y: auto;
  padding: 20px;
  scroll-behavior: smooth;
}

.messages {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 15px;
}

.message {
  display: flex;
  max-width: 70%;
  margin-bottom: 10px;
}

.message.assistant {
  align-self: flex-start;
}

.message.user {
  align-self: flex-end;
}

.message-content {
  padding: 12px 16px;
  border-radius: 16px;
  position: relative;
  color: var(--chat-text);
}

.message.assistant .message-content {
  background: #f0f0f0;
  border-top-left-radius: 4px;
  background: var(--chat-message-bg);
}

.message.user .message-content {
  background: #0066cc;
  color: white;
  border-top-right-radius: 4px;
  background: var(--chat-user-message-bg);
  color: var(--chat-user-text);
}

.message-text {
  font-size: 1rem;
  line-height: 1.4;
  white-space: pre-wrap;
}

.message-timestamp {
  font-size: 0.75rem;
  margin-top: 4px;
  opacity: 0.7;
  text-align: right;
  color: var(--chat-timestamp);
}

.message.user .message-timestamp {
  color: var(--chat-user-text);
  opacity: 0.9;
}

.message.assistant .message-timestamp {
  color: #666;
}

/* Typing Indicator */
.typing-indicator {
  padding: 8px 16px;
  background: transparent;
  border-radius: 20px;
  display: flex;
  gap: 4px;
}

.typing-indicator span {
  width: 8px;
  height: 8px;
  background: #a0a0a0;
  border-radius: 50%;
  animation: typing 1s infinite;
  background: var(--chat-typing-dot);
}

/* Input Area */
.input-container {
  padding: 20px;
  background: #ffffff;
  border-top: 1px solid rgba(0, 0, 0, 0.06);
  background: var(--chat-bg);
  border-top: 1px solid var(--chat-border);
}

.input-box {
  display: flex;
  gap: 12px;
  background: #f8f9fa;
  border-radius: 16px;
  padding: 12px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
  background: var(--chat-input-bg);
  box-shadow: 0 2px 6px var(--chat-shadow);
}

textarea {
  flex: 1;
  border: none;
  background: transparent;
  resize: none;
  padding: 8px;
  font-size: 1rem;
  max-height: 150px;
  outline: none;
  color: #1a1a1a;
  color: var(--chat-text);
}

textarea::placeholder {
  color: var(--chat-timestamp);
}

.send-button {
  background: #0066cc;
  color: white;
  border: none;
  border-radius: 12px;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
}

.send-button:hover:not(:disabled) {
  background: #0052a3;
  transform: scale(1.05);
}

.send-button:disabled {
  background: #cccccc;
  cursor: not-allowed;
}

.input-footer {
  margin-top: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  color: #666;
  font-size: 0.875rem;
}

.input-info i {
  color: #0066cc;
}

/* Animations */
@keyframes messageAppear {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes typing {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-5px); }
}

@keyframes pulse {
  0% { opacity: 1; }
  50% { opacity: 0.5; }
  100% { opacity: 1; }
}

@keyframes floatAnimation {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

/* Responsive Design */
@media (max-width: 768px) {
  .main-chat {
    border-radius: 0;
  }

  .welcome-screen {
    padding: 20px;
  }

  .features-grid {
    grid-template-columns: 1fr;
  }

  .welcome-header h1 {
    font-size: 2rem;
  }

  .input-container {
    padding: 12px;
  }

  .message {
    max-width: 85%;
  }
}

/* Scrollbar Styling */
.messages-container::-webkit-scrollbar {
  width: 8px;
}

.messages-container::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 4px;
}

.messages-container::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 4px;
}

.messages-container::-webkit-scrollbar-thumb:hover {
  background: #555;
}

/* Optional: Message Tail Design */
.message.assistant .message-content::before {
  content: '';
  position: absolute;
  left: -8px;
  top: 0;
  border: 8px solid transparent;
  border-top-color: #f0f0f0;
  border-right-color: #f0f0f0;
  border-top-color: var(--chat-message-bg);
  border-right-color: var(--chat-message-bg);
}

.message.user .message-content::before {
  content: '';
  position: absolute;
  right: -8px;
  top: 0;
  border: 8px solid transparent;
  border-top-color: var(--chat-user-message-bg);
  border-left-color: var(--chat-user-message-bg);
}

/* Add cursor animation for typewriter effect */
.cursor {
  display: inline-block;
  width: 2px;
  height: 1em;
  background-color: #333;
  margin-left: 2px;
  vertical-align: middle;
  animation: blink 1s step-end infinite;
  background-color: var(--chat-text);
}

.message.assistant .cursor {
  background-color: var(--chat-text);
}

.message.user .cursor {
  background-color: var(--chat-user-text);
}

@keyframes blink {
  from, to { opacity: 1; }
  50% { opacity: 0; }
}
</style>