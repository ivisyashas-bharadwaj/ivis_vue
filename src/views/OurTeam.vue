<template>
  <h1>Meet Our Talents</h1>
    <div class="grid grid-1 ">
      <ProfileCard 
      class="card-1"
        :pictureSrc="require('../assets/Uday Bhandari.jpg')" 
        name="Uday Bhandary" 
        title="Chief Digital Transformation Officer" 
        linkedinUrl="https://www.linkedin.com/in/udaya-bhandary-93b2a454/"
        email="udaybhandary@ivislabs.com"
      />
      <ProfileCard 
      class="card-2"
        :pictureSrc="require('../assets/Amarnath.jpg')" 
        name="Amarnath R" 
        title="Cheif Technological Officer" 
        linkedinUrl="https://www.linkedin.com/in/amarnathr/"
        email="amarnathresearch@gmail.com"
      />
      <ProfileCard 
      class="card-3"
        :pictureSrc="require('../assets/rajani.jpg')" 
        name="Rajani D V" 
        title="Operations & HR" 
        linkedinUrl="https://www.linkedin.com/in/rajani-d-v-63b892335/"
        email="hr@ivislabs.com"
      />
    </div>
    <div class="grid grid-2">
      <ProfileCard 
        :pictureSrc="require('../assets/Pic.jpg')" 
        name="Yashas S Bharadwaj" 
        title="Data Analytics Engineer" 
        linkedinUrl="https://www.linkedin.com/in/yashasbharadwaj/"
        email="yashasbharadwaj@ivislabs.com"
      />
      <ProfileCard 
        :pictureSrc="require('../assets/RakshithaYS.png')" 
        name="Rakshitha Y S" 
        title="Data Analytics Engineer" 
        linkedinUrl="https://www.linkedin.com/in/rakshitha-y-s/"
        email="rakshitha@ivislabs.com"
      />
      <ProfileCard 
        :pictureSrc="require('../assets/avatar.svg')" 
        name="Prajwal Shawnak V" 
        title="Data Analytics Engineer" 
        linkedinUrl="https://www.linkedin.com/in/prajwal-shawnak-19bb51252/"
        email="prajwal.shawnak@ivislabs.com"
      />
      <ProfileCard 
        :pictureSrc="require('../assets/avatar.svg')" 
        name="Ranjan D N" 
        title="Data Analytics Engineer" 
        linkedinUrl="https://www.linkedin.com/in/ranjan-d-n-55a24b279/"
        email="ranjan@ivislabs.com"
      />
      <ProfileCard 
        :pictureSrc="require('../assets/avatar.svg')" 
        name="Nisarga P" 
        title="Data Analytics Engineer" 
        linkedinUrl="https://www.linkedin.com/in/nisarga-p-9bb418298/"
        email="nisarga@ivislabs.com"
      />
      <ProfileCard 
        :pictureSrc="require('../assets/avatar.svg')" 
        name="Pallavi" 
        title="Data Analytics Engineer" 
        linkedinUrl="https://www.linkedin.com/in/nisarga-p-9bb418298/"
        email="pallavi@ivislabs.com"
      />
      <ProfileCard 
        :pictureSrc="require('../assets/avatar.svg')" 
        name="Basavaraj" 
        title="Internal Trainer" 
        linkedinUrl="https://www.linkedin.com/in/basavaraj-k-7323b92b2/"
        email="basavraj@ivislabs.com"
      />
      <ProfileCard 
        :pictureSrc="require('../assets/avatar.svg')" 
        name="Thejaswi" 
        title="Internal Trainer" 
        linkedinUrl="https://www.linkedin.com/in/thejaswi-br-b45164296/"
        email="thejaswi@ivislabs.com"
      />
      <ProfileCard 
        :pictureSrc="require('../assets/avatar.svg')" 
        name="Vamshi S" 
        title="Mobile Dev Intern" 
        linkedinUrl="https://www.linkedin.com/in/vamshisathya/"
        email="vamshi@ivislabs.com"
      />
      <ProfileCard 
        :pictureSrc="require('../assets/avatar.svg')" 
        name="Prajwal S" 
        title="Data Analytics Intern" 
        linkedinUrl="https://www.linkedin.com/in/prajwal-s-684b912a4/"
        email="prajwal@ivislabs.com"
      />
    </div>
    <Carousel :images="Images" :interval="3000"/>
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

    @media (max-width:620px) {
      .grid-2{
        grid-template-columns: repeat(1,1fr)
      }

      .grid-1{
        display: flex;
        flex-direction: column;
      }
    }

</style>
  