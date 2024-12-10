<template>
    <div class="rewards-recognition">
      <h2>REWARDS & RECOGNITION</h2>
      <div class="cards">
        <div class="card" v-for="(reward, index) in rewards" :key="index">
          <img :src="reward.image" alt="Reward Image" class="reward-image" />
          <div class="card-content">
            <h3>{{ reward.title }}</h3>
            <p>{{ reward.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'RewardsRecognition',
    data() {
      return {
        rewards: [
          {
            image: require('/src/assets/Certificate.jpg'),
            title: 'Recognition Award',
            description: 'Recognized as a startup by the Department of Promotion of Industry and Internal Trade, GOI',
          },
          {
            image: require('/src/assets/image1.png'),
            title: 'Recognition Award',
            description: 'Well appreciated by Vidyavardhaka College of Engineering for our offerings on GenAI',
          },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  .rewards-recognition {
    padding: 2rem;
    background-color: var(--primary-color);
    text-align: center;
  }
  
  .rewards-recognition h2 {
    font-size: 2.5rem;
    color: var(--secondary-color);
    margin-bottom: 1.5rem;
    animation: h1Ani 3s forwards infinite ease-in ;
  }
  
  .cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1.5rem;
  }
  
  .card {
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    width: 600px;
    transition: transform 0.3s;
  }
  
  .card:hover {
    transform: translateY(-10px);
  }
  
  .reward-image {
    width: 100%;
    object-fit: cover;
  }
  
  .card-content {
    padding: 1rem;
  }
  
  .card-content h3 {
    font-size: 1.5rem;
    color: #0071ce;
    margin-bottom: 0.5rem;
  }
  
  .card-content p {
    font-size: 1rem;
    color: #555;
  }

  @keyframes h1Ani {
  0%, 100%{
    letter-spacing: 0px;
  }
  50%{
    letter-spacing: 5px;
  }
}
  </style>