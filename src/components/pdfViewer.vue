<template>
    <div class="pdf-container">
      <div v-if="error" class="error-message">
        {{ error }}
      </div>
      <VuePdfEmbed 
        :source="pdfUrl" 
        @error="handleError"
        @loading="isLoading = true"
        @loaded="isLoading = false"
      />
      <div v-if="isLoading" class="loading">
        Loading PDF...
      </div>
    </div>
  </template>
  
  <script>
  import VuePdfEmbed from 'vue-pdf-embed'
  
  export default {
    name: 'PdfViewer',
    components: {
      VuePdfEmbed
    },
    data() {
      return {
        pdfUrl: '/employee-policy.pdf',
        error: null,
        isLoading: true
      }
    },
    methods: {
      handleError(error) {
        this.error = 'Failed to load PDF. Please try again later.';
        console.error('PDF loading error:', error);
      }
    }
  }
  </script>
  
  <style scoped>
  .pdf-container {
    width: 100%;
    padding: 20px;
    position: relative;
  }

  .error-message {
    color: red;
    text-align: center;
    padding: 20px;
  }

  .loading {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: rgba(255, 255, 255, 0.9);
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }
  </style>