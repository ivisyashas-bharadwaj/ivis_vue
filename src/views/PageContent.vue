<template>
  <div>
    <div class="main">
      <div class="bg-box"></div>
      <div class="text">
        <p class="line-main">Intelligent Vision Labs</p>
        <p class="tagline">Bridging Technology and Tomorrow with Intelligent AI Solutions</p>
        <div class="buttons">
          <a href="https://ivislabsdocs.s3.ap-south-1.amazonaws.com/IVIS+Company+Profile.pdf" class="deck-container">
            <button class="deck">
              <img src="../assets/download.svg" width="20" alt="Download" />
              <span style="color: white;">Company Deck</span>
            </button>
          </a>
          <a href="solutions">
            <button>See Our Offerings</button>
          </a>
        </div>
      </div>
    </div>
    <div class="roadmap">
      <h2>OUR FOOTSTEPS</h2>
      <img src="https://ivislabsdocs.s3.ap-south-1.amazonaws.com/Copy+of+Established+in+2021.gif" alt="Roadmap" class="light-image" />
      <img src="https://ivislabsdocs.s3.ap-south-1.amazonaws.com/Copy+of+Established+in+2021-dark.gif" alt="Roadmap" class="dark-image" />
    </div>
    <TestimonialSlider :testimonials="testimonialData" />
    <div class="m1-container">
      <div class="heading-container">
        <div class="heading">
          <h2 class="head">Services Suite &nbsp;</h2>
        </div>
      </div>

      <div class="services">
        <div class="card card-1">
          <img src="https://ivislabsdocs.s3.ap-south-1.amazonaws.com/1.png" alt="arvr" width="100" height="100" />
          <p class="card__title title-front">Augmented Reality and Virtual Reality</p>
          <div class="card__content">
            <p class="card__title">Augmented Reality and Virtual Reality</p>
            <button class="card__button" @click="openLink('https://ivisarvr.com/')">Live Demo</button>
          </div>
        </div>
        <div class="card card-2">
          <img src="https://ivislabsdocs.s3.ap-south-1.amazonaws.com/2.png" alt="Web apps and mobile apps"/>
          <p class="card__title title-front">Web Application and Mobile Application Development</p>
          <div class="card__content">
            <p class="card__title">Web Application and Mobile Application Development</p>
            <button class="card__button" @click="openLink('https://play.google.com/store/apps/details?id=com.ivislabs.via')">Live Demo</button>
          </div>
        </div>
        <div class="card card-3">
          <img src="https://ivislabsdocs.s3.ap-south-1.amazonaws.com/3.png" alt="Voice user interface"/>
          <p class="card__title title-front">Voice User Interface</p>
          <div class="card__content">
            <p class="card__title">Voice User Interface</p>
            <button class="card__button" @click="openLink('https://youtu.be/9MZa-hWbhIE?si=jJAwA6zl9FKZbP2e')">Live Demo</button>
          </div>
        </div>
        <div class="card card-4">
          <img src="https://ivislabsdocs.s3.ap-south-1.amazonaws.com/4.png" alt="Corporate and Professional Training" />
          <p class="card__title title-front">Corporate and Professional Training</p>
          <div class="card__content">
            <p class="card__title">Corporate and Professional Training</p>
            <button class="card__button" @click="openLink('https://pulse.ivislabs.com/')">Live Demo</button>
          </div>
        </div>
        <div class="card card-5">
          <img src="https://ivislabsdocs.s3.ap-south-1.amazonaws.com/5.png" alt="Ai Integration" />
          <p class="card__title title-front">AI Integration for fashion, infrastructure, health tech & EdTech Domains</p>
          <div class="card__content">
            <p class="card__title">AI Integration for fashion, infrastructure, health tech & EdTech Domains</p>
            <button class="card__button" @click="openLink('https://learning.punyahacademy.com/')">Live Demo</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TestimonialSlider from '@/components/TestimonialSlider.vue';

