<template>
    <div v-if="!isAiChatRoute" 
         class="bot-wrapper"
         :style="position"
         @mousedown="startDrag"
         @touchstart="startDrag"
         @click="handleClick"
         ref="botWrapper">
      <div class="bot-container">
        <Vue3Lottie
          :animationData="botAnimation"
          :height="botSize"
          :width="botSize"
          :loop="true"
          :autoPlay="true"
        />
      </div>
    </div>
  </template>
  
  <script>
  import botData from '../assets/bot.json'
  
  export default {
    name: 'WavingBot',
    data() {
      return {
        botAnimation: botData,
        isDragging: false,
        position: {
          left: 'auto',
          top: 'auto',
          right: '20px',
          bottom: '80px'
        },
        dragOffset: { x: 0, y: 0 },
        dragStartTime: 0,
        moveCount: 0,
        startX: 0,
        startY: 0
      }
    },
    computed: {
      isAiChatRoute() {
        return this.$route.path === '/ai-chat'
      },
      botSize() {
        return window.innerWidth <= 768 ? 150 : 200 // Even smaller for mobile
      }
    },
    mounted() {
      document.addEventListener('mousemove', this.onDrag)
      document.addEventListener('mouseup', this.stopDrag)
      document.addEventListener('touchmove', this.onDrag)
      document.addEventListener('touchend', this.stopDrag)
    },
    beforeUnmount() {
      document.removeEventListener('mousemove', this.onDrag)
      document.removeEventListener('mouseup', this.stopDrag)
      document.removeEventListener('touchmove', this.onDrag)
      document.removeEventListener('touchend', this.stopDrag)
    },
    methods: {
      startDrag(event) {
        event.preventDefault()
        this.isDragging = true
        this.dragStartTime = Date.now()
        this.moveCount = 0
        
        const touch = event.touches ? event.touches[0] : event
        const rect = this.$refs.botWrapper.getBoundingClientRect()
        
        this.startX = touch.clientX
        this.startY = touch.clientY
        
        this.dragOffset = {
          x: touch.clientX - rect.left,
          y: touch.clientY - rect.top
        }
      },
      onDrag(event) {
        if (!this.isDragging) return
        
        this.moveCount++
        
        const touch = event.touches ? event.touches[0] : event
        const x = touch.clientX - this.dragOffset.x
        const y = touch.clientY - this.dragOffset.y
        
        // Ensure bot stays within viewport
        const maxX = window.innerWidth - this.$refs.botWrapper.offsetWidth
        const maxY = window.innerHeight - this.$refs.botWrapper.offsetHeight
        
        const boundedX = Math.min(Math.max(0, x), maxX)
        const boundedY = Math.min(Math.max(0, y), maxY)
        
        this.position = {
          left: `${boundedX}px`,
          top: `${boundedY}px`,
          right: 'auto',
          bottom: 'auto'
        }
      },
      stopDrag() {
        if (this.isDragging) {
          const dragDuration = Date.now() - this.dragStartTime
          
          // If it was a short tap/click with minimal movement
          if (this.moveCount < 5 && dragDuration < 300) {
            this.$router.push('/ai-chat')
          }
        }
        this.isDragging = false
      },
      handleClick() {
        // For desktop clicks - mobile will use the logic in stopDrag
        if (!('ontouchstart' in window)) {
          const dragDuration = Date.now() - this.dragStartTime
          if (this.moveCount < 5 && dragDuration < 300) {
            this.$router.push('/ai-chat')
          }
        }
      }
    }
  }
  </script>
  
  <style scoped>
  .bot-wrapper {
    cursor: pointer;
    position: fixed;
    z-index: 999;
    user-select: none;
    -webkit-user-select: none;
    touch-action: none;
  }
  
  .bot-wrapper:active {
    cursor: grabbing;
  }
  
  .bot-container {
    position: relative;
  }
  
  @media (max-width: 768px) {
    .bot-wrapper {
      touch-action: none;
    }
    
    .bot-container {
      max-width: 100px;
    }
  }
  </style>