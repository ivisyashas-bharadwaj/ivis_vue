<template>
    <h1>HEAR FROM OUR CLIENTS</h1>
    <div class="container">
      <div class="testimonial">
        <div class="swiper mySwiper">
          <div class="swiper-wrapper">
            <!-- Loop through testimonials -->
            <div class="swiper-slide" v-for="testimonial in testimonials" :key="testimonial.id">
              <div class="slide">
                <img :src="testimonial.image" alt="testimonial" class="image" />
                <i class="bx bxs-quote-alt-left quote-icon"></i>
                <p>{{ testimonial.text }}</p>
                <div class="details">
                  <span class="name">{{ testimonial.name }}</span>
                  <span class="job">{{ testimonial.job }}</span>
                </div>
              </div>
            </div>
          </div>
          <div class="swiper-button-next nav-btn"></div>
          <div class="swiper-button-prev nav-btn"></div>
          <div class="swiper-pagination"></div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { Swiper } from 'swiper';
  import { Navigation, Pagination, Autoplay } from 'swiper/modules';
  import 'swiper/css';
  import 'swiper/css/navigation';
  import 'swiper/css/pagination';
  
  export default {
    name: 'TestimonialSlider',
    props: {
      testimonials: {
        type: Array,
        required: true,
        // Expected format:
        // [{
        //   id: 1,
        //   image: 'path/to/image.jpg',
        //   text: 'Testimonial text',
        //   name: 'Person Name',
        //   job: 'Job Title'
        // }]
      }
    },
    mounted() {
      new Swiper('.mySwiper', {
        modules: [Navigation, Pagination, Autoplay],
        slidesPerView: 1,
        grabCursor: true,
        loop: true,
        autoplay: {
          delay: 6000,
          disableOnInteraction: false,
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      })
    }
  }
  </script>
  
  <style scoped>
  .container {
    height: 60vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--primary-color);
  }

    h1{
    text-align: center;
    margin: 2rem 0 0 0;
    font-size: 2.5rem;
    color: var(--secondary-color);
  }
  
  .testimonial {
    position: relative;
    max-width: 900px;
    width: 100%;
    padding: 50px 0;
    overflow: hidden;
  }
  
  .image {
    height: 170px;
    width: 170px;
    object-fit: cover;
    border-radius: 50%;
  }
  
  .slide {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    row-gap: 30px;
    height: 100%;
    width: 100%;
    padding-bottom: 40px;
  }
  
  .slide p {
    text-align: center;
    padding: 0 160px;
    font-size: 14px;
    font-weight: 400;
    color: var(--secondary-color);
  }
  
  .quote-icon {
    font-size: 30px;
    color: #4070f4;
  }
  
  .details {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .name {
    font-size: 14px;
    font-weight: 600;
    color: var(--secondary-color);
  }
  
  .job {
    font-size: 12px;
    font-weight: 400;
    color: var(--secondary-color);
  }
  
  /* Swiper button styles */
  .nav-btn {
    height: 40px;
    width: 40px;
    border-radius: 50%;
    transform: translateY(30px);
    /* background-color: rgba(0, 0, 0, 0.1); */
    transition: 0.2s;
  }
  
  /* .nav-btn:hover {
    background-color: rgba(0, 0, 0, 0.2);
  }
   */
  :deep(.swiper-pagination-bullet) {
    bottom: 0 !important;
    background-color: rgba(0, 0, 0, 0.8);
  }
  
  :deep(.swiper-pagination-bullet-active) {
    background-color: #4070f4;
  }
  
  @media screen and (max-width: 768px) {
    .slide p {
      padding: 0 20px;
    }
    .nav-btn {
      display: none;
    }
  }
  
  @media (min-height: 950px) {
    .container {
      height: 50vh;
    }
  }
  </style>