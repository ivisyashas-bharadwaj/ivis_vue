<template>
  <h1>Meet Our Talents</h1>
    <div class="grid grid-1 ">
      <!--ProfileCard 
      class="card-1"
        pictureSrc="https://ivislabsdocs.s3.ap-south-1.amazonaws.com/Uday+Bhandari.jpg" 
        name="Uday Bhandary" 
        title="Chief Digital Transformation Officer" 
        linkedinUrl="https://www.linkedin.com/in/udaya-bhandary-93b2a454/"
      /-->
      <ProfileCard 
      class="card-2"
        pictureSrc="https://ivislabsdocs.s3.ap-south-1.amazonaws.com/Amarnath.jpg" 
        name="Amarnath R" 
        title="Chief Technology Officer" 
        linkedinUrl="https://www.linkedin.com/in/amarnathr/"
      />
      <ProfileCard 
      class="card-3"
        pictureSrc="https://ivislabsdocs.s3.ap-south-1.amazonaws.com/Rajani.jpg"
        name="Rajani D V" 
        title="Operations & HR" 
        linkedinUrl="https://www.linkedin.com/in/rajani-d-v-63b892335/"
      />
    </div>
    <div class="grid grid-2">
      <ProfileCard 
        pictureSrc="https://ivislabsdocs.s3.ap-south-1.amazonaws.com/Pic.jpg" 
        name="Yashas S Bharadwaj" 
        title="Data Analytics Engineer" 
        linkedinUrl="https://www.linkedin.com/in/yashasbharadwaj/"
      />
      <ProfileCard 
        pictureSrc="https://ivislabsdocs.s3.ap-south-1.amazonaws.com/RakshithaYS.png" 
        name="Rakshitha Y S" 
        title="Data Analytics Engineer" 
        linkedinUrl="https://www.linkedin.com/in/rakshitha-y-s/"
      />
      <!--ProfileCard 
        :pictureSrc="require('../assets/Basavaraj.png')" 
        name="Basavaraj" 
        title="Technical Operations and Marketing Engineer" 
        linkedinUrl="https://www.linkedin.com/in/basavaraj-k-7323b92b2/"
      /-->
      <ProfileCard 
        pictureSrc="https://ivislabsdocs.s3.ap-south-1.amazonaws.com/Thejaswi.jpg" 
        name="Thejaswi" 
        title="Internal Trainer" 
        linkedinUrl="https://www.linkedin.com/in/thejaswi-br-b45164296/"
      />
      <ProfileCard 
        pictureSrc="https://ivislabsdocs.s3.ap-south-1.amazonaws.com/Prajwal+(1).png" 
        name="Prajwal S" 
        title="Data Analytics Intern" 
        linkedinUrl="https://www.linkedin.com/in/prajwal-s-684b912a4/"
      />
      <ProfileCard 
        pictureSrc="https://ivislabsdocs.s3.ap-south-1.amazonaws.com/Prajwal.jpg" 
        name="Prajwal Shawnak V" 
        title="Data Analytics Engineer" 
        linkedinUrl="https://www.linkedin.com/in/prajwal-shawnak-19bb51252/"
      />
      <ProfileCard 
        :pictureSrc="require('../assets/ranjan.png')" 
        name="Ranjan D N" 
        title="Data Analytics Engineer" 
        linkedinUrl="https://www.linkedin.com/in/ranjan-d-n-55a24b279/"
      />
      <ProfileCard 
        :pictureSrc="require('../assets/Nisarga.png')" 
        name="Nisarga P" 
        title="Data Analytics Engineer" 
        linkedinUrl="https://www.linkedin.com/in/nisarga-p-9bb418298/"
      />
      <ProfileCard 
        :pictureSrc="require('../assets/Pallavi.png')" 
        name="Pallavi" 
        title="Data Analytics Engineer" 
        linkedinUrl="https://www.linkedin.com/in/nisarga-p-9bb418298/"
      />
    </div>
    <!-- <Carousel :images="Images" :interval="3000"/> -->
    <RollingGallery 
      :autoplay="true" 
      :pauseOnHover="true" 
      :images="Images" 
    />
  </template>
  
  <script>
  import ProfileCard from './ProfileCard.vue';
  // import Carousel from '@/components/CarouseL.vue';

  export default {
    components: {
      ProfileCard,
      // Carousel,
    },
    data(){
      return{
        Images:[
          require('../assets/carouselImages/1.jpg'),
          require('../assets/carouselImages/2.jpg'),
          require('../assets/carouselImages/3.jpg'),
        ]
      }
    }
  };
  </script>

  <style scoped>

  h1{
    text-align: center;
    padding-top: 1rem;
    font-size: 3rem;
    color: var(--secondary-color);
    margin: 0 0.5rem 0 0.5rem
  }
    .grid,
    .grid-1,
    .grid-2{
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        align-items: center;
        justify-items: center;
    }

    @media (max-width:950px) {
      .grid-2{
        grid-template-columns: repeat(2, 1fr);
      }
      .grid-1{
        grid-template-columns: repeat(2, 1fr);
      }
      .card-3{
        grid-column: 1/3;
      }
    }

    @media (max-width:720px) {
      .grid-2{
        grid-template-columns: repeat(1,1fr)
      }

      .grid-1{
        display: flex;
        flex-direction: column;
      }
    }

</style>
  