export default {
  components:{
    TestimonialSlider
  },
  metaInfo: {
    title: 'IVIS LABS - Intelligent Vision Solutions | AI & Computer Vision',
    meta: [
      {
        name: 'description',
        content: 'IVIS LABS provides cutting-edge AI and Computer Vision solutions for enterprises. Transform your business with our intelligent technology solutions.'
      },
      {
        name: 'keywords',
        content: 'IVIS LABS, AI solutions, Computer Vision, Enterprise AI, Digital Transformation, AI Company India'
      },
      // Open Graph
      {
        property: 'og:title',
        content: 'IVIS LABS - Transforming Business Through AI'
      },
      {
        property: 'og:description',
        content: 'Leading provider of AI and Computer Vision solutions for enterprise digital transformation'
      }
    ]
  },
  data(){
    return {
      testimonialData: [
        {
          id: 1,
          image: "https://media.licdn.com/dms/image/v2/D5603AQHukFnLLtSKGA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1713717691301?e=1739404800&v=beta&t=LQmmy8ZOTP5y61S7RUPXDlxe7wpXyyNMK_W9OPI7YCc",
          text: "Meeting Vinay Kumar Venkataramana was a turning point for me. His remarkable expertise in AI and dedication to the field are truly inspiring. I've seen his company, IVIS LABS PRIVATE LIMITED, achieve phenomenal growth, becoming a leader in AI implementation, development, and support. Thank you, Vinay, for your guidance and support in driving Prudent Partners LLP!",
          name: 'Karthik Bharadwaj',
          job: 'CEO, Prudent Partners'
        },
        {
          id: 2,
          image: "https://ivislabsdocs.s3.ap-south-1.amazonaws.com/avatar.svg",
          text: "The training provided a comfortable and focused learning environment. The teaching approach simplified complex topics, making them easy to grasp and apply effectively.",
          name: 'Chandana C',
          job: 'Student'
        },
        {
          id: 3,
          image: "https://ivislabsdocs.s3.ap-south-1.amazonaws.com/avatar.svg ",
          text: "The training effectively introduced us to the fundamentals of Python, enabling us to solve problem statements with confidence. Overall, it significantly enhanced our skills and understanding of the subject.",
          name: 'Kalpana Lahari B',
          job: 'Student'
        },
        // Add more testimonials as needed
      ]
    }
  },
  name: "PageContent",  
  methods: {
    openLink(url) {
      window.open(url, '_blank');
    },
    addStructuredData() {
      const schema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "IVIS LABS",
        "description": "Leading provider of AI and Computer Vision solutions",
        "url": "https://ivislabs.com",
        "logo": "https://ivislabs.com/logo.png",
        "sameAs": [
          "https://www.linkedin.com/company/ivislabs",
          "https://www.instagram.com/ivislabs"
          // Add other social media links
        ]
      };

      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.text = JSON.stringify(schema);
      document.head.appendChild(script);
    }
  },
  mounted() {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.querySelector('.head').classList.add('visible');
        }
      });
    }, observerOptions);

    const targetSection = this.$el.querySelector('.m1-container');
    observer.observe(targetSection);
  },
};
</script>

<style scoped>
    .main {
  position: relative;
  background-image: url('../assets/people-detection.gif');
  width: 100%;
  height: calc(100vh - 80px);
  background-position: center center;
  background-repeat: no-repeat;
  /* background-size: max(1500px, 100vw); */
  background-size: cover;
  animation: transitionIn 0.75s;
}

@keyframes transitionIn {
  from{
    opacity: 0;
    transform: rotateX(-10deg);
  }
  to{
    opacity: 1;
    transform: rotateX(0);
  }
}

.bg-box {
  position: absolute;
  width: 100%;
  height: calc(100vh - 80px);
  background-color: #000000;
  opacity: .25;
  top: 0;
}

.text {
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 80px);
  flex-direction: column;
  gap: 20px;
  padding: 0 30px;
}

.text .line-main {
  color: white;
  text-align: center;
  position: relative;
  font-family: "Nunito", sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 2.5rem;
  margin: 0;
}

.text .tagline {
  font-size: 1.5rem;
  font-weight: 400;
  color: white;
  text-align: center;
}

.main .text button {
  background-color: var(--primary-color);
  color: var(--secondary-color);
  border-radius: 10em;
  font-size: 17px;
  font-weight: 600;
  padding: 1em 2em;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  border: 1px solid var(--primary-color);
  box-shadow: 0 0 0 0 var(--secondary-color);
}

.buttons {
  display: flex;
  gap: 0.8rem;
}

.buttons a{
  text-decoration: none;
  color: var(--secondary-color);
}

.deck {
  display: flex;
  gap: 10px;
}

.main .text button:hover {
  transform: translateY(-4px) translateX(-2px);
  box-shadow: 2px 5px 0 0 var(--secondary-color);
}

.main .text button:active {
  transform: translateY(2px) translateX(1px);
  box-shadow: 0 0 0 0 var(--secondary-color);
}

.main .text .deck{
  background-color: #25bcbe;
}

.main .text .deck:hover {
  transform: translateY(4px) translateX(2px);
  box-shadow: 2px 5px 0 0 black;
}

/* roadmap */

.roadmap {
  background-color: var(--primary-color);
}

