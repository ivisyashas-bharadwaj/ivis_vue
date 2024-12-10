<template>
    <div class="card" @mouseover="hover = true" @mouseleave="hover = false">
      <img class="picture" :src="pictureSrc" alt="" v-if="!hover">
      <div class="name" v-if="!hover">{{ name }}</div>
  
      <div class="card__content" :class="{ 'hovered': hover }">
        <img class="profilePic" :src="pictureSrc" :alt="name">
        <p class="card__title">{{ name }}</p>
        <h2 style="margin: 0;">{{ title }}</h2>
        <p class="card__description">{{ description }}</p>
        <div class="socials-container">
          <a :href="linkedinUrl" target="_blank" rel="noopener noreferrer">
            <img class="linkedin" src="../assets/linkedin.svg" alt="LinkedIn">
          </a>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      pictureSrc: String,
      name: String,
      title: String,
      description: String,
      linkedinUrl: String,
      email:String
    },
    data() {

      return {
        hover: false
      };
    }
  };
  </script>
  
    
    <style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap');
    
    * {
      font-family: 'Nunito';
    }
    
    .card {
      position: relative;
      width: 250px;
      height: 300px;
      /* background: linear-gradient(-45deg, #f89b29 0%, #ff0f7b 100%); */
      border-radius: 10px;
      overflow: hidden;
      transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
      margin: 2rem;
    }
    
    .picture {
      width: 100%;
      height: 100%;
    }
    
    .name {
      position: absolute;
      bottom: 0;
      background-color: #777777a3;
      color: #fff;
      width: 100%;
      text-align: center;
      min-height: 3rem;
      padding-top: 1rem;
    }
    
    .card:hover {
      transform: rotate(0deg) scale(1.05);
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    }
    
    .card__content {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%) rotate(-90deg);
      width: 100%;
      height: 100%;
      padding: 20px;
      box-sizing: border-box;
      background-color: #adbbda;
      color: white;
      opacity: 0;
      transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
    
    .card__content.hovered {
      transform: translate(-50%, -50%) rotate(0deg);
      opacity: 1;
    }
    
    .card__content .profilePic {
      height: 80px;
      width: 80px;
      margin-bottom: 0.5rem;
      border-radius: 50%;
    }
    
    .linkedin,
    .mail {
      height: 30px;
      width: 30px;
    }

    .mail {
      border-radius: 50%;
    }
    
    .linkedin:hover,
    .mail:hover {
      translate: 0 -5px;
      transition: translate 0.2s ease-in-out;
    }
    
    .card__title {
      margin: 0;
      font-size: 24px;
      color: #fff;
      font-weight: 700;
      text-align: center;
    }
  
    h2{
      font-size: 1rem;
      text-align: center;
    }
    
    .card__description {
      margin: 10px 0 10px 0;
      font-size: 14px;
      line-height: 1.4;
      text-align: center;
    }

    .socials-container{
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 1rem;
    }
    </style>