<template>
  <div class="body">
    <!-- Content Section -->
    <div class="content-body">
      <div class="image">
        <img src="https://nettedimages.s3.ap-south-1.amazonaws.com/people-detection.gif" alt="Data Engineering Solutions">
      </div>
      <div class="content">
        <h1>Comprehensive Data Engineering Solutions for Real-Time Analytics</h1>
        <p>IVIS LABS offers a comprehensive Computer Vision solution with precise real-time tracking, advanced detection, and recognition, ensuring high accuracy and responsiveness across various industries.</p>
      </div>
    </div>

    <div class="content-body body-1">
      <div class="image">
        <img src="../assets/facemesh.gif" alt="Virtual Try-On" height="350">
      </div>
      <div class="content">
        <h1>Augmented Reality: Virtual Try-On</h1>
        <p>Experience the future of fashion with our virtual try-on technology for eyewear and apparel, enhancing the shopping experience.</p>
      </div>
    </div>

    <div class="content-body b-2">
      <div class="image">
        <img src="https://nettedimages.s3.ap-south-1.amazonaws.com/homeVideo.gif" alt="AI-Powered Chatbots">
      </div>
      <div class="content">
        <h1>AI-Powered Voice-Enabled Chatbots for Businesses</h1>
        <p>Revolutionize customer interactions with custom chatbots, designed to provide engaging and informative responses.</p>
      </div>
    </div>

    <div class="content-body body-1">
      <div class="image">
        <img src="https://nettedimages.s3.ap-south-1.amazonaws.com/ivislabs-solutions/healthcare" alt="Healthcare Diagnostics" height="300">
      </div>
      <div class="content">
        <h1>Healthcare Diagnostics: AI-Driven Imaging</h1>
        <p>Advanced image-based diagnostic solutions for healthcare, including ovarian cancer and mammogram analysis.</p>
      </div>
    </div>

    <!-- Tech Stack Section -->
    <div class="tech-stack">
      <h1>Our Tech Stack</h1>
      <div class="ts-images">
        <div><img src="../assets/android-logo-wordmark.png" alt="Android" width="150"></div>
        <div><img src="../assets/flutter.png" alt="Flutter" width="150"></div>
        <div><img src="../assets/React.png" alt="React" width="150"></div>
        <div><img src="../assets/vuejs.png" alt="Vue.js" width="100"></div>
        <div><img src="../assets/vanilla.png" alt="Vanilla JS" width="75"></div>
        <div><img src="../assets/gql.png" alt="GraphQL" width="150"></div>
        <div><img src="../assets/mongoDB.png" alt="MongoDB" width="150"></div>
        <div><img src="../assets/mysql.svg" alt="MySQL" width="150"></div>
        <div><img src="../assets/postgresql.png" alt="PostgreSQL" width="100"></div>
        <div><img src="../assets/angularjs.png" alt="AngularJS" width="105"></div>
        <div><img src="../assets/express.png" alt="Express" width="150"></div>
        <div><img src="../assets/nodejs.png" alt="Node.js" width="150"></div>
        <div><img src="../assets/python.png" alt="Python" width="150"></div>
        <div><img src="../assets/tensorflow.png" alt="TensorFlow" width="150"></div>
        <div><img src="../assets/Arduino.png" alt="Arduino" width="75"></div>
        <div><img src="../assets/webduino.jpg" alt="Webduino" width="150"></div>
        <div><img src="../assets/Bootstrap.png" alt="Bootstrap" width="75"></div>
        <div><img src="../assets/tailwind.png" alt="Tailwind CSS" width="150"></div>
        <div><img src="../assets/aws.png" alt="AWS" width="75"></div>
        <div><img src="../assets/Linux.png" alt="Linux" width="150"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.body {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  border-radius: 20px;
  animation: transitionIn 0.75s;
}

@keyframes transitionIn {
  from {
    opacity: 0;
    transform: rotateX(-10deg);
  }
  to {
    opacity: 1;
    transform: rotateX(0);
  }
}

.content-body {
  display: flex;
  padding: 1rem 4rem 0 4rem;
  gap: 2rem;
  font-family: "Nunito";
  color: var(--secondary-color);
}

.b-2 {
  padding-top: 4rem;
}

.content-body img {
  width: 500px;
  border-radius: 20px;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  box-shadow: 5px 5px 30px #383838;
}

.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  line-height: 30px;
}

.content h1 {
  line-height: 40px;
  color: var(--secondary-color);
}

.content p {
  color: var(--secondary-color);
}

.body-1 {
  flex-direction: row-reverse;
  padding: 4rem 4rem 0 4rem;
}

.body-1 img {
  border-radius: 20px;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}

.tech-stack {
  padding: 1.5rem;
  animation: transitionIn 0.75s 1s;
}

.tech-stack h1 {
  text-align: center;
  font-size: 3rem;
  font-weight: bold;
  margin: 1rem;
  color: var(--secondary-color);
}

.ts-images {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  justify-items: center;
  align-items: center;
}

.ts-images div {
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.ts-images img:hover {
  transform: scale(1.1);
  transition: 0.5s;
}

@media (max-width:960px){
  .content-body{
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
  }

  .content-body img{
    border-radius: 5px;
  }
}
@media (max-width:860px) {
  .footer {
    grid-template-columns: repeat(2, 1fr);
    padding: 1rem;
}
.ts-images{
  grid-template-columns: repeat(3,1fr);
}
}


@media (max-width:570px) {

  .content-body img{
    width: 300px;
  }

  .ts-images{
    grid-template-columns: repeat(2,1fr);
  }

.footer {
  grid-template-columns: 1fr;
}

.footer-item{
  padding: 0.5rem;
}
}
</style>