.roadmap img{
  width: 100%;
}

.roadmap .light-image{
  display: block;
}

.roadmap .dark-image{
  display: none;
}

body.dark-theme .roadmap .light-image{
  display: none;
}

body.dark-theme .roadmap .dark-image{
  display: block;
}

.roadmap h2 {
  text-align: center;
  font-weight: 900;
  animation: pop 1s alternate infinite;
  margin: 1rem;
  font-size: 2rem;
  color: var(--secondary-color);
}

@keyframes pop {
  0%{
    transform: translateY(50%);
  }

  100%{
    transform: translateY(0);
  }
}

.m1-container {
  margin: 1rem;
}

.services {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  justify-items: center;
  align-items: center;
}

.heading-container{
  display: flex;
  align-items: center;
  justify-content: center;
}

.heading {
  display: inline-block;
  font-size: 3rem;
  font-weight: 900;
  margin: 2rem;
  color: #413e3e;
  align-content: center;
}

.head {
  border-right: 5px solid;
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  letter-spacing: 10px;
  opacity: 0;
  transition: opactiy 1s ease-out;
  color: var(--secondary-color);
}

.head.visible {
  opacity: 1;
  animation: typing 2s,
  cursor 0.8s step-end alternate infinite;
}

@keyframes cursor {
  50%{
    border-color: transparent;
  }
}

@keyframes typing {
  from {
    width: 0;
  }
  
}

.card-footer h2 {
  margin: 0;
  font-size: 14px;
  font-weight: bold;
  text-align: center;
}

.card {
  position: relative;
  /* width: 31vw; */
  height: 30vh;
  margin: 2rem;
  /* background-color: #f2f2f2; */
  background-color: #145da0;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  overflow: hidden;
  perspective: 1000px;
  box-shadow: 0 0 0 5px #ffffff80;
  transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.card img {
  width: 100%;
  height: 100%;
}

.card__image {
  width: 100%;
  height: 50%;
}

.card:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 16px rgba(255, 255, 255, 0.2);
}

.card__content {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 20px;
  box-sizing: border-box;
  background-color: var(--primary-color);
  transform: rotateX(-90deg);
  transform-origin: bottom;
  transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.card__content button{
  margin: 20px;
  align-content: center;
} 

.card:hover .card__content {
  transform: rotateX(0deg);
}

.card__title {
  margin: 0;
  font-size: 12px;
  color: var(--secondary-color);
  font-weight: 700;
  padding: 0.6rem;
}

.title-front{
  color: white;
  padding: 0.4rem;
  font-size: 12px;
  height: 13vh;
  text-align: center;
  align-content: center;
  justify-items: center;
}

.card:hover svg {
  scale: 0;
}

.card__description {
  margin: 10px 0 10px;
  font-size: 12px;
  color: #777;
  line-height: 1.4;
}

.card__button {
  cursor: pointer;
  padding: 15px;
  border-radius: 8px;
  background: #777;
  border: none;
  color: white;
}

.secondary {
  background: transparent;
  color: #777;
  border: 1px solid #777;
}

@media (max-width:860px) {
  .footer {
    grid-template-columns: repeat(2, 1fr);
    padding: 1rem;
}

.services {
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto auto;
}

.card-4, .card-5 {
  width: 26vw;
}

.card-1 { grid-area: 1 / 1 / 2 / 2; }
.card-2 { grid-area: 1 / 2 / 2 / 3; }
.card-3 { grid-area: 1 / 3 / 2 / 4; }
.card-4 { grid-area: 2 / 1 / 3 / 3; }
.card-5 { grid-area: 2 / 2 / 3 / 4; }

}

@media (max-width:725px) {
  .head {
    letter-spacing: 0;
  }

  .footer-item{
    padding: 0.8rem;
  }
}

@media (max-width:570px) {
  .head {
    font-size: 3rem;
  }

  .card-1, .card-2, .card-3 {
    margin: 0.5rem;
  }

  .buttons{
    flex-direction: column-reverse;
  }

  .buttons a button {
    min-width: 235px;
  }  

  .footer {
    grid-template-columns: 1fr;
  }

  .footer-item{
    padding: 0.5rem;
  }
}

@media (max-width:490px){
  .services {
    display: flex;
    flex-direction: column;
  }

  .card-1, .card-2, .card-3, .card-4, .card-5 {
    width: 35vh;
  }

  .card {
    height: 40vh;
  }
}

@media (max-width:390px) {
  .head {
    font-size: 2rem;
  }
}

@media (min-height:950px) {
  .main, .bg-box, .text{
    height: 50vh;
  }
}
</style>
