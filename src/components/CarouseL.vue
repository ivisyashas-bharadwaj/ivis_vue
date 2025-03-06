<template>
    <div class="carousel">
      <div class="carousel-images">
        <img :src="images[currentIndex]" alt="Carousel Image" class="carousel-image" />
      </div>
      <div class="carousel-indicators">
        <span
          v-for="(image, index) in images"
          :key="index"
          :class="['indicator', { active: currentIndex === index }]"
          @click="goToImage(index)"
        ></span>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      images: {
        type: Array,
        required: true,
      },
      interval: {
        type: Number,
        default: 3000, 
      },
    },
    data() {
      return {
        currentIndex: 0,
      };
    },
    mounted() {
      this.startCarousel();
    },
    beforeUnmount() {
      clearInterval(this.carouselInterval);
    },
    methods: {
      startCarousel() {
        this.carouselInterval = setInterval(() => {
          this.nextImage();
        }, this.interval);
      },
      nextImage() {
        this.currentIndex = (this.currentIndex + 1) % this.images.length;
      },
      goToImage(index) {
        this.currentIndex = index;
      },
    },
  };
  </script>
  
  <style scoped>
  .carousel {
    position: relative;
    width: 100%;
    overflow: hidden;
    padding: 3rem;
  }
  
  .carousel-images {
    display: flex;
    transition: transform 0.5s ease-in-out;
  }
  
  .carousel-image {
    width: 100%;
    max-height: 100vh;
    border-radius: 2rem;
  }
  
  .carousel-indicators {
    display: flex;
    justify-content: center;
    margin-top: 10px;
  }
  
  .indicator {
    width: 10px;
    height: 10px;
    background-color: #ccc;
    border-radius: 50%;
    margin: 0 5px;
    cursor: pointer;
  }
  
  .indicator.active {
    background-color: var(--secondary-color);
  }

  @media (max-width:600px) {
    .carousel{
        padding: 1.5rem;
    }
  }
  </style